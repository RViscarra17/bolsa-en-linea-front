import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "permisos",
    loadChildren: () =>
      import("./permisos/permisos.module").then((m) => m.PermisosModule),
  },
  {
    path: "roles",
    loadChildren: () =>
      import("./roles/roles.module").then((m) => m.RolesModule),
  },
  {
    path: "usuarios",
    loadChildren: () =>
      import("./usuarios/usuarios.module").then((m) => m.UsuariosModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
