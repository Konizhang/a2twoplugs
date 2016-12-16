import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Routes, Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../model/User';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: 'test.component.html',

})
export class TestComponent implements OnInit {
  public viewContainerRef: ViewContainerRef;
  public loginUser: User;
  logedinheader: String;
  islogin: boolean;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authservice: AuthService) {

  }

  ngOnInit() {
    this.loginUser = { username: 'koni', password: '1234567a' }
  }

  login(f) {
    this.authservice.signinUser(this.loginUser);
    this.islogin = true;
    this.logedinheader = "logedinheader";
    this.router.navigate(['/service']);

  }
  public alerts: Array<Object> = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.',
      closable: true
    },
     {
      type: 'danger',
      msg: 'Well done! You 111successfully read this important alert message.',
      closable: true,
      dismissOnTimeout: 3000 
    }
  ];

  public closeAlert(i: number): void {
    this.alerts.splice(i, 1);
  }

  public addAlert(): void {
    this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true, dismissOnTimeout: 3000 });
  }

}
