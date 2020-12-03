import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {CarouselComponent} from './components/carousel/carousel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './components/dialog/dialog.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {TutorialCardComponent} from './components/tutorial-card/tutorial-card.component';
import {MatCardModule} from '@angular/material/card';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AlertComponent} from './components/alert/alert.component';
import {SearchCardComponent} from './components/search-card/search-card.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSidenavModule} from "@angular/material/sidenav";


@NgModule({
  declarations: [CarouselComponent, DialogComponent, TutorialCardComponent, AlertComponent, SearchCardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCardModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatSidenavModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    CarouselComponent,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    DialogComponent,
    MatProgressBarModule,
    MatSelectModule,
    TutorialCardComponent,
    MatCardModule,
    FontAwesomeModule,
    AlertComponent,
    SearchCardComponent,
    FlexLayoutModule,
    MatSidenavModule
  ]
})
export class SharedModule { }
