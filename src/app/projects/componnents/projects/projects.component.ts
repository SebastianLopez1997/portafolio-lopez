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
      url: 'https://scontent.fmdq3-1.fna.fbcdn.net/v/t39.30808-6/313404547_486146933540953_1923914148916342522_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGuvpYuXfIcIqLXwEIHvaQ0mMAsZQR7PtOYwCxlBHs-02vRlpebIphenQIXbwOsbKE&_nc_ohc=0_zEvULk56EQ7kNvgGT32lv&_nc_zt=23&_nc_ht=scontent.fmdq3-1.fna&_nc_gid=ACx2EAea0d9ej9yY-_pt-Q4&oh=00_AYABnOkCoqofpj8QbA9sJ7Z68dtgRgUlDJYYm_ZYSO9tQg&oe=67499956',
      alt: 'Logo Electronica importada mdq',
      titulo: 'e-commerce',
      descripcion: 'e-commere funcional a pedido por un cliente. Cuenta con base de datos para clientes y productos',
      tecnologias: 'Wordpress',
      urlVisita: 'https://electronicaimportadamdq.com/',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png',
      alt: 'Logo GitHub',
      titulo: 'Landing page',
      descripcion: 'Landing page realizada para una influenser y artista en tik-tok y youtube.',
      tecnologias: 'HTML, CSS Y JAVASCRIPT',
      urlVisita: 'https://github.com/SebastianLopez1997/Cande-LandingPage',
    },
    {
      url: 'https://acdn.mitiendanube.com/stores/001/216/412/products/photoroom-20240828_175815_48-e6178c027c212865b117261621663002-640-0.png',
      alt: 'Logotico forumula 1',
      titulo: 'Juego web F1',
      descripcion: 'Proyecto para finalizacion cuatrimestre UTN Juego web utilizando Angular 18. Consumo de API',
      tecnologias: 'Angular Cli',
      urlVisita: 'https://github.com/SebastianLopez1997/F1-GAME',
    },
  ];
}
