import { Component } from '@angular/core';
import { Certificate } from '../../../interfaces/certificate';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  certificates: Certificate[] = [
    {
      urlImg:
        'https://raw.githubusercontent.com/SebastianLopez1997/certificados/refs/heads/main/Certificados/63372e633d74de000ef04328%20(1).png',
      alt: 'Certificado 1 desarrollo web',
    },
    {
      urlImg:
        'https://raw.githubusercontent.com/SebastianLopez1997/certificados/refs/heads/main/Certificados/638cc322be450c000f682a63.png',
      alt: 'Certificado 2 JavaScript',
    },
    {
      urlImg:
        'https://raw.githubusercontent.com/SebastianLopez1997/certificados/refs/heads/main/Certificados/65cd51d00ca0fd8bc7539bf9.png',
      alt: 'Certificado 3 Wordpress',
    },
    {
      urlImg:
        'https://raw.githubusercontent.com/SebastianLopez1997/certificados/refs/heads/main/Certificados/Certificado-Tester-QA-Manual-Educaci%C3%B3nIT.png',
      alt: 'Certificado 4 QA MANUAL',
    },
    {
      urlImg:
        'https://raw.githubusercontent.com/SebastianLopez1997/certificados/refs/heads/main/Certificados/Certificado-Introducci%C3%B3n-a-Bases-de-Datos-y-SQL-Educaci%C3%B3nIT.jpeg',
      alt: 'Certificado 5 SQL',
    },
  ];
}
