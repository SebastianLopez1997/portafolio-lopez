import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  fb = inject(FormBuilder);

  formulario = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(4)]],
    message: [
      'Hola! me gastaría contratar tus servicios',
      [Validators.required, Validators.minLength(15)],
    ],
  });

  formOk() {
    if (this.formulario.invalid) return;
  }
}
