import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PunkapiService } from '../core/punkapi.service';

import { ModalsModule } from '../modals/modals.module';

@NgModule({
  bootstrap: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ModalsModule
  ],
  declarations: [HomeComponent],
  entryComponents: []
})
export class HomeModule { }
