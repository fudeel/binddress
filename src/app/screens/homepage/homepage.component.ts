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
import {ItemDetailService} from "../../shared/services/item-detail.service";


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

  categoryLocale = CATEGORY_LOCALE;
  categoryListLocale = CATEGORY_LIST_LOCALE;
  tutorialCardsLocale = TUTORIAL_CARDS_LOCALE

  categories: Categories[] = [];
  tutorialCardsSelected = [];

  homepageLocale = HOMEPAGE_LOCALE
  l: number = 0;
  isItem = false;

  simpleSearchForm = this.fb.group({
    category: ['', Validators.required],
    code: ['', Validators.required],
  });


  isAlertVisible = false;
  alertMessage: AlertMessage = new AlertMessage();

  item: any;
  owner: any;
  image: any;

  constructor(private fb: FormBuilder,
              private readonly router: Router,
              private readonly loadingService: LoadingService,
              private readonly afs: AngularFirestore,
              private readonly storage: AngularFireStorage,
              private readonly localeService: LocaleService,
              private readonly itemDetailService: ItemDetailService) {
    this.localeService.getLanguageValue().subscribe(l => {
      this.l = l
    })

  }

  ngOnInit(): void {

    this.categoryListLocale[this.l].forEach(c => {
      this.categories.push({value: c.id, viewValue: c.value});
    });

    this.tutorialCardsSelected = this.tutorialCardsLocale[this.l];
  }


  onSimpleSearch() {
    const selectedCategory = this.simpleSearchForm.controls.category.value;
    const selectedItemId = this.simpleSearchForm.controls.code.value;

    let currentItem: any;

    this.loadingService.isLoading = true;
    this.afs.collection(selectedCategory, ref =>
      ref.where('itemId', '==', selectedItemId)
    ).valueChanges().subscribe(res => {
      if (res?.length > 0) {
        this.isAlertVisible = false;
        currentItem = res[0]
        this.afs.collection('users').doc(currentItem?.fkCurrentOwnerUuid?.id).valueChanges().subscribe(res => {
          let ownerInfo
          ownerInfo = res;
          currentItem.ownerInfo = ownerInfo;
          currentItem.imagesUrl = [];

          this.storage.ref(selectedCategory + '/' + currentItem?.fkCurrentOwnerUuid?.id + '/' + currentItem.itemId).listAll().subscribe(images => {
            images.items.forEach(i => {
              i.getDownloadURL().then(res => {
                currentItem.imagesUrl.push(res)
              })
            })
          })

          this.item = currentItem;
          this.loadingService.isLoading = false;
          this.isItem = true;
        })


      } else {
        this.loadingService.isLoading = false;
        this.isItem = false;
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
    this.itemDetailService.itemInfo = this.item;
    this.router.navigate(['detail', event.fkCurrentOwnerUuid.id + '/' + event.category + '/' + event.itemId])
  }
}
