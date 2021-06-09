import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "buscar",
    loadChildren: () =>
      import("./buscar-aspirante/buscar-aspirante.module").then(
        (m) => m.BuscarAspiranteModule
      ),
  },
  {
    path: 'examen',
    loadChildren: () => import('./examen-empresa/examen-empresa.module').then((m) => m.ExamenEmpresaModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil-trabajo/perfil-trabajo.module').then((m) => m.PerfilTrabajoModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaRoutingModule {}
