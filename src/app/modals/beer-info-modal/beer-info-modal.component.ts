import { Inject, Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { LocalStorageService } from '../../core/localStorage.service';

@Component({
  selector: 'app-beer-info-modal',
  templateUrl: './beer-info-modal.component.html',
  styleUrls: ['./beer-info-modal.component.scss']
})
export class BeerInfoModalComponent {

  id:number;
  name:string;
  image_url:string;
  ibu:string;
  abv:string;
  description:string;
  favorite:boolean;
  alreadyInCrate:boolean = false;
  unableToAddToCrate:boolean = false;
  favorites;
  data;

  crate: any[] = JSON.parse(localStorage.getItem('crate')) || [];
  crateClasses: any[] = ['first', 'second'];

  constructor(
        private dialogRef: MatDialogRef<BeerInfoModalComponent>,
        private storageService: LocalStorageService,
        @Inject(MAT_DIALOG_DATA) data) {

        this.data = data;
        
        this.id = data.id;
        this.name = data.name;
        this.image_url = data.image_url;
        this.ibu = data.ibu;
        this.abv = data.abv;
        this.description = data.description;
        this.favorite = data.favorite;
        this.favorites = data.favorites;

        this.checkIfInCrate(data);
    }

  close() {
      this.dialogRef.close({id: this.id, favorite: this.favorite});
  }

  checkIfInCrate(data){
    let index = this.crate.map(function(e) { return e.id; }).indexOf(data.id);
    
    if(index == -1){
      this.alreadyInCrate = false;
    } else {
      this.alreadyInCrate = true;
    }
  }
  
  addToCrate(data){
    console.debug('addToCrate beer: ', data);
    
    if(this.crate.length < 20){
      let randClass = this.crateClasses[Math.floor(Math.random()*this.crateClasses.length)];
      data.crateClass = randClass;
      delete data.favorites;
      this.crate.push(data);
      this.alreadyInCrate = true;
      this.storageService.setItem('crate', JSON.stringify(this.crate));
    } else {
      this.unableToAddToCrate = true;
    }
    
    
  }

  removeFromCrate(data){
    console.debug('removeFromCrate beer: ', data);

    let index = this.crate.map(function(e) { return e.id; }).indexOf(data.id);
    this.crate.splice(index, 1);
    this.alreadyInCrate = false;
    this.storageService.setItem('crate', JSON.stringify(this.crate));
  }

  addFavorite(data){
    this.favorite = true;
    delete data.favorites;
    this.favorites.push(data);
    data.favorite = true;
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
  removeFavorite(data){
    this.favorite = false;
    let index = this.favorites.map(function(e) { return e.id; }).indexOf(data.id);
    this.favorites.splice(index, 1);
    data.favorite = false;
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }


}