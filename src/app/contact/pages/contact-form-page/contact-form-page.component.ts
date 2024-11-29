import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormComponent } from '../../componnents/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-form-page',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-form-page.component.html',
  styleUrl: './contact-form-page.component.css'
})
export class ContactFormPageComponent {

}
