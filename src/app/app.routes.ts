import { Routes } from '@angular/router';
import { HomeComponent } from './task/home/home.component';
import { FormPageComponent } from './pages/form-page/form-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },{
    path:'contactform', component: FormPageComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  },
  
];
