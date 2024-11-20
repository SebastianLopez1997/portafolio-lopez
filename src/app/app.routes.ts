import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

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
  { path: 'qualities', component: SkillsComponent },
  { path: 'proyectos', component: ProyectosComponent },
  {
    path: '**',
    redirectTo: 'home',
  },
];
