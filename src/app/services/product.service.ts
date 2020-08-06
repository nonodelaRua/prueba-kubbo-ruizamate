import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsJSONURL:string = '../../assets/_data/products.json';

  constructor(private http:HttpClient) {}

  getProducts() {
    console.log('Consuming data from product service');
    return this.http.get(this.productsJSONURL);
  }
}
