import { Component } from '@angular/core';
import { ProjectInterface } from '../../../interfaces/project-interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: ProjectInterface[] = [
    {
      url: 'assets/img/logo-electronica.jpg',
      alt: 'Logo Electronica importada mdq',
      titulo: 'e-commerce',
      descripcion:
        'e-commerce funcional a pedido por un cliente. Cuenta con base de datos para clientes y productos',
      tecnologias: 'Wordpress',
      urlVisita: 'https://electronicaimportadamdq.com/',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png',
      alt: 'Logo GitHub',
      titulo: 'Landing page',
      descripcion:
        'Landing page realizada para una influencer y artista en tik-tok y youtube.',
      tecnologias: 'HTML, CSS Y JAVASCRIPT',
      urlVisita: 'https://github.com/SebastianLopez1997/Cande-LandingPage',
    },
    {
      url: 'https://acdn.mitiendanube.com/stores/001/216/412/products/photoroom-20240828_175815_48-e6178c027c212865b117261621663002-640-0.png',
      alt: 'Logotico forumula 1',
      titulo: 'Juego web F1',
      descripcion:
        'Proyecto para finalizacion cuatrimestre UTN Juego web utilizando Angular 18. Consumo de API',
      tecnologias: 'Angular Cli',
      urlVisita: 'https://github.com/SebastianLopez1997/F1-GAME',
    },
  ];
}
