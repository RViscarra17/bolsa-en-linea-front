import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { ListarComponent } from './pages/listar/listar.component';


@NgModule({
  declarations: [
    PruebaComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
