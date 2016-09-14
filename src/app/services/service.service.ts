import { Injectable } from '@angular/core';
import { Service } from '../model/services';
@Injectable()
export class ServiceService {

   base_url : string = " ";


  constructor() { }

 
  getService(id:number){  }

  getAllserviceByUserID(id:number){}

  postService(service :Service){}

  deleteService(id:number){}

}
