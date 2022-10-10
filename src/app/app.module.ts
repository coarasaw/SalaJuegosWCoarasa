import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
<<<<<<< HEAD
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

=======
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be
import { environment } from 'src/environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Componentes Propios
import { ModulosModule } from './modulos/modulos.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulosModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    //AngularFirestoreModule,

    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
