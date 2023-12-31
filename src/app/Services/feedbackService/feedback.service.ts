import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { IaddFeedback } from '../typeInterface';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {


  token:any;

  constructor(private httpservice:HttpService) {
    this.token=localStorage.getItem('token')
  }

  getAllFeedbacks(bookId:any){
    let headeroptions={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
  }
    return this.httpservice.GetService('/Feedback/Get?bookId='+bookId,true,headeroptions)
  }



  addFeedback(data:IaddFeedback){
    console.log(data)
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.PostService('/Feedback/Add',data,true,header)
  }
}
