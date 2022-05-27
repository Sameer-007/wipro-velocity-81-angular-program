import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  // FormBuilder /  BookService
  constructor(private formBuilder: FormBuilder,
    private service: BookService) { }
  searchForm: any;
  book: Book = new Book()
  ngOnInit(): void {

    this.searchForm = this.formBuilder.group({
      bookId: ['101']
    })

  }
  getData() {
    alert(this.searchForm.value.bookId)
    console.log()
    this.service.getBookDetailsById(this.searchForm.value.bookId)
      .subscribe(
        data => {
          this.book = data
          console.log(data)
        }
      )
  }

}
