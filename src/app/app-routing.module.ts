import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthTokenGuard } from "./auth/guards/auth-token.guard";
import { HomeGuard } from "./auth/guards/home.guard";
import { BienvenidaComponent } from "./shared/bienvenida/bienvenida.component";
import { HomeComponent } from "./shared/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    // pathMatch: 'full',
    canActivate: [AuthTokenGuard],
    // canLoad: [AuthTokenGuard],
    // canActivateChild: [AuthTokenGuard],
    children: [
      {
        path: "",
        component: BienvenidaComponent,
      },
      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      },
      {
        path: "user",
        loadChildren: () =>
          import("./aspirante/aspirante.module").then((m) => m.AspiranteModule),
      },
      {
        path: "empresa",
        loadChildren: () =>
          import("./empresa/empresa.module").then((m) => m.EmpresaModule),
      },
    ],
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
    canActivate: [HomeGuard],
    // canLoad: [HomeGuard],
  },
  {
    path: "**",
    redirectTo: "auth",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
