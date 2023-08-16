import { Component, OnInit } from '@angular/core';
import { Order } from '../../Model/order';
import { OrderService } from '../../Services/order.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order: Order[] = [];

  constructor(
    private service: OrderService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) { }
  getOrders() {
    this.service.getOrders().subscribe(
      Response => this.order = Response
    );
  }
  ngOnInit(): void {
    this.getOrders();
  }

  Edit(order: Order) {

  }
  
  Delete(id: number) {
    console.log(id);
    this.confirmationService.confirm({
      message: 'Are you sure to delete this order !?',
      accept: () => {
        this.service.addOrder(id).subscribe(
          next => {
            this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Order deleted' });
            // setTimeout(() => {
            //   this.router.navigate(['orders']);
            // }, 500);
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error!!!' });
          }
          )
      }
    });
  }
}
