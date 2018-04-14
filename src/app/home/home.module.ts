import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material';
import { BeerInfoModalComponent } from '../modals/beer-info-modal/beer-info-modal.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PunkapiService } from '../core/punkapi.service';
// import { SidebarComponent } from './sidebar/sidebar.component';





@NgModule({
  bootstrap: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  declarations: [HomeComponent, BeerInfoModalComponent],
  entryComponents: [BeerInfoModalComponent]
})
export class HomeModule { }
