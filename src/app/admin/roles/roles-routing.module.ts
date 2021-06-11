import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ListarComponent,
      },
      {
        path: "agregar",
        component: AgregarComponent,
      },
      {
        path: "editar/:id",
        component: AgregarComponent,
      },
      {
        path: "**",
        redirectTo: "",
      },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
