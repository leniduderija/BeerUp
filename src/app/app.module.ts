import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";



import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ModalsModule } from './modals/modals.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { JoinModule } from './join/join.module';
import { FavoritesModule } from './favorites/favorites.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from 'angular2-useful-swiper';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    ModalsModule,
    LayoutModule,
    HomeModule,
    JoinModule,
    FavoritesModule,
    CoreModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SwiperModule
  ]
})
export class AppModule { }
