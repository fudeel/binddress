import {Injectable} from '@angular/core';
import {Observable, of, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  locale$: Observable<number>;
  private localeSubject: Subject<number>;


  constructor() {
    this.localeSubject = new Subject<number>();
    this.locale$ = this.localeSubject.asObservable();
  }

  set localeNumber(newValue) {
    this.locale$ = newValue;
    this.localeSubject.next(newValue);
  }


  getLanguageValue(): Observable<any> {
    return of(this.locale$);
  }
}
