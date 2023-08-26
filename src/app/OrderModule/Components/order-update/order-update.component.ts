import { Component } from '@angular/core';
import { Order, User } from '../../Model/order';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../../Services/order.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent {
  orders: Order[] = [];
  user: User[] = [];
  id: number = 0;

  selectDate: any = this.datePipe.transform(new Date(), "yyyy-mm-dd");

  constructor(
    private fb: FormBuilder,
    private service: OrderService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    this.service.getAllUser().subscribe(result=>this.user=result);
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.getData();
    }
  }

  getData() {
    this.service.getOrderById(this.id).subscribe((orders: Order) => {
      const formattedDate = this.datePipe.transform(orders.date, 'yyyy-MM-dd');
      this.orderForm.patchValue({
        date: `${formattedDate}`,
        quantity: `${orders.quantity}`,
        total: `${orders.total}`,
        userId: `${orders.userId}`
      })
    });
    console.log(this.orders);
  }

  orderForm = this.fb.group({
    date: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    total: ['', [Validators.required]],
    userId: ['', [Validators.required]]
  })

  onDateChanged(value: string): void {
    this.orderForm.get('date')?.setValue(value);

    // Access the updated value using the safe navigation operator
    console.log(this.orderForm.get('date')?.value);
  }

  get date() {
    return this.orderForm.controls.date as FormControl;
  }
  get quantity() {
    return this.orderForm.controls.quantity as FormControl;
  }
  get total() {
    return this.orderForm.controls.total as FormControl;
  }
  get userId() {
    return this.orderForm.controls.userId as FormControl;
  }

  Update() {
    console.log({ ...this.orderForm.value, 'id': this.id });
    const data: any = {
      id: this.id,
      date: this.date.value,
      quantity: this.quantity.value,
      total: this.total.value,
      userId: this.userId.value
    }
    console.log(data);
    this.service.updateOrder(this.id, data).subscribe(
      result => {
        this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Record updated' });
        setTimeout(() => {
          this.router.navigate(['/orders']);
        }, 1000);
        this.orderForm.reset();
      }
    );
  }
}
