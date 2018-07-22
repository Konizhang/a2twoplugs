import { Component, OnInit } from '@angular/core';

import { MessageService } from '../services/message.service';
import { Message } from '../model/message';


@Component({
  selector: 'app-message',
  templateUrl: 'message.component.html'
})
export class MessageComponent implements OnInit {

  constructor(private messageService :MessageService) { }
  
  messages : Message[]= [];
  ischecked :boolean = false;
  total :Number = 0 ;

  readMessage : Message[] = [];
  unreadMessage : Message[]= [];
  sendedMessage : Message[]= [];

  ngOnInit() {
      this.messageService.getMessages(this.messageService.currentUser).
        subscribe(
          messages => {
            this.messages = messages;
            messages.forEach( message =>{
             console.log(message.isRead );
                if(message.isRead== false ){
                   console.log("is_read", message.isRead);
                  this.unreadMessage.push(message);
                   this.total = this.unreadMessage.length;
                   console.log("unreadMessage", this.unreadMessage);
                  
                }
                if(message.sender.id == this.messageService.currentUser){
                 this.sendedMessage.push(message);
                   console.log("sendedMessage", this.sendedMessage);
                }else{
                  this.readMessage.push(message);
                  console.log("messages", this.sendedMessage);
               }
        });


        }
   
   
   );
          
  }

  toggle(){
    this.ischecked =  !this.ischecked
    //alert(this.ischecked);
    return !this.ischecked;
 
  }      
}
