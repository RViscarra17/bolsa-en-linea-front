import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PruebaComponent } from "./pages/prueba/prueba.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: PruebaComponent,
      },
      {
        path: "**",
        redirectTo: "",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
