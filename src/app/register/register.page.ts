// src/app/register/register.page.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../app/services/authentication.service';  // Asegúrate de que la ruta de importación es correcta

@Component({
  selector: 'app-register-page',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService  // Servicio de autenticación que llamará la API
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      idEmpleado: ['', [Validators.required, Validators.pattern("^[0-9]+-[0-9kK]{1}$")]], // Regex para validar RUT
      nombreEmpleado: ['', Validators.required],
      emailEmpleado: ['', [Validators.required, Validators.email]],
      cargo: ['']
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.authenticationService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Usuario registrado con éxito', response);
          // Redirección o manejo post-registro
        },
        error: (error) => {
          console.error('Error al registrar el usuario', error);
        }
      });
    }
  }
}
