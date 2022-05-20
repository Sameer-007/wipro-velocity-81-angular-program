import { Component } from '@angular/core';

// Components are the basic UI building block of an Angular app. 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular Project';
  message = "Angular is Single Page Application(SPA)"

  employee = {
    name: 'Siva K',
    salary: 25000
  }

  imageLocation = "..//src//assets//images//wipro-logo.png"

  username: string = "Vijay"
  getMessage() {
    alert("Button Clicked")
  }
  // Take a Break

}
