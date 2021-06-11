import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarAspiranteRoutingModule } from './buscar-aspirante-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    BuscarAspiranteRoutingModule
  ]
})
export class BuscarAspiranteModule { }
