import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PunkapiService } from '../core/punkapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  beers: any;
  errorMessage: string;

  constructor(
    private _punkapiService: PunkapiService
  ) { }

  ngOnInit() {

    this.getBeers();
    
  }

  getBeers() {
    this._punkapiService.getBeers()
      .subscribe(
      value => this.beers = value,
      error => this.errorMessage = <any>error);
  }

}
