import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuJefaturaComponent } from './menu-jefatura.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { HorarioComponent } from './horario/horario.component';

const routes: Routes = [
  { path: '', component: MenuJefaturaComponent },  // Ruta base del menú de Jefatura
  { path: 'buscar-producto', component: BuscarProductoComponent },  // Ruta para la lista de productos
  { path: 'horario', component: HorarioComponent }  // Ruta para el horario
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuJefaturaRoutingModule {}
