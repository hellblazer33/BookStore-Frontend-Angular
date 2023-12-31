import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/Services/bookService/book-service.service'; 
import { DataService } from 'src/app/Services/dataService/data.service';


@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {

  bookArray: any=[];
  noofBooks:Number=0;
  bookId:Number=0;
  //for filter Part
  searchBook:string='';
  message:any;
  subscription:any;
  p=1;

  constructor(private book: BookServiceService,private router:Router,private dataservice:DataService) { }
  
  ngOnInit(): void {
    this.getallbooks();
    this.subscription=this.dataservice.currentMessage.subscribe(message=>{
      this.message=message;
    //now storing the data in the variable
    this.searchBook=message.dataResult[0];
    console.log(this.searchBook);
    })

    // Performing Pipe Filter Functionality here 2. It is my parent component (step 1. in data service)

    
  }

  getallbooks() {
     this.book.getallbooks().subscribe((response: any) => {
      console.log(response)
      this.bookArray = response;
      this.noofBooks=response.length;
      console.log("Array of Book: ", this.bookArray);
      console.log("Total Books Count: ", this.noofBooks);
    })
  }

  quickVeiwPage(book:any){
    console.log(book.bookId)
    localStorage.setItem('BookId',book.bookId)
    this.router.navigate(["/dashboard/quickview/"+book.bookId]) 
  }

  sortBookByPrice(option:any){
    if(option.value =='Price: Low to High'){
      this.bookArray.sort((a:any, b:any) => Number(a.discountedPrice) - Number(b.discountedPrice));
      console.log('Books sorted by Price: Low to High')
    }
    else if(option.value =='Price: High to Low'){
      this.bookArray.sort((a:any, b:any) => Number(b.discountedPrice) - Number(a.discountedPrice));
      console.log('Books sorted by Price: High to Low')
    }
    else if(option.value=='Sort by relevance'){
      this.bookArray.sort((a:any,b:any)=> Number(a.bookId)-Number(b.bookId));
      console.log('Books sorted by Sort by relevance')    
    }
    else if(option.value=='Newest Arrivals'){
      this.bookArray.sort((a:any,b:any)=> Number(b.bookId)-Number(a.bookId));
      console.log('Books sorted by Newest Arrivals')
    }
 }
 
}

