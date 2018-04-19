import { Inject, Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { LocalStorageService } from '../../core/localStorage.service';
import { UserService } from '../../core/user.service';

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
  activeCrate: number;

  crate1: any[] = JSON.parse(localStorage.getItem('crate1')) || [];
  crate2: any[] = JSON.parse(localStorage.getItem('crate2')) || [];
  crate3: any[] = JSON.parse(localStorage.getItem('crate3')) || [];

  crateClasses: any[] = ['first', 'second'];

  constructor(
        private dialogRef: MatDialogRef<BeerInfoModalComponent>,
        private storageService: LocalStorageService,
        private _userService: UserService,
        @Inject(MAT_DIALOG_DATA) data) {

        this.activeCrate = this._userService.getActiveCrate();

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

    let active = this['crate' + this.activeCrate];
    let index = active.map(function(e) { return e.id; }).indexOf(data.id);
    this['crate' + this.activeCrate] = JSON.parse(localStorage.getItem('crate' + this.activeCrate)) || [];
    
    if(index == -1){
      this.alreadyInCrate = false;
    } else {
      this.alreadyInCrate = true;
    }
  }
  
  addToCrate(data){
    console.debug('addToCrate beer: ', data);    
    
    if(this['crate' + this.activeCrate].length < 20){
      let randClass = this.crateClasses[Math.floor(Math.random()*this.crateClasses.length)];
      data.crateClass = randClass;
      delete data.favorites;
      this['crate' + this.activeCrate].push(data);
      this.alreadyInCrate = true;
      this.storageService.setItem('crate'+this.activeCrate, JSON.stringify(this['crate' + this.activeCrate]));
    } else {
      this.unableToAddToCrate = true;
    }
  }

  removeFromCrate(data){
    console.debug('removeFromCrate beer: ', data);

    this.activeCrate = this._userService.getActiveCrate();

    let index = this['crate' + this.activeCrate].map(function(e) { return e.id; }).indexOf(data.id);
    this['crate' + this.activeCrate].splice(index, 1);
    this.alreadyInCrate = false;
    this.storageService.setItem('crate'+this.activeCrate, JSON.stringify(this['crate' + this.activeCrate]));
    
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