import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // pathMatch: 'full',
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./aspirante/aspirante.module').then((m) => m.AspiranteModule)
      },
      {
        path: 'empresa',
        loadChildren: () => import('./empresa/empresa.module').then((m) => m.EmpresaModule)
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
