import { Injectable } from '@angular/core';
import { MasterService } from 'src/app/Services/master.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  base: string = 'Orders';
  orderDetails: string = 'Details';
  user: string = 'User/GetAllUser';
  orderUpdate: string = 'Update';


  constructor(private master: MasterService) { }

  getAllUser() {
    return this.master.getAll(this.user);
  }

  getOrders() {
    return this.master.getAll(this.base);
  }

  addOrder(data: any) {
    return this.master.add(this.base, data);
  }

  getOrderById(id: any) {
    return this.master.getById(this.base, this.orderDetails, id);
  }

  deleteOrder(id: number) {
    return this.master.Delete(this.base, id);
  }

  updateOrder(data: any) {
    return this.master.update(this.base, this.orderUpdate, data);
  }
}
