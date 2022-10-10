import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Encuesta } from '../clases/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private _firestore: AngularFirestore) { }

  crearEncuesta(encuesta: Encuesta){
    return this._firestore.collection('encuestas').add(encuesta);
  }

  getListadoEncuesta(): Observable<any>{
    return this._firestore.collection('encuestas').stateChanges();
  }
}
