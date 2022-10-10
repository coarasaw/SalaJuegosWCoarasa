(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-listados-listados-module"],{

/***/ "O10H":
/*!*************************************************************!*\
  !*** ./src/app/modulos/listados/listados-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ListadosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadosRoutingModule", function() { return ListadosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _listado_listado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listado/listado.component */ "w7iR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _listado_listado_component__WEBPACK_IMPORTED_MODULE_1__["ListadoComponent"],
    },
    { path: 'listado', component: _listado_listado_component__WEBPACK_IMPORTED_MODULE_1__["ListadoComponent"], pathMatch: 'full' }
];
class ListadosRoutingModule {
}
ListadosRoutingModule.ɵfac = function ListadosRoutingModule_Factory(t) { return new (t || ListadosRoutingModule)(); };
ListadosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ListadosRoutingModule });
ListadosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ListadosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "gKCA":
/*!*****************************************************!*\
  !*** ./src/app/modulos/listados/listados.module.ts ***!
  \*****************************************************/
/*! exports provided: ListadosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadosModule", function() { return ListadosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _listados_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listados-routing.module */ "O10H");
/* harmony import */ var _listado_listado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listado/listado.component */ "w7iR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ListadosModule {
}
ListadosModule.ɵfac = function ListadosModule_Factory(t) { return new (t || ListadosModule)(); };
ListadosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ListadosModule });
ListadosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _listados_routing_module__WEBPACK_IMPORTED_MODULE_1__["ListadosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ListadosModule, { declarations: [_listado_listado_component__WEBPACK_IMPORTED_MODULE_2__["ListadoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _listados_routing_module__WEBPACK_IMPORTED_MODULE_1__["ListadosRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();


/***/ }),

/***/ "w7iR":
/*!***************************************************************!*\
  !*** ./src/app/modulos/listados/listado/listado.component.ts ***!
  \***************************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicios_juego_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../servicios/juego.service */ "ply9");
/* harmony import */ var _shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/menu-gral/menu-gral.component */ "wgSj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pie-gral/pie-gral.component */ "XXWZ");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/spinner/spinner.component */ "f3yp");









function ListadoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListadoComponent_div_5_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.uemailJuego);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.nombreJuego);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.fechaJuego);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.puntajeJuego);
} }
function ListadoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Juego");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Puntaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ListadoComponent_div_5_tr_17_Template, 9, 4, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.listJuegos);
} }
function ListadoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "No hay listado para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ListadoComponent {
    constructor(afAuth, router, _juegosService) {
        this.afAuth = afAuth;
        this.router = router;
        this._juegosService = _juegosService;
        this.suscriptionUser = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.suscriptionList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.listJuegos = [];
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.suscriptionUser = this.afAuth.user.subscribe(user => {
            //console.log(user);
            this.getJuegos();
            //Esto es para que este Logeado
            /* if (user && user.emailVerified) {
              // cargar listado
            } else {
              this.router.navigate(['/auth/login'])
            } */
        });
    }
    ngOnDestroy() {
        this.suscriptionUser.unsubscribe();
        this.suscriptionList.unsubscribe();
    }
    getJuegos() {
        this.suscriptionList == this._juegosService.getListadoJuegos().subscribe(data => {
            //console.log(data);
            this.listJuegos = [];
            this.loading = false;
            data.forEach((element) => {
                this.listJuegos.push(Object.assign({ id: element.payload.doc.id }, element.payload.doc.data()));
                //console.log(element.payload.doc.id);
                //console.log(element.payload.doc.data());
            });
            //console.log(this.listJuegos);
        });
    }
}
ListadoComponent.ɵfac = function ListadoComponent_Factory(t) { return new (t || ListadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicios_juego_service__WEBPACK_IMPORTED_MODULE_4__["JuegoService"])); };
ListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListadoComponent, selectors: [["app-listado"]], decls: 8, vars: 3, consts: [[1, "d-flex", "justify-content-center", "mt-3"], [1, "btn-principal", "btn-quizz"], ["class", "d-flex justify-content-center mt-3", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["class", "conteiner", 4, "ngIf"], [1, "container"], [1, "row", "mt-3"], [1, "col-lg-8", "offset-lg-2"], [1, "card"], [1, "card-body", "text-center"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "conteiner"]], template: function ListadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-menu-gral");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "LISTADO DE LOS JUEGOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListadoComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListadoComponent_div_5_Template, 18, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListadoComponent_div_6_Template, 7, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-pie-gral");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listJuegos.length > 0 && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listJuegos.length == 0 && !ctx.loading);
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_5__["MenuGralComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_7__["PieGralComponent"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background: #8e9eab;    \r\n    background: linear-gradient(to right, #eef2f3, #8e9eab); \r\n    \r\n      max-width: 900px;\r\n      padding: 5px;\r\n  \r\n      \r\n      box-shadow: 2px 2px 32px -6px rgba(146,34,34,0.6);\r\n}\r\n\r\n\r\n.btn-principal[_ngcontent-%COMP%]{\r\n    height: 3.125rem;\r\n    background-color: rgb(51, 51, 51);\r\n    border-color: rgb(0, 0, 0,0.1);\r\n    color: white;\r\n    font-size: 20px;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n\r\n.btn-quizz[_ngcontent-%COMP%]{\r\n    padding: 0px 50px;\r\n}\r\n\r\n\r\n.bg-black[_ngcontent-%COMP%]{\r\n    background-color: rgb(51, 51, 51);\r\n}\r\n\r\n\r\n.fas[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 25px;\r\n    margin: 0px 2px;\r\n}\r\n\r\n\r\n.fa-chart-line[_ngcontent-%COMP%]{\r\n    color: darkcyan;\r\n}\r\n\r\n\r\n.fa-trash[_ngcontent-%COMP%]{\r\n    color: #a71c28;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQixHQUFHLDhCQUE4QixHQUNjLCtCQUErQjtJQUNqRyx1REFBdUQsRUFBRSxxRUFBcUU7O01BRTVILGdCQUFnQjtNQUNoQixZQUFZOztNQUVaLFdBQVc7TUFHWCxpREFBaUQ7QUFDdkQ7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGVBQWU7SUFDZixxQ0FBcUM7QUFDekM7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6Imxpc3RhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzhlOWVhYjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWVmMmYzLCAjOGU5ZWFiKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZWYyZjMsICM4ZTllYWIpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICBcclxuICAgICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gIFxyXG4gICAgICAvKiBTSEFET1cgKi9cclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDMycHggLTZweCByZ2JhKDE0NiwzNCwzNCwwLjYpO1xyXG4gICAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMzJweCAtNnB4IHJnYmEoMTQ2LDM0LDM0LDAuNik7XHJcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMzJweCAtNnB4IHJnYmEoMTQ2LDM0LDM0LDAuNik7XHJcbn1cclxuXHJcblxyXG4uYnRuLXByaW5jaXBhbHtcclxuICAgIGhlaWdodDogMy4xMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAwLDAuMSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLXF1aXp6e1xyXG4gICAgcGFkZGluZzogMHB4IDUwcHg7XHJcbn1cclxuXHJcbi5iZy1ibGFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxufVxyXG5cclxuLmZhcyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46IDBweCAycHg7XHJcbn1cclxuXHJcbi5mYS1jaGFydC1saW5le1xyXG4gICAgY29sb3I6IGRhcmtjeWFuO1xyXG59XHJcblxyXG4uZmEtdHJhc2h7XHJcbiAgICBjb2xvcjogI2E3MWMyODtcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=modulos-listados-listados-module.js.map