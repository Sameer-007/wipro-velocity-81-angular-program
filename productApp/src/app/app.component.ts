import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productApp';

  msgFromParent = 'Welcome to Angular Programming - data from parent'
  abc = ''
  display(val: string) {
    this.abc = val;
  }

  flag = false
  colorChange = { 'background-color': this.flag ? 'yellow' : 'red' }
  productList = [
    {
      "id": 101,
      "name": "Mouse",
      "price": 500
    },
    {
      "id": 102,
      "name": "Keyboard",
      "price": 250
    }
  ]

}
