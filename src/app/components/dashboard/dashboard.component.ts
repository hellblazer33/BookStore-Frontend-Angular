import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  timeLeft:number = 60;
  interval:any
  

  constructor(private router:Router) {
    this.userId=localStorage.getItem('UserId')
   }

  userId:any;
  ngOnInit(): void {
  }
  
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  navWishlistPage() {
    this.router.navigate(["/dashboard/mywishlist/"+this.userId]) 
  }

  navToMycart() {
    this.router.navigate(["/dashboard/mycart/"+this.userId])
  }

  navhome(){
   
    this.router.navigate(["/dashboard/getallbooks"])

  }

  

  navOrderPage() {
    this.router.navigate(['/dashboard/myorder'])
  }

}



