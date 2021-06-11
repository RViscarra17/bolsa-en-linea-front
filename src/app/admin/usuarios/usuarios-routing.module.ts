import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarComponent } from "./pages/editar/editar.component";
import { ListarComponent } from "./pages/listar/listar.component";
import { PruebaComponent } from "./pages/prueba/prueba.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ListarComponent,
      },
      {
        path: "editar/:id",
        component: EditarComponent,
      },
      {
        path: "prueba",
        component: PruebaComponent,
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
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
