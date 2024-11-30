import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasker/login',
    pathMatch: 'full'
  },
  {
    path: 'tasker/login',
    component: LoginComponent
  },
  {
    path: 'tasker/register',
    component: RegisterComponent
  },
  {
    path: 'tasker/app',
    component: MainLayoutComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];