import {Injectable} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemDetailService {

  item$: Observable<Item>;
  private itemSubject: Subject<Item>;

  constructor() {
    this.itemSubject = new Subject<Item>();
    this.item$ = this.itemSubject.asObservable();
  }


  set itemInfo(newValue) {

    console.log('set item info: ', newValue);

    this.item$ = newValue;
    this.itemSubject.next(newValue);
  }


  getItemInfo(): Observable<any> {
    return of(this.item$);
  }
}
