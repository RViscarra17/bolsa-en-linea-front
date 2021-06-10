import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarComponent } from "./pages/listar/listar.component";
import { PruebaComponent } from "./pages/prueba/prueba.component";

const routes: Routes = [
  {
  /*   path: "",
    children: [
      {
        path: "prueba",
        component: PruebaComponent,
      },
      {
        path: "**",
        redirectTo: "prueba",
      },
    ], */
    path:"prueba",
    component: PruebaComponent
  },
  {
    path:"",
    component: ListarComponent
  },
  {
    path:"**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
