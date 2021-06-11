import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilTrabajoRoutingModule } from './perfil-trabajo-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    PerfilTrabajoRoutingModule
  ]
})
export class PerfilTrabajoModule { }
