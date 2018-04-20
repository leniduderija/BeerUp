import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PunkapiService } from '../core/punkapi.service';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { BeerInfoModalComponent } from '../modals/beer-info-modal/beer-info-modal.component';

// import { SwiperComponent } from 'angular2-useful-swiper';

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

  loading: boolean;

  selectedSort: string = 'name';
  
  throttle:number = 300;
  scrollDistance:number = 1;
  dataStatus:boolean = true;

  // @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;

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
    private _punkapiService: PunkapiService,
    private dialog: MatDialog
  ) { }
  

  ngOnInit() {

    this.getBeers(this.currentPage, this.perPage);

    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("join");   //remove the class
    body.classList.remove("favorites");   //remove the class
    body.classList.add("home");   //add the class

    this.innerWidth = window.innerWidth;
    
    if(this.innerWidth < 540){
      body.classList.add("mobile");
      this.mobileView = true;
    } else {
      body.classList.remove("mobile");
      this.mobileView = false;
    }

    
  }

  onScrollDown() {
    if(this.dataStatus == true){
      this.currentPage++;
      this.getBeers(this.currentPage, this.perPage);      
    }
  }

  getBeers(currentPage:number, perPage:number) {
    this.loading = true;
    this._punkapiService.getBeers(this.currentPage, this.perPage)
      .subscribe(
      value => {
        this.loading = false;
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
        this.sortByProperty(this.selectedSort);
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

  sortByProperty(prop){
    this.selectedSort = prop;
    this.beers.sort((a, b) => {
      if (a[prop] < b[prop]) return -1;
      else if (a[prop] > b[prop]) return 1;
      else return 0;
    });
  }

}


