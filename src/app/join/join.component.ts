import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../core/models/user.model';


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  // model: User;

  user = new User('', '', '', '', '', '', false);

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

  constructor() { }

  ngOnInit() {
  }

  onSubmitJoinForm() {
      console.log(this.user);
  }
}
