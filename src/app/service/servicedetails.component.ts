import { Component, OnInit } from '@angular/core';
import { Service } from '../model/services';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-servicedetails',
  templateUrl: 'servicedetails.component.html',
})

export class ServicedetailsComponent implements OnInit {
  islogin : boolean;
  service :Service;
  id:  string ;
  constructor(
    private serviceService:ServiceService,
    private router:ActivatedRoute
    
 ) { }

  ngOnInit() {
    this.islogin = false;
    this.router.params.map(params =>params['id'])
        .subscribe((id) =>{
         this.serviceService.getService(id).subscribe(
           service =>{
             this.service = service;
           }
         )
     })

  }

}
