import { Component, OnInit } from '@angular/core';

import { MessageService } from '../services/message.service';
import { Message } from '../model/message';
@Component({
  selector: 'app-message',
  templateUrl: 'message.component.html'
})
export class MessageComponent implements OnInit {

  constructor(private messageService :MessageService) { }
  messages : Message[];
  ischecked :boolean = false;
  total :Number ;
  ngOnInit() {
      this.messageService.getMessages(15).
        subscribe(
          response => {
            console.log(response.page);
            this.total = response.page.totalElements;
            this.messages =response._embedded.messages as Message[];
            });
          
  }

  toggle(){
    this.ischecked =  !this.ischecked
    //alert(this.ischecked);
    return !this.ischecked;
 
  }      
}
