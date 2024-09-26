import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuOperadorComponent } from './menu-operador.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { HorarioComponent } from './horario/horario.component';

const routes: Routes = [
  { path: '', component: MenuOperadorComponent },  // Ruta base del menú de Operador
  { path: 'buscar-producto', component: BuscarProductoComponent },  // Ruta para la lista de productos
  { path: 'horario', component: HorarioComponent }  // Ruta para el horario
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuOperadorRoutingModule {}
