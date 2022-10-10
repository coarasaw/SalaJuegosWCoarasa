(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-chat-chat-module"],{

/***/ "26OM":
/*!*****************************************************!*\
  !*** ./src/app/modulos/chat/chat-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat/chat.component */ "zeQJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["ChatComponent"],
    },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["ChatComponent"], pathMatch: 'full' }
];
class ChatRoutingModule {
}
ChatRoutingModule.ɵfac = function ChatRoutingModule_Factory(t) { return new (t || ChatRoutingModule)(); };
ChatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ChatRoutingModule });
ChatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "dgrk":
/*!*********************************************!*\
  !*** ./src/app/modulos/chat/chat.module.ts ***!
  \*********************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-routing.module */ "26OM");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "zeQJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ChatModule {
}
ChatModule.ɵfac = function ChatModule_Factory(t) { return new (t || ChatModule)(); };
ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ChatModule });
ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_1__["ChatRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _chat_routing_module__WEBPACK_IMPORTED_MODULE_1__["ChatRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();


/***/ }),

/***/ "zeQJ":
/*!*****************************************************!*\
  !*** ./src/app/modulos/chat/chat/chat.component.ts ***!
  \*****************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/menu-gral/menu-gral.component */ "wgSj");
<<<<<<< HEAD


class ChatComponent {
    constructor() {
        this.mensaje = '';
    }
    ngOnInit() { }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 5, vars: 0, consts: [[1, "container", "main-container"], [1, "princiapal"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-gral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " En costrucci\u00F3n, disculpe las molestias.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_1__["MenuGralComponent"]], styles: [".hora-chat[_ngcontent-%COMP%]{\r\n  color: #413838;\r\n  font-size: 11px;\r\n  margin-top: 0px;\r\n  padding-top: 0px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\n  margin-top: 0px;\r\n  width: 98%;\r\n}\r\n\r\n.principal[_ngcontent-%COMP%]{\r\n  background-color: #000;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: 50% 50%;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  \r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n   --webkit-box-shadow: inset 0 0 20px rgba(103, 103, 103, 0.816);\r\n}\r\n\r\n\r\n\r\n.main-container[_ngcontent-%COMP%]{\r\n    padding-top: 3%;\r\n    padding-bottom: 3%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    \r\n  }\r\n\r\n.puntero[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n  }\r\n\r\n.chat-window[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    width: 350px;\r\n    height: 420px;\r\n    overflow: hidden;\r\n    border: 1px solid #717171;\r\n    border-radius: 20px;\r\n    box-shadow: 8px 7px 22px -4px rgba(94, 40, 40, 0.75);\r\n    -webkit-box-shadow: 8px 7px 22px -4px rgba(94, 40, 40, 0.75);\r\n    -moz-box-shadow: 8px 7px 22px -4px rgba(94, 40, 40, 0.75);\r\n    background-color: rgba(75, 48, 48, 0.523);\r\n  }\r\n\r\n.app-mensajes[_ngcontent-%COMP%]{\r\n    overflow-y:scroll;\r\n    height:270px;\r\n    \r\n    padding: 5px;\r\n    scrollbar-color: rgb(138, 138, 138) #785978;\r\n    scrollbar-width: 10px;\r\n  }\r\n\r\n\r\n\r\n.animated[_ngcontent-%COMP%] {\r\n    animation-duration: 1s;\r\n    animation-fill-mode: both;\r\n  }\r\n\r\n.fast[_ngcontent-%COMP%] {\r\n    animation-duration: 0.3s;\r\n    animation-fill-mode: both;\r\n  }\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n  \r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n.fadeIn[_ngcontent-%COMP%] {\r\n    animation-name: fadeIn;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSx3REFBd0Q7RUFDeEQsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0dBQ2xCLDhEQUE4RDtBQUNqRTs7QUFFQSxlQUFlOztBQUdmO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7RUFFekI7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUdBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0RBQW9EO0lBQ3BELDREQUE0RDtJQUM1RCx5REFBeUQ7SUFDekQseUNBQXlDO0VBQzNDOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxxQkFBcUI7RUFDdkI7O0FBR0EsZ0JBQWdCOztBQUNoQjtJQUVFLHNCQUFzQjtJQUV0Qix5QkFBeUI7RUFDM0I7O0FBRUE7SUFFRSx3QkFBd0I7SUFFeEIseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7O0lBRUE7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7QUFFQTtJQUNFLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9yYS1jaGF0e1xyXG4gIGNvbG9yOiAjNDEzODM4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuLnByaW5jaXBhbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG59XHJcblxyXG5kaXYgaDJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFNjb2xsICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIC8qIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7ICAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgLS13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggcmdiYSgxMDMsIDEwMywgMTAzLCAwLjgxNik7XHJcbn1cclxuXHJcbi8qIEZpbiBTY3JvbGwgKi9cclxuXHJcblxyXG4ubWFpbi1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5wdW50ZXJve1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY2hhdC13aW5kb3d7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzE3MTcxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDhweCA3cHggMjJweCAtNHB4IHJnYmEoOTQsIDQwLCA0MCwgMC43NSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDhweCA3cHggMjJweCAtNHB4IHJnYmEoOTQsIDQwLCA0MCwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDhweCA3cHggMjJweCAtNHB4IHJnYmEoOTQsIDQwLCA0MCwgMC43NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA0OCwgNDgsIDAuNTIzKTtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC1tZW5zYWplc3tcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgaGVpZ2h0OjI3MHB4O1xyXG4gICAgLypiYWNrZ3JvdW5kOmdyYXk7Ki9cclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHNjcm9sbGJhci1jb2xvcjogcmdiKDEzOCwgMTM4LCAxMzgpICM3ODU5Nzg7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIEFuaW1hY2lvbmVzICovXHJcbiAgLmFuaW1hdGVkIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAuZmFzdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdG8ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZmFkZUluIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgfSJdfQ== */"] });
=======
/* harmony import */ var _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pie-gral/pie-gral.component */ "XXWZ");



/* import { Mensaje } from '../../../clases/mensaje';
import { AuthService } from '../../../servicios/auth.service';
import { MensajeService } from '../../../servicios/mensaje.service'; */
class ChatComponent {
    ngOnInit() { }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 4, vars: 0, template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-gral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "chat works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-pie-gral");
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_1__["MenuGralComponent"], _shared_pie_gral_pie_gral_component__WEBPACK_IMPORTED_MODULE_2__["PieGralComponent"]], styles: [".container[_ngcontent-%COMP%]{max-width:1170px; margin:auto;}\r\nimg[_ngcontent-%COMP%]{ max-width:100%;}\r\n.incoming_msg_img[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 6%;\r\n}\r\n.received_msg[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 0 0 0 10px;\r\n  vertical-align: top;\r\n  width: 92%;\r\n }\r\n.received_withd_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \r\n  border-radius: 3px; \r\n  font-size: 14px;\r\n  margin: 0;\r\n  padding: 5px 10px 5px 12px;\r\n  width: 100%;\r\n}\r\n.time_date[_ngcontent-%COMP%] { \r\n  display: block;\r\n  font-size: 12px;\r\n  margin: 8px 0 0;\r\n}\r\n.received_withd_msg[_ngcontent-%COMP%] { width: 57%;}\r\n.mesgs[_ngcontent-%COMP%] {\r\n  float: left;\r\n  padding: 30px 15px 0 25px;\r\n  width: 60%;\r\n}\r\n.sent_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  background: #05728f none repeat scroll 0 0;\r\n  border-radius: 3px;\r\n  font-size: 14px;\r\n  margin: 0; color:#fff;\r\n  padding: 5px 10px 5px 12px;\r\n  width:100%;\r\n}\r\n.outgoing_msg[_ngcontent-%COMP%]{ overflow:hidden; margin:26px 0 26px;}\r\n.sent_msg[_ngcontent-%COMP%] {\r\n  float: right;\r\n  width: 46%;\r\n}\r\n.input_msg_write[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { \r\n  border: medium none;\r\n \r\n  font-size: 15px;\r\n  min-height: 48px;\r\n  width: 100%;\r\n}\r\n.type_msg[_ngcontent-%COMP%] {border-top: 1px solid #c4c4c4;position: relative;}\r\n.msg_send_btn[_ngcontent-%COMP%] { \r\n  border: medium none;\r\n  border-radius: 50%; \r\n  cursor: pointer;\r\n  font-size: 17px;\r\n  height: 33px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 11px;\r\n  width: 33px;\r\n}\r\n.messaging[_ngcontent-%COMP%] { \r\n  padding: 0 0 50px 0;\r\n  background:  #232324;\r\n  color: #ffffff; }\r\n.msg_history[_ngcontent-%COMP%] {\r\n  height: 400px;\r\n  overflow-y: auto;\r\n  background:  #232324;\r\n  color: #ffffff; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLGdCQUFnQixFQUFFLFdBQVcsQ0FBQztBQUN6QyxLQUFLLGNBQWMsQ0FBQztBQUdwQjtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0FBQ1g7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFVBQVU7Q0FDWDtBQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0Esc0JBQXNCLFVBQVUsQ0FBQztBQUVqQztFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBRUM7RUFDQywwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTLEVBQUUsVUFBVTtFQUNyQiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaO0FBQ0EsZUFBZSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7QUFDbkQ7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7O0VBRW5CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBRUEsV0FBVyw2QkFBNkIsQ0FBQyxrQkFBa0IsQ0FBQztBQUM1RDtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQztBQUN2QztFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGNBQWMsRUFBRSxvQkFBb0I7QUFDdEMiLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcnttYXgtd2lkdGg6MTE3MHB4OyBtYXJnaW46YXV0bzt9XHJcbmltZ3sgbWF4LXdpZHRoOjEwMCU7fVxyXG5cclxuIFxyXG4uaW5jb21pbmdfbXNnX2ltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2JTtcclxufVxyXG4ucmVjZWl2ZWRfbXNnIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHdpZHRoOiA5MiU7XHJcbiB9XHJcbiAucmVjZWl2ZWRfd2l0aGRfbXNnIHAgeyBcclxuICBib3JkZXItcmFkaXVzOiAzcHg7IFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpbWVfZGF0ZSB7IFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDhweCAwIDA7XHJcbn1cclxuLnJlY2VpdmVkX3dpdGhkX21zZyB7IHdpZHRoOiA1NyU7fVxyXG5cclxuLm1lc2dzIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAzMHB4IDE1cHggMCAyNXB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbiAuc2VudF9tc2cgcCB7XHJcbiAgYmFja2dyb3VuZDogIzA1NzI4ZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwOyBjb2xvcjojZmZmO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLm91dGdvaW5nX21zZ3sgb3ZlcmZsb3c6aGlkZGVuOyBtYXJnaW46MjZweCAwIDI2cHg7fVxyXG4uc2VudF9tc2cge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogNDYlO1xyXG59XHJcbi5pbnB1dF9tc2dfd3JpdGUgaW5wdXQgeyBcclxuICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50eXBlX21zZyB7Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNjNGM0YzQ7cG9zaXRpb246IHJlbGF0aXZlO31cclxuLm1zZ19zZW5kX2J0biB7IFxyXG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGhlaWdodDogMzNweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAxMXB4O1xyXG4gIHdpZHRoOiAzM3B4O1xyXG59XHJcbi5tZXNzYWdpbmcgeyBcclxuICBwYWRkaW5nOiAwIDAgNTBweCAwO1xyXG4gIGJhY2tncm91bmQ6ICAjMjMyMzI0O1xyXG4gIGNvbG9yOiAjZmZmZmZmOyAvKiBDb2xvciBkZWwgdGV4dG8gKi99XHJcbi5tc2dfaGlzdG9yeSB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICAjMjMyMzI0O1xyXG4gIGNvbG9yOiAjZmZmZmZmOyAvKiBDb2xvciBkZWwgdGV4dG8gKi9cclxufVxyXG4iXX0= */"] });
>>>>>>> 77b95967d95da0304473d3bb238fc5f2053eb0be


/***/ })

}]);
//# sourceMappingURL=modulos-chat-chat-module.js.map