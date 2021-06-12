import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { RolesRoutingModule } from 'src/app/admin/roles/roles-routing.module';


@NgModule({
  declarations: [
    AgregarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    RolesRoutingModule

  ]
})
export class InformacionModule { }
