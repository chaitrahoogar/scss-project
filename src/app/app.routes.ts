import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {ComponentRepositoryComponent} from "./component-repository/component-repository.component";
import {LogInComponent} from "./login/login.component";
import {PasswordresetComponent} from "./passwordreset/passwordreset.component";
import {ManagerComponent} from "./manager/manager.component";
import {LeadComponent} from "./lead/lead.component";

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: '',redirectTo:'home',pathMatch: 'full',
  },

   {
    path: 'home',component: HomeComponent,
  },
 {
    path: 'register',component: RegisterComponent,
  },
   {
    path: 'login',component: LogInComponent,
  },
 
  {
    path: 'componentrepo',component: ComponentRepositoryComponent,
  },
  {
    path: 'pwdreset',component: PasswordresetComponent,
  },
  {
    path: 'manager',component: ManagerComponent,
  },
  {
    path: 'lead',component: LeadComponent,
  },

   
];

export const appRouterModule = RouterModule.forRoot(routes);