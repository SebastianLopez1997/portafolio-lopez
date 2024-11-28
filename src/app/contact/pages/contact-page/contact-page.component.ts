import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  
}
