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


const appRoutes: Routes = [
  {    path: '',  redirectTo: '/landing',  pathMatch: 'full'  },
  {    path: 'landing',    component: LandingComponent  },
  {    path: 'about',      component: AboutComponent  },
  {    path: 'login',      component: LoginComponent  },
  {    path: 'signup',     component: SignupComponent  },
  {    path: 'powerofeeds',component: PowerofeedsComponent  },
  {    path: 'contact',    component: ContactComponent  },
  {    path: 'service',    component: ServiceComponent  },
  {    path: 'service/add',component: AddserviceComponent  },
  {    path: 'service/:id/edit',component: EditserviceComponent  },
  {    path: 'service/:id',component: ServicedetailsComponent  },
  {    path: 'message',    component: MessageComponent  },
  {    path: 'transaction',component: TransactionComponent  },
  {    path: 'profile/edit',component: EditprofileComponent  },
  {    path: 'profile/:id',component: ProfileComponent  }
];

export const routing = RouterModule.forRoot(appRoutes);
