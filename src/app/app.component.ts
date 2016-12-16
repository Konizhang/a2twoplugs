import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Routes,Router, RouterModule ,ActivatedRoute} from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { AuthService } from "./services/auth.service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})


export class AppComponent implements OnInit{
  title = 'twopllugs!';
  
  params: any;
  fragment: any;

  
  private subscription: Subscription;

  id: string;
  logedinheader :string; 

 constructor(private activatedRoute: ActivatedRoute,private router:Router,private authservice :AuthService) { 
  //  this.subscription = activatedRoute.fragment.subscribe(
  //     (fragment: any) => this.id = fragment
  //   );
 //localStorage.removeItem('auth_token');
 // You need this small hack in order to catch application root view container ref
  
 }


  ngOnInit() {

  // this.activatedRoute.url.map(params =>params)
  // .subscribe(params => {
  //   this.params = params;
  //   console.log(params);
  // })

  //  this.activatedRoute.fragment.map(fragment =>fragment)
  //   .subscribe(fragment => {
  //     this.fragment = fragment;
  //     console.log(fragment);
  //   })

    //console.log(location.pathname);

  }

 isAuth(){
   
   return this.authservice.isAuthenticated();
 }

  logout(){

      this.authservice.logout();
      this.logedinheader ="";
      this.router.navigate(['/landing']);
   
  }
}
