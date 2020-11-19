import { Component, OnInit } from '@angular/core';
import TOOLBAR_LOCALE from '../../locale/toolbar'
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  locale = []

  constructor() {
    this.locale = TOOLBAR_LOCALE
  }

  ngOnInit(): void {
  }

}
