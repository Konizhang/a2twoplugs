import { Component, OnInit } from '@angular/core';
import { Routes,Router, RouterModule ,ActivatedRoute} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../model/User';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

public  loginUser : User;
  logedinheader:String;
  islogin:boolean;
  
 constructor(private activatedRoute: ActivatedRoute,private router:Router,private authservice:AuthService) { 
   
 }

  ngOnInit() {
    this.loginUser = { username: 'koni',  password: '1234567a'}
  }

   login(f){
      this.authservice.signinUser(this.loginUser);
      this.islogin = true;
      this.logedinheader ="logedinheader";
     // this.router.navigate(['/service']);
      console.log(f);
  }
 
}
