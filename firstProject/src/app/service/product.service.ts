import { Injectable } from '@angular/core';

// Decorator that marks a class as available to be provided and injected as a dependency.
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
}
