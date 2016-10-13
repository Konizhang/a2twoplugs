import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
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
    // this.user = user;
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    // return this.http
    //   .post('/login',JSON.stringify({user.username,user.password }), 
    //     { headers }
    //   )
    //   .map(res => res.json())
    //   .map((res) => {
    //     if (res.success) {
    //       localStorage.setItem('auth_token', res.auth_token);
    //       this.loggedIn = true;
    //     }

    //     return res.success;
    //   });
  
    localStorage.setItem('auth_token', "P12312312322323123");
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
    console.error(this.loggedIn);
    return this.loggedIn ;
  }
}