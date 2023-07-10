import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { IaddToCart, IdeleteFromCart } from '../typeInterface';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  
  token: any;
  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem('token');
    
  }

  //2.calling API here 
  // addToCart(reqdata: any) {
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': 'Bearer ' + this.token
  //     })
  //   }
  //   return this.httpservice.PostService('/Cart/AddCart', reqdata, true, header)
  // }

  //1.Get Cart Details
  getCartDetails(userId:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.GetService('/Cart/'+userId+'/Get', true, header);
  }

  addToCart(reqdata: IaddToCart) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PostService('/Cart/Add', reqdata, true, header)
  }

  deleteFromCart(cartIddata: IdeleteFromCart) {
    console.log(cartIddata)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.DeleteService('/Cart/Delete?cartId=' + cartIddata, true, header);
  }
}
