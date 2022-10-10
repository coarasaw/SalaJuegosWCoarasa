(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-juegos-juegos-module"],{

/***/ "7Mlx":
/*!*********************************************************!*\
  !*** ./src/app/modulos/juegos/juegos-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: JuegosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosRoutingModule", function() { return JuegosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agilidad_agilidad_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agilidad/agilidad.component */ "Pb0U");
/* harmony import */ var _ahorcado_ahorcado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ahorcado/ahorcado.component */ "vUIU");
/* harmony import */ var _mayoromenor_mayoromenor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mayoromenor/mayoromenor.component */ "q6a+");
/* harmony import */ var _menujuegos_menujuegos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menujuegos/menujuegos.component */ "eDzV");
/* harmony import */ var _preguntados_preguntados_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preguntados/preguntados.component */ "hm+U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: 'menujuegos', component: _menujuegos_menujuegos_component__WEBPACK_IMPORTED_MODULE_4__["MenujuegosComponent"] },
    { path: 'ahorcado', component: _ahorcado_ahorcado_component__WEBPACK_IMPORTED_MODULE_2__["AhorcadoComponent"] },
    { path: 'agilidad', component: _agilidad_agilidad_component__WEBPACK_IMPORTED_MODULE_1__["AgilidadComponent"] },
    { path: 'mayoromenor', component: _mayoromenor_mayoromenor_component__WEBPACK_IMPORTED_MODULE_3__["MayoromenorComponent"] },
    { path: 'preguntados', component: _preguntados_preguntados_component__WEBPACK_IMPORTED_MODULE_5__["PreguntadosComponent"] },
    { path: '', redirectTo: 'menujuegos', pathMatch: 'full' }
];
class JuegosRoutingModule {
}
JuegosRoutingModule.ɵfac = function JuegosRoutingModule_Factory(t) { return new (t || JuegosRoutingModule)(); };
JuegosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: JuegosRoutingModule });
JuegosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](JuegosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "GHrk":
/*!*************************************************!*\
  !*** ./src/app/modulos/juegos/juegos.module.ts ***!
  \*************************************************/
/*! exports provided: JuegosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosModule", function() { return JuegosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _juegos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./juegos-routing.module */ "7Mlx");
/* harmony import */ var _menujuegos_menujuegos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menujuegos/menujuegos.component */ "eDzV");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _ahorcado_ahorcado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ahorcado/ahorcado.component */ "vUIU");
/* harmony import */ var _mayoromenor_mayoromenor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mayoromenor/mayoromenor.component */ "q6a+");
/* harmony import */ var _preguntados_preguntados_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preguntados/preguntados.component */ "hm+U");
/* harmony import */ var _agilidad_agilidad_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agilidad/agilidad.component */ "Pb0U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class JuegosModule {
}
JuegosModule.ɵfac = function JuegosModule_Factory(t) { return new (t || JuegosModule)(); };
JuegosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: JuegosModule });
JuegosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _juegos_routing_module__WEBPACK_IMPORTED_MODULE_1__["JuegosRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](JuegosModule, { declarations: [_menujuegos_menujuegos_component__WEBPACK_IMPORTED_MODULE_2__["MenujuegosComponent"],
        _ahorcado_ahorcado_component__WEBPACK_IMPORTED_MODULE_4__["AhorcadoComponent"],
        _mayoromenor_mayoromenor_component__WEBPACK_IMPORTED_MODULE_5__["MayoromenorComponent"],
        _preguntados_preguntados_component__WEBPACK_IMPORTED_MODULE_6__["PreguntadosComponent"],
        _agilidad_agilidad_component__WEBPACK_IMPORTED_MODULE_7__["AgilidadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _juegos_routing_module__WEBPACK_IMPORTED_MODULE_1__["JuegosRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "Pb0U":
/*!***************************************************************!*\
  !*** ./src/app/modulos/juegos/agilidad/agilidad.component.ts ***!
  \***************************************************************/
/*! exports provided: AgilidadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadComponent", function() { return AgilidadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
<<<<<<< HEAD
/* harmony import */ var _servicios_juego_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/juego.service */ "ply9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/menu-gral/menu-gral.component */ "wgSj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pie-gral/pie-gral.component */ "XXWZ");






function AgilidadComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgilidadComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.Iniciar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Iniciar Juego");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgilidadComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imgBandera, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AgilidadComponent_h3_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.hacerPregunta);
} }
function AgilidadComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.mensajeWin);
} }
function AgilidadComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.mensajeLose);
} }
function AgilidadComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.mensajeFinal);
} }
function AgilidadComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgilidadComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.Control(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.boton_1, "");
} }
function AgilidadComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgilidadComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.Control(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.boton_2, "");
} }
function AgilidadComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgilidadComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.Control(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.boton_3, "");
} }
function AgilidadComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgilidadComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.Control(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.boton_4, "");
} }
function AgilidadComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgilidadComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.Repetir(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Otro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgilidadComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgilidadComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.salirGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Salir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AgilidadComponent {
    constructor(
    //private apiPokemon: PokemonService,
    _unJuego, rutas) {
        this._unJuego = _unJuego;
        this.rutas = rutas;
        this.numero = 1;
        this.vamos = false;
        this.name = '';
        this.puntos = 0;
        this.vidas = 4;
        this.vidasTotal = 4;
        this.win = false;
        this.lose = false;
        this.mensajeFinal = '';
        this.mensajeWin = '';
        this.mensajeLose = '';
        this.smsFinal = false;
        //**PREGUNTAS */
        //formato       0 numero de pregunta 
        //              1 ->pregunta  
        //              2 al 5 -> opciones
        //              6 -> indice de la respuesta correcta
        this.pregunta_01 = ['1', '¿Cómo se dice Papa en Portugés?', 'dad', 'papa', 'papa', 'papai', '5'];
        this.pregunta_02 = ['2', '¿Cómo se dice Vaca en Portugés?', 'cow', 'mucca', 'vaca', 'vache', '4'];
        this.pregunta_03 = ['3', '¿Cómo se dice Cerdo en Italiano?', 'tomatoes', 'pomodori', 'tomates', 'tomates', '3'];
        this.pregunta_04 = ['4', '¿Cómo se dice Tomates en Italiano?', 'maiale', 'porc', 'pork', 'porco', '2'];
        this.pregunta_05 = ['5', '¿Cómo se dice Choclo en Ingles?', 'chat', 'gato', 'cat', 'gatto', '4'];
        this.pregunta_06 = ['6', '¿Cómo se dice Gato en Ingles?', 'mail', 'mais', 'milho', 'corn', '5'];
        this.banderaPortugesa_1 = "../../../../assets/juegos/propio/portugal_1.jpg";
        this.banderaPortugesa_2 = "../../../../assets/juegos/propio/portugal_2.jpg";
        this.banderaItaliana_1 = "../../../../assets/juegos/propio/Italiana_1.jpg";
        this.banderaItaliana_2 = "../../../../assets/juegos/propio/Italiana_2.jpg";
        this.banderaInglesa_1 = "../../../../assets/juegos/propio/Inglesa_1.jpg";
        this.banderaInglesa_2 = "../../../../assets/juegos/propio/Inglesa_2.jpg";
        this.emailConectado = this.obtener_localstorage();
    }
    ngOnInit() {
    }
    obtener_localstorage() {
        let datoUsuario = JSON.parse(localStorage.getItem('user'));
        //console.log(datoUsuario);
        return datoUsuario.email;
    }
    Iniciar() {
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
    SiguienteRonda(numero) {
        console.log(this.numero);
        if (this.numero == parseInt(this.pregunta_01[0])) {
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
        console.log('pregunta: ', parseInt(this.pregunta_02[0]));
        console.log('numero: ', this.numero);
        if (this.numero == parseInt(this.pregunta_02[0])) {
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
        if (this.numero == parseInt(this.pregunta_03[0])) {
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
        if (this.numero == parseInt(this.pregunta_04[0])) {
            this.imgBandera = this.banderaItaliana_2;
            this.hacerPregunta = this.pregunta_04[1];
            this.boton_1 = this.pregunta_04[2];
            this.boton_2 = this.pregunta_04[3];
            this.boton_3 = this.pregunta_04[4];
            this.boton_4 = this.pregunta_04[5];
            this.rta = this.pregunta_04[6];
            //this.numero++;    
        }
        if (this.numero == parseInt(this.pregunta_05[0])) {
            this.imgBandera = this.banderaInglesa_1;
            this.hacerPregunta = this.pregunta_05[1];
            this.boton_1 = this.pregunta_05[2];
            this.boton_2 = this.pregunta_05[3];
            this.boton_3 = this.pregunta_05[4];
            this.boton_4 = this.pregunta_05[5];
            this.rta = this.pregunta_05[6];
            //this.numero++;    
        }
        if (this.numero == parseInt(this.pregunta_06[0])) {
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
    Control(boton) {
        if (boton == parseInt(this.rta) && this.vidas > 0 && this.puntos < 3) {
            this.mensajeWin = 'Correcto!';
            this.win = true;
            this.lose = false;
            this.numero++;
            this.puntos++;
            this.SiguienteRonda(this.numero);
        }
        else if (boton != parseInt(this.rta) && this.vidas > 0 && this.puntos < 3) {
            this.mensajeLose = 'Incorrencto!';
            this.win = false;
            this.lose = true;
            this.rta = '';
            this.numero++;
            this.vidas--;
            this.SiguienteRonda(this.numero);
        }
        if (this.puntos === 3) {
            //Gardar Jugada Ver si va aca
            //this.res.agregarResultado('Win', 'Preguntados');
            this.mensajeFinal = 'GANASTE!!!';
            this.rta = '';
            this.smsFinal = true;
            this.win = false;
            this.lose = false;
        }
        if (this.vidas === 0) {
            //Guardar jugada ver si va aca
            //this.res.agregarResultado('Lose', 'Preguntados');
            this.mensajeFinal = 'Fin del juego!!!';
            this.rta = '';
            this.smsFinal = true;
            this.win = false;
            this.lose = false;
        }
    }
    Repetir() {
        this.numero = 1;
        this.vidas = 4;
        this.puntos = 0;
        this.win = false;
        this.lose = false;
        this.smsFinal = false;
        this.rta = '';
        this.Iniciar();
    }
    salirGame() {
        let date = new Date();
        let fechaActual = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
        const puntajeJuego = {
            uemailJuego: this.emailConectado,
            nombreJuego: 'Cómo se escribe',
            puntajeJuego: this.puntos.toString(),
            fechaJuego: fechaActual
        };
        this._unJuego.crearJuego(puntajeJuego);
        this.rutas.navigate(['juegos/menujuegos']);
    }
}
AgilidadComponent.ɵfac = function AgilidadComponent_Factory(t) { return new (t || AgilidadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_juego_service__WEBPACK_IMPORTED_MODULE_1__["JuegoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AgilidadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgilidadComponent, selectors: [["app-agilidad"]], decls: 26, vars: 15, consts: [[1, "container"], [1, "row"], [1, "col-sm-3"], ["type", "button", "class", "col btn", 3, "click", 4, "ngIf"], ["width", "255px", "height", "100px", 3, "src", 4, "ngIf"], [4, "ngIf"], ["class", "mensaje win", 4, "ngIf"], ["class", "mensaje lose", 4, "ngIf"], [1, "col-sm-5"], [1, "counter"], ["type", "submit", "class", "col btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "col", "btn", 3, "click"], ["width", "255px", "height", "100px", 3, "src"], [1, "mensaje", "win"], [1, "mensaje", "lose"], ["type", "submit", 1, "col", "btn", 3, "click"], [1, "fas", "fa-undo"]], template: function AgilidadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-gral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pregunta:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AgilidadComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AgilidadComponent_img_7_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AgilidadComponent_h3_8_Template, 2, 1, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AgilidadComponent_div_9_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AgilidadComponent_div_10_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AgilidadComponent_div_11_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AgilidadComponent_button_19_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AgilidadComponent_button_20_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AgilidadComponent_button_21_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AgilidadComponent_button_22_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AgilidadComponent_button_23_Template, 3, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AgilidadComponent_button_24_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-pie-gral");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal && ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal && ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lose);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smsFinal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Puntos: ", ctx.puntos, "/3 - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Vidas: ", ctx.vidas, "/", ctx.vidasTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal && ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal && ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal && ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal && ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smsFinal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smsFinal);
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_3__["MenuGralComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_5__["PieGralComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background-image: url('blur.png');\r\n    background-size: 99% auto;\r\n    background-position: center top;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.img__container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    margin-bottom: .5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{\r\n    color: rgb(123, 29, 29);\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{\r\n    color: rgb(123, 29, 29);\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .h1Plabra[_ngcontent-%COMP%]{\r\n    color: rgb(123, 29, 29);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .letters[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    padding: .3rem .6rem;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .mensaje[_ngcontent-%COMP%]{\r\n    border: 1px solid #666;\r\n    font-size: 2rem;\r\n    padding: 1rem 2rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-weight: 900;\r\n    border-radius: .5rem;\r\n    background-color: rgb(201, 30, 64);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    padding: .6rem 1.2rem;\r\n    background-color: rgb(14, 129, 104);\r\n    margin: .3rem .6rem;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    color: #fff;\r\n    filter: drop-shadow(0px 0px 2px#666);\r\n    font-weight: 400;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .botones_resultados[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 1.5rem;\r\n    display: flex;\r\n    padding: 1rem 2rem;\r\n    text-align: center;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    filter: drop-shadow(0px 1px 2px #666);\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    color: #fff;\r\n    background-color:rgb(123, 29, 29);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnaWxpZGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBZ0U7SUFDaEUseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0NBQWtDO0FBQ3RDOztBQUlBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxpQ0FBaUM7QUFDckMiLCJmaWxlIjoiYWdpbGlkYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9qdWVnb3MvcHJvcGlvL2JsdXIucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOTklIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmltZ19fY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuICBcclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuZGl2IC5tZXNzYWdle1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gIH1cclxuXHJcbiAgZGl2IC5jb3VudGVye1xyXG4gICAgY29sb3I6IHJnYigxMjMsIDI5LCAyOSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgZGl2IC5jb3VudGVye1xyXG4gICAgY29sb3I6IHJnYigxMjMsIDI5LCAyOSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbmRpdiAuaDFQbGFicmF7XHJcbiAgICBjb2xvcjogcmdiKDEyMywgMjksIDI5KTtcclxufVxyXG5cclxuZGl2IC5sZXR0ZXJze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC4zcmVtIC42cmVtO1xyXG59XHJcblxyXG5kaXYgLm1lbnNhamV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAzMCwgNjQpO1xyXG59XHJcblxyXG5cclxuXHJcbmRpdiBidXR0b257XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAuNnJlbSAxLjJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDEyOSwgMTA0KTtcclxuICAgIG1hcmdpbjogLjNyZW0gLjZyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAycHgjNjY2KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmRpdiAuYm90b25lc19yZXN1bHRhZG9ze1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMnB4ICM2NjYpO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMjMsIDI5LCAyOSk7XHJcbn0iXX0= */"] });
=======

class AgilidadComponent {
    constructor() { }
    ngOnInit() {
    }
}
AgilidadComponent.ɵfac = function AgilidadComponent_Factory(t) { return new (t || AgilidadComponent)(); };
AgilidadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgilidadComponent, selectors: [["app-agilidad"]], decls: 2, vars: 0, template: function AgilidadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "agilidad works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2lsaWRhZC5jb21wb25lbnQuY3NzIn0= */"] });
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be


/***/ }),

/***/ "QLo0":
/*!**********************************************!*\
  !*** ./src/app/servicios/pokemon.service.ts ***!
  \**********************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PokemonService {
    constructor(http) {
        this.http = http;
        this.url = "https://pokeapi.co/api/v2/pokemon";
    }
    getPokemon(name) {
        return this.http.get(`${this.url}/${name}`);
    }
}
PokemonService.ɵfac = function PokemonService_Factory(t) { return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PokemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonService, factory: PokemonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eDzV":
/*!*******************************************************************!*\
  !*** ./src/app/modulos/juegos/menujuegos/menujuegos.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenujuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenujuegosComponent", function() { return MenujuegosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/menu-gral/menu-gral.component */ "wgSj");
/* harmony import */ var _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pie-gral/pie-gral.component */ "XXWZ");




class MenujuegosComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    Juego(tipo) {
        switch (tipo) {
            case 'Ahorcado':
                this.router.navigate(['/juegos/ahorcado']);
                break;
            case 'Agilidad':
                this.router.navigate(['/juegos/agilidad']);
                break;
            /* case 'AgilidadaMasListado':
            this.router.navigate(['/Juegos/AgilidadaMasListado']);
            break; */
            case 'MayorOMenor':
                this.router.navigate(['/juegos/mayoromenor']);
                break;
            case 'Preguntados':
                this.router.navigate(['/juegos/preguntados']);
                break;
        }
    }
}
MenujuegosComponent.ɵfac = function MenujuegosComponent_Factory(t) { return new (t || MenujuegosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenujuegosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenujuegosComponent, selectors: [["app-menujuegos"]], decls: 54, vars: 0, consts: [[1, "container"], [1, "card"], ["src", "./assets/juegos/Juego_idiomas.jpg", "alt", "Avatar", 1, "img-thumbnail"], [1, "contenido"], [1, "title"], [1, "card-body"], [1, "btn", "btn-default", "btn-primary", 3, "click"], ["src", "./assets/juegos/Ahorcado.jpg", "alt", "Avatar", 1, "img-thumbnail"], ["src", "./assets/juegos/Juego_mayor_menor.png", "alt", "Avatar", 1, "img-thumbnail"], ["src", "./assets/juegos/Preguntados.jpg", "alt", "Avatar", 1, "img-thumbnail"]], template: function MenujuegosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-gral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Jugando como se escribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " El jugador elije el idioma con el que quiere jugar. Luego selecciona entre Colores, N\u00FAmeros, Animales; que desea saber como se escribe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenujuegosComponent_Template_button_click_13_listener() { return ctx.Juego("Agilidad"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Juego de ahorcado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Es un juego de adivinanzas de l\u00E1piz y papel originalmente, trata de adivinarla seg\u00FAn lo que sugiere por letras o dentro de un cierto n\u00FAmero de oportunidades. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenujuegosComponent_Template_button_click_25_listener() { return ctx.Juego("Ahorcado"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Juego de mayor o menor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Los participantes sentados en c\u00EDrculo, se le pregunta a la primera persona si cree que la siguiente carta que saldr\u00E1 ser\u00E1 menor, mayor o igual al n\u00FAmero de la que ya est\u00E1 abierta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenujuegosComponent_Template_button_click_37_listener() { return ctx.Juego("MayorOMenor"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Juego de preguntados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Es un juego tipo trivial donde deber\u00E1s responder el m\u00E1ximo de preguntas de forma correcta antes de que se acabe el tiempo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenujuegosComponent_Template_button_click_51_listener() { return ctx.Juego("Preguntados"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-pie-gral");
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_2__["MenuGralComponent"], _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_3__["PieGralComponent"]], styles: ["*[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  \r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: 100 vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: sans-serif;\r\n  }\r\n  \r\n  \r\n  \r\n  .container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    max-width: 1100px;\r\n    background: #ffb347;    \r\n    background: linear-gradient(to right, #ffcc33, #ffb347); \r\n\r\n    background-size: 100% auto;\r\n    background-position: center top;\r\n    background-repeat: no-repeat;\r\n    \r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 20px;\r\n    border-radius: 6px;\r\n    overflow: hidden;\r\n    background: #fff;\r\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2) ;\r\n    cursor: default;\r\n    transition: all 40ms ease;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);\r\n    transform: translateY(-3%);\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 210px;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    line-height: 1.5;\r\n    color: #6a6a6a;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-weight: 400;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    color: #2fb4cc;\r\n    border: 1px solid #2fb4cc;\r\n    border-radius: 4px;\r\n    transition: all 40ms ease;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnVqdWVnb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOztFQUVBLHNEQUFzRDs7RUFDdEQscUdBQXFHOztFQUNyRyxpSUFBaUk7O0VBRWpJOzs7O2lCQUllOztFQUVoQix3REFBd0Q7O0VBQ3ZELG9HQUFvRzs7RUFDcEc7Ozs7OztJQU1FOztFQUVKOzs7Z0RBR2dEOztFQUM1Qzs7Ozs7Ozs7S0FRQzs7RUFFSCw4RUFBOEU7O0VBQzlFOzs7O01BSUk7O0VBRUosK0NBQStDOztFQUMvQzs7S0FFRzs7RUFHSDs7Ozs7OztLQU9HOztFQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFvQjhCOztFQUMzQjs7Ozs7Ozs7Ozs7Ozs7SUFjQTs7RUFFRDtJQUNDLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztFQUVBLGtCQUFrQjs7RUFDbEI7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBQ0EsT0FBTzs7RUFDUDtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQixHQUFHLDhCQUE4QixHQUNjLCtCQUErQjtJQUNqRyx1REFBdUQsRUFBRSxxRUFBcUU7O0lBRTlILDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSwyQ0FBMkM7SUFDM0MsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCIiwiZmlsZSI6Im1lbnVqdWVnb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jb250ZWluZXJ7XHJcbiAqL1xyXG4gIFxyXG4gIC8qYmFja2dyb3VuZDogIzhFMEUwMDsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAvKiBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxRjFDMTgsICM4RTBFMDApOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxRjFDMTgsICM4RTBFMDApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG4gIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogOTB2aDsgKi9cclxuICBcclxuIC8qICBiYWNrZ3JvdW5kOiAjNjQ0MUE1OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gIC8qIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmEwODQ1LCAjNjQ0MUE1KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmEwODQ1LCAjNjQ0MUE1KTsgXHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG59ICAqL1xyXG5cclxuLyogLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogNXB4IHJvdW5kZWQgY29ybmVycyAqL1xyXG4gICAgLyogbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBkZDI4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9ICovIFxyXG4gIFxyXG4gIC8qIEFkZCByb3VuZGVkIGNvcm5lcnMgdG8gdGhlIHRvcCBsZWZ0IGFuZCB0aGUgdG9wIHJpZ2h0IGNvcm5lciBvZiB0aGUgaW1hZ2UgKi9cclxuICAvKiBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH0gICovXHJcbiAgXHJcbiAgLyogQWRkIHNvbWUgcGFkZGluZyBpbnNpZGUgdGhlIGNhcmQgY29udGFpbmVyICovXHJcbiAgLyogLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICB9ICovXHJcbiAgXHJcbiBcclxuICAvKiAuYnRuLXByaW1hcnkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgXHJcbiAgfSAqL1xyXG4gIFxyXG4gLyogIC5idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgOXB4ICM5OTk7XHJcbiAgXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIFxyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDsqL1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcclxuICB9XHJcbiAgICovXHJcblxyXG4gICAqIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIC8qIGNvZGlnbyBvcGNpb2wgKi9cclxuICBib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IDEwMCB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLyotLS0tKi9cclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZiMzQ3OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmNjMzMsICNmZmIzNDcpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmY2MzMywgI2ZmYjM0Nyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLypoZWlnaHQ6IDcwdmg7ICovXHJcbiAgfVxyXG5cclxuICAuY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpIDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIHRyYW5zaXRpb246IGFsbCA0MG1zIGVhc2U7XHJcbiAgfVxyXG5cclxuICAuY2FyZDpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMlKTtcclxuICB9XHJcblxyXG4gIC5jYXJkIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMTBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIC5jb250ZW5pZG97XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgLmNvbnRlbmlkbyBwe1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgLmNvbnRlbmlkbyBoM3tcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgLmNvbnRlbmlkbyBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogIzJmYjRjYztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZmI0Y2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNDBtcyBlYXNlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "hm+U":
/*!*********************************************************************!*\
  !*** ./src/app/modulos/juegos/preguntados/preguntados.component.ts ***!
  \*********************************************************************/
/*! exports provided: PreguntadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntadosComponent", function() { return PreguntadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/pokemon.service */ "QLo0");
/* harmony import */ var _servicios_juego_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/juego.service */ "ply9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/menu-gral/menu-gral.component */ "wgSj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pie-gral/pie-gral.component */ "XXWZ");







function PreguntadosComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreguntadosComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.Iniciar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Iniciar Juego");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PreguntadosComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imgPokemon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PreguntadosComponent_h3_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.hacerPregunta);
} }
function PreguntadosComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.mensajeWin);
} }
function PreguntadosComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.mensajeLose);
} }
function PreguntadosComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.mensajeFinal);
} }
function PreguntadosComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreguntadosComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.Control(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.boton_1, "");
} }
function PreguntadosComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreguntadosComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.Control(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.boton_2, "");
} }
function PreguntadosComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreguntadosComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.Control(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.boton_3, "");
} }
function PreguntadosComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreguntadosComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.Control(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.boton_4, "");
} }
function PreguntadosComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreguntadosComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.Repetir(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Otro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PreguntadosComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreguntadosComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.salirGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Salir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PreguntadosComponent {
    constructor(apiPokemon, _unJuego, rutas) {
        this.apiPokemon = apiPokemon;
        this._unJuego = _unJuego;
        this.rutas = rutas;
        this.numero = 1;
        this.vamos = false;
        this.name = '';
        this.puntos = 0;
        this.vidas = 4;
        this.vidasTotal = 4;
        this.win = false;
        this.lose = false;
        this.mensajeFinal = '';
        this.mensajeWin = '';
        this.mensajeLose = '';
        this.smsFinal = false;
        //**PREGUNTAS */
        //formato       0 numero de pregunta 
        //              1 ->pregunta  
        //              2 al 5 -> opciones
        //              6 -> indice de la respuesta correcta
<<<<<<< HEAD
        this.pregunta_01 = ['1', '¿Cuál es la habilidad de Charizard?', 'Correr', 'Salto de rana', 'Blaze', 'Vuela alto', '4'];
        this.pregunta_02 = ['2', '¿Cómo se llama este Pokemon?', 'Gofy', 'Poliwag', 'Blastoise', 'Caterpie', '3'];
        this.pregunta_03 = ['3', '¿Cuál es la habilidad de Mew?', 'Pisar fuerte', 'Rayos', 'Magia', 'Sincronia', '5'];
        this.pregunta_04 = ['4', '¿Cuál es la evolucion de Gastly?', 'En Atun', 'A Vaca voladora', 'A Topo', 'A Genar', '5'];
        this.pregunta_05 = ['5', '¿Cuál es la evolucion de Pikachu?', 'Charizard', 'Miki', 'Mew', 'Pichu', '5'];
        this.pregunta_06 = ['6', '¿Qué habilidad tiene bulbasaur?', 'Rebota mucho', 'Espesura', 'Elastico', 'Gases fuertes', '3'];
=======
        this.pregunta_01 = ['1', '¿Cual es la habilidad de Charizard ?', 'Correr', 'Salto de rana', 'Blaze', 'Vuela alto', '4'];
        this.pregunta_02 = ['2', '¿Como se llama este Pokemon?', 'Gofy', 'Poliwag', 'Blastoise', 'Caterpie', '3'];
        this.pregunta_03 = ['3', '¿Cual es la habilidad de Mew?', 'Pisar fuerte', 'Rayos', 'Magia', 'Sincronia', '5'];
        this.pregunta_04 = ['4', '¿Cual es la evolucion de Gastly?', 'En Atun', 'A Vaca voladora', 'A Topo', 'A Genar', '5'];
        this.pregunta_05 = ['5', '¿Cual es la evolucion de Pikachu?', 'Charizard', 'Miki', 'Mew', 'Pichu', '5'];
        this.pregunta_06 = ['6', '¿Que habilidad tiene bulbasaur?', 'Rebota mucho', 'Espesura', 'Elastico', 'Gases fuertes', '3'];
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be
        this.apiPokemon.getPokemon('charizard').subscribe((pokemon) => {
            this.charizard = pokemon.sprites.front_default;
        });
        this.apiPokemon.getPokemon('poliwag').subscribe((pokemon) => {
            this.poliwag = pokemon.sprites.front_default;
        });
        this.apiPokemon.getPokemon('mew').subscribe((pokemon) => {
            this.mew = pokemon.sprites.front_default;
        });
        this.apiPokemon.getPokemon('gastly').subscribe((pokemon) => {
            this.gastly = pokemon.sprites.front_default;
        });
        this.apiPokemon.getPokemon('pikachu').subscribe((pokemon) => {
            this.pikachu = pokemon.sprites.front_default;
        });
        this.apiPokemon.getPokemon('bulbasaur').subscribe((pokemon) => {
            this.bulbasaur = pokemon.sprites.front_default;
        });
        this.emailConectado = this.obtener_localstorage();
    }
    ngOnInit() {
    }
    obtener_localstorage() {
        let datoUsuario = JSON.parse(localStorage.getItem('user'));
        //console.log(datoUsuario);
        return datoUsuario.email;
    }
    Iniciar() {
        this.vamos = true;
        // this.hacerPregunta = this.pregunta_01[1];
        // this.boton_1 = this.pregunta_01[2];
        // this.boton_2 = this.pregunta_01[3];
        // this.boton_3 = this.pregunta_01[4];
        // this.boton_4 = this.pregunta_01[5];
        // this.imgPokemon = this.charizard;
        // this.rta = this.pregunta_01[6];
        this.SiguienteRonda(this.numero);
        console.log("inicio: rta -> ", this.rta);
    }
    SiguienteRonda(numero) {
        console.log(this.numero);
        if (this.numero == parseInt(this.pregunta_01[0])) {
            this.hacerPregunta = this.pregunta_01[1];
            this.boton_1 = this.pregunta_01[2];
            this.boton_2 = this.pregunta_01[3];
            this.boton_3 = this.pregunta_01[4];
            this.boton_4 = this.pregunta_01[5];
            this.imgPokemon = this.charizard;
            this.rta = this.pregunta_01[6];
            //console.log("rta del if -> "); console.log(this.rta);
            //this.numero++;    
        }
        console.log('pregunta: ', parseInt(this.pregunta_02[0]));
        console.log('numero: ', this.numero);
        if (this.numero == parseInt(this.pregunta_02[0])) {
            this.imgPokemon = this.poliwag;
            this.hacerPregunta = this.pregunta_02[1];
            this.boton_1 = this.pregunta_02[2];
            this.boton_2 = this.pregunta_02[3];
            this.boton_3 = this.pregunta_02[4];
            this.boton_4 = this.pregunta_02[5];
            this.rta = this.pregunta_02[6];
            //console.log("rta del if -> "); console.log(this.rta);
            //this.numero++;    
        }
        if (this.numero == parseInt(this.pregunta_03[0])) {
            this.imgPokemon = this.mew;
            this.hacerPregunta = this.pregunta_03[1];
            this.boton_1 = this.pregunta_03[2];
            this.boton_2 = this.pregunta_03[3];
            this.boton_3 = this.pregunta_03[4];
            this.boton_4 = this.pregunta_03[5];
            this.rta = this.pregunta_03[6];
            //console.log("rta del if -> "); console.log(this.rta);  
            //this.numero++;      
        }
        if (this.numero == parseInt(this.pregunta_04[0])) {
            this.imgPokemon = this.gastly;
            this.hacerPregunta = this.pregunta_04[1];
            this.boton_1 = this.pregunta_04[2];
            this.boton_2 = this.pregunta_04[3];
            this.boton_3 = this.pregunta_04[4];
            this.boton_4 = this.pregunta_04[5];
            this.rta = this.pregunta_04[6];
            //this.numero++;    
        }
        if (this.numero == parseInt(this.pregunta_05[0])) {
            this.imgPokemon = this.pikachu;
            this.hacerPregunta = this.pregunta_05[1];
            this.boton_1 = this.pregunta_05[2];
            this.boton_2 = this.pregunta_05[3];
            this.boton_3 = this.pregunta_05[4];
            this.boton_4 = this.pregunta_05[5];
            this.rta = this.pregunta_05[6];
            //this.numero++;    
        }
        if (this.numero == parseInt(this.pregunta_06[0])) {
            this.imgPokemon = this.bulbasaur;
            this.hacerPregunta = this.pregunta_06[1];
            this.boton_1 = this.pregunta_06[2];
            this.boton_2 = this.pregunta_06[3];
            this.boton_3 = this.pregunta_06[4];
            this.boton_4 = this.pregunta_06[5];
            this.rta = this.pregunta_06[6];
            //console.log("rta del if -> "); console.log(this.rta);
        }
    }
    Control(boton) {
        if (boton == parseInt(this.rta) && this.vidas > 0 && this.puntos < 3) {
            this.mensajeWin = 'Correcto!';
            this.win = true;
            this.lose = false;
            this.numero++;
            this.puntos++;
            this.SiguienteRonda(this.numero);
        }
        else if (boton != parseInt(this.rta) && this.vidas > 0 && this.puntos < 3) {
            this.mensajeLose = 'Incorrencto!';
            this.win = false;
            this.lose = true;
            this.rta = '';
            this.numero++;
            this.vidas--;
            this.SiguienteRonda(this.numero);
        }
        if (this.puntos === 3) {
            //Gardar Jugada Ver si va aca
            //this.res.agregarResultado('Win', 'Preguntados');
            this.mensajeFinal = 'GANASTE!!!';
            this.rta = '';
            this.smsFinal = true;
            this.win = false;
            this.lose = false;
        }
        if (this.vidas === 0) {
            //Guardar jugada ver si va aca
            //this.res.agregarResultado('Lose', 'Preguntados');
            this.mensajeFinal = 'Fin del juego!!!';
            this.rta = '';
            this.smsFinal = true;
            this.win = false;
            this.lose = false;
        }
    }
    Repetir() {
        this.numero = 1;
        this.vidas = 4;
        this.puntos = 0;
        this.win = false;
        this.lose = false;
        this.smsFinal = false;
        this.rta = '';
        this.Iniciar();
    }
    salirGame() {
        let date = new Date();
        let fechaActual = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
        const puntajeJuego = {
            uemailJuego: this.emailConectado,
            nombreJuego: 'Preguntados',
            puntajeJuego: this.puntos.toString(),
            fechaJuego: fechaActual
        };
        this._unJuego.crearJuego(puntajeJuego);
        this.rutas.navigate(['juegos/menujuegos']);
    }
}
PreguntadosComponent.ɵfac = function PreguntadosComponent_Factory(t) { return new (t || PreguntadosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_juego_service__WEBPACK_IMPORTED_MODULE_2__["JuegoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PreguntadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreguntadosComponent, selectors: [["app-preguntados"]], decls: 26, vars: 15, consts: [[1, "container"], [1, "row"], [1, "col-sm-3"], ["type", "button", "class", "col btn", 3, "click", 4, "ngIf"], ["width", "140px", "height", "100px", 3, "src", 4, "ngIf"], [4, "ngIf"], ["class", "mensaje win", 4, "ngIf"], ["class", "mensaje lose", 4, "ngIf"], [1, "col-sm-5"], [1, "counter"], ["type", "submit", "class", "col btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "col", "btn", 3, "click"], ["width", "140px", "height", "100px", 3, "src"], [1, "mensaje", "win"], [1, "mensaje", "lose"], ["type", "submit", 1, "col", "btn", 3, "click"], [1, "fas", "fa-undo"]], template: function PreguntadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-gral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pregunta:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PreguntadosComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PreguntadosComponent_img_7_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PreguntadosComponent_h3_8_Template, 2, 1, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PreguntadosComponent_div_9_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PreguntadosComponent_div_10_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PreguntadosComponent_div_11_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PreguntadosComponent_button_19_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PreguntadosComponent_button_20_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PreguntadosComponent_button_21_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PreguntadosComponent_button_22_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PreguntadosComponent_button_23_Template, 3, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PreguntadosComponent_button_24_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-pie-gral");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal && ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal && ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lose);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smsFinal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Puntos: ", ctx.puntos, "/3 - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Vidas: ", ctx.vidas, "/", ctx.vidasTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal && ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal && ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal && ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal && ctx.vamos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smsFinal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smsFinal);
<<<<<<< HEAD
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_4__["MenuGralComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_6__["PieGralComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background-image: url('_-_-_-_-assets-juegos-ahorcado-blur.png');\r\n    background-size: 99% auto;\r\n    background-position: center top;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.img__container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    margin-bottom: .5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{\r\n    color: rgb(123, 29, 29);\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{\r\n    color: rgb(123, 29, 29);\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .h1Plabra[_ngcontent-%COMP%]{\r\n    color: rgb(123, 29, 29);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .letters[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    padding: .3rem .6rem;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .mensaje[_ngcontent-%COMP%]{\r\n    border: 1px solid #666;\r\n    font-size: 2rem;\r\n    padding: 1rem 2rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-weight: 900;\r\n    border-radius: .5rem;\r\n    background-color: rgb(201, 30, 64);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    padding: .6rem 1.2rem;\r\n    background-color: rgb(14, 129, 104);\r\n    margin: .3rem .6rem;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    color: #fff;\r\n    filter: drop-shadow(0px 0px 2px#666);\r\n    font-weight: 400;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .botones_resultados[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 1.5rem;\r\n    display: flex;\r\n    padding: 1rem 2rem;\r\n    text-align: center;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    filter: drop-shadow(0px 1px 2px #666);\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    color: #fff;\r\n    background-color:rgb(123, 29, 29);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWd1bnRhZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnRUFBa0U7SUFDbEUseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0NBQWtDO0FBQ3RDOztBQUlBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxpQ0FBaUM7QUFDckMiLCJmaWxlIjoicHJlZ3VudGFkb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9qdWVnb3MvYWhvcmNhZG8vYmx1ci5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA5OSUgYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uaW1nX19jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4gIFxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG5kaXYgLm1lc3NhZ2V7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgfVxyXG5cclxuICBkaXYgLmNvdW50ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDEyMywgMjksIDI5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICBkaXYgLmNvdW50ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDEyMywgMjksIDI5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuZGl2IC5oMVBsYWJyYXtcclxuICAgIGNvbG9yOiByZ2IoMTIzLCAyOSwgMjkpO1xyXG59XHJcblxyXG5kaXYgLmxldHRlcnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogLjNyZW0gLjZyZW07XHJcbn1cclxuXHJcbmRpdiAubWVuc2FqZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDMwLCA2NCk7XHJcbn1cclxuXHJcblxyXG5cclxuZGl2IGJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IC42cmVtIDEuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTI5LCAxMDQpO1xyXG4gICAgbWFyZ2luOiAuM3JlbSAuNnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDJweCM2NjYpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuZGl2IC5ib3RvbmVzX3Jlc3VsdGFkb3N7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAycHggIzY2Nik7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDEyMywgMjksIDI5KTtcclxufSJdfQ== */"] });
=======
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_4__["MenuGralComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_6__["PieGralComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background-image: url('blur.png');\r\n    background-size: 99% auto;\r\n    background-position: center top;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.img__container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    margin-bottom: .5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{\r\n    color: rgb(123, 29, 29);\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{\r\n    color: rgb(123, 29, 29);\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .h1Plabra[_ngcontent-%COMP%]{\r\n    color: rgb(123, 29, 29);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .letters[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    padding: .3rem .6rem;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .mensaje[_ngcontent-%COMP%]{\r\n    border: 1px solid #666;\r\n    font-size: 2rem;\r\n    padding: 1rem 2rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-weight: 900;\r\n    border-radius: .5rem;\r\n    background-color: rgb(201, 30, 64);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    padding: .6rem 1.2rem;\r\n    background-color: rgb(14, 129, 104);\r\n    margin: .3rem .6rem;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    color: #fff;\r\n    filter: drop-shadow(0px 0px 2px#666);\r\n    font-weight: 400;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .botones_resultados[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 1.5rem;\r\n    display: flex;\r\n    padding: 1rem 2rem;\r\n    text-align: center;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    filter: drop-shadow(0px 1px 2px #666);\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    color: #fff;\r\n    background-color:rgb(123, 29, 29);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWd1bnRhZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBa0U7SUFDbEUseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0NBQWtDO0FBQ3RDOztBQUlBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxpQ0FBaUM7QUFDckMiLCJmaWxlIjoicHJlZ3VudGFkb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9qdWVnb3MvYWhvcmNhZG8vYmx1ci5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA5OSUgYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uaW1nX19jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4gIFxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG5kaXYgLm1lc3NhZ2V7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgfVxyXG5cclxuICBkaXYgLmNvdW50ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDEyMywgMjksIDI5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICBkaXYgLmNvdW50ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDEyMywgMjksIDI5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuZGl2IC5oMVBsYWJyYXtcclxuICAgIGNvbG9yOiByZ2IoMTIzLCAyOSwgMjkpO1xyXG59XHJcblxyXG5kaXYgLmxldHRlcnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogLjNyZW0gLjZyZW07XHJcbn1cclxuXHJcbmRpdiAubWVuc2FqZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDMwLCA2NCk7XHJcbn1cclxuXHJcblxyXG5cclxuZGl2IGJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IC42cmVtIDEuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTI5LCAxMDQpO1xyXG4gICAgbWFyZ2luOiAuM3JlbSAuNnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDJweCM2NjYpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuZGl2IC5ib3RvbmVzX3Jlc3VsdGFkb3N7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAycHggIzY2Nik7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDEyMywgMjksIDI5KTtcclxufSJdfQ== */"] });
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be


/***/ }),

/***/ "q6a+":
/*!*********************************************************************!*\
  !*** ./src/app/modulos/juegos/mayoromenor/mayoromenor.component.ts ***!
  \*********************************************************************/
/*! exports provided: MayoromenorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MayoromenorComponent", function() { return MayoromenorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_juego_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/juego.service */ "ply9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/menu-gral/menu-gral.component */ "wgSj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pie-gral/pie-gral.component */ "XXWZ");






function MayoromenorComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.mensajePuntosWin);
} }
function MayoromenorComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.mensajePuntosLose);
} }
function MayoromenorComponent_h2_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La siguiente carta es:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MayoromenorComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.mensajeFinal);
} }
function MayoromenorComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MayoromenorComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.Jugar("mayor"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mayor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MayoromenorComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MayoromenorComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.Jugar("menor"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Menor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MayoromenorComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MayoromenorComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.Repetir(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Otro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MayoromenorComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MayoromenorComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.salirGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Salir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MayoromenorComponent {
    constructor(_unJuego, rutas) {
        this._unJuego = _unJuego;
        this.rutas = rutas;
        this.puntos = 0;
        this.vidas = 5;
        this.vidasTotal = 5;
        this.win = false;
        this.lose = false;
        this.arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
        this.numero = 0;
        this.siguienteNumero = 0;
        this.mensajePuntosWin = '';
        this.mensajePuntosLose = '';
        this.mensajeFinal = '';
        this.smsFinal = false;
        this.numero = this.arrayNumeros[Math.floor(Math.random() * this.arrayNumeros.length)];
        this.emailConectado = this.obtener_localstorage();
    }
    ngOnInit() {
    }
    Jugar(botonElegido) {
        this.SiguienteRonda(this.numero, botonElegido);
    }
    SiguienteRonda(numero, botonElegido) {
        this.siguienteNumero = this.arrayNumeros[Math.floor(Math.random() * this.arrayNumeros.length)];
        if ((botonElegido == 'menor') && (this.siguienteNumero < numero)) {
            this.puntos++;
            this.mensajePuntosWin = 'BIEN, suma punto';
            this.win = true;
            this.lose = false;
        }
        if ((botonElegido == 'menor') && (this.siguienteNumero > numero)) {
            //this.puntos++;
            this.mensajePuntosLose = 'MAL, no suma punto';
            this.vidas = this.vidas - 1;
            this.lose = true;
            this.win = false;
        }
        if ((botonElegido == 'mayor') && (this.siguienteNumero > numero)) {
            this.puntos++;
            this.mensajePuntosWin = 'BIEN, suma punto';
            this.win = true;
            this.lose = false;
        }
        if ((botonElegido == 'mayor') && (this.siguienteNumero < numero)) {
            //this.puntos++;
            this.mensajePuntosLose = 'MAL, no suma punto';
            this.vidas = this.vidas - 1;
            this.lose = true;
            this.win = false;
        }
        this.numero = this.siguienteNumero;
        if (this.puntos === 5) {
            //this.res.agregarResultado('Win', 'Mayor o Menor');
            this.mensajeFinal = 'GANASTE!!!';
            this.smsFinal = true;
            this.win = false;
            this.lose = false;
        }
        if (this.vidas === 0) {
            //this.res.agregarResultado('Lose', 'Mayor o Menor');
            this.mensajeFinal = 'Fin del juego!!!';
            this.smsFinal = true;
            this.win = false;
            this.lose = false;
        }
    }
    Repetir() {
        this.vidas = 5;
        this.puntos = 0;
        this.mensajePuntosLose = '';
        this.mensajePuntosWin = '';
        this.win = false;
        this.lose = false;
        this.smsFinal = false;
    }
    obtener_localstorage() {
        let datoUsuario = JSON.parse(localStorage.getItem('user'));
        //console.log(datoUsuario);
        return datoUsuario.email;
    }
    salirGame() {
        let date = new Date();
        let fechaActual = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
        const puntajeJuego = {
            uemailJuego: this.emailConectado,
            nombreJuego: 'MayoroMeno',
            puntajeJuego: this.puntos.toString(),
            fechaJuego: fechaActual
        };
        this._unJuego.crearJuego(puntajeJuego);
        this.rutas.navigate(['juegos/menujuegos']);
    }
}
MayoromenorComponent.ɵfac = function MayoromenorComponent_Factory(t) { return new (t || MayoromenorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_juego_service__WEBPACK_IMPORTED_MODULE_1__["JuegoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MayoromenorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MayoromenorComponent, selectors: [["app-mayoromenor"]], decls: 27, vars: 12, consts: [[1, "container"], [1, "row"], [1, "col-sm-3"], [1, "img__container"], [1, "counter"], ["alt", "", 3, "src"], [1, "col-sm-5"], ["class", "mensaje win", 4, "ngIf"], ["class", "mensaje lose", 4, "ngIf"], [4, "ngIf"], ["type", "submit", "class", "col btn", 3, "click", 4, "ngIf"], [1, "text-center", "col-sm-4"], ["src", "../../../../assets/juegos/catas/todas.png", "alt", "", 1, "iconocarta"], [1, "mensaje", "win"], [1, "mensaje", "lose"], ["type", "submit", 1, "col", "btn", 3, "click"], [1, "fas", "fa-undo"]], template: function MayoromenorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-gral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MayoromenorComponent_div_12_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MayoromenorComponent_div_13_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MayoromenorComponent_h2_15_Template, 2, 0, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MayoromenorComponent_div_16_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MayoromenorComponent_button_18_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MayoromenorComponent_button_19_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MayoromenorComponent_button_20_Template, 3, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MayoromenorComponent_button_21_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Menor o Mayor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-pie-gral");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Vidas: ", ctx.vidas, "/", ctx.vidasTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/juegos/catas/", ctx.numero, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Puntos: ", ctx.puntos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lose);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smsFinal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smsFinal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smsFinal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smsFinal);
<<<<<<< HEAD
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_3__["MenuGralComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_5__["PieGralComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background-image: url('_-_-_-_-assets-juegos-ahorcado-blur.png');\r\n    background-size: 99% auto;\r\n    background-position: center top;\r\n    background-repeat: no-repeat;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 70vh;\r\n}\r\n\r\n.img__container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n}\r\n\r\n.iconocarta[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    margin-bottom: .5rem;\r\n    color: rgb(168, 33, 33);\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{\r\n    color: rgb(168, 33, 33);\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .h1Plabra[_ngcontent-%COMP%]{\r\n    color: rgb(123, 29, 29);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .letters[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    padding: .3rem .6rem;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .mensaje[_ngcontent-%COMP%]{\r\n    border: 1px solid #666;\r\n    font-size: 2rem;\r\n    padding: 1rem 2rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-weight: 800;\r\n    border-radius: .5rem;\r\n    background-color: rgb(201, 30, 64);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    padding: .6rem 1.2rem;\r\n    background-color: rgb(14, 129, 104);\r\n    margin: .3rem .6rem;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    color: #fff;\r\n    filter: drop-shadow(0px 0px 2px#666);\r\n    font-weight: 400;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .botones_resultados[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 1.5rem;\r\n    display: flex;\r\n    padding: 1rem 2rem;\r\n    text-align: center;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    filter: drop-shadow(0px 1px 2px #666);\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    color: #fff;\r\n    background-color:rgb(123, 29, 29);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1heW9yb21lbm9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnRUFBa0U7SUFDbEUseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7QUFFRjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQ0FBa0M7QUFDdEM7O0FBSUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlDQUFpQztBQUNyQyIsImZpbGUiOiJtYXlvcm9tZW5vci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2p1ZWdvcy9haG9yY2Fkby9ibHVyLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDk5JSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzB2aDtcclxufVxyXG5cclxuLmltZ19fY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuICBcclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmljb25vY2FydGF7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG5kaXYgLm1lc3NhZ2V7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICBjb2xvcjogcmdiKDE2OCwgMzMsIDMzKTtcclxuICB9XHJcblxyXG4gIGRpdiAuY291bnRlcntcclxuICAgIGNvbG9yOiByZ2IoMTY4LCAzMywgMzMpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG5kaXYgLmgxUGxhYnJhe1xyXG4gICAgY29sb3I6IHJnYigxMjMsIDI5LCAyOSk7XHJcbn1cclxuXHJcbmRpdiAubGV0dGVyc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAuM3JlbSAuNnJlbTtcclxufVxyXG5cclxuZGl2IC5tZW5zYWple1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMzAsIDY0KTtcclxufVxyXG5cclxuXHJcblxyXG5kaXYgYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogLjZyZW0gMS4ycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMjksIDEwNCk7XHJcbiAgICBtYXJnaW46IC4zcmVtIC42cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IzY2Nik7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5kaXYgLmJvdG9uZXNfcmVzdWx0YWRvc3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDJweCAjNjY2KTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTIzLCAyOSwgMjkpO1xyXG59Il19 */"] });
=======
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_3__["MenuGralComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_5__["PieGralComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background-image: url('blur.png');\r\n    background-size: 99% auto;\r\n    background-position: center top;\r\n    background-repeat: no-repeat;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 70vh;\r\n}\r\n\r\n.img__container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n}\r\n\r\n.iconocarta[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    margin-bottom: .5rem;\r\n    color: rgb(168, 33, 33);\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{\r\n    color: rgb(168, 33, 33);\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .h1Plabra[_ngcontent-%COMP%]{\r\n    color: rgb(123, 29, 29);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .letters[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    padding: .3rem .6rem;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .mensaje[_ngcontent-%COMP%]{\r\n    border: 1px solid #666;\r\n    font-size: 2rem;\r\n    padding: 1rem 2rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-weight: 800;\r\n    border-radius: .5rem;\r\n    background-color: rgb(201, 30, 64);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    padding: .6rem 1.2rem;\r\n    background-color: rgb(14, 129, 104);\r\n    margin: .3rem .6rem;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    color: #fff;\r\n    filter: drop-shadow(0px 0px 2px#666);\r\n    font-weight: 400;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .botones_resultados[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 1.5rem;\r\n    display: flex;\r\n    padding: 1rem 2rem;\r\n    text-align: center;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    filter: drop-shadow(0px 1px 2px #666);\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    color: #fff;\r\n    background-color:rgb(123, 29, 29);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1heW9yb21lbm9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBa0U7SUFDbEUseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7QUFFRjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQ0FBa0M7QUFDdEM7O0FBSUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlDQUFpQztBQUNyQyIsImZpbGUiOiJtYXlvcm9tZW5vci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2p1ZWdvcy9haG9yY2Fkby9ibHVyLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDk5JSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzB2aDtcclxufVxyXG5cclxuLmltZ19fY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuICBcclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmljb25vY2FydGF7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG5kaXYgLm1lc3NhZ2V7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICBjb2xvcjogcmdiKDE2OCwgMzMsIDMzKTtcclxuICB9XHJcblxyXG4gIGRpdiAuY291bnRlcntcclxuICAgIGNvbG9yOiByZ2IoMTY4LCAzMywgMzMpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG5kaXYgLmgxUGxhYnJhe1xyXG4gICAgY29sb3I6IHJnYigxMjMsIDI5LCAyOSk7XHJcbn1cclxuXHJcbmRpdiAubGV0dGVyc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAuM3JlbSAuNnJlbTtcclxufVxyXG5cclxuZGl2IC5tZW5zYWple1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMzAsIDY0KTtcclxufVxyXG5cclxuXHJcblxyXG5kaXYgYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogLjZyZW0gMS4ycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMjksIDEwNCk7XHJcbiAgICBtYXJnaW46IC4zcmVtIC42cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IzY2Nik7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5kaXYgLmJvdG9uZXNfcmVzdWx0YWRvc3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDJweCAjNjY2KTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTIzLCAyOSwgMjkpO1xyXG59Il19 */"] });
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be


/***/ }),

/***/ "vUIU":
/*!***************************************************************!*\
  !*** ./src/app/modulos/juegos/ahorcado/ahorcado.component.ts ***!
  \***************************************************************/
/*! exports provided: AhorcadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhorcadoComponent", function() { return AhorcadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_juego_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/juego.service */ "ply9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/menu-gral/menu-gral.component */ "wgSj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pie-gral/pie-gral.component */ "XXWZ");






function AhorcadoComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
} }
function AhorcadoComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
} }
function AhorcadoComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AhorcadoComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const letter_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.checkLetter(letter_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](letter_r4);
} }
function AhorcadoComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AhorcadoComponent_div_27_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.salirGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Salir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AhorcadoComponent_div_27_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.restartGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Otro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AhorcadoComponent {
    constructor(_unJuego, rutas) {
        this._unJuego = _unJuego;
        this.rutas = rutas;
        this.title = 'Ahorcado';
        this.puntos = 0;
        this.diccPosition = 0;
        //palabras en juego
        this.palClave = ['BURRO', 'PATO', 'VACA', 'GATO', 'PERRO',
            'JIRAFA', 'PANDA', 'ZORRO', 'TORTUGA', 'ORCA', 'ELEFANTE'];
        this.palabra = '';
        this.palabraOculta = '';
        this.intentos = 8;
        this.intntoes_usuarios = 0;
        this.win = false;
        this.lose = false;
        this.message = '';
        this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.emailConectado = this.obtener_localstorage();
        this.selectWord();
    }
    ngOnInit() { }
    setAttempts(intnetos) {
        this.intentos = intnetos;
    }
    getAttempts() {
        return this.intentos;
    }
    checkLetter(letter) {
        if (!this.palabra.includes(letter)) {
            this.intntoes_usuarios += 1;
        }
        this.replaceWord(letter);
    }
    selectWord() {
        this.diccPosition = Math.floor(Math.random() * 15);
        this.palabra = this.palClave[this.diccPosition];
        this.palabraOculta = '_ '.repeat(this.palabra.length);
    }
    winVerification() {
        const WordArray = this.palabraOculta.split(' ');
        const WordString = WordArray.join('');
        if (WordString == this.palabra) {
            //this.res.agregarResultado('Win', 'Ahorcado');
            this.message = 'Ganaste';
            this.puntos += 1;
            this.win = true;
            this.hideInterface();
        }
        if (this.intntoes_usuarios >= this.intentos) {
            //this.res.agregarResultado('Lose', 'Ahorcado');
            this.intntoes_usuarios = 8;
            this.message = 'Perdiste';
            this.lose = true;
            this.hideInterface();
        }
    }
    hideInterface() {
        if ((this.win || this.lose) == true) {
            const lettersBox = document.querySelector('.letters__container');
            if (lettersBox != null) {
                lettersBox.classList.add('hide');
            }
        }
    }
    replaceWord(letter) {
        const ArrayWord = this.palabraOculta.split(' ');
        for (let i = 0; i < this.palabra.length; i++) {
            if (this.palabra[i] === letter) {
                ArrayWord[i] = letter;
            }
        }
        this.palabraOculta = ArrayWord.join(' ');
        this.winVerification();
    }
    restartGame() {
        var _a;
        this.win = false;
        this.lose = false;
        this.intntoes_usuarios = 0;
        (_a = document.querySelector('.letters__container')) === null || _a === void 0 ? void 0 : _a.classList.remove('hide');
        this.selectWord();
    }
    obtener_localstorage() {
        let datoUsuario = JSON.parse(localStorage.getItem('user'));
        //console.log(datoUsuario);
        return datoUsuario.email;
    }
    salirGame() {
        let date = new Date();
        let fechaActual = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
        const puntajeJuego = {
            uemailJuego: this.emailConectado,
            nombreJuego: 'Ahorcado',
            puntajeJuego: this.puntos.toString(),
            fechaJuego: fechaActual
        };
        this._unJuego.crearJuego(puntajeJuego);
        this.rutas.navigate(['juegos/menujuegos']);
    }
}
AhorcadoComponent.ɵfac = function AhorcadoComponent_Factory(t) { return new (t || AhorcadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_juego_service__WEBPACK_IMPORTED_MODULE_1__["JuegoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AhorcadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AhorcadoComponent, selectors: [["app-ahorcado"]], decls: 33, vars: 9, consts: [[1, "container"], [1, "row"], [1, "col-sm-3"], [1, "message"], [1, "counter"], [1, "img__container"], ["alt", "", 3, "src"], ["class", "mensaje win", 4, "ngIf"], ["class", "mensaje lose", 4, "ngIf"], [1, "col-sm-5"], [1, "row", "justify-content-center"], [1, "h1Plabra"], [1, "word__container", 2, "align-items", "center"], [1, "letters"], ["class", "letter_button", 3, "click", 4, "ngFor", "ngForOf"], ["class", "row  justify-content-center", 4, "ngIf"], [1, "text-center", "col-sm-4"], ["src", "../../../../assets/juegos/ahorcado/logohome.png", "alt", ""], [1, "mensaje", "win"], [1, "mensaje", "lose"], [1, "letter_button", 3, "click"], ["type", "submit", 1, "botones_resultados", "col-3", 3, "click"], [1, "fas", "fa-undo"]], template: function AhorcadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-gral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Puntaje: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tentativas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AhorcadoComponent_div_14_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AhorcadoComponent_div_15_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Seleccione una letra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AhorcadoComponent_button_26_Template, 2, 1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AhorcadoComponent_div_27_Template, 6, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ahorcados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-pie-gral");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.puntos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../assets/juegos/ahorcado/", ctx.intntoes_usuarios, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.intntoes_usuarios, "/", ctx.intentos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lose);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.palabraOculta, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.letters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.win || ctx.lose);
<<<<<<< HEAD
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_3__["MenuGralComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_5__["PieGralComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background-image: url('_-_-_-_-assets-juegos-ahorcado-blur.png');\r\n    background-size: 99% auto;\r\n    background-position: center top;\r\n    background-repeat: no-repeat;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 70vh;\r\n}\r\n\r\n.img__container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: 240px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    margin-bottom: .5rem;\r\n    color: rgb(168, 33, 33);\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{\r\n    color: rgb(20, 19, 19);\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .h1Plabra[_ngcontent-%COMP%]{\r\n    color: rgb(43, 5, 181);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .letters[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    padding: .3rem .6rem;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .mensaje[_ngcontent-%COMP%]{\r\n    border: 1px solid #666;\r\n    font-size: 2rem;\r\n    padding: 1rem 2rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-weight: 800;\r\n    border-radius: .5rem;\r\n    background-color: rgb(201, 30, 64);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .letter_button[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    padding: .6rem 1.2rem;\r\n    background-color: rgb(14, 129, 104);\r\n    margin: .3rem .6rem;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    color: #fff;\r\n    filter: drop-shadow(0px 0px 2px#666);\r\n    font-weight: 400;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .botones_resultados[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 1.5rem;\r\n    display: flex;\r\n    padding: 1rem 2rem;\r\n    text-align: center;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    filter: drop-shadow(0px 1px 2px #666);\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    color: #fff;\r\n    background-color:rgb(85, 123, 29);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFob3JjYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnRUFBa0U7SUFDbEUseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7O0FBRUY7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7QUFFRjtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlDQUFpQztBQUNyQyIsImZpbGUiOiJhaG9yY2Fkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2p1ZWdvcy9haG9yY2Fkby9ibHVyLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDk5JSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzB2aDtcclxufVxyXG5cclxuLmltZ19fY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuICBcclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG5cclxuZGl2IC5tZXNzYWdle1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgY29sb3I6IHJnYigxNjgsIDMzLCAzMyk7XHJcbiAgfVxyXG5cclxuZGl2IC5jb3VudGVye1xyXG4gICAgY29sb3I6IHJnYigyMCwgMTksIDE5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuZGl2IC5oMVBsYWJyYXtcclxuICAgIGNvbG9yOiByZ2IoNDMsIDUsIDE4MSk7XHJcbn1cclxuXHJcbmRpdiAubGV0dGVyc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAuM3JlbSAuNnJlbTtcclxufVxyXG5cclxuZGl2IC5tZW5zYWple1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMzAsIDY0KTtcclxufVxyXG5cclxuZGl2IC5sZXR0ZXJfYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogLjZyZW0gMS4ycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMjksIDEwNCk7XHJcbiAgICBtYXJnaW46IC4zcmVtIC42cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IzY2Nik7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5kaXYgLmJvdG9uZXNfcmVzdWx0YWRvc3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDJweCAjNjY2KTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoODUsIDEyMywgMjkpO1xyXG59XHJcbiJdfQ== */"] });
=======
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_3__["MenuGralComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_5__["PieGralComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background-image: url('blur.png');\r\n    background-size: 99% auto;\r\n    background-position: center top;\r\n    background-repeat: no-repeat;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 70vh;\r\n}\r\n\r\n.img__container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: 240px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    margin-bottom: .5rem;\r\n    color: rgb(168, 33, 33);\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{\r\n    color: rgb(20, 19, 19);\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]   .h1Plabra[_ngcontent-%COMP%]{\r\n    color: rgb(43, 5, 181);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .letters[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    padding: .3rem .6rem;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .mensaje[_ngcontent-%COMP%]{\r\n    border: 1px solid #666;\r\n    font-size: 2rem;\r\n    padding: 1rem 2rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-weight: 800;\r\n    border-radius: .5rem;\r\n    background-color: rgb(201, 30, 64);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .letter_button[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    padding: .6rem 1.2rem;\r\n    background-color: rgb(14, 129, 104);\r\n    margin: .3rem .6rem;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    color: #fff;\r\n    filter: drop-shadow(0px 0px 2px#666);\r\n    font-weight: 400;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .botones_resultados[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 1.5rem;\r\n    display: flex;\r\n    padding: 1rem 2rem;\r\n    text-align: center;\r\n    border-radius: .5rem;\r\n    border: 1px solid #666;\r\n    filter: drop-shadow(0px 1px 2px #666);\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    color: #fff;\r\n    background-color:rgb(85, 123, 29);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFob3JjYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBa0U7SUFDbEUseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7O0FBRUY7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7QUFFRjtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlDQUFpQztBQUNyQyIsImZpbGUiOiJhaG9yY2Fkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2p1ZWdvcy9haG9yY2Fkby9ibHVyLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDk5JSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzB2aDtcclxufVxyXG5cclxuLmltZ19fY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuICBcclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG5cclxuZGl2IC5tZXNzYWdle1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgY29sb3I6IHJnYigxNjgsIDMzLCAzMyk7XHJcbiAgfVxyXG5cclxuZGl2IC5jb3VudGVye1xyXG4gICAgY29sb3I6IHJnYigyMCwgMTksIDE5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuZGl2IC5oMVBsYWJyYXtcclxuICAgIGNvbG9yOiByZ2IoNDMsIDUsIDE4MSk7XHJcbn1cclxuXHJcbmRpdiAubGV0dGVyc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAuM3JlbSAuNnJlbTtcclxufVxyXG5cclxuZGl2IC5tZW5zYWple1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMzAsIDY0KTtcclxufVxyXG5cclxuZGl2IC5sZXR0ZXJfYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogLjZyZW0gMS4ycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMjksIDEwNCk7XHJcbiAgICBtYXJnaW46IC4zcmVtIC42cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IzY2Nik7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5kaXYgLmJvdG9uZXNfcmVzdWx0YWRvc3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDJweCAjNjY2KTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoODUsIDEyMywgMjkpO1xyXG59XHJcbiJdfQ== */"] });
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be


/***/ })

}]);
//# sourceMappingURL=modulos-juegos-juegos-module.js.map