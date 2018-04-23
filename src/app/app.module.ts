import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AuthGuard } from './core/guards/auth.guard';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';



import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ModalsModule } from './modals/modals.module';
import { CoreModule } from './core/core.module';
import { AlertModule } from './core/directives/alert/alert.module';
import { HomeModule } from './home/home.module';
import { JoinModule } from './join/join.module';
import { LoginModule } from './login/login.module';
import { FavoritesModule } from './favorites/favorites.module';
import { ProfileModule } from './profile/profile.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from 'angular2-useful-swiper';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    ModalsModule,
    LayoutModule,
    HomeModule,
    JoinModule,
    FavoritesModule,
    CoreModule,
    SwiperModule,
    LoginModule,
    AlertModule,
    ProfileModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [
    SwiperModule,
    AlertModule
  ]
})
export class AppModule { }
