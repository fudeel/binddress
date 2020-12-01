import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {faBarcode, faCertificate} from "@fortawesome/free-solid-svg-icons";
import SEARCH_CARD_LOCALE from '../../locale/search-card'

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {

  @Input() item: Item;

  @Input() l: number;

  faBarcode = faBarcode
  faCertificate = faCertificate
  searchCardLocale = SEARCH_CARD_LOCALE

  constructor() {

  }

  ngOnInit(): void {
  }

}
