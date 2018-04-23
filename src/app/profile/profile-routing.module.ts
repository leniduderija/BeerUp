import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { MainComponent } from '../layout/main/main.component';
// import { SidebarComponent } from './sidebar/sidebar.component';

import { AuthGuard } from '../core/guards/auth.guard';


const routes: Routes = [{
  path: '',
  component: MainComponent,
  canActivate: [AuthGuard],
  children: [
    { path: 'user/:id', component: ProfileComponent},
    // { path: '', component: SidebarComponent, outlet: 'sidebar'}
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ProfileRoutingModule { }
