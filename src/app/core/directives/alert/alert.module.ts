import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertComponent } from './alert.component';

@NgModule({
  bootstrap: [],
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent],
  entryComponents: [],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }
