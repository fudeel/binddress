import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faBarcode, faCertificate, faFutbol, faTableTennis} from "@fortawesome/free-solid-svg-icons";
import SEARCH_CARD_LOCALE from '../../locale/search-card'
import {Game} from "../../models/game";

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

  constructor() {

  }

  ngOnInit(): void {
  }

  onGoDetail() {
    this.goDetail.emit(this.game);
  }
}
