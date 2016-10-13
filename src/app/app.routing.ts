import { Routes, RouterModule } from '@angular/router';


import { LandingComponent } from './landing';
import { AboutComponent } from './about';
import { LoginComponent } from './login';
import { PowerofeedsComponent } from './powerofeeds';
import { SignupComponent } from './signup';
import { ContactComponent } from './contact';
import { ServiceComponent,ServicedetailsComponent, AddserviceComponent, EditserviceComponent } from './service';
import { ProfileComponent,EditprofileComponent } from './profile';
import { MessageComponent } from './message';
import { TransactionComponent } from './transaction';
import { GuardService } from "./services/guard.service";

const appRoutes: Routes = [
  {    path: '',  redirectTo: '/landing',  pathMatch: 'full'  },
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
  {    path: 'message',    component: MessageComponent , canActivate: [GuardService] },
  {    path: 'transaction',component: TransactionComponent  , canActivate: [GuardService]},
  {    path: 'profile/edit',component: EditprofileComponent  , canActivate: [GuardService]},
  {    path: 'profile/:id',component: ProfileComponent , canActivate: [GuardService] }
];

export const routing = RouterModule.forRoot(appRoutes);
