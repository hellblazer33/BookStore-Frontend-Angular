import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Services/httpService/http.service';
import { CartService } from 'src/app/Services/cartService/cart.service';
import { Orderservice } from 'src/app/Services/orderService/order.service';
import { AddressService } from 'src/app/Services/addressService/address.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  bookId = localStorage.getItem('BookId');
  // carts:any;
  cartArray: any = [];
  token: any;
  counter = 0;
  noofCart: any;

  hideButton = true;
  hideShowAddress = true;
  hideContinue = true;
  hideShowOrder = true;


   fullName: any;
   mobileNumber: any;
   address: string='';
   city: string='';
   state: string='';
   quantity = 1;
  

   typeId:  Number=0;
  
   userId:any;
   
 
   
 
   addressArray: any = [];
 
   addressType: any;
   
   addressId: any;
   noofAddress: Number=0;
   details: any;
   addval: any;
   subscription: any;
   cartId: any;
   takeCartId: Number=0;
   cartCount: any;
 
   hideBox = false;
  



  constructor(private cart: CartService, private httpservice: HttpService,
    private _snackbar: MatSnackBar, private router: Router,private orderservice:Orderservice,private addressservice:AddressService
    ) {

  }

  ngOnInit(): void {
    this.bookId = localStorage.getItem('BookId');
    this.userId=localStorage.getItem('UserId');
    this.getCartDetails();
    // this.getCustomerDetails();
    this.getAddresses();
    this.addressId = localStorage.getItem('addressId');
    this.cartId = localStorage.getItem('cartId');

    

  }
  // Get Cart Items
  getCartDetails() {
    this.cart.getCartDetails(this.userId).subscribe((response: any) => {
      console.log("Retrived All Cart Items", response.response);
      this.cartArray = response.response;
      this.noofCart = response.response.length;
      console.log('Cart Array: ', this.cartArray);
      console.log("Total number of Cart:", this.noofCart);

      
    });
  }

  removeFromCart(cartId: any) {
    console.log(cartId)
    this.cart.deleteFromCart(cartId).subscribe((response: any) => {
      console.log("Removed from cart", response);
      //i have called getcartdetails() to get all cart array
      // this.getCartDetails();
      this._snackbar.open("Item Removed From Cart", "Close", { duration: 3000 })
      
    })
  }

  openContinue() {
    this.hideContinue = false,
      this.hideShowOrder = false

    console.log(this.mobileNumber)

    //Add address API
    let data = {
      // fullName: this.fullName,
      // mobilileNumber: this.mobileNumber,
      address: this.address,
      city: this.city,
      state: this.state,
      typeId: Number(this.typeId)
    }

    this.addressservice.addAddress(data).subscribe((response: any) => {
      console.log("Address Added Successfully", response)
      this.getAddresses();
    })

  }

  orderConfirmed() {
    // Add order API
    // console.log(this.addressId)
    // console.log(this.bookId)
    // console.log(this.quantity)
    // console.log(this.userId)

    // let data = {
    //   userId:this.userId,
    //   addressId: this.addressId,
    //   bookId: this.bookId,
    //   quantity:this.quantity
    // }
    // this.orderservice.addOrder(data).subscribe((response: any) => {
    //   console.log(response)

      
    // })

    this.router.navigate(['/dashboard/orderplaced'])
  }

  openAddress() {
    this.hideButton = false,
      this.hideShowAddress = false
  }

 




  radioOptions(event: any) {
    console.log('console value', event.target.value)
    if (event.value == 1) {
      this.typeId = 1;
    }
    else if (event.value == 2) {
      this.typeId = 2;
    }
    else if (event.value == 3) {
      this.typeId = 3;
    }
  }

  getAddresses() {
    this.addressservice.getAddresses().subscribe((response: any) => {
      console.log("Retrived all the Addresses", response);
      this.addressArray = response.response;
      this.noofAddress = response.response.length;
      console.log('Array of the Address: ', this.addressArray);
      console.log('Total number of Addresses :', this.noofAddress);

      this.addressArray = this.addressArray.filter((response: any) => {
        localStorage.setItem('addressId',response.addressId)
        this.addressId = response.addressId

      })

      this.fullName = localStorage.getItem('fullName');
      console.log('fullName is: ', this.fullName);
      this.mobileNumber = localStorage.getItem('mobileNumber');
    })
  }


  addNewAddress() {
    this.fullName = '',
    this.mobileNumber = '',
    this.address = '';
    this.city = '';
    this.state = '';
    this.typeId =new Number;
  }

  
}
