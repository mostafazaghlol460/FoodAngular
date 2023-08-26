import { Product } from './../../Model/product';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../Services/product.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
  Products: Product[] = [];
  id: number = 0;
  categories: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
    
    

  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.getData();
    }
  }

  getData() {
    this.service.getProductById(this.id).subscribe((products: Product) => {
      this.service.getCategories().subscribe(
        response => {
          this.categories=response;
        }
      );
      this.productForm.patchValue({
        name: `${products.name}`,
        description: `${products.description}`,
        price: `${products.price}`,
        image: `${products.image}`,
        categoryId:`${products.categoryId}`,

      })




    });
    console.log(this.Products);
  }


  productForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    image: ['', [Validators.required]],
    categoryId: ['', [Validators.required]],

    

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
  get image() {
    return this.productForm.controls.image as FormControl;
  }

  Update() {
    console.log({ ...this.productForm.value, 'id': this.id });
    const data: any = {
      id: this.id,
      name: this.name.value,
      description: this.description.value,
      price: this.price.value,
      image: this.image.value,
      categoryId:this.productForm.get('categoryId')?.value ,

    }
    console.log(data);
    this.service.updateProduct(this.id ,data).subscribe(
      result => {
        this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Record updated' });
        setTimeout(() => {
          this.router.navigate(['/products']);
        }, 1000);
        this.productForm.reset();
      }
    );
  }
}
