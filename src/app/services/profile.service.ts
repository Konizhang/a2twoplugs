import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { BaseService}  from '../services/BaseService';
import { Http, Headers }  from '@angular/http';
import { Observable }  from 'rxjs';


import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService extends BaseService{

  endpoint : String = "profiles";

  profile : Profile ;

  constructor(private http : Http) {
      super();
  }

  getProfile(profile_id:number):Observable<Profile>{ 
   return  this.http.get(this.base_url+'/'+this.endpoint+'/'+profile_id).map(res => 
     res.json() as Profile
     );
  }

///users/15/profile 
getProfileByUser(user_id:number):Observable<Profile>{ 
   return  this.http.get(this.base_url+'/users/'+user_id+'/profile').map(res => res.json() as Profile);
  }



  createProfile(profile :Profile){
    const body =JSON.stringify(profile);
    return this.http.post(this.base_url + this.endpoint,body);
  }

}
