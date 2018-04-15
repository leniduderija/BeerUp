import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";

import { JoinComponent } from './join.component';
import { JoinRoutingModule } from './join-routing.module';

import { AlertComponent } from '../core/directives/alert/alert.component';

import { UserService } from '../core/user.service';

// used to create fake backend
import { fakeBackendProvider } from '../core/helpers/fake-backend';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JoinRoutingModule
  ],
  declarations: [JoinComponent, AlertComponent],
  providers: [
    // provider used to create fake backend
    fakeBackendProvider
  ]
})
export class JoinModule { }
