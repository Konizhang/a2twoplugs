import { Injectable } from '@angular/core';
import { Service } from '../model/services';
import { BaseService}  from '../services/BaseService';
import { Http, Headers }  from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ServiceService extends BaseService{

  endpoint : String = "services";

  service  : Service ;

  constructor(private http : Http) {
      super();
  }

  getService(id:number){ 
   return  this.http.get(this.base_url+'/'+this.endpoint+'/'+id).map(res => res.json() as Service);
  }

  createService(service :Service){
    const body =JSON.stringify(service);
    return this.http.post(this.base_url + this.endpoint,body,{'headers':this.headers});
  }

  deleteService(id:number){}
  getServicesByUserid(id:number){
      return  this.http.get(this.base_url+'/'+this.endpoint+'/search/getByUserId?user_id='+id).map(res => res.json() as Service[]);
  }
}
