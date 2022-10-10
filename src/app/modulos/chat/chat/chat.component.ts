import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ChatService } from 'src/app/servicios/chat.service';
import { AuthService } from  '../../../servicios/auth.service'
import { Mensaje } from 'src/app/clases/mensaje';
=======
/* import { Mensaje } from '../../../clases/mensaje';
import { AuthService } from '../../../servicios/auth.service';
import { MensajeService } from '../../../servicios/mensaje.service'; */
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

<<<<<<< HEAD
  remitente: string = '';
  destinatario: string = '';//el usuario Actual, depende de si estoy mandando o recibiendo mensajes
  fecha: string = '';
  hora: string = '';
  
  mensaje: string = '';
  mensajeEnviar: string = '';

  mensajes: Array<any> = [];

  constructor(private msjSrv: ChatService) { } //private authSrv: AuthService
=======
  ngOnInit(): void {}
  
  /* remitente: string = '';
  destinatario: string = '';//el usuario Actual, depende de si estoy mandando o recibiendo mensajes
  fecha: string = '';
  hora: string = '';
  //mensajes?:Mensaje;
  mensaje: string = '';
  mensajeEnviar: string = '';
  mensajes: Array<any> = [];

  constructor(private msjSrv: MensajeService, private authSrv: AuthService) { }
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be

  ngOnInit(): void {
    this.mostrarRecientes();
  }

<<<<<<< HEAD


=======
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be
  mostrarRecientes() {
    this.msjSrv.traerMensajes().subscribe((data) => {

      this.mensajes = data;
      this.mensajes.sort();
 
      console.log(data);
    });
<<<<<<< HEAD
  }


  mandarMensaje() {
    try {
      let datoUsuario = JSON.parse(localStorage.getItem('user'));
      let email = datoUsuario.email;
      if (this.mensajeEnviar != '' && this.mensajeEnviar != null && this.mensajeEnviar) {
        let mensaje: Mensaje = new Mensaje(email, this.mensajeEnviar, this.horario());
        this.msjSrv.nuevoMensaje(mensaje).then((res) => {
          this.mensajeEnviar = '';
        }).catch((err) => {
          console.log(err);
        });
      }

    } catch (error) {
      console.log(error);
    }
  }

=======
  }

  mandarMensaje() {
    try {
      let email = this.authSrv.getCurrentUserLS().email;
      if (this.mensajeEnviar != '' && this.mensajeEnviar != null && this.mensajeEnviar) {
        let mensaje: Mensaje = new Mensaje(email, this.mensajeEnviar, this.horario());
        this.msjSrv.nuevoMensaje(mensaje).then((res) => {
          this.mensajeEnviar = '';
        }).catch((err) => {
          console.log(err);
        });
      }

    } catch (error) {
      console.log(error);
    }
  }

>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be
  horario(): string {
    let date: Date = new Date();
    let fecha: string = date.getDate().toString() + '-' + date.getMonth().toString() + '-' + date.getFullYear().toString()
      + ' ' + date.getHours().toString() + ':' + date.getMinutes().toString();
    return fecha;
<<<<<<< HEAD
  } 

=======
  }
 */
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be
}
