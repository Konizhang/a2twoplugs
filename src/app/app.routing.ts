import { InboxComponent } from './message/inbox.component';
import { SendmessageComponent } from './message/sendmessage.component';
import { Routes, RouterModule } from '@angular/router';


import { LandingComponent } from './landing';
import { AboutComponent } from './about';
import { LoginComponent } from './login';
import { PowerofeedsComponent } from './powerofeeds';
import { SignupComponent } from './signup';
import { ContactComponent } from './contact';
import { ServiceComponent,ServicedetailsComponent, AddserviceComponent, EditserviceComponent } from './service';
import { ProfileComponent,EditprofileComponent } from './profile';

import { MessageComponent, MessagedetailComponent } from './message';
import { TransactionComponent } from './transaction';
import { GuardService } from "./services/guard.service";

const appRoutes: Routes = [

  {    path: 'landing',    component: LandingComponent  },
  {    path: 'about',      component: AboutComponent  },
  {    path: 'login',      component: LoginComponent  },
  {    path: 'signup',     component: SignupComponent  },
  {    path: 'powerofeeds',component: PowerofeedsComponent  },
  {    path: 'contact',    component: ContactComponent  },
  {    path: 'service',    component: ServiceComponent , canActivate: [GuardService] },
  {    path: 'service/add',component: AddserviceComponent , canActivate: [GuardService] },
  {    path: 'service/:id/edit',component: EditserviceComponent  , canActivate: [GuardService]},
  {    path: 'service/:id',component: ServicedetailsComponent , canActivate: [GuardService] },
  {    path: 'messages',    component: MessageComponent , canActivate: [GuardService] ,
      children: [
      { path: 'inbox', component: InboxComponent },
      { path: 'sendmessage', component: SendmessageComponent },
      { path: 'details/:id', component: MessagedetailComponent },
      //{ path: '', redirectTo: '/messages',  component: MessageComponent  , canActivate: [GuardService] }, 
    ]
  },
  { path: 'messages:id',component: MessagedetailComponent , canActivate: [GuardService]},
  {    path: 'transaction',component: TransactionComponent  , canActivate: [GuardService]},
  {    path: 'profile/edit',component: EditprofileComponent  , canActivate: [GuardService]},
  {    path: 'profile/:id',component: ProfileComponent , canActivate: [GuardService] },

 // {    path: '',  redirectTo: '/landing',  pathMatch: 'full'  },
];

export const routing = RouterModule.forRoot(appRoutes);
