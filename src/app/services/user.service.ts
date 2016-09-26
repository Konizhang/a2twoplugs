import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { BaseService}  from '../services/BaseService';
import { Http, Headers }  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService extends BaseService{

  endpoint : String = "users";

  service  : User ;

  constructor(private http : Http) { 
    super();
  }

  getUser(id:number){ 
    return  this.http.get(this.base_url+'/'+this.endpoint+'/'+id).map(res => res.json());
  }

  createUser(user :User){
    const body =JSON.stringify(user);
    return this.http.post(this.base_url + this.endpoint,body,{'headers':this.headers});
  }


}
