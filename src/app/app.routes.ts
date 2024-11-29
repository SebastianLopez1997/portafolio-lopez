import { Routes } from '@angular/router';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { AboutMePageComponent } from './aboutMe/pages/about-me-page/about-me-page.component';
import { ContactFormPageComponent } from './contact/pages/contact-form-page/contact-form-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'contactform',
    component: ContactFormPageComponent,
  },
  { path: 'aboutMe', component: AboutMePageComponent },
  { path: 'proyectos', component: ProyectosComponent },
  {
    path: '**',
    redirectTo: 'home',
  },
];
