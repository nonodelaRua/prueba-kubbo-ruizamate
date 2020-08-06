import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  product: any = {};
  productsList: any = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.getProducts();
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((resp) => {
      this.productsList = resp;
      this.getProductInfo();
    });
  }

  getProductInfo() {
    this.productsList.forEach(product => {
      if (this.id == product['id']) this.product = product;
      console.log(this.product);
    });
  }

}