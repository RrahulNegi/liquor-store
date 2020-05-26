import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessangerService {
  subject=new Subject();
  constructor() { }
  getMsg(){
return this.subject.asObservable();
  }
  sendMsg(product){
this.subject.next(product);// triggering event
  }
}
