import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile';
import { ProfileService}  from '../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

   id : number ;

   profile : Profile;

  
  constructor(
      private profileservice :ProfileService,
      private router : ActivatedRoute) {
      
   }

  ngOnInit() {
   
    this.router.params
        .map(params =>params['id'])
        .subscribe((id) =>{
          this.profileservice.getProfile(id)
            .subscribe(profile =>{
              this.profile = profile;
            })
        });
  }

}
