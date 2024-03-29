import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthLayoutRoutes} from './auth-layout.routing';
import {LoginComponent} from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';

// import {LoginComponent} from '../../pages/login/login.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthLayoutModule {}
