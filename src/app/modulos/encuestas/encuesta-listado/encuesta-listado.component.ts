import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { EncuestaService } from '../../../servicios/encuesta.service';
import { Encuesta } from 'src/app/clases/encuesta';

@Component({
  selector: 'app-encuesta-listado',
  templateUrl: './encuesta-listado.component.html',
  styleUrls: ['./encuesta-listado.component.css']
})
export class EncuestaListadoComponent implements OnInit, OnDestroy {

  suscriptionUser: Subscription = new Subscription();
  suscriptionList: Subscription = new Subscription();
  listEncuesta: Encuesta[]=[];
  loading = false;

  constructor(private afAuth: AngularFireAuth,
              private _encuestaServive: EncuestaService) { }

  ngOnInit(): void {
    this.loading = true;
    this.suscriptionUser = this.afAuth.user.subscribe(user => {
      //console.log(user);
      this.getEncueta();

      //Esto es para que este Logeado
      /* if (user && user.emailVerified) {
        // cargar listado
      } else {
        this.router.navigate(['/auth/login'])
      } */
    })
  }

  ngOnDestroy(): void {
    this.suscriptionUser.unsubscribe();
    this.suscriptionList.unsubscribe();
  }

  getEncueta(){
    this.suscriptionList == this._encuestaServive.getListadoEncuesta().subscribe(data =>{
      //console.log(data);
      this.listEncuesta = [];
      this.loading = false;
      data.forEach((element:any) => {
        this.listEncuesta.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
      });
      //console.log(this.listJuegos);
    })
  }

}
