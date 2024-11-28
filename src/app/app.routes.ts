import { Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ContactPageComponent } from './contact/pages/contact-page/contact-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ProjectPageComponent } from './projects/pages/project-page/project-page.component';

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
    component: ContactPageComponent,
  },
  { path: 'qualities', component: SkillsComponent },
  { path: 'proyectos', component: ProjectPageComponent },
  {
    path: '**',
    redirectTo: 'home',
  },
];
