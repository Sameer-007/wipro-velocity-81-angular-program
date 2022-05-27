import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = "http://localhost:3000/books"

  // Communicate with back end server
  // Inject object HttpClient in Constructor

  constructor(private httpclinet: HttpClient) { }
  getAllBookDetails(): Observable<Book[]> {
    return this.httpclinet.get<Book[]>(this.url)
  }

  getBookDetailsById(id: number): Observable<Book> {
    //http://localhost:3000/books/101
    return this.httpclinet.get<Book>(`${this.url}/${id}`)
  }

}
