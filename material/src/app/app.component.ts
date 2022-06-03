import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  id: number;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showFiller = false;

  addMessahe() {
    alert('Typscript -  Behaviour')
  }


}
