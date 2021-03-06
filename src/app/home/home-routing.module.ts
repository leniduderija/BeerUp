import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from '../layout/main/main.component';

import { AuthGuard } from '../core/guards/auth.guard';


const routes: Routes = [{
  path: '',
  component: MainComponent,
  canActivate: [AuthGuard],
  children: [
    { path: 'home', component: HomeComponent}
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule { }
