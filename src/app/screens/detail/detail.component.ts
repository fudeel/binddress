import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";
import {Game} from "../../shared/models/game";
import {GameDetailService} from "../../shared/services/game-detail.service";
import DETAIL_LOCALE from '../locale/detail';
import {LocaleService} from "../../shared/services/locale.service";
import {GeolocationService} from "../../shared/services/geolocation.service";

declare var google: any;


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  urls: string[];
  game: Game;
  detailLocale = DETAIL_LOCALE;
  l: number = 0;

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly afs: AngularFirestore,
              private readonly storage: AngularFireStorage,
              private readonly gameDetailService: GameDetailService,
              private readonly localeService: LocaleService,
              private readonly geolocationService: GeolocationService) {
    this.localeService.getLanguageValue().subscribe(l => {
      this.l = l
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.urls = params.item.split("/")

      this.gameDetailService.getGameInfo().subscribe(detail => {
        if (detail?.gameId) {
          this.game = detail
        } else {
          this.getItemDetail()
        }
      })
    })

  }


  getItemDetail() {
    let currentItem: any;
    this.afs.collection('games', ref =>
      ref.where('gameId', '==', this.urls[2])
    ).valueChanges().subscribe(itemRes => {
      if (itemRes?.length > 0) {
        currentItem = itemRes[0]
        this.afs.collection('users').doc(currentItem.createdBy.id).valueChanges().subscribe(userRef => {
          let ownerInfo
          ownerInfo = userRef;
          currentItem.ownerInfo = ownerInfo;
          currentItem.imagesUrl = [];

          this.game = currentItem;
        })
      }
    })
  }

}
