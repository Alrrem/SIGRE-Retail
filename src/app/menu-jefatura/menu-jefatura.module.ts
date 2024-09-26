import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MenuJefaturaComponent } from './menu-jefatura.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { HorarioComponent } from './horario/horario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: MenuJefaturaComponent },
      { path: 'buscar-producto', component: BuscarProductoComponent },
      { path: 'horario', component: HorarioComponent }
    ])
  ],
  declarations: [
    MenuJefaturaComponent,
    BuscarProductoComponent,
    HorarioComponent
  ]
})
export class MenuJefaturaModule {}
