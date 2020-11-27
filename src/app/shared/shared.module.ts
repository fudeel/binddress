import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

import {ToolbarComponent} from './components/toolbar/toolbar.component';
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


@NgModule({
  declarations: [ToolbarComponent, CarouselComponent, DialogComponent, TutorialCardComponent, AlertComponent],
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
    FontAwesomeModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    ToolbarComponent,
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
    AlertComponent
  ]
})
export class SharedModule { }
