import { Routes, RouterModule } from '@angular/router';


import { LandingComponent } from './landing';
import { AboutComponent } from './about';
import { LoginComponent } from './login';
import { PowerofeedsComponent } from './powerofeeds';
import { SignupComponent } from './signup';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
   {
    path: 'powerofeeds',
    component: PowerofeedsComponent
  }
  
];

export const routing = RouterModule.forRoot(appRoutes);
