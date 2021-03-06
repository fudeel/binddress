import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private readonly httpClient: HttpClient) {
  }


  getClientPosition() {
    return this.httpClient.get('https://json.geoiplookup.io')
  }


  getClientPositionFromLocalStorage() {
    return JSON.parse(localStorage.getItem('position'));
  }
}
