import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { AlertModule } from '../core/directives/alert/alert.module';

// used to create fake backend
import { fakeBackendProvider } from '../core/helpers/fake-backend';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    AlertModule
  ],
  declarations: [LoginComponent],
  providers: [
    // provider used to create fake backend
    fakeBackendProvider
  ]
})
export class LoginModule { }
