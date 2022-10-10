import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { EncuestaListadoComponent } from './encuesta-listado/encuesta-listado.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: EncuestaComponent ,
   // canActivate: [UsuarioLogueadoGuard] 
  },
  { path:'encuestaListado', component: EncuestaListadoComponent,canActivate:[AuthGuard] },
  { path:'encuesta', component: EncuestaComponent , pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestasRoutingModule { }
