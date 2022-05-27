import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  // BookService object
  constructor(private service: BookService) { }

  bookList: Book[] = []
  ngOnInit(): void {
    alert('Component Loaded')
    this.service.getAllBookDetails().subscribe(data => {
      console.log(data)
      this.bookList = data
    })

  }

}
