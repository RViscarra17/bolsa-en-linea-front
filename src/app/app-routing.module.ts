import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   pathMatch: 'full'
  // },
 
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: "home",
    component: HomeComponent,
    children:[
      {
        path: 'admin',
        loadChildren: () => import('./admin/usuarios/usuarios.module').then((m) => m.UsuariosModule)
        
      },
      {
        path: 'user',
        loadChildren: () => import('./aspirante/academico/academico.module').then((m) => m.AcademicoModule)
        
      },
      {
        path: 'empresa',
        loadChildren: () => import('./empresa/perfil-trabajo/perfil-trabajo.module').then((m) => m.PerfilTrabajoModule)
        
      }

    ]
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
