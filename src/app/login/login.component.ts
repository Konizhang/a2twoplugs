import { Component, OnInit } from '@angular/core';
import { Routes,Router, RouterModule ,ActivatedRoute} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../model/User';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginUser : User;
  logedinheader:String;
  islogin:boolean;
   constructor(private activatedRoute: ActivatedRoute,private router:Router,private authservice:AuthService) { 
  
 }

  ngOnInit() {
  }


   login(){

      this.loginUser  = new User();
      this.loginUser.username="koni";
      this.loginUser.username="password";
      this.authservice.signinUser(this.loginUser);
      this.islogin = true;
      this.logedinheader ="logedinheader";
      this.router.navigate(['/service']);
      
  }
 
}
