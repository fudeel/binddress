import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon'

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';




@NgModule({
  declarations: [ToolbarComponent, CarouselComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    ToolbarComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
