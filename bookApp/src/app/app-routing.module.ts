import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { SearchBookComponent } from './search-book/search-book.component';


// Define the Basic Routes
const routes: Routes = [
  { path: 'add-book', component: AddBookComponent },
  { path: 'list-book', component: ListBookComponent },
  { path: 'search-book', component: SearchBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
