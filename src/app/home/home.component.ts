import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PunkapiService } from '../core/punkapi.service';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { BeerInfoModalComponent } from '../modals/beer-info-modal/beer-info-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentPage: number = 1;
  perPage: number = 15;

  beers: any = [];
  errorMessage: string;
  favorite = false;
  favorites: any[] = JSON.parse(localStorage.getItem('favorites')) || [];
  
  throttle:number = 300;
  scrollDistance:number = 1;
  dataStatus:boolean = true;


  constructor(
    private _punkapiService: PunkapiService,
    private dialog: MatDialog
  ) { }
  

  ngOnInit() {

    this.getBeers(this.currentPage, this.perPage);
    
  }

  onScrollDown() {
    if(this.dataStatus == true){
      this.currentPage++;
      this.getBeers(this.currentPage, this.perPage);
    }
  }


  getBeers(currentPage:number, perPage:number) {
    this._punkapiService.getBeers(this.currentPage, this.perPage)
      .subscribe(
      value => {
        this.beers = this.beers.concat(value);
        // this.beers = value;
        let newBeerArr = [];
        this.beers.map(beer => {
          let checkFavorite = this.favorites.filter(favorite => { return favorite.id === beer.id; }).length;
          if(checkFavorite){
            beer.favorite = true;
          } else {
            beer.favorite = false;
          }
        });
      },
      error => {
        this.dataStatus = false;
        this.errorMessage = <any>error.error});
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
    dialogConfig.data.favorites = this.favorites;

    const dialogRef = this.dialog.open(BeerInfoModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => { 
      
    });

  }

  toggleFavorite(beer){
    console.debug('beer: ', beer);
    let alreadyFavorite = beer.favorite == true;

    if (alreadyFavorite) {
      let index = this.favorites.map(function(e) { return e.id; }).indexOf(beer.id);
      this.favorites.splice(index, 1);
      beer.favorite = false;
    } else {
      delete beer.favorites;
      this.favorites.push(beer);
      beer.favorite = true;
    }    
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

}
