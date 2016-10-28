import { Headers } from  "@angular/http";

export class BaseService {
   base_url : string = "http://localhost:3721/apk/v1";
   headers : Headers = new Headers({
     'Content-Type':'application/json'  
   }); 


   currentUser : Number  = 15;
   constructor() { }
  
}