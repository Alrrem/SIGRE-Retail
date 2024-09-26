// src/app/menu-operador/menu-operador.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu-operador',
  templateUrl: './menu-operador.component.html',
})
export class MenuOperadorComponent implements OnInit {
  dataForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.fb.group({
      productName: [''],
      quantity: [null]
    });
  }

  // Función actualizada para recibir el productId
  updateProduct(productId: number) {
    console.log(`Producto con ID ${productId} actualizado.`);
    // Aquí puedes agregar más lógica según lo que desees hacer con los productos
  }
}
