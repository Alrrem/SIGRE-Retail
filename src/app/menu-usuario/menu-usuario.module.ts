// src/app/menu-usuario/menu-usuario.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuUsuarioComponent } from './menu-usuario.component';
import { HorarioTrabajadorComponent } from './horario-trabajador/horario-trabajador.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';  // Importa el nuevo componente

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MenuUsuarioComponent
      },
      {
        path: 'horario-trabajador',
        component: HorarioTrabajadorComponent
      },
      {
        path: 'buscar-producto',  // Añade la ruta para buscar producto
        component: BuscarProductoComponent
      }
    ])
  ],
  declarations: [
    MenuUsuarioComponent,
    HorarioTrabajadorComponent,
    BuscarProductoComponent  // Declara el nuevo componente
  ]
})
export class MenuUsuarioModule { }
