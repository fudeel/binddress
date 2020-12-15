import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {environment} from 'src/environments/environment';
import {SharedModule} from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DialogComponent} from './shared/components/dialog/dialog.component';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AngularFireStorageModule, BUCKET} from "@angular/fire/storage";
import {AgmCoreModule} from "@agm/core";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    SharedModule,
    NgbModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQYOTZGOUhGmlKp1AJNfTY_yBGUcsM2j4'
    })
  ],
  entryComponents: [DialogComponent],
  providers: [{provide: BUCKET, useValue: 'gs://binddress00.appspot.com/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
