import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiResponse, PunkapiResponseMessage  } from '../shared/api-response.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';


@Injectable()
export class PunkapiService {

  private backendBaseUrl: string;

  constructor(private http: HttpClient) {
    this.backendBaseUrl = environment.backendUrl;
  }

  getBeers(page: number = 1, per_page: number = 15) {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.get(this.backendBaseUrl + '/beers?page=' + page + '&per_page=' + per_page,
    {
      headers: headers
    })
    // .do(data => console.log('All: ' +  JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(error: PunkapiResponseMessage) {
    console.error(error);
    return Observable.throw(error.error || 'Server error');
  }

}
