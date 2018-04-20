import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PunkapiService } from '../core/punkapi.service';

import { ModalsModule } from '../modals/modals.module';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { SwiperModule } from 'angular2-useful-swiper';

@NgModule({
  bootstrap: [],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    HomeRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ModalsModule,
    SwiperModule
  ],
  declarations: [HomeComponent],
  entryComponents: []
})
export class HomeModule { }
