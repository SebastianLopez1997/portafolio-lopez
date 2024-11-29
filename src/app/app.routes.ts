import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { AboutMePageComponent } from './aboutMe/pages/about-me-page/about-me-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'contactform',
    component: FormPageComponent,
  },
  { path: 'aboutMe', component: AboutMePageComponent },
  { path: 'proyectos', component: ProyectosComponent },
  {
    path: '**',
    redirectTo: 'home',
  },
];
