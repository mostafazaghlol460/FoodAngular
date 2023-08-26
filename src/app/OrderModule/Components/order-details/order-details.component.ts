import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from './../../Services/order.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../Model/order';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order: any;
  user: any;

  constructor(
    private service: OrderService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getUserById(id).subscribe(
      (Response:any) => { 
        this.user = Response 
        if(this.order.userId==Response){
          return this.order.userName;
        }
      });

    this.service.getOrderById(id).subscribe(
      response => {
        this.order = response;
        console.log(response);
      });
  }

  Delete(id: number) {
    console.log(id);
    this.confirmationService.confirm({
      message: 'Are you sure to delete this order !?',
      accept: () => {
        this.service.deleteOrder(id).subscribe(
          next => {
            this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Order deleted' });
            setTimeout(() => {
              this.router.navigate(['orders']);
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
