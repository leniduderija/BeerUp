import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PunkapiService } from '../core/punkapi.service';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { BeerInfoModalComponent } from '../modals/beer-info-modal/beer-info-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  beers: any;
  errorMessage: string;

  constructor(
    private _punkapiService: PunkapiService,
    private dialog: MatDialog
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

  openBeerInfo(beer) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = '764px';
    dialogConfig.width = '764px';
    // dialogConfig.height = '100%';
    dialogConfig.minHeight = 700;
    // dialogConfig.maxHeight = '80vh';


    dialogConfig.data = beer;

    const dialogRef = this.dialog.open(BeerInfoModalComponent, dialogConfig);

  }

}
