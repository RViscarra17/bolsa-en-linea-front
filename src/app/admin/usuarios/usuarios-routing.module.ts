import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
        path: "prueba",
        component: PruebaComponent,
      },
      {
        path: "**",
        redirectTo: "prueba",
      },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
