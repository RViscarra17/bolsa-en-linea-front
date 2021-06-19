import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AspiranteRoutingModule } from './aspirante-routing.module';
import { CurriculumComponent } from './curriculum/curriculum/curriculum.component';
import { TablaComponent } from './datos/pages/tabla/tabla.component';
import { DatosModule } from './datos/datos.module';



@NgModule({
  declarations: [
    CurriculumComponent,
  ],
  imports: [
    CommonModule,
    AspiranteRoutingModule,
    DatosModule
  ]
})
export class AspiranteModule { }
