import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productosService';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  productos: any[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.getProductos().subscribe(
      (data: any) => {
        this.productos = data;
      },
      (error: any) => {
        console.error('Error al cargar productos', error);
      }
    );
  }
}
