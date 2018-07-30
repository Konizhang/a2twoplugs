import { Http, Headers } from  "@angular/http";

export class BaseService {

   base_url : string = "http://localhost:8088/api/v1";
   currentUser : number  = 15;
   constructor() { }

}
