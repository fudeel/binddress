import {Injectable} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {Game} from "../models/game";

@Injectable({
  providedIn: 'root'
})
export class ItemDetailService {

  item$: Observable<Game>;
  private itemSubject: Subject<Game>;

  constructor() {
    this.itemSubject = new Subject<Game>();
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
