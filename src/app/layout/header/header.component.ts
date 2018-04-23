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

  showMobileMenu: boolean;

  user: any = JSON.parse(localStorage.getItem('currentUser')) || null;
  loggedInUser: boolean;
  firstName: string;
  
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
    } else if(this.router.url == '/login'){
      this.headerClass = 'login';
    } else if(this.router.url.indexOf('/user') > -1){
      this.headerClass = 'profile';
    }

    this.showMobileMenu = false;

    if(this.user != null){
      this.loggedInUser = true;
      this.firstName = this.user.fullName.split(' ')[0];
    } else {
      this.loggedInUser = false;
    }

  }

  toggleState() { // click handler
    let bool = this.showMobileMenu;
    this.showMobileMenu = bool === false ? true : false; 
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
  }

}
