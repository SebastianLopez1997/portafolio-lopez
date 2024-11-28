import { Component } from '@angular/core';
import { Skill } from './interfaces/skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  array: Skill[] = [
    {
      url: 'https://raw.githubusercontent.com/SebastianLopez1997/certificados/refs/heads/main/Certificados/63372e633d74de000ef04328%20(1).png',
      alt: 'Certificado 1 desarrollo web',
    },
    {
      url: 'https://raw.githubusercontent.com/SebastianLopez1997/certificados/refs/heads/main/Certificados/638cc322be450c000f682a63.png',
      alt: 'Certificado 2 JavaScript',
    },
    {
      url: 'https://raw.githubusercontent.com/SebastianLopez1997/certificados/refs/heads/main/Certificados/65cd51d00ca0fd8bc7539bf9.png',
      alt: 'Certificado 3 Wordpress',
    },
    {
      url: 'https://raw.githubusercontent.com/SebastianLopez1997/certificados/refs/heads/main/Certificados/Certificado-Tester-QA-Manual-Educaci%C3%B3nIT.png',
      alt: 'Certificado 4 QA MANUAL',
    },
    {
      url: 'https://raw.githubusercontent.com/SebastianLopez1997/certificados/refs/heads/main/Certificados/Certificado-Introducci%C3%B3n-a-Bases-de-Datos-y-SQL-Educaci%C3%B3nIT.jpeg',
      alt: 'Certificado 5 SQL',
    },
  ];
}
