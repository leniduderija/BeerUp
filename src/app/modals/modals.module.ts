import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerInfoModalComponent } from '../modals/beer-info-modal/beer-info-modal.component';

import { SidebarComponent } from '../layout/sidebar/sidebar.component';


@NgModule({
  bootstrap: [],
  imports: [
    CommonModule
  ],
  declarations: [BeerInfoModalComponent, SidebarComponent],
  entryComponents: [BeerInfoModalComponent],
  exports: [
    BeerInfoModalComponent, SidebarComponent
  ]
})
export class ModalsModule { }
