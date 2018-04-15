import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../shared/api-response.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

// used to create fake backend
import { fakeBackendProvider } from '../core/helpers/fake-backend';

import { User } from '../core/models/user.model';

@Injectable()
export class UserService {

  private backendBaseUrl: string;

  constructor(private http: HttpClient) {
    this.backendBaseUrl = environment.backendUrl;
  }

  createUser(user: User) {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.post(this.backendBaseUrl + '/users', user,
    {
      headers: headers
    });
  }

}
