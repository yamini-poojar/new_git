import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  selectedProduct = {
    name: null,
    imgurl: null,
    description: null,
    price: null,
    id: null
  };

  constructor(private productService: ProductService) { 
    this.productService.getData();
  }

  selectProduct(product) {
    this.selectedProduct = product;
  }

  callGetData() {
    this.productService.getData();
  }

  updateProduct(updateProductForm: NgForm) {
    this.productService.putData(updateProductForm.value).subscribe(resData=> {
      console.log(resData);
      updateProductForm.reset();
    }, err=> {
      console.log(err);
    });
  }

  deleteProduct(product) {
    this.productService.deleteData(product).subscribe(resData => {
      console.log(resData);
      this.productService.getData();
    }, err=> {
      console.log(err);
    })
  }

  ngOnInit() {
  
  }

}
