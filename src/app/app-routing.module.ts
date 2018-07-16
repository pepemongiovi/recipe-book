import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './core/_guards/auth.guard';
import {LoginComponent} from './login/login.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';



const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register', loadChildren: './user-registration/user-registration.module#UserRegistrationModule'},
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: false})],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
