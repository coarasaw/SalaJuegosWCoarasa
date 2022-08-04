import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './modulos/error/error.component';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { QuienSoyComponent } from './modulos/quien-soy/quien-soy.component';

const routes: Routes = [
  { path: 'auth', 
         loadChildren: () => import('./modulos/auth/auth.module')
         .then(m => m.AuthModule)
  },
  { 
    path: 'juegos',
        loadChildren: () => import('./modulos/juegos/juegos.module')
        .then(m => m.JuegosModule)
  },
  { path: 'inicio', component: InicioComponent },
  { path: 'quiensoy', component: QuienSoyComponent },
  { path:'', redirectTo:'auth',pathMatch:'full' },
  { path:'**', component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
