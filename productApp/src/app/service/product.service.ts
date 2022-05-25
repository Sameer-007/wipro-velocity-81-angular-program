import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Serivce is used to communicate with server (Json Server)
  // HttpClient - Url http://localhost:3000/products
  // GET
  // POST
  // PUT
  // DELETE
  // Imports(HttpClientModule) - app.module.ts  -> import { HttpClientModule } from "@angular/common/http";
  // Dependency Injection(DI) - Remove the Dependency between the class
  // Amazon depends on  Seller  or Seller depends on Amazon
  // Implement DI -> Construtor Injection
  //HttpClient - Performs HTTP requests.
  constructor(private httpClinet: HttpClient) { }

  addProduct(product: any): Observable<Product> {
    let prod = {
      "name": product.name,
      "price": Number(product.price),
      "quantity": Number(product.quantity)
    }
    console.log(product)
    let url = "http://localhost:3000/products"
    return this.httpClinet.post(url, JSON.stringify(prod), {
      'headers': {
        'Content-Type': 'application/json'
      }
    })
  }

}
