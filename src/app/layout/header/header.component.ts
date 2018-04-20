import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'beerup-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  router: Router;
  headerClass: string;

  constructor(private _router: Router ) {
    this.router = _router;
  }

  ngOnInit() {

    if(this.router.url == '/home'){
      this.headerClass = 'home';
    } else if(this.router.url == '/favorites'){
      this.headerClass = 'favorites';
    } else if(this.router.url == '/join'){
      this.headerClass = 'join';
    }

  }

}
