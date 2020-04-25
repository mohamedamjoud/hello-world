import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  orders : any [];
  constructor(
    private orderService : OrderService
    ) { }

  ngOnInit() {
    this.orderService.getOrder()
    .subscribe(Response =>{

      let {orders} = Response['body'];

       this.orders= orders;
    });
  }

  Orders(){
    
  }

}
