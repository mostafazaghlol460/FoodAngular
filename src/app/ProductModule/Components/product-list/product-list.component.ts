import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/product';
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  constructor(
    private service: ProductService,

    private router: Router
  ) { }
  getProducts() {
    this.service.getProducts().subscribe(
      Response => this.products = Response
         );
         console.log(this.products);
  }
  ngOnInit(): void {
    this.getProducts();
  }

  Edit(product: Product) {
    
  }
  

}
