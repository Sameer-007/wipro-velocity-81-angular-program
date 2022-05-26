import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HighlightDirective } from './highlight.directive';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    HighlightDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
