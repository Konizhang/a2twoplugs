import { Component, OnInit } from '@angular/core';
import { Routes,Router, RouterModule ,ActivatedRoute} from '@angular/router';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})


export class AppComponent implements OnInit{
  title = 'twopllugs!';
  
  params: any;
  fragment: any;
  islogin:boolean;
  
  private subscription: Subscription;

  id: string;
  logedinheader :string; 

 constructor(private activatedRoute: ActivatedRoute,private router:Router) { 
  //  this.subscription = activatedRoute.fragment.subscribe(
  //     (fragment: any) => this.id = fragment
  //   );

 }


  ngOnInit() {

   this.islogin=false;

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

  login(){
      this.islogin = true;
      this.logedinheader ="logedinheader";
      this.router.navigate(['/profile']);
  }
 

  logout(){

      this.islogin = false;
      this.logedinheader ="";
      this.router.navigate(['/landing']);
   
  }
}
