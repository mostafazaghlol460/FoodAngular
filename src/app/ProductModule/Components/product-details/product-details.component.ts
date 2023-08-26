import { Component } from '@angular/core';
import { Product } from '../../Model/product';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productData: any;
  user: Product[] = [];
  Category:any;

  constructor(
    private product: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.product.getProductById(id).subscribe(
      response => {
        this.productData = response;
        this.product.getCategoriesByID(response.categoryId).subscribe(
          response2 => {
            
            this.Category=response2;
          }
        );
      });
     
  }

  Delete(id: number) {
    console.log(id);
    this.confirmationService.confirm({
      message: 'Are you sure to delete this order !?',
      accept: () => {
        this.product.deleteProduct(id).subscribe(
          next => {
            this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Order deleted' });
            setTimeout(() => {
              this.router.navigate(['products']);
            }, 1000);
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error!!!' });
          }
          )
      }
    });
  }

}
