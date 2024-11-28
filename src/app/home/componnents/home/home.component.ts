import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  route = inject(Router);

  //Funcion para navegar al linkedin desde el boton trabajar

  navegarPerfil() {
    window.open(
      'https://www.linkedin.com/in/sebastian-lopez-422788224/',
      '_blank'
    );
  }
}
