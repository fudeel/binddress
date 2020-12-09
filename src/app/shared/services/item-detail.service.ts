import {Injectable} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {Game} from "../models/game";

@Injectable({
  providedIn: 'root'
})
export class ItemDetailService {

  game$: Observable<Game>;
  private gameSubject: Subject<Game>;

  constructor() {
    this.gameSubject = new Subject<Game>();
    this.game$ = this.gameSubject.asObservable();
  }


  set gameInfo(newValue) {

    console.log('set item info: ', newValue);

    this.game$ = newValue;
    this.gameSubject.next(newValue);
  }


  getGameInfo(): Observable<any> {
    return of(this.game$);
  }
}
