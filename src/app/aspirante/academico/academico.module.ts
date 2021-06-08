import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicoRoutingModule } from './academico-routing.module';
import { PruebaComponent } from './pages/prueba/prueba.component';


@NgModule({
  declarations: [
    PruebaComponent
  ],
  imports: [
    CommonModule,
    AcademicoRoutingModule
  ]
})
export class AcademicoModule { }
