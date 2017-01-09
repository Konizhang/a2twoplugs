import { Injectable } from "@angular/core";
import { Http, Headers,RequestOptions ,RequestMethod,URLSearchParams} from '@angular/http';
import { User } from "../model/user";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  loggedIn = false;
  credentails: String;
  constructor(private http: Http, private router: Router) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }


  signupUser(user: User) {
    // firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  signinUser(user: User) {
    //curl -i localhost:3721/oauth/token -d "grant_type=password&scope=read&username=koni&password=1234567a" -u mobileclient:twoplugs.com
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('scope', 'read');
        urlSearchParams.append('grant_type', 'password');
        urlSearchParams.append('clientId', 'mobileclient');
        urlSearchParams.append('secret', 'twoplugs.com');
        let body = urlSearchParams.toString()
        
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
            headers.append("Authorization", "Basic " + btoa("mobileclient" + ":" + "twoplugs.com")); 
        let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });



        return  this.http.post("http://localhost:3721/oauth/token?username=koni&password=1234567a",body,options).map(res => res.json()); 
  
         //localStorage.setItem('auth_token', "ad3eb8fc-66a6-4cca-ae8a-c7c60f3ffbb8");
  }



  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {

    this.credentails = localStorage.getItem('auth_token');
     
    if (this.credentails !== null) {
      this.loggedIn = true;
    } else {
     
      this.loggedIn = false;
    }
   
    return this.loggedIn ;
  }
}