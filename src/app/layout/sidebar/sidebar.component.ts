import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { LocalStorageService } from '../../core/localStorage.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'beerup-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  crate1: any[] = JSON.parse(localStorage.getItem('crate1')) || [];
  crate2: any[] = JSON.parse(localStorage.getItem('crate2')) || [];
  crate3: any[] = JSON.parse(localStorage.getItem('crate3')) || [];
  activeCrate: number;
  

  constructor(
    private _storageService: LocalStorageService,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.activeCrate = this._userService.getActiveCrate();
    
    this._storageService.watchStorage().subscribe((data:any) => {
      this['crate' + this.activeCrate] = JSON.parse(localStorage.getItem('crate'+this.activeCrate)) || [];
    });
  }

  getClassByValue(beer){
    if(beer.crateClass == 'first'){
      return 'first';
    } else if(beer.crateClass == 'second'){
      return 'second';
    }
  }

  changeCrate(crate_num){
    this.activeCrate = this._userService.setActiveCrate(crate_num);
  }

  



}
