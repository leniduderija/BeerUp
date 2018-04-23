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

  activeCrate: number = 1;
  

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
  
  
  getById(id: number) {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer fake-jwt-token');
      
      return this.http.get('/users/' + id,
      {
        headers: headers
      });
  }

  update(user: User) {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer fake-jwt-token');

    return this.http.put('/users/' + user.id, user,
    {
      headers: headers
    });
  }
  



  getActiveCrate(){
    return this.activeCrate;
  }

  setActiveCrate(num){
      this.activeCrate = num;
      return this.activeCrate; 
  }

}
