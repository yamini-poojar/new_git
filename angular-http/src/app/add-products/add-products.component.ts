import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  isLoading = false;

  constructor(private productService: ProductService) { }

  addProduct(addProductForm: NgForm) {
    this.isLoading = true;
    this.productService.postData(addProductForm.value).subscribe(resData=> {
      console.log(resData);
      addProductForm.reset();
      this.isLoading = false;
    }, err=> {
      console.log(err);
      this.isLoading = false;
    });
  }

  ngOnInit() {
  }

}
