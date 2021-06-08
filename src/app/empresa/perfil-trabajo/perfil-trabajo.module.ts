import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilTrabajoRoutingModule } from './perfil-trabajo-routing.module';
import { PruebaComponent } from './pages/prueba/prueba.component';


@NgModule({
  declarations: [
    PruebaComponent
  ],
  imports: [
    CommonModule,
    PerfilTrabajoRoutingModule
  ]
})
export class PerfilTrabajoModule { }
