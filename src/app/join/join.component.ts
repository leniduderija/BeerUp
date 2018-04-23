import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { AlertService } from '../core/alert.service';

import { User } from '../core/models/user.model';

import { UserService } from '../core/user.service';

// used to create fake backend
import { fakeBackendProvider } from '../core/helpers/fake-backend';

@Component({
  moduleId: module.id,
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  // model: User;

  // user = new User('', '', '', '', '', '', false);
  user: any = {};
  loading = false;
  created = false;

  rsvpOptions = [
    {
      value : "yes",
      name : "I'm coming!"
    },
    {
      value : "maybe",
      name : "Maybe?"
    },
    {
      value : "no",
      name : "Can't make it"
    }
  ];

  constructor(
    private router: Router,
    private _userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {

    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("favorites");   //remove the class
    body.classList.remove("home");   //remove the class
    body.classList.add("join");   //add the class

  }

  

  onSubmitJoinForm() {
      console.log(this.user);

      this.loading = true;

      this._userService.createUser(this.user)
      .subscribe(
          data => {
              console.debug('Success! ', data);
              this.loading = false;
              this.created = true;
              
              this.alertService.success('Registration successful', true);
              this.router.navigate(['/login']);
          },
          error => {
            console.debug('Error! ', error);
            this.alertService.error(error);
            this.loading = false;
          });

  }
}
