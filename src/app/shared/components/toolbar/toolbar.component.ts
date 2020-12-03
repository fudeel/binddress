import {Component, OnInit} from '@angular/core';
import TOOLBAR_LOCALE from '../../locale/toolbar'
import {LocaleService} from "../../services/locale.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  toolbarLocale = TOOLBAR_LOCALE
  l: number = 0;

  constructor(private readonly localeService: LocaleService) {
    this.localeService.locale$.subscribe(l => {
      this.l = l

      console.log('language: ', this.l);
    })
  }

  ngOnInit(): void {
  }

}
