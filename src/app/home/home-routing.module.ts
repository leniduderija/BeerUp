import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {MainComponent} from '../layout/main/main.component';


const routes: Routes = [{
  path: '',
  component: MainComponent,
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
