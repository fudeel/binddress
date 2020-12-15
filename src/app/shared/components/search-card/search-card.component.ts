import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faBarcode, faCertificate, faFutbol, faTableTennis} from "@fortawesome/free-solid-svg-icons";
import SEARCH_CARD_LOCALE from '../../locale/search-card'
import {Game} from "../../models/game";
import * as moment from "moment";

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {

  @Input() game: Game;
  @Input() l: number;

  @Output() goDetail: EventEmitter<Game> = new EventEmitter<Game>()

  faBarcode = faBarcode
  faCertificate = faCertificate
  searchCardLocale = SEARCH_CARD_LOCALE
  faTableTennis = faTableTennis
  faFutbol = faFutbol

  gameDate: any;

  constructor() {
  }

  ngOnInit(): void {
    let loc: string = '';
    if (Number(localStorage.getItem('locale')) === 0) {
      loc = 'en'
    } else if (Number(localStorage.getItem('locale')) === 1) {
      loc = 'it'
    }
    this.gameDate = moment(this.game.date.toDate()).locale(loc)

  }

  onGoDetail() {
    this.goDetail.emit(this.game);
  }
}
