import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinComponent } from './join.component';
import { MainComponent } from '../layout/main/main.component';
// import { SidebarComponent } from './sidebar/sidebar.component';

import { AuthGuard } from '../core/guards/auth.guard';


const routes: Routes = [{
  path: '',
  component: MainComponent,
  // canActivate: [AuthGuard],
  children: [
    { path: 'join', component: JoinComponent},
    // { path: '', component: SidebarComponent, outlet: 'sidebar'}
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class JoinRoutingModule { }
