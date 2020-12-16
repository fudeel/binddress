import {Component, OnInit} from '@angular/core';
import HOMEPAGE_LOCALE from '../locale/homepage';
import CATEGORY_LOCALE from '../../shared/locale/category';
import CATEGORY_LIST_LOCALE from '../../shared/locale/category-list';
import {FormBuilder, Validators} from '@angular/forms';
import {LoadingService} from '../../shared/services/loading.service';
import TUTORIAL_CARDS_LOCALE from '../../shared/locale/tutorial-cards';
import {AngularFirestore} from "@angular/fire/firestore";
import {AlertMessage} from "../../shared/components/alert/alert.component";
import {AngularFireStorage} from "@angular/fire/storage";
import {LocaleService} from "../../shared/services/locale.service";
import {Router} from "@angular/router";
import {GameDetailService} from "../../shared/services/game-detail.service";
import * as moment from 'moment';
import {GeolocationService} from "../../shared/services/geolocation.service";

interface Categories {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  moment = moment();
  today = new Date();
  categoryLocale = CATEGORY_LOCALE;
  categoryListLocale = CATEGORY_LIST_LOCALE;
  tutorialCardsLocale = TUTORIAL_CARDS_LOCALE

  categories: Categories[] = [];
  tutorialCardsSelected = [];

  homepageLocale = HOMEPAGE_LOCALE
  l: number = 0;
  isGame = false;

  simpleSearchForm = this.fb.group({
    category: ['', Validators.required],
    distance: [''],
    fromDate: ['', Validators.required],
    toDate: ['', Validators.required],
  });


  isAlertVisible = false;
  alertMessage: AlertMessage = new AlertMessage();

  game: any;
  owner: any;
  image: any;
  games: any[] = [];


  latitude;
  longitude;

  constructor(private fb: FormBuilder,
              private readonly router: Router,
              private readonly loadingService: LoadingService,
              private readonly afs: AngularFirestore,
              private readonly storage: AngularFireStorage,
              private readonly localeService: LocaleService,
              private readonly gameDetailService: GameDetailService,
              private readonly geolocationService: GeolocationService) {
    this.localeService.getLanguageValue().subscribe(l => {
      this.l = l
    })

  }

  ngOnInit(): void {
    if (localStorage.getItem('position')) {
      this.latitude = this.geolocationService.getClientPositionFromLocalStorage()?.latitude;
      this.longitude = this.geolocationService.getClientPositionFromLocalStorage()?.longitude;

      console.log('lat: ', this.latitude)
      console.log('long: ', this.longitude)
    } else {
      this.geolocationService.getClientPosition().subscribe()
    }

    this.categoryListLocale[this.l].forEach(c => {
      this.categories.push({value: c.id, viewValue: c.value});
    });

    this.tutorialCardsSelected = this.tutorialCardsLocale[this.l];
  }


  onSimpleSearch() {
    let game: any;

    this.loadingService.isLoading = true;
    this.afs.collection('games', ref =>
      ref.where('date', '>=', this.simpleSearchForm.controls.fromDate.value)
        .where('date', '<=', this.simpleSearchForm.controls.toDate.value)
        .where('gameCategory', '==', this.simpleSearchForm.controls.category.value)
    ).valueChanges().subscribe(res => {
      if (res?.length > 0) {
        this.isAlertVisible = false;
        game = res[0]
        this.afs.collection('users').doc(game?.createdBy?.id).valueChanges().subscribe(res => {

          let organizerInfo
          organizerInfo = res;
          game.organizerInfo = organizerInfo;
          game.imagesUrl = [];

          this.games.push(game)
          this.loadingService.isLoading = false;
          this.isGame = true;


          console.log('games: ', this.games);
        })


      } else {
        this.game = null;
        this.loadingService.isLoading = false;
        this.isGame = false;
        this.alertMessage = {
          style: "warning",
          title: this.homepageLocale.alertTitle[this.l],
          message: this.homepageLocale.alertMessage[this.l]
        }

        this.isAlertVisible = true
      }
    })
  }


  onGoDetail(event) {
    this.gameDetailService.gameInfo = this.game;
    this.router.navigate(['detail', event.organizerInfo.username + '/' + event.gameCategory + '/' + event.gameId])
  }
}
