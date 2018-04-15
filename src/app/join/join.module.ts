import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";

import { JoinComponent } from './join.component';
import { JoinRoutingModule } from './join-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JoinRoutingModule
  ],
  declarations: [JoinComponent]
})
export class JoinModule { }
