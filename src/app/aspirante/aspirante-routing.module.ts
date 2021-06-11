import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "curriculum"

  },
  {
    path: "academico",
    loadChildren: () =>
      import("./academico/academico.module").then((m) => m.AcademicoModule),
  },
  {
    path: "datos",
    loadChildren: () =>
      import("./datos/datos.module").then((m) => m.DatosModule),
  },
  {
    path: "examen",
    loadChildren: () =>
      import("./examen-postulante/examen-postulante.module").then(
        (m) => m.ExamenPostulanteModule
      ),
  },
  {
    path: "experiencia",
    loadChildren: () =>
      import("./experiencia/experiencia.module").then(
        (m) => m.ExperienciaModule
      ),
  },
  {
    path: "idioma",
    loadChildren: () =>
      import("./idiomas/idiomas.module").then((m) => m.IdiomasModule),
  },
  {
    path: "puestos",
    loadChildren: () =>
      import("./puestos-trabajo/puestos-trabajo.module").then(
        (m) => m.PuestosTrabajoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AspiranteRoutingModule {}
