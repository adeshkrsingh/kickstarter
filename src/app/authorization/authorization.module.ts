import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyuserComponent } from './verifyuser/verifyuser.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

@NgModule({
  imports: [
    CommonModule,
    AuthorizationRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, VerifyuserComponent, ForgetpasswordComponent]
})
export class AuthorizationModule { }
