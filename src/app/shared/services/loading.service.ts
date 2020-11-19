import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading$: Observable<boolean>;
  private loadingSubject: Subject<boolean>;


  constructor() {
    this.loadingSubject = new Subject<boolean>();
    this.isLoading$ = this.loadingSubject.asObservable();
  }


  set isLoading(newValue) {
    this.isLoading$ = newValue;
    this.loadingSubject.next(newValue);
  }
}
