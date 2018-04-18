import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { LocalStorageService } from '../../core/localStorage.service';

@Component({
  selector: 'beerup-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  Arr = Array; //Array type captured in a variable
  num:number = 20;

  crate: any[] = JSON.parse(localStorage.getItem('crate')) || [];
  

  constructor(
    private storageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.storageService.watchStorage().subscribe((data:any) => {
      this.crate = JSON.parse(localStorage.getItem('crate')) || [];

    });
  }

  getClassByValue(beer){
    if(beer.crateClass == 'first'){
      return 'first';
    } else if(beer.crateClass == 'second'){
      return 'second';
    }
  }

  



}
