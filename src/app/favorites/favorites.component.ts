import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HostListener } from '@angular/core';
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

  selectedSort: string = 'name';

  config: any = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    slidesPerView: 1,
    shortSwipes: true
  };
  
  public innerWidth: any;
  mobileView: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    let body = document.getElementsByTagName('body')[0];
    if(this.innerWidth < 540){
      body.classList.add("mobile");
      this.mobileView = true;
    } else {
      body.classList.remove("mobile");
      this.mobileView = false;
    }
  }


  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    this.getBeers();

    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("home");   //remove the class
    body.classList.remove("join");   //remove the class
    body.classList.add("favorites");   //add the class

    this.innerWidth = window.innerWidth;
    
    if(this.innerWidth < 540){
      body.classList.add("mobile");
      this.mobileView = true;
    } else {
      body.classList.remove("mobile");
      this.mobileView = false;
    }

  }

  getBeers() {

    if(!this.favorites.length){
      this.errorMessage = 'No favorite beers!';      
    }
    this.sortByProperty(this.selectedSort);
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

  sortByProperty(prop){
    this.selectedSort = prop;
    this.beers.sort((a, b) => {
      if (a[prop] < b[prop]) return -1;
      else if (a[prop] > b[prop]) return 1;
      else return 0;
    });
  }



}
