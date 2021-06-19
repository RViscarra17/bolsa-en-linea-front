import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosRoutingModule } from './datos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './pages/tabla/tabla.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListarComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatosRoutingModule

  ],
  exports:[
    TablaComponent
  ]
})
export class DatosModule { }
