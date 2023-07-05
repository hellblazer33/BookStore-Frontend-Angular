import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WishlistserviceService } from 'src/app/Services/wishlistService/wishlist.service';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.scss']
})
export class MywishlistComponent implements OnInit {

wishArray:any=[];
noofWishlist:Number=0;
userId:any;

  constructor(private wish:WishlistserviceService,private _snackbar:MatSnackBar){
    this.userId=localStorage.getItem('UserId')
  }

  ngOnInit(): void {
    this.getAllWishlist();
  }
  getAllWishlist(){
    this.wish.getAllWishlist(this.userId).subscribe((response:any)=>{
      console.log('Array of Wishlist:',response.response)
      //console.log(response.data.length)
      this.wishArray=response.response;
      this.noofWishlist=response.response.length;
      console.log("Array of Wishlist:",this.wishArray);
      console.log("Total number of wishlist:",this.noofWishlist)
      
    })
  }


}
