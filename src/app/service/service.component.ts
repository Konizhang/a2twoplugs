import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Service } from '../model/services';
import { Profile } from '../model/profile';

@Component({
  selector: 'app-service',
  templateUrl: 'service.component.html'
})
export class ServiceComponent implements OnInit {

  constructor(private serviceService :ServiceService) { }

  services : Service[] = [];
  //profile : Profile = ;

  ngOnInit() {

     this.serviceService.getServicesByUserid(15)
        .subscribe(
          services => {
            this.services = services;
            console.log(services)
        })
    }

   createServce(service : Service){
     this.serviceService.createService(service)
         .subscribe(
          res => {console.log(res); },
          error => {console.log(error); }
        )
   }

}
