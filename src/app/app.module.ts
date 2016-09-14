import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { AddServiceComponent } from './add-service/add-service.component';
import { ServicedetailsComponent } from './service/servicedetails.component';
import { AddserviceComponent } from './service/addservice.component';
import { ErrorComponent } from './error/error.component';
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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [ServiceService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
