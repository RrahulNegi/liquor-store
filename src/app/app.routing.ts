import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }     from './components/login/login.component';
import { RegisterComponent }     from './components/register/register.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';

const app_routes: Routes = [
  { path: '', component: ShoppingCartComponent },
  { path: 'shop', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
  
];

export const app_routing = RouterModule.forRoot(app_routes);