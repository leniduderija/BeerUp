import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { BeerInfoModalComponent } from '../modals/beer-info-modal/beer-info-modal.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  errorMessage: string;
  favorites: any[] = JSON.parse(localStorage.getItem('favorites')) || [];
  beers: any = this.favorites;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    this.getBeers();

  }

  getBeers() {

    if(!this.favorites.length){
      this.errorMessage = 'No favorite beers!';      
    }
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

      this.getBeers();

    });

  }

  toggleFavorite(beer){
    console.debug('beer: ', beer);
    let alreadyFavorite = beer.favorite == true;

    if (alreadyFavorite) {
      let index = this.favorites.map(function(e) { return e.id; }).indexOf(beer.id);
      this.favorites.splice(index, 1);
      beer.favorite = false;
      if(this.favorites.length == 0){
        this.getBeers();
      }
    } else {
      this.favorites.push(beer);
      beer.favorite = true;
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }



}
