import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/product';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  products: Product[] = [];
  categories : any[]=[];
  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    private messageService: MessageService,
    private router: Router
  ) {
   
  }
  ngOnInit(): void {
   this.service.getCategories().subscribe(
    Response => this.categories=Response
   );
  }


  productForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    categoryId: ['', [Validators.required]]
  })

  get name() {
    return this.productForm.controls.name as FormControl;
  }
  get description() {
    return this.productForm.controls.description as FormControl;
  }
  get price() {
    return this.productForm.controls.price as FormControl;
  }
  get categoryId () {
    return this.productForm.controls.categoryId as FormControl;
  }


  Add() {
    console.log(this.productForm.value);
    this.service.addProduct(this.productForm.value).subscribe(
      result => {
        this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Record added' });
        setTimeout(() => {

          this.router.navigate(['/products']);
        }, 1000);
        this.productForm.reset();
      }
    );
  }

}
