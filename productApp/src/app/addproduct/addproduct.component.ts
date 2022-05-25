import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  // Inject Service object Using DI
  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(productForm: any) {
    alert("submit button clicked")

    console.log(productForm)
    console.log(productForm.value)
    console.log(productForm.value.name)
    console.log(productForm.value.price)
    console.log(productForm.value.quantity)
    this.service.addProduct(productForm.value).subscribe(data => {
      console.log(data)
      alert('Data is Inserted')
    })


  }
}
