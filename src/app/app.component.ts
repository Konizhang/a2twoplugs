import { Component, OnInit } from '@angular/core';
import { Routes,Router, RouterModule ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})


export class AppComponent implements OnInit{
  title = 'twopllugs!';
  
  params: any;
  fragment: any;

 constructor(private activatedRoute: ActivatedRoute) { }


  ngOnInit() {



  // this.activatedRoute.url.map(params =>params)
  // .subscribe(params => {
  //   this.params = params;
  //   console.log(params);
  // })

   this.activatedRoute.fragment.map(fragment =>fragment)
  .subscribe(fragment => {
    this.fragment = fragment;
    console.log(fragment);
  })

    //console.log(location.pathname);

  }


}
