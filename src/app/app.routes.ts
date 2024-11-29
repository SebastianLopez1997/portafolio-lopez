import { Routes } from '@angular/router';
import { AboutMePageComponent } from './aboutMe/pages/about-me-page/about-me-page.component';
import { ContactFormPageComponent } from './contact/pages/contact-form-page/contact-form-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ProjectsPageComponent } from './projects/pages/projects-page/projects-page.component';

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
  { path: 'proyectos', component: ProjectsPageComponent },
  {
    path: '**',
    redirectTo: 'home',
  },
];
