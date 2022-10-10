(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "ply9":
/*!********************************************!*\
  !*** ./src/app/servicios/juego.service.ts ***!
  \********************************************/
/*! exports provided: JuegoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoService", function() { return JuegoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class JuegoService {
    constructor(_firestore) {
        this._firestore = _firestore;
    }
    crearJuego(juegoDato) {
        return this._firestore.collection('juegos').add(juegoDato);
    }
    getListadoJuegos() {
        return this._firestore.collection('juegos').stateChanges();
    }
}
JuegoService.ɵfac = function JuegoService_Factory(t) { return new (t || JuegoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
JuegoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JuegoService, factory: JuegoService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map