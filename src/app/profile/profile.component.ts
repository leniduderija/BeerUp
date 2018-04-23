import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { AlertService } from '../core/alert.service';

import { User } from '../core/models/user.model';

import { UserService } from '../core/user.service';

// used to create fake backend
import { fakeBackendProvider } from '../core/helpers/fake-backend';


@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  user: any;
  loading = false;
  updated = false;
  fetchedUser: boolean = false;

  id: number;
  private sub: any;

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
    private route: ActivatedRoute,
    private _userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {

    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("favorites");   //remove the class
    body.classList.remove("home");   //remove the class
    body.classList.add("join");   //add the class

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getUser(this.id);
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getUser(id) {
    
    this._userService.getById(id)
    .subscribe(
        data => {
            console.debug('user: ', data);
            this.fetchedUser = true;
            this.user = data;
        },
        error => {
          console.debug('Error! ', error);
          this.alertService.error(error);
        });
  }

  onSubmitUpdateForm(user) {

    this.loading = true;

    this._userService.update(this.user)
    .subscribe(
        data => {
            console.debug('Success! ', data);
            this.loading = false;
            this.updated = true;
            
            this.alertService.success('Profile updated successfully', true);
            // this.router.navigate(['/login']);
        },
        error => {
          console.debug('Error! ', error);
          this.alertService.error(error);
          this.loading = false;
        });

  }

}
