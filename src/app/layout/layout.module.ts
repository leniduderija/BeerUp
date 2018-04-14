import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {RouterModule} from '@angular/router';

import {MatDialogModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
  declarations: [FooterComponent, HeaderComponent, MainComponent, SidebarComponent]
})
export class LayoutModule { }
