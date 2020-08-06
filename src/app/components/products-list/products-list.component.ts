import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns:any = ['id', 'name', 'sku', 'barcode', 'price', 'enabled'];
  productsList:any = [];

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((resp) => {
      this.productsList = resp;
      // this.dataSource.paginator = this.paginator;
    });
  }

  viewDetails(id:number) {
    this.router.navigate(['/product-details', id]);
  }

}

export interface ProductElement {
  id: number;
  name: string;
  sku: string;
  barcode: string;
  price: string;
  image: string;
  enabled: boolean;
}
