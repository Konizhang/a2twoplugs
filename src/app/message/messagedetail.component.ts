import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../model/message';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messagedetail',
  templateUrl: 'messagedetail.component.html',
  styles: []
})
export class MessagedetailComponent implements OnInit {
  id:  string ;
  message : Message;
 
  constructor( private messageService:MessageService,
                private router:ActivatedRoute) { }

  ngOnInit() {
      this.router.params.map(params =>params['id'])
        .subscribe((id) =>{
         this.messageService.getMessage(id).subscribe(
           message =>{
             this.message = message;
             console.log(message);
           }
         )
     })
  }

}
