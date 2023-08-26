import { Injectable } from '@angular/core';
import { MasterService } from 'src/app/Services/master.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  base: string = 'Orders';
  orderDetails: string = 'Details';
  user: string = 'User/GetAllUser';
  orderUpdate: string = 'Update';

  userById:string='User';
  url: string = '';
  empty:string='';


  constructor(
    private master: MasterService, 
    private http:HttpClient, 
    ) { 
          this.url = environment.UrlBase;
    }

  getAllUser() {
    return this.master.getAll(this.user);
  }

  getUserById(id: any): Observable<any> {
    return this.http.get<any[]>(this.url + this.userById + '/' + id);
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

  updateOrder(id: any, data: any) {
    return this.master.update(this.base, this.orderUpdate, id, data);
  }
}
