import { Component, OnInit } from '@angular/core';
import HOMEPAGE_LOCALE from '../locale/homepage';
import Tile from '../../shared/elements/elements';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  locale = [];
  tiles: Tile[] = []

  constructor() {
    const l = localStorage.getItem('locale') ? localStorage.getItem('locale') : 0
    this.locale = HOMEPAGE_LOCALE;
  }

  ngOnInit(): void {
    this.tiles = [
      { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
      { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
      { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
      { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    ];
  }

}
