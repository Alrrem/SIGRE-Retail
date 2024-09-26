import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'menu-operador', loadChildren: () => import('./menu-operador/menu-operador.module').then(m => m.MenuOperadorModule) },
  { path: 'menu-jefatura', loadChildren: () => import('./menu-jefatura/menu-jefatura.module').then(m => m.MenuJefaturaModule) },
  { path: 'menu-usuario', loadChildren: () => import('./menu-usuario/menu-usuario.module').then(m => m.MenuUsuarioModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
