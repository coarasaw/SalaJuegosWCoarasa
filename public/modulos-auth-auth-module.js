(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-auth-auth-module"],{

/***/ "GVYU":
/*!*****************************************************************************************!*\
  !*** ./src/app/modulos/auth/login-verificar-correo/login-verificar-correo.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: LoginVerificarCorreoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginVerificarCorreoComponent", function() { return LoginVerificarCorreoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginVerificarCorreoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginVerificarCorreoComponent.ɵfac = function LoginVerificarCorreoComponent_Factory(t) { return new (t || LoginVerificarCorreoComponent)(); };
LoginVerificarCorreoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginVerificarCorreoComponent, selectors: [["app-login-verificar-correo"]], decls: 2, vars: 0, template: function LoginVerificarCorreoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login-verificar-correo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi12ZXJpZmljYXItY29ycmVvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "NujW":
/*!*********************************************!*\
  !*** ./src/app/modulos/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "S35u");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "sFyK");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _login_registrar_login_registrar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-registrar/login-registrar.component */ "vT6u");
/* harmony import */ var _login_verificar_correo_login_verificar_correo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-verificar-correo/login-verificar-correo.component */ "GVYU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        _login_registrar_login_registrar_component__WEBPACK_IMPORTED_MODULE_5__["LoginRegistrarComponent"],
        _login_verificar_correo_login_verificar_correo_component__WEBPACK_IMPORTED_MODULE_6__["LoginVerificarCorreoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "S35u":
/*!*****************************************************!*\
  !*** ./src/app/modulos/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "sFyK");
/* harmony import */ var _login_registrar_login_registrar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-registrar/login-registrar.component */ "vT6u");
/* harmony import */ var _login_verificar_correo_login_verificar_correo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-verificar-correo/login-verificar-correo.component */ "GVYU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");

//Componentes Propios





const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'registrar', component: _login_registrar_login_registrar_component__WEBPACK_IMPORTED_MODULE_2__["LoginRegistrarComponent"] },
    { path: 'recuperarclave', component: _login_verificar_correo_login_verificar_correo_component__WEBPACK_IMPORTED_MODULE_3__["LoginVerificarCorreoComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "sFyK":
/*!*******************************************************!*\
  !*** ./src/app/modulos/auth/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var src_app_servicios_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/error.service */ "yGJY");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pie-gral/pie-gral.component */ "XXWZ");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/spinner/spinner.component */ "f3yp");










function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_span_13_Template(rf, ctx) { if (rf & 1) {
<<<<<<< HEAD
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
=======
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El correo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_span_14_Template(rf, ctx) { if (rf & 1) {
<<<<<<< HEAD
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
=======
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Correo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "invalido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_span_18_Template(rf, ctx) { if (rf & 1) {
<<<<<<< HEAD
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
=======
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_2_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.loginSiguiente(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginComponent_div_2_span_13_Template, 4, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LoginComponent_div_2_span_14_Template, 4, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginComponent_div_2_span_18_Template, 4, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Aceptar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_2_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.automaticoLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Login (in)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
<<<<<<< HEAD
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_2_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.adinistradorLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Administrador (in)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Registrarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
=======
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Registrarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    let tmp_5_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.muestroCorreo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.loginForm.get("usuarioCorreo")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx_r1.loginForm.get("usuarioCorreo")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.loginForm.get("usuarioCorreo")) == null ? null : tmp_3_0.hasError("email")) && ((tmp_3_0 = ctx_r1.loginForm.get("usuarioCorreo")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.muestroClave);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r1.loginForm.get("usuarioClave")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx_r1.loginForm.get("usuarioClave")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.loginForm.invalid);
} }
class LoginComponent {
    constructor(rutas, fb, afAuth, _errorService, toastr) {
        this.rutas = rutas;
        this.fb = fb;
        this.afAuth = afAuth;
        this._errorService = _errorService;
        this.toastr = toastr;
        this.loading = false;
        this.loginForm = this.fb.group({
            usuarioCorreo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            usuarioClave: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    automaticoLogin() {
        //this.VendedorForm.controls['nombres'].setValue(response.body.data.nombres);
        this.loginForm.controls['usuarioCorreo'].setValue('danny@gmail.com');
        this.loginForm.controls['usuarioClave'].setValue('pepe123');
    }
    adinistradorLogin() {
        this.loginForm.controls['usuarioCorreo'].setValue('admin@gmail.com');
        this.loginForm.controls['usuarioClave'].setValue('admin123');
    }
    loginSiguiente() {
        var _a, _b;
        //console.log(this.loginForm)
        const usuario = (_a = this.loginForm.get('usuarioCorreo')) === null || _a === void 0 ? void 0 : _a.value;
        const password = (_b = this.loginForm.get('usuarioClave')) === null || _b === void 0 ? void 0 : _b.value;
        this.loading = true;
        this.afAuth.signInWithEmailAndPassword(usuario, password).then((respuesta) => {
            //console.log(respuesta);
            this.loading = false;
            this.setLocalStorage(respuesta.user);
            this.rutas.navigate(['/inicio']);
        }, error => {
            this.loading = false;
            this.toastr.error(this._errorService.error(error.code), 'Error');
            this.loginForm.reset();
        });
    }
    setLocalStorage(user) {
        const usuario = {
            uid: user.uid,
            email: user.email
        };
        localStorage.setItem('user', JSON.stringify(usuario));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
<<<<<<< HEAD
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 4, vars: 2, consts: [[1, "conteiner", "mt-3"], ["class", "d-flex justify-content-center mt-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-5"], [1, "row"], [1, "card"], [1, "card-body"], [1, "contenedorLogin"], [1, "text-left", "tituloPropio"], ["src", "../../../../assets/login/login3.svg", "alt", "Login", "width", "100", "height", "100"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text", "formControlName", "usuarioCorreo", "placeholder", "Correo", 1, "from-control", "form-control-lg", 3, "value"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "formControlName", "usuarioClave", "placeholder", "Contrase\u00F1a", 1, "from-control", "form-control-lg", 3, "value"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "float-end", 3, "click"], [1, "text-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["routerLink", "/auth/registrar"], [1, "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 33, 7, "div", 2);
=======
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 4, vars: 2, consts: [[1, "conteiner", "mt-3"], ["class", "d-flex justify-content-center mt-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-5"], [1, "row"], [1, "card"], [1, "card-body"], [1, "contenedorLogin"], [1, "text-left", "tituloPropio"], ["src", "../../../../assets/login/login3.svg", "alt", "Login", "width", "100", "height", "100"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text", "formControlName", "usuarioCorreo", "placeholder", "Correo", 1, "from-control", "form-control-lg", 3, "value"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "formControlName", "usuarioClave", "placeholder", "Contrase\u00F1a", 1, "from-control", "form-control-lg", 3, "value"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "float-end", 3, "click"], [1, "text-center"], ["routerLink", "/auth/registrar"], [1, "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 30, 7, "div", 2);
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-pie-gral");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_7__["PieGralComponent"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  height: 600%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 10px;\r\n  padding-bottom: 40px;\r\n  \r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.conteiner[_ngcontent-%COMP%]{\r\n  background: #b92b27;    \r\n  background: linear-gradient(to bottom, #1565C0, #b92b27); \r\n  background-size: 85% auto;\r\n  background-position: center top;\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 86vh;\r\n}\r\n\r\n.parrafoPropio[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-size: 20px; \r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.tituloPropio[_ngcontent-%COMP%]{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.contenedorLogin[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content:space-between;\r\n}\r\n\r\n.text-danger[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBRUUsYUFBYTtFQUViLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLG1CQUFtQixHQUFHLDhCQUE4QixHQUNlLCtCQUErQjtFQUNsRyx3REFBd0QsRUFBRSxxRUFBcUU7RUFDL0gseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDYwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTsqL1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuLmNvbnRlaW5lcntcclxuICBiYWNrZ3JvdW5kOiAjYjkyYjI3OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE1NjVDMCwgI2I5MmIyNyk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxNTY1QzAsICNiOTJiMjcpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgYmFja2dyb3VuZC1zaXplOiA4NSUgYXV0bztcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA4NnZoO1xyXG59XHJcbi5wYXJyYWZvUHJvcGlve1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7IFxyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXR1bG9Qcm9waW97XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4uY29udGVuZWRvckxvZ2lue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRleHQtZGFuZ2Vye1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "vT6u":
/*!***************************************************************************!*\
  !*** ./src/app/modulos/auth/login-registrar/login-registrar.component.ts ***!
  \***************************************************************************/
/*! exports provided: LoginRegistrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegistrarComponent", function() { return LoginRegistrarComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_servicios_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/error.service */ "yGJY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pie-gral/pie-gral.component */ "XXWZ");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/spinner/spinner.component */ "f3yp");










function LoginRegistrarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginRegistrarComponent_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El Correo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginRegistrarComponent_div_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Correo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "invalido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginRegistrarComponent_div_2_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginRegistrarComponent_div_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\u00F1a como minimo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "debe tener 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginRegistrarComponent_div_2_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "distintas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginRegistrarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Registar Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginRegistrarComponent_div_2_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.registar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginRegistrarComponent_div_2_span_8_Template, 4, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginRegistrarComponent_div_2_span_9_Template, 4, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginRegistrarComponent_div_2_span_12_Template, 4, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginRegistrarComponent_div_2_span_13_Template, 4, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginRegistrarComponent_div_2_span_16_Template, 4, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Aceptar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    let tmp_4_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.registrarForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r1.registrarForm.get("usuario")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx_r1.registrarForm.get("usuario")) == null ? null : tmp_1_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.registrarForm.get("usuario")) == null ? null : tmp_2_0.hasError("email")) && ((tmp_2_0 = ctx_r1.registrarForm.get("usuario")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.registrarForm.get("password")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx_r1.registrarForm.get("password")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.registrarForm.get("password")) == null ? null : tmp_4_0.hasError("minlength")) && ((tmp_4_0 = ctx_r1.registrarForm.get("password")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.registrarForm.hasError("notSame"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.registrarForm.invalid);
} }
class LoginRegistrarComponent {
    constructor(fb, afAuth, router, toastr, _errorService) {
        this.fb = fb;
        this.afAuth = afAuth;
        this.router = router;
        this.toastr = toastr;
        this._errorService = _errorService;
        this.loading = false;
        this.registrarForm = this.fb.group({
            usuario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            repetirPassword: ['']
        }, { validator: this.ckeckPassword });
    }
    ngOnInit() {
    }
    registar() {
        var _a, _b;
        const usuario = (_a = this.registrarForm.get('usuario')) === null || _a === void 0 ? void 0 : _a.value;
        const password = (_b = this.registrarForm.get('password')) === null || _b === void 0 ? void 0 : _b.value;
        this.loading = true;
        this.afAuth.createUserWithEmailAndPassword(usuario, password).then(rta => {
            this.toastr.success('El usuario fue registrado con exito!', 'Usuario registrado!');
            this.router.navigate(['/home']);
        }).catch(error => {
            this.registrarForm.reset();
            this.loading = false;
            this.toastr.error(this._errorService.error(error.code), 'Error');
        });
    }
    ckeckPassword(group) {
        var _a, _b;
        const pass = (_a = group.controls.password) === null || _a === void 0 ? void 0 : _a.value;
        const confirmarPassword = (_b = group.controls.repetirPassword) === null || _b === void 0 ? void 0 : _b.value;
        return pass === confirmarPassword ? null : { notSame: true };
    }
}
LoginRegistrarComponent.ɵfac = function LoginRegistrarComponent_Factory(t) { return new (t || LoginRegistrarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"])); };
LoginRegistrarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginRegistrarComponent, selectors: [["app-login-registrar"]], decls: 4, vars: 2, consts: [[1, "conteiner", "mt-3"], ["class", "d-flex justify-content-center mt-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-5"], [1, "row"], [1, "card"], [1, "card-body"], ["tituloPropio", "", 1, "text-center"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text", "formControlName", "usuario", "placeholder", "Correo", 1, "form-control", "form-control-lg"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "Contrase\u00F1a", 1, "form-control", "form-control-lg"], ["type", "password", "formControlName", "repetirPassword", "placeholder", "Repetir Contrase\u00F1a", 1, "form-control", "form-control-lg"], ["routerLink", "/auth/login", 1, "btn", "btn-secondary", "btn-lg"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "float-end", 3, "disabled"], [1, "text-danger"]], template: function LoginRegistrarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginRegistrarComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginRegistrarComponent_div_2_Template, 21, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-pie-gral");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_7__["PieGralComponent"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  height: 80%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 10px;\r\n  padding-bottom: 40px;\r\n  \r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.conteiner[_ngcontent-%COMP%]{\r\n  background: #b92b27;    \r\n  background: linear-gradient(to bottom, #1565C0, #b92b27); \r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 86vh;\r\n  background-size: 85% auto;\r\n  background-position: center top;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.parrafoPropio[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-size: 20px; \r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.tituloPropio[_ngcontent-%COMP%]{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.contenedorLogin[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  justify-content: safe;\r\n  align-items: flex-start;\r\n}\r\n\r\n.text-danger[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXJlZ2lzdHJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUVFLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxtQkFBbUIsR0FBRyw4QkFBOEIsR0FDZSwrQkFBK0I7RUFDbEcsd0RBQXdELEVBQUUscUVBQXFFOztFQUUvSCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibG9naW4tcmVnaXN0cmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDgwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1OyovXHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMzBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4uY29udGVpbmVye1xyXG4gIGJhY2tncm91bmQ6ICNiOTJiMjc7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTU2NUMwLCAjYjkyYjI3KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE1NjVDMCwgI2I5MmIyNyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDg2dmg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA4NSUgYXV0bztcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLnBhcnJhZm9Qcm9waW97XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDsgXHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRpdHVsb1Byb3Bpb3tcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb250ZW5lZG9yTG9naW57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAganVzdGlmeS1jb250ZW50OiBzYWZlO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcbi50ZXh0LWRhbmdlcntcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "yGJY":
/*!********************************************!*\
  !*** ./src/app/servicios/error.service.ts ***!
  \********************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorService {
    constructor() { }
    error(code) {
        switch (code) {
            // Email ya registrado
            case 'auth/email-already-in-use':
                return 'El Correo ya esta registrado';
            // Correo invalido
            case 'auth/invalid-email':
                return 'El Correo es invalido';
            // La Contraseña es muy debil
            case 'auth/weak-password':
                return 'La Contraseña es muy debil';
            case 'auth/user-not-found':
                return 'Usuario invalido';
            case 'auth/wrong-password':
                return 'La contraseña es invalida';
            default:
                return 'Error desconocido';
        }
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=modulos-auth-auth-module.js.map