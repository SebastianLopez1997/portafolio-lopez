import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  fb = inject(FormBuilder)
  
  formulario = this.fb.nonNullable.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.required,Validators.email]],
    subject: ['',[Validators.required,Validators.minLength(4)]],
    message: ['Hola! me gustaria contratar tus servicios',[Validators.required,Validators.minLength(15)]]
  })
  
  formOk(){
    if(this.formulario.invalid) return
    
  }
}
