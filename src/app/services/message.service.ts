import { Injectable } from '@angular/core';
import { BaseService}  from '../services/BaseService';
import { Http, Headers }  from '@angular/http';
import { Message } from '../model/message';
@Injectable()

export class MessageService extends BaseService{


///messages/search/findBySender_IdOrReceiver_Id?sid=15&rid=15&size=10

  endpoint : string = "messages";
  messages  : Message[] ;
  size = 10;

  url : string = "";
  constructor(private http : Http) {
    super();
   }

  getMessage(id:number){ 

   return  this.http.get(this.base_url+'/'+this.endpoint+'/'+id).map(res => res.json() as Message);
  }

  getMessages(user_id:number){ 
   this.url = this.base_url+'/'+this.endpoint+'/search/findBySender_IdOrReceiver_Id/?sid='+ this.currentUser+"&rid="+this.currentUser+"&size="+this.size;
   this.url =this.base_url+'/'+this.endpoint+"/?size="+this.size;

   return  this.http.get(this.url).map(res => res.json());
  }

  deleteMessage(id:number){ 
   return  this.http.get(this.base_url+'/'+this.endpoint+'/'+id).map(res => res.json());
  }

}
