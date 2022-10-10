import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestasRoutingModule } from './encuestas-routing.module';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EncuestaListadoComponent } from './encuesta-listado/encuesta-listado.component';


@NgModule({
  declarations: [
    EncuestaComponent,
    EncuestaListadoComponent
  ],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EncuestasModule { }
