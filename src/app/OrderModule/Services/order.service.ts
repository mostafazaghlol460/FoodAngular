import { Injectable } from '@angular/core';
import { MasterService } from 'src/app/Services/master.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  base: string = 'Orders';
  details: string = 'Details';

  constructor(private master: MasterService) { }

  getOrders() {
    return this.master.getAll(this.base);
  }

  addOrder(data: any) {
    return this.master.add(this.base, data);
  }

  getOrderById(id: any) {
    return this.master.getById(this.base, this.details, id);
  }

  deleteOrder(id: number) {
    return this.master.Delete(this.base, id);
  }

}
