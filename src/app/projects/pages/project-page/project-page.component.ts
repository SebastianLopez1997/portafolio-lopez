import { Component } from '@angular/core';
import { ProjectComponent } from '../../componnents/project/project.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {

}
