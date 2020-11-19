import {Component, OnInit} from '@angular/core';
import HOMEPAGE_LOCALE from '../locale/homepage';
import CATEGORY_LOCALE from '../../shared/locale/category';
import CATEGORY_LIST_LOCALE from '../../shared/locale/category-list';
import {FormBuilder, Validators} from '@angular/forms';
import {LoadingService} from '../../shared/services/loading.service';
import * as elements from '../../shared/elements/elements';


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
  categorylistlocale = CATEGORY_LIST_LOCALE;

  categories: Categories[] = [];

  homepageLocale;
  l = 0;

  simpleSearchForm = this.fb.group({
    code: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private readonly loadingService: LoadingService) {
    this.l = localStorage.getItem('locale') ? JSON.parse(localStorage.getItem('locale')) : 0;
    this.homepageLocale = HOMEPAGE_LOCALE;
  }

  ngOnInit(): void {
    const localeValue = elements.getLocaleFromLocalStorage();

    this.categorylistlocale[localeValue].forEach(c => {
      this.categories.push({value: c.id, viewValue: c.value});
    });
  }


  onSimpleSearch(): void {
    this.loadingService.isLoading = true;
  }

}
