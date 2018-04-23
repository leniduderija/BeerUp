import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";

import { JoinComponent } from './join.component';
import { JoinRoutingModule } from './join-routing.module';

import { AlertModule } from '../core/directives/alert/alert.module';

import { UserService } from '../core/user.service';

// used to create fake backend
import { fakeBackendProvider } from '../core/helpers/fake-backend';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JoinRoutingModule,
    AlertModule
  ],
  declarations: [JoinComponent],
  providers: [
    // provider used to create fake backend
    fakeBackendProvider
  ]
})
export class JoinModule { }
