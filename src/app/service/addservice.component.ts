import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addservice',
  templateUrl: 'addservice.component.html'
})
export class AddserviceComponent implements OnInit {
  title : string="add";
  
  islogin:boolean;
  
  logedinheader :string; 
  constructor() { }

  ngOnInit() {

     this.islogin = true;
  }

}
