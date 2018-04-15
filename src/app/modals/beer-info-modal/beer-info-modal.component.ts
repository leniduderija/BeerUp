import { Inject, Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

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
  favoriteBtnClicked:boolean = false;
  favorites;

  constructor(
        private dialogRef: MatDialogRef<BeerInfoModalComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.id = data.id;
        this.name = data.name;
        this.image_url = data.image_url;
        this.ibu = data.ibu;
        this.abv = data.abv;
        this.description = data.description;
        this.favorite = data.favorite;
        this.favorites = data.favorites;
    }

  close() {
      this.dialogRef.close({favoriteBtnClicked: this.favoriteBtnClicked, id: this.id, favorite: this.favorite});
  }

  addToCrate(){
    console.debug('will be added to crate...');
  }
  addFavorite(){
    this.favoriteBtnClicked = true;
    this.favorite = true;    
  }
  removeFavorite(){
    this.favorite = false;
    this.favoriteBtnClicked = true;    
  }


}