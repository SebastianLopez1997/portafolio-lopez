import { Component } from '@angular/core';
import { HomeComponent } from '../../componnents/home/home.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
