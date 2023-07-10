import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  timeLeft:number = 60;
  interval:any
  

  constructor(private router:Router,private dataservice:DataService) {
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

  searchBook(event: any) {
    let searchResult = {
      type: 'search',
      dataResult: [event.target.value]
    }
    return this.dataservice.changeMessage(searchResult)
  } 

}



