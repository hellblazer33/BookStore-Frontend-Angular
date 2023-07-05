import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Services/httpService/http.service';
import { CartService } from 'src/app/Services/cartService/cart.service';

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
  

   typeId:  Number=0;
  
   userId:any;
  



  constructor(private cart: CartService, private httpservice: HttpService,
    private _snackbar: MatSnackBar, private router: Router
    ) {

  }

  ngOnInit(): void {
    this.bookId = localStorage.getItem('BookId');
    this.userId=localStorage.getItem('UserId');
    this.getCartDetails();

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


  openAddress() {
    this.hideButton = false,
      this.hideShowAddress = false
  }

  openContinue() {
    this.hideContinue = false,
      this.hideShowOrder = false

    console.log(this.mobileNumber)

    //Add address API
 

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




  addNewAddress() {
    this.fullName = '',
    this.mobileNumber = '',
    this.address = '';
    this.city = '';
    this.state = '';
    this.typeId =new Number;
  }
}
