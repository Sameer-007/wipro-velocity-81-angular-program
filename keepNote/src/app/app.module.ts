import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeepnoteComponent } from './keepnote/keepnote.component';
import { KeepNoteService } from './services/keepnote.service';

@NgModule({
  declarations: [
    AppComponent,
    KeepnoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [KeepNoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
