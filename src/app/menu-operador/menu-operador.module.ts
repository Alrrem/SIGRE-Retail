import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MenuOperadorComponent } from './menu-operador.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { HorarioComponent } from './horario/horario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: MenuOperadorComponent },
      { path: 'buscar-producto', component: BuscarProductoComponent },
      { path: 'horario', component: HorarioComponent }
    ])
  ],
  declarations: [
    MenuOperadorComponent,
    BuscarProductoComponent,
    HorarioComponent
  ]
})
export class MenuOperadorModule {}
