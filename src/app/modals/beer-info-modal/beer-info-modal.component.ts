import { Inject, Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-beer-info-modal',
  templateUrl: './beer-info-modal.component.html',
  styleUrls: ['./beer-info-modal.component.scss']
})
export class BeerInfoModalComponent {

  name:string;
  image_url:string;
  ibu:string;
  abv:string;
  description:string;

  constructor(
        private dialogRef: MatDialogRef<BeerInfoModalComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.name = data.name;
        this.image_url = data.image_url;
        this.ibu = data.ibu;
        this.abv = data.abv;
        this.description = data.description;
    }

  close() {
      this.dialogRef.close();
  }

  addToCrate(){
    console.debug('will be added to crate...');
  }
  addToFavorites(){
    console.debug('will be added to favorites...');
  }

}