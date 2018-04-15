import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { PunkapiService } from '../core/punkapi.service';

import { ModalsModule } from '../modals/modals.module';

@NgModule({
  bootstrap: [],
  imports: [
    CommonModule,
    ModalsModule,
    FavoritesRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  declarations: [FavoritesComponent],
  entryComponents: []
})
export class FavoritesModule { }
