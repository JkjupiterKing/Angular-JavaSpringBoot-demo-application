import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

export const routes: Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
   {path:'dashboard',component: DashboardComponent},
 {path:'forgot-password',component:ForgotPasswordComponent},
 {path:'dashboard1',component: Dashboard1Component}
];
