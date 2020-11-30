import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {faBarcode} from "@fortawesome/free-solid-svg-icons";
import SEARCH_CARD_LOCALE from '../../locale/search-card'

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {

  @Input() item: Item = {
    category: "shoes",
    condition: "new",
    fkCurrentOwnerUuid: '123456',
    isBound: true,
    itemId: '123456',
    itemName: 'Black Nike',
    itemRarity: 'purple',
    previousOwners: ['1234', '5678'],
    productionYear: '2020'
  }

  @Input() l: number;

  faBarcode = faBarcode
  searchCardLocale = SEARCH_CARD_LOCALE

  constructor() {

  }

  ngOnInit(): void {

    console.log(this.item)
  }

}
