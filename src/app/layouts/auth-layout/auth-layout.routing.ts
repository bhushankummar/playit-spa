import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ActiveLoginGuard as LoginActiveAuthGuard} from '../../shared/services/active-login.guard';

export const AuthLayoutRoutes: Routes = [
  {path: 'login', canActivate: [LoginActiveAuthGuard], component: LoginComponent},
  {path: 'register', canActivate: [LoginActiveAuthGuard], component: RegisterComponent}
];
