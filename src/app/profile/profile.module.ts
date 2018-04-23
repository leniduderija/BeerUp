import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

import { AlertModule } from '../core/directives/alert/alert.module';

// used to create fake backend
import { fakeBackendProvider } from '../core/helpers/fake-backend';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    AlertModule
  ],
  declarations: [ProfileComponent],
  providers: [
    // provider used to create fake backend
    fakeBackendProvider
  ]
})
export class ProfileModule { }
