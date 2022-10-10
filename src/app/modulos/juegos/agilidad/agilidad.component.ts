import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from 'src/app/clases/juego';
import { JuegoService } from '../../../servicios/juego.service';

@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.css']
})
export class AgilidadComponent implements OnInit {

  numero: number = 1;
  vamos: boolean = false;
  name: string = '';
  puntos: number = 0;
  vidas: number = 4;
  vidasTotal: number = 4;
  win: boolean = false;
  lose: boolean = false;
  mensajeFinal: string = '';
  mensajeWin: string = '';
  mensajeLose: string = '';
  smsFinal: boolean = false;
  emailConectado: string;

  //imagenes
  imgBandera: any;
  banderaPortugesa_1: any; // ¿Cómo se dice Papa en Portugés?
  banderaPortugesa_2: any; // ¿Cómo se dice Vaca en Portugés?
  banderaItaliana_1: any; // ¿Cómo se dice Tomates en Italiano?
  banderaItaliana_2: any; // ¿Cómo se dice Cerdo en Italiano?
  banderaInglesa_1: any; // ¿Cómo se dice Gato en Ingles?
  banderaInglesa_2: any; // ¿Cómo se dice Choclo en Ingles?

  /**pregunta */
  hacerPregunta!: string;
  rta!: string;

  /**bonotnes */
  boton_1!: string;
  boton_2!: string;
  boton_3!: string;
  boton_4!: string;

  //**PREGUNTAS */

  //formato       0 numero de pregunta 
  //              1 ->pregunta  
  //              2 al 5 -> opciones
  //              6 -> indice de la respuesta correcta

  pregunta_01: string[] = ['1', '¿Cómo se dice Papa en Portugés?', 'dad', 'papa', 'papá', 'papai', '5'];
  pregunta_02: string[] = ['2', '¿Cómo se dice Vaca en Portugés?', 'cow', 'mucca', 'vaca', 'vache', '4'];
  pregunta_03: string[] = ['3', '¿Cómo se dice Cerdo en Italiano?', 'tomatoes', 'pomodori', 'tomates', 'tomates', '3'];
  pregunta_04: string[] = ['4', '¿Cómo se dice Tomates en Italiano?', 'maiale', 'porc', 'pork', 'porco', '2'];
  pregunta_05: string[] = ['5', '¿Cómo se dice Choclo en Ingles?', 'chat', 'gato','cat', 'gatto', '4'];
  pregunta_06: string[] = ['6', '¿Cómo se dice Gato en Ingles?', 'mail', 'mais', 'milho', 'corn', '5'];

  constructor(
    //private apiPokemon: PokemonService,
    public  _unJuego: JuegoService,
    private rutas: Router ) {
          
    this.banderaPortugesa_1 = "../../../../assets/juegos/propio/portugal_3.jpg";
    this.banderaPortugesa_2 = "../../../../assets/juegos/propio/portugal_3.jpg";
    this.banderaItaliana_1 = "../../../../assets/juegos/propio/Italiana_3.jpg";
    this.banderaItaliana_2 = "../../../../assets/juegos/propio/Italiana_3.jpg";
    this.banderaInglesa_1 = "../../../../assets/juegos/propio/Inglesa_3.jpg";
    this.banderaInglesa_2 = "../../../../assets/juegos/propio/Inglesa_3.jpg";
    
    this.emailConectado = this.obtener_localstorage();
           
  }

  ngOnInit(): void {
  }
  
  obtener_localstorage(){
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    //console.log(datoUsuario);
    return datoUsuario.email;
  }

  Iniciar()
  {
      this.vamos = true;

      // this.hacerPregunta = this.pregunta_01[1];
      // this.boton_1 = this.pregunta_01[2];
      // this.boton_2 = this.pregunta_01[3];
      // this.boton_3 = this.pregunta_01[4];
      // this.boton_4 = this.pregunta_01[5];

      // this.imgBandera = this.banderaPortugesa_1;

      // this.rta = this.pregunta_01[6];
         
      this.SiguienteRonda(this.numero);

      console.log("inicio: rta -> ", this.rta);
  } 

  SiguienteRonda(numero: number){

    console.log(this.numero);

    if(this.numero == parseInt(this.pregunta_01[0]))
    {
      this.hacerPregunta = this.pregunta_01[1];
      this.boton_1 = this.pregunta_01[2];
      this.boton_2 = this.pregunta_01[3];
      this.boton_3 = this.pregunta_01[4];
      this.boton_4 = this.pregunta_01[5];

      this.imgBandera = this.banderaPortugesa_1;
      
      this.rta = this.pregunta_01[6];
      //console.log("rta del if -> "); console.log(this.rta);
      
      //this.numero++;    
    }

    console.log('pregunta: ' , parseInt(this.pregunta_02[0]));
    console.log('numero: ' , this.numero);
    if(this.numero == parseInt(this.pregunta_02[0]))
    {
      this.imgBandera = this.banderaPortugesa_2;

      this.hacerPregunta = this.pregunta_02[1];
      this.boton_1 = this.pregunta_02[2];
      this.boton_2 = this.pregunta_02[3];
      this.boton_3 = this.pregunta_02[4];
      this.boton_4 = this.pregunta_02[5];

      this.rta = this.pregunta_02[6];
      //console.log("rta del if -> "); console.log(this.rta);
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_03[0]))
    {
      this.imgBandera = this.banderaItaliana_1;
      
      this.hacerPregunta = this.pregunta_03[1];
      this.boton_1 = this.pregunta_03[2];
      this.boton_2 = this.pregunta_03[3];
      this.boton_3 = this.pregunta_03[4];
      this.boton_4 = this.pregunta_03[5];

      this.rta = this.pregunta_03[6];  
      //console.log("rta del if -> "); console.log(this.rta);  
      
      //this.numero++;      
    }
    if(this.numero == parseInt(this.pregunta_04[0]))
    {
      this.imgBandera = this.banderaItaliana_2;

      this.hacerPregunta = this.pregunta_04[1];
      this.boton_1 = this.pregunta_04[2];
      this.boton_2 = this.pregunta_04[3];
      this.boton_3 = this.pregunta_04[4];
      this.boton_4 = this.pregunta_04[5];

      this.rta = this.pregunta_04[6];
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_05[0]))
    {
      this.imgBandera = this.banderaInglesa_1;

      this.hacerPregunta = this.pregunta_05[1];
      this.boton_1 = this.pregunta_05[2];
      this.boton_2 = this.pregunta_05[3];
      this.boton_3 = this.pregunta_05[4];
      this.boton_4 = this.pregunta_05[5];

      this.rta = this.pregunta_05[6];
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_06[0]))
    {
      this.imgBandera = this.banderaInglesa_2;

      this.hacerPregunta = this.pregunta_06[1];
      this.boton_1 = this.pregunta_06[2];
      this.boton_2 = this.pregunta_06[3];
      this.boton_3 = this.pregunta_06[4];
      this.boton_4 = this.pregunta_06[5];

      this.rta = this.pregunta_06[6];
      //console.log("rta del if -> "); console.log(this.rta);
    } 
  }

  Control(boton: number){

    if(boton == parseInt(this.rta) && this.vidas>0 && this.puntos < 3){
      this.mensajeWin = 'Correcto!';
      this.win = true;
      this.lose = false;
      this.numero++;  
      this.puntos++;
      this.SiguienteRonda(this.numero);
    }
    else if(boton != parseInt(this.rta) && this.vidas>0 && this.puntos < 3){
            this.mensajeLose = 'Incorrencto!';
            this.win = false;
            this.lose = true;
            this.rta = '';
            this.numero++;  
            this.vidas--;  
            this.SiguienteRonda(this.numero);
    }

    if(this.puntos === 3){
      
      //Gardar Jugada Ver si va aca
      //this.res.agregarResultado('Win', 'Preguntados');

      this.mensajeFinal = 'GANASTE!!!';
      this.rta = '';
      this.smsFinal = true;
      this.win = false;
      this.lose = false;
    }


    if(this.vidas === 0){

      //Guardar jugada ver si va aca
      //this.res.agregarResultado('Lose', 'Preguntados');

      this.mensajeFinal = 'Fin del juego!!!';
      this.rta = '';
      this.smsFinal = true;
      this.win = false;
      this.lose = false;
    }  
  }

  Repetir(){
    this.numero = 1;
    this.vidas = 4;
    this.puntos = 0;
    this.win = false;
    this.lose = false;
    this.smsFinal = false;
    this.rta = '';

    this.Iniciar();
  }

  salirGame(){
    let date = new Date();
    let fechaActual = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

    const puntajeJuego: Juego = {
      uemailJuego: this.emailConectado,
      nombreJuego: 'Cómo se escribe',
      puntajeJuego: this.puntos.toString(),
      fechaJuego: fechaActual
    }
    this._unJuego.crearJuego(puntajeJuego);
    this.rutas.navigate(['juegos/menujuegos']);
  }

}
