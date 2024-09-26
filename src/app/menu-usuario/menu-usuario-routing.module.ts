// src/app/menu-usuario/menu-usuario-routing.module.ts (si existe)
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuUsuarioComponent } from './menu-usuario.component';
import { HorarioTrabajadorComponent } from './horario-trabajador/horario-trabajador.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';  // Importar BuscarProductoComponent

const routes: Routes = [
  { path: '', component: MenuUsuarioComponent },
  { path: 'horario-trabajador', component: HorarioTrabajadorComponent },
  { path: 'buscar-producto', component: BuscarProductoComponent }  // Añadir ruta para productos
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuUsuarioRoutingModule {}
