import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private messageSource=new BehaviorSubject({type:'',dataResult:[]});
  currentMessage=this.messageSource.asObservable();

  

  changeMessage(message:any){
    this.messageSource.next(message);
  }
}
