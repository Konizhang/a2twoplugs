import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PowerofeedsComponent } from './powerofeeds/powerofeeds.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { routing }        from './app.routing';
import { HttpModule, XHRBackend } from '@angular/http';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { FrontheaderComponent } from './frontheader/frontheader.component';
import { FrontfooterComponent } from './frontfooter/frontfooter.component';
import { ServiceComponent } from './service/service.component';

import { ServiceService } from './services/service.service';
import { ProfileService } from './services/profile.service';
import { UserService } from './services/user.service';
import { GuardService } from './services/guard.service';
import { AuthService } from './services/auth.service';

import { AddServiceComponent } from './add-service/add-service.component';
import { ServicedetailsComponent } from './service/servicedetails.component';
import { AddserviceComponent } from './service/addservice.component';
import { ErrorComponent } from './error/error.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';
import { EditprofileComponent } from './profile/editprofile.component';
import { EditserviceComponent } from './service/editservice.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PowerofeedsComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    FrontheaderComponent,
    FrontfooterComponent,
    ServiceComponent,
    AddServiceComponent,
    ServicedetailsComponent,
    AddserviceComponent,
    ErrorComponent,
    TransactionComponent,
    ProfileComponent,
    MessageComponent,
    EditprofileComponent,
    EditserviceComponent
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    HttpModule,
    ReactiveFormsModule
    
  ],
  providers: [ServiceService,ProfileService,UserService,AuthService,GuardService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
