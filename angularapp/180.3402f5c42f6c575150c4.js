"use strict";(self.webpackChunksala_juegos=self.webpackChunksala_juegos||[]).push([[180],{180:(C,g,i)=>{i.r(g),i.d(g,{LoginModule:()=>Z});var c=i(8583),s=i(9895),d=i(8239),e=i(7716),m=i(8091),p=i(6692),r=i(3679);function h(n,a){if(1&n&&(e.TgZ(0,"div",11),e.TgZ(1,"div",12),e._uU(2,"Error"),e.qZA(),e.TgZ(3,"div",13),e.TgZ(4,"p",14),e._uU(5),e.qZA(),e.qZA(),e.qZA()),2&n){const o=e.oxw();e.xp6(5),e.hij(" ",o.descripcion_error," ")}}const v=[{path:"",component:(()=>{class n{constructor(o,t,l){this.authSrv=o,this.jugadoresSrv=t,this.router=l,this.show_error=!1,this.descripcion_error="",this.email="",this.clave=""}ngOnInit(){}loginUser(){var o=this;return(0,d.Z)(function*(){try{(yield o.authSrv.loginUser(o.email,o.clave))&&(o.jugadoresSrv.registrarNuevaSesion(o.email),localStorage.setItem("usuario_juegos",JSON.stringify({email:o.email,sesion:"activa"})),o.router.navigate(["/home"]).then(()=>o.usuarioActual()))}catch(t){o.show_error=!0,o.descripcion_error="La clave o email no coinciden. Vuelva a intentar.",console.log(t)}})()}usuarioActual(){let o=this.authSrv.getCurrentUserLS();null==o?this.estado_activo=!1:null!=o&&"activa"==o.sesion&&(this.nombre_usuario=o.email,this.estado_activo=!0)}autocompletar(){this.email="pepe@gmail.com",this.clave="123456"}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(m.e),e.Y36(p.M),e.Y36(s.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:14,vars:3,consts:[[1,"padding-all"],[1,"header"],[1,"design-w3l"],["class","card text-white bg-danger",4,"ngIf"],[1,"mail-form-agile"],["action","#","method","post",3,"ngSubmit"],["type","email","name","email","placeholder","Email","required","",3,"ngModel","ngModelChange"],["type","password","name","clave","placeholder","Contrase\xf1a","required","",1,"padding",3,"ngModel","ngModelChange"],["type","submit","value","Aceptar"],["type","button","value","Autocompletar",3,"click"],[1,"clear"],[1,"card","text-white","bg-danger"],[1,"card-header"],[1,"card-body"],[1,"card-text"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3,"Ingreso"),e.qZA(),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,h,6,1,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"form",5),e.NdJ("ngSubmit",function(){return t.loginUser()}),e.TgZ(8,"input",6),e.NdJ("ngModelChange",function(u){return t.email=u}),e.qZA(),e.TgZ(9,"input",7),e.NdJ("ngModelChange",function(u){return t.clave=u}),e.qZA(),e._UZ(10,"input",8),e.TgZ(11,"input",9),e.NdJ("click",function(){return t.autocompletar()}),e.qZA(),e.qZA(),e.qZA(),e._UZ(12,"div",10),e._UZ(13,"br"),e.qZA(),e.qZA()),2&o&&(e.xp6(5),e.Q6J("ngIf",t.show_error),e.xp6(3),e.Q6J("ngModel",t.email),e.xp6(1),e.Q6J("ngModel",t.clave))},directives:[c.O5,r._Y,r.JL,r.F,r.Fj,r.Q7,r.JJ,r.On],styles:[""]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[s.Bz.forChild(v)],s.Bz]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.ez,f,r.u5]]}),n})()}}]);