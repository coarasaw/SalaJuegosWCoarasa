import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
<<<<<<< HEAD
import { AngularFireAuth  } from '@angular/fire/auth';
=======
import { AngularFireAuth  } from '@angular/fire/compat/auth';
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

/* @Injectable({
  providedIn: 'root'
})
 */
@Injectable()

export class AuthService {
  constructor(
    private afAuth: AngularFireAuth
    ) {}
 
    public async registerUser(email:string, clave:string):Promise<any>{
           const resultado= await this.afAuth.createUserWithEmailAndPassword(email, clave);
           return resultado;
    }

    public async loginUser(email:string, clave:string):Promise<any>{
      const resultado =  this.afAuth.signInWithEmailAndPassword(email, clave);
 
     return  resultado;
    }

    public async LogOut(){
      localStorage.removeItem('usuario_juegos');
      this.afAuth.signOut();
      //actualizar el firebase
    }

    getCurrentUserFirebase(): Observable<any>{
        return this.afAuth.authState;
    }
<<<<<<< HEAD

    getCurrentUserLS(): any{
      const userJson = localStorage.getItem('user');  
       if(userJson != null  ){
         return JSON.parse(userJson); 
       }else{
         return null;
       }
    }

=======

    getCurrentUserLS(): any{
      const userJson = localStorage.getItem('usuario_juegos');  
       if(userJson != null  ){
         return JSON.parse(userJson); 
       }else{
         return null;
       }
    }
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be
}
