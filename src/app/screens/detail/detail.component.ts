import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";
import {Game} from "../../shared/models/game";
import {ItemDetailService} from "../../shared/services/item-detail.service";
import DETAIL_LOCALE from '../locale/detail';
import {LocaleService} from "../../shared/services/locale.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item: string[];
  game: Game;
  detailLocale = DETAIL_LOCALE;
  l: number = 0;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly afs: AngularFirestore,
              private readonly storage: AngularFireStorage,
              private readonly itemDetailService: ItemDetailService,
              private readonly localeService: LocaleService,) {
    this.localeService.getLanguageValue().subscribe(l => {
      this.l = l
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.item = params.item.split("/")
      console.log(this.item)

      this.itemDetailService.getGameInfo().subscribe(detail => {
        if (detail?.itemId) {
          this.game = detail
          console.log('loading data from app: ', this.game)
        } else {
          this.getItemDetail()
        }
      })
    })
  }


  getItemDetail() {
    let currentItem: any;

    this.afs.collection(this.item[1], ref =>
      ref.where('itemId', '==', this.item[2])
    ).valueChanges().subscribe(itemRes => {
      if (itemRes?.length > 0) {
        currentItem = itemRes[0]
        this.afs.collection('users').doc(this.item[0]).valueChanges().subscribe(userRef => {
          let ownerInfo
          ownerInfo = userRef;
          currentItem.ownerInfo = ownerInfo;
          currentItem.imagesUrl = [];

          this.storage.ref(this.item[1] + '/' + this.item[0] + '/' + this.item[2]).listAll().subscribe(images => {
            images.items.forEach(i => {
              i.getDownloadURL().then(res => {
                currentItem.imagesUrl.push(res)
              })
            })
          })

          this.game = currentItem;
          console.log('downloading from firebase: ', this.game)
        })
      }
    })
  }

}
