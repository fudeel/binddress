import {Component, OnInit} from '@angular/core';
import HOMEPAGE_LOCALE from '../locale/homepage';
import {FormBuilder, Validators} from '@angular/forms';
import {LoadingService} from '../../shared/services/loading.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  locale;
  l = 0;

  simpleSearchForm = this.fb.group({
    code: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private readonly loadingService: LoadingService) {
    this.l = localStorage.getItem('locale') ? JSON.parse(localStorage.getItem('locale')) : 0;
    this.locale = HOMEPAGE_LOCALE;
  }

  ngOnInit(): void {

  }


  onSimpleSearch(): void {
    this.loadingService.isLoading = true;
  }

}
