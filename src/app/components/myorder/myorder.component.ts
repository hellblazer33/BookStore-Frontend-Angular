import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cartService/cart.service';
import { Orderservice } from 'src/app/Services/orderService/order.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {
  orderArray:any=[];
  noofOrders:any;
  bookId = localStorage.getItem('BookId');
  // carts:any;
  cartArray: any = [];
  token: any;
  counter = 0;
  noofCart: any;
  userId:any
  i = this.bookId;

  

  

  constructor(private orderservice:Orderservice,private cart:CartService) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem('BookId');
    this.userId=localStorage.getItem('UserId');
    this.getCartDetails();
    this.getAllorders();
    console.log(this.newOrderArray)
  }
  getAllorders(){
    this.orderservice.getAllorders().subscribe((response:any)=>{
      console.log(response);
      this.orderArray=response.response;
      this.noofOrders=response.response.length;
      console.log("Order Array :",this.orderArray)
      console.log("Total No of orders :",this.noofOrders)
    })
  }

  getCartDetails() {
    this.cart.getCartDetails(this.userId).subscribe((response: any) => {
      console.log("Retrived All Cart Items", response.response);
      this.cartArray = response.response;
      this.noofCart = response.response.length;
      console.log('Cart Array: ', this.cartArray);
      console.log("Total number of Cart:", this.noofCart);

      
    });
  }

  newOrderArray = this.orderArray.concat(this.cartArray); 
  

  getDate(date:any){
    return date.split('T')[0]
  }
}
