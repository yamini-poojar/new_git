import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [];

  api = 'https://angular-http-ae11a.firebaseio.com/';

  constructor(private http: HttpClient) { }

  postData(product) {
    return this.http.post(`${this.api}products.json`, product);
  }

  putData(product) {
    return this.http.put(`${this.api}products/${product.id}.json`, product);
  }

  deleteData(product) {
    return this.http.delete(`${this.api}products/${product.id}.json`);
  }

  getData() {
    this.http.get(`${this.api}products.json`).pipe(map(resData => {
      let products = [];
      for(let key in resData) {
        products.push({...resData[key], id: key});
      }
      return products;
    })).subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }



}
