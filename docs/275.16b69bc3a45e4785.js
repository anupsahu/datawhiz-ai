"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[275],{3275:(wt,f,m)=>{m.r(f),m.d(f,{AuthModule:()=>vt});var l=m(6814),r=m(6223),_=m(9862),g=m(7304),t=m(5879);const b=["root",""],v=function(){return{"background-image":"url(./assets/media/misc/auth-bg.png)"}};let w=(()=>{class e{today=new Date;constructor(){}ngOnInit(){}ngOnDestroy(){}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=t.Xpm({type:e,selectors:[["body","root",""]],attrs:b,decls:26,vars:2,consts:[[1,"d-flex","flex-column","flex-lg-row","flex-column-fluid"],[1,"d-flex","flex-column","flex-lg-row-fluid","w-lg-50","p-10","order-2","order-lg-1"],[1,"d-flex","flex-center","flex-column","flex-lg-row-fluid"],[1,"<?php","echo","$params['wrapperClass']?>","p-10"],[1,"d-flex","flex-center","flex-wrap","px-5"],[1,"d-flex","fw-semibold","text-primary","fs-base"],["href","#","target","_blank",1,"px-5"],[1,"d-flex","flex-lg-row-fluid","w-lg-50","bgi-size-cover","bgi-position-center","order-1","order-lg-2",3,"ngStyle"],[1,"d-flex","flex-column","flex-center","py-15","px-5","px-md-15","w-100"],["routerLink","/",1,"mb-12"],["alt","Logo","src","./assets/media/logos/logo.png",1,"h-75px"],["src","./assets/media/misc/auth-screens.png","alt","",1,"mx-auto","w-275px","w-md-50","w-xl-500px","mb-10","mb-lg-20"],[1,"text-white","fs-2qx","fw-bolder","text-center","mb-7"],["href","#",1,"opacity-75-hover","text-warning","fw-bold","me-1"],[1,"text-white","fs-base","text-center"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"router-outlet"),t.qZA()(),t.TgZ(5,"div",4)(6,"div",5)(7,"a",6),t._uU(8,"Terms"),t.qZA(),t.TgZ(9,"a",6),t._uU(10,"Plans"),t.qZA(),t.TgZ(11,"a",6),t._uU(12,"Contact Us"),t.qZA()()()(),t.TgZ(13,"div",7)(14,"div",8)(15,"a",9),t._UZ(16,"img",10),t.qZA(),t._UZ(17,"img",11),t.TgZ(18,"h1",12),t._uU(19," Redefine the speed of learning using "),t.TgZ(20,"a",13),t._uU(21,"Gen AI"),t.qZA()(),t.TgZ(22,"div",14),t._uU(23," Empowering accelerated learning and exploration, datawhiz combines knowledge "),t._UZ(24,"br"),t._uU(25," and velocity to fast-track understanding and innovation, unlocking new discoveries. "),t.qZA()()()()),2&a&&(t.xp6(13),t.Q6J("ngStyle",t.DdM(1,v)))},dependencies:[l.PC,g.lC,g.rH],styles:["[_nghost-%COMP%]{height:100%}"]})}return e})();var p=m(1374),u=m(6021);function x(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"div",27)(2,"div",28),t._uU(3," Use account "),t.TgZ(4,"strong"),t._uU(5),t.qZA(),t._uU(6," and password "),t.TgZ(7,"strong"),t._uU(8),t.qZA(),t._uU(9," to continue. "),t.qZA()(),t.BQk()),2&e){const n=t.oxw();t.xp6(5),t.Oqu(n.defaultAuth.email),t.xp6(3),t.Oqu(n.defaultAuth.password)}}function T(e,s){1&e&&(t.ynx(0),t.TgZ(1,"div",29)(2,"div",30),t._uU(3," The login details are incorrect "),t.qZA()(),t.BQk())}function Z(e,s){1&e&&(t.ynx(0),t.TgZ(1,"span",31),t._uU(2," Please wait... "),t._UZ(3,"span",32),t.qZA(),t.BQk()),2&e&&(t.xp6(1),t.Udp("display","block"))}function C(e,s){1&e&&(t.ynx(0),t.TgZ(1,"span",33),t._uU(2,"Continue"),t.qZA(),t.BQk())}function y(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"div",34)(2,"span",35),t._uU(3),t.qZA()(),t.BQk()),2&e){const n=t.oxw().message;t.xp6(3),t.hij(" ",n," ")}}function q(e,s){if(1&e&&t.YNc(0,y,4,1,"ng-container",12),2&e){const n=s.control;t.Q6J("ngIf",n.hasError(s.validation)&&(n.dirty||n.touched))}}const h=function(e,s){return{"is-invalid":e,"is-valid":s}},k=function(e){return{validation:"required",message:"Email is required",control:e}},F=function(e){return{validation:"email",message:"Email is invalid",control:e}},O=function(e){return{validation:"minLength",message:"Email should have at least 3 symbols",control:e}},U=function(e){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:e}},A=function(e){return{validation:"required",message:"Password is required",control:e}},P=function(e){return{validation:"minlength",message:"Password should have at least 3 symbols",control:e}},L=function(e){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:e}};let J=(()=>{class e{fb;authService;route;router;defaultAuth={email:"admin@demo.com",password:"demo"};loginForm;hasError;returnUrl;isLoading$;unsubscribe=[];constructor(n,a,o,i){this.fb=n,this.authService=a,this.route=o,this.router=i,this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.initForm(),this.returnUrl=this.route.snapshot.queryParams["returnUrl".toString()]||"/"}get f(){return this.loginForm.controls}initForm(){this.loginForm=this.fb.group({email:[this.defaultAuth.email,r.kI.compose([r.kI.required,r.kI.email,r.kI.minLength(3),r.kI.maxLength(320)])],password:[this.defaultAuth.password,r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])]})}submit(){this.hasError=!1;const n=this.authService.login(this.f.email.value,this.f.password.value).pipe((0,p.P)()).subscribe(a=>{a?this.router.navigate([this.returnUrl]):this.hasError=!0});this.unsubscribe.push(n)}ngOnDestroy(){this.unsubscribe.forEach(n=>n.unsubscribe())}static \u0275fac=function(a){return new(a||e)(t.Y36(r.qu),t.Y36(u.e),t.Y36(g.gz),t.Y36(g.F0))};static \u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:52,vars:46,consts:[["novalidate","novalidate","id","kt_login_signin_form",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"text-center","mb-11"],[1,"text-dark","fw-bolder","mb-3"],[1,"text-gray-500","fw-semibold","fs-6"],[1,"row","g-3","mb-9"],[1,"col-md-6"],["href","#",1,"btn","btn-flex","btn-outline","btn-text-gray-700","btn-active-color-primary","bg-state-light","flex-center","text-nowrap","w-100"],["alt","Logo","src","./assets/media/svg/brand-logos/google-icon.svg",1,"h-15px","me-3"],["alt","Logo","src","./assets/media/svg/brand-logos/apple-black.svg",1,"theme-light-show","h-15px","me-3"],["alt","Logo","src","./assets/media/svg/brand-logos/apple-black-dark.svg",1,"theme-dark-show","h-15px","me-3"],[1,"separator","separator-content","my-14"],[1,"w-125px","text-gray-500","fw-semibold","fs-7"],[4,"ngIf"],[1,"fv-row","mb-8"],[1,"form-label","fs-6","fw-bolder","text-dark"],["type","email","name","email","formControlName","email","autocomplete","off",1,"form-control","bg-transparent",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"fv-row","mb-3"],[1,"form-label","fw-bolder","text-dark","fs-6","mb-0"],["type","password","name","password","autocomplete","off","formControlName","password",1,"form-control","bg-transparent",3,"ngClass"],[1,"d-flex","flex-stack","flex-wrap","gap-3","fs-base","fw-semibold","mb-8"],["routerLink","/auth/forgot-password",1,"link-primary"],[1,"d-grid","mb-10"],["type","submit","id","kt_sign_in_submit",1,"btn","btn-primary",3,"disabled"],[1,"text-gray-500","text-center","fw-semibold","fs-6"],["routerLink","/auth/registration",1,"link-primary"],["formError",""],[1,"mb-10","bg-light-info","p-8","rounded"],[1,"text-info"],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"indicator-label"],[1,"fv-plugins-message-container"],["role","alert"]],template:function(a,o){if(1&a&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"div",1)(2,"h1",2),t._uU(3," Sign In "),t.qZA(),t.TgZ(4,"div",3),t._uU(5," Your Social Campaigns "),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"a",6),t._UZ(9,"img",7),t._uU(10," Sign in with Google "),t.qZA()(),t.TgZ(11,"div",5)(12,"a",6),t._UZ(13,"img",8)(14,"img",9),t._uU(15," Sign in with Apple "),t.qZA()()(),t.TgZ(16,"div",10)(17,"span",11),t._uU(18,"Or with email"),t.qZA()(),t.YNc(19,x,10,2,"ng-container",12),t.YNc(20,T,4,0,"ng-container",12),t.TgZ(21,"div",13)(22,"label",14),t._uU(23,"Email"),t.qZA(),t._UZ(24,"input",15),t.GkF(25,16)(26,16)(27,16)(28,16),t.qZA(),t.TgZ(29,"div",17)(30,"label",18),t._uU(31,"Password"),t.qZA(),t._UZ(32,"input",19),t.GkF(33,16)(34,16)(35,16),t.qZA(),t.TgZ(36,"div",20),t._UZ(37,"div"),t.TgZ(38,"a",21),t._uU(39," Forgot Password ? "),t.qZA()(),t.TgZ(40,"div",22)(41,"button",23),t.YNc(42,Z,4,2,"ng-container",12),t.ALo(43,"async"),t.YNc(44,C,3,0,"ng-container",12),t.ALo(45,"async"),t.qZA()(),t.TgZ(46,"div",24),t._uU(47," Not a Member yet? "),t.TgZ(48,"a",25),t._uU(49," Sign up "),t.qZA()()(),t.YNc(50,q,1,1,"ng-template",null,26,t.W1O)),2&a){const i=t.MAs(51);t.Q6J("formGroup",o.loginForm),t.xp6(19),t.Q6J("ngIf",!o.hasError),t.xp6(1),t.Q6J("ngIf",o.hasError),t.xp6(4),t.Q6J("ngClass",t.WLB(26,h,o.loginForm.controls.email.invalid,o.loginForm.controls.email.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(29,k,o.loginForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(31,F,o.loginForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(33,O,o.loginForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(35,U,o.loginForm.controls.email)),t.xp6(4),t.Q6J("ngClass",t.WLB(37,h,o.loginForm.controls.password.invalid,o.loginForm.controls.password.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(40,A,o.loginForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(42,P,o.loginForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(44,L,o.loginForm.controls.password)),t.xp6(6),t.Q6J("disabled",o.loginForm.invalid),t.xp6(1),t.Q6J("ngIf",t.lcZ(43,22,o.isLoading$)),t.xp6(2),t.Q6J("ngIf",!1===t.lcZ(45,24,o.isLoading$))}},dependencies:[l.mk,l.O5,l.tP,g.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,l.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]})}return e})();class Q{static MatchPassword(s){const n=s.get("password")?.value,a=s.get("cPassword")?.value;n!==a&&s.get("cPassword")?.setErrors({ConfirmPassword:!0})}}var I=m(6631);class S extends I.W{id;username;password;fullname;email;pic;roles=[];occupation;companyName;phone;address;socialNetworks;firstname;lastname;website;language;timeZone;communication;emailSettings;setUser(s){const n=s;this.id=n.id,this.username=n.username||"",this.password=n.password||"",this.fullname=n.fullname||"",this.email=n.email||"",this.pic=n.pic||"./assets/media/avatars/blank.png",this.roles=n.roles||[],this.occupation=n.occupation||"",this.companyName=n.companyName||"",this.phone=n.phone||"",this.address=n.address,this.socialNetworks=n.socialNetworks}}function N(e,s){1&e&&(t.ynx(0),t.TgZ(1,"div",29)(2,"div",30),t._uU(3," The registration details are incorrect "),t.qZA()(),t.BQk())}function E(e,s){1&e&&(t.ynx(0),t.TgZ(1,"div",31)(2,"div",32),t._uU(3," 'Passsword' and 'Confirm Password' didn't match. "),t.qZA()(),t.BQk())}function M(e,s){1&e&&(t.ynx(0),t.TgZ(1,"span",33),t._uU(2,"Submit"),t.qZA(),t.BQk())}function Y(e,s){1&e&&(t.ynx(0),t.TgZ(1,"span",34),t._uU(2," Please wait... "),t._UZ(3,"span",35),t.qZA(),t.BQk()),2&e&&(t.xp6(1),t.Udp("display","block"))}function V(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"div",31)(2,"div",32)(3,"span",36),t._uU(4),t.qZA()()(),t.BQk()),2&e){const n=t.oxw().message;t.xp6(4),t.hij(" ",n," ")}}function B(e,s){if(1&e&&t.YNc(0,V,5,1,"ng-container",12),2&e){const n=s.control;t.Q6J("ngIf",n.hasError(s.validation)&&(n.dirty||n.touched))}}const d=function(e,s){return{"is-invalid":e,"is-valid":s}},K=function(e){return{validation:"required",message:"Fullname is required",control:e}},G=function(e){return{validation:"minlength",message:"Fullname should have at least 3 symbols",control:e}},$=function(e){return{validation:"maxLength",message:"Fullname should have maximum 100 symbols",control:e}},W=function(e){return{validation:"required",message:"Email is required",control:e}},R=function(e){return{validation:"email",message:"Email is invalid",control:e}},j=function(e){return{validation:"minlength",message:"Email should have at least 3 symbols",control:e}},H=function(e){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:e}},z=function(e){return{validation:"required",message:"Password is required",control:e}},X=function(e){return{validation:"minlength",message:"Password should have at least 3 symbols",control:e}},D=function(e){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:e}},tt=function(e){return{validation:"required",message:"Confirm Password is required",control:e}},et=function(e){return{validation:"minlength",message:"Confirm Password should have at least 3 symbols",control:e}},ot=function(e){return{validation:"maxLength",message:"Confirm Password should have maximum 100 symbols",control:e}};let nt=(()=>{class e{fb;authService;router;registrationForm;hasError;isLoading$;unsubscribe=[];constructor(n,a,o){this.fb=n,this.authService=a,this.router=o,this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.initForm()}get f(){return this.registrationForm.controls}initForm(){this.registrationForm=this.fb.group({fullname:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],email:["qwe@qwe.qwe",r.kI.compose([r.kI.required,r.kI.email,r.kI.minLength(3),r.kI.maxLength(320)])],password:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],cPassword:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],agree:[!1,r.kI.compose([r.kI.required])]},{validator:Q.MatchPassword})}submit(){this.hasError=!1;const n={};Object.keys(this.f).forEach(i=>{n[i]=this.f[i].value});const a=new S;a.setUser(n);const o=this.authService.registration(a).pipe((0,p.P)()).subscribe(i=>{i?this.router.navigate(["/"]):this.hasError=!0});this.unsubscribe.push(o)}ngOnDestroy(){this.unsubscribe.forEach(n=>n.unsubscribe())}static \u0275fac=function(a){return new(a||e)(t.Y36(r.qu),t.Y36(u.e),t.Y36(g.F0))};static \u0275cmp=t.Xpm({type:e,selectors:[["app-registration"]],decls:70,vars:78,consts:[["novalidate","novalidate","id","kt_login_signup_form",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"text-center","mb-11"],[1,"text-dark","fw-bolder","mb-3"],[1,"text-gray-500","fw-semibold","fs-6"],[1,"row","g-3","mb-9"],[1,"col-md-6"],["href","#",1,"btn","btn-flex","btn-outline","btn-text-gray-700","btn-active-color-primary","bg-state-light","flex-center","text-nowrap","w-100"],["alt","Logo","src","./assets/media/svg/brand-logos/google-icon.svg",1,"h-15px","me-3"],["alt","Logo","src","./assets/media/svg/brand-logos/apple-black.svg",1,"theme-light-show","h-15px","me-3"],["alt","Logo","src","./assets/media/svg/brand-logos/apple-black-dark.svg",1,"theme-dark-show","h-15px","me-3"],[1,"separator","separator-content","my-14"],[1,"w-125px","text-gray-500","fw-semibold","fs-7"],[4,"ngIf"],[1,"fv-row","mb-8"],[1,"form-label","fw-bolder","text-dark","fs-6"],["type","text","name","fullname","formControlName","fullname","placeholder","Fullname","autocomplete","off",1,"form-control","bg-transparent",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","email","placeholder","Email","name","email","formControlName","email","autocomplete","off",1,"form-control","bg-transparent",3,"ngClass"],["type","password","placeholder","Password","name","password","formControlName","password","autocomplete","off",1,"form-control","bg-transparent",3,"ngClass"],["type","password","placeholder","Confirm password","name","cPassword","autocomplete","off","formControlName","cPassword",1,"form-control","bg-transparent",3,"ngClass"],[1,"form-check","form-check-inline"],["id","kt_login_toc_agree","type","checkbox","formControlName","agree","name","agree",1,"form-check-input"],["for","kt_login_toc_agree",1,"form-check-label","fw-semibold","text-gray-700","fs-base","ms-1"],["href","https://keenthemes.com/metronic/?page=faq","target","_blank",1,"ms-1","link-primary"],[1,"d-grid","mb-10"],["type","submit","id","kt_sign_up_submit",1,"btn","btn-primary",3,"disabled"],[1,"text-gray-500","text-center","fw-semibold","fs-6"],["routerLink","/auth/login",1,"link-primary","fw-semibold"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],["role","alert"]],template:function(a,o){if(1&a&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"div",1)(2,"h1",2),t._uU(3," Sign Up "),t.qZA(),t.TgZ(4,"div",3),t._uU(5," Your Social Campaigns "),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"a",6),t._UZ(9,"img",7),t._uU(10," Sign in with Google "),t.qZA()(),t.TgZ(11,"div",5)(12,"a",6),t._UZ(13,"img",8)(14,"img",9),t._uU(15," Sign in with Apple "),t.qZA()()(),t.TgZ(16,"div",10)(17,"span",11),t._uU(18,"Or with email"),t.qZA()(),t.YNc(19,N,4,0,"ng-container",12),t.TgZ(20,"div",13)(21,"label",14),t._uU(22,"Fullname"),t.qZA(),t._UZ(23,"input",15),t.GkF(24,16)(25,16)(26,16),t.qZA(),t.TgZ(27,"div",13)(28,"label",14),t._uU(29,"Email"),t.qZA(),t._UZ(30,"input",17),t.GkF(31,16)(32,16)(33,16)(34,16),t.qZA(),t.TgZ(35,"div",13)(36,"label",14),t._uU(37,"Password"),t.qZA(),t._UZ(38,"input",18),t.GkF(39,16)(40,16)(41,16),t.qZA(),t.TgZ(42,"div",13)(43,"label",14),t._uU(44,"Confirm Password"),t.qZA(),t._UZ(45,"input",19),t.GkF(46,16)(47,16)(48,16),t.YNc(49,E,4,0,"ng-container",12),t.qZA(),t.TgZ(50,"div",13)(51,"label",20),t._UZ(52,"input",21),t.TgZ(53,"span",22),t._uU(54," I Accept the\xa0"),t.TgZ(55,"a",23),t._uU(56,"Terms"),t.qZA(),t._uU(57,". "),t.qZA()()(),t.TgZ(58,"div",24)(59,"button",25),t.YNc(60,M,3,0,"ng-container",12),t.ALo(61,"async"),t.YNc(62,Y,4,2,"ng-container",12),t.ALo(63,"async"),t.qZA()(),t.TgZ(64,"div",26),t._uU(65," Already have an Account? "),t.TgZ(66,"a",27),t._uU(67," Sign in "),t.qZA()()(),t.YNc(68,B,1,1,"ng-template",null,28,t.W1O)),2&a){const i=t.MAs(69);t.Q6J("formGroup",o.registrationForm),t.xp6(19),t.Q6J("ngIf",o.hasError),t.xp6(4),t.Q6J("ngClass",t.WLB(40,d,o.registrationForm.controls.fullname.invalid,o.registrationForm.controls.fullname.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(43,K,o.registrationForm.controls.fullname)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(45,G,o.registrationForm.controls.fullname)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(47,$,o.registrationForm.controls.fullname)),t.xp6(4),t.Q6J("ngClass",t.WLB(49,d,o.registrationForm.controls.email.invalid,o.registrationForm.controls.email.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(52,W,o.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(54,R,o.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(56,j,o.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(58,H,o.registrationForm.controls.email)),t.xp6(4),t.Q6J("ngClass",t.WLB(60,d,o.registrationForm.controls.password.invalid,o.registrationForm.controls.password.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(63,z,o.registrationForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(65,X,o.registrationForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(67,D,o.registrationForm.controls.password)),t.xp6(4),t.Q6J("ngClass",t.WLB(69,d,o.registrationForm.controls.cPassword.invalid,o.registrationForm.controls.cPassword.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(72,tt,o.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(74,et,o.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(76,ot,o.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngIf",o.registrationForm.controls.cPassword.errors&&o.registrationForm.controls.cPassword.errors.ConfirmPassword),t.xp6(10),t.Q6J("disabled",o.registrationForm.invalid||!o.registrationForm.controls.agree.value),t.xp6(1),t.Q6J("ngIf",!1===t.lcZ(61,36,o.isLoading$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(63,38,o.isLoading$))}},dependencies:[l.mk,l.O5,l.tP,g.rH,r._Y,r.Fj,r.Wl,r.JJ,r.JL,r.sg,r.u,l.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]})}return e})();function rt(e,s){1&e&&(t.ynx(0),t.TgZ(1,"div",14)(2,"div",15),t._uU(3," Sorry, looks like there are some errors detected, please try again. "),t.qZA()(),t.BQk())}function at(e,s){1&e&&(t.ynx(0),t.TgZ(1,"div",16)(2,"div",17),t._uU(3,"Sent password reset. Please check your email"),t.qZA()(),t.BQk())}function it(e,s){1&e&&(t.ynx(0),t.TgZ(1,"span",18),t._uU(2," Please wait... "),t._UZ(3,"span",19),t.qZA(),t.BQk())}function st(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"div",20)(2,"div",21)(3,"span",22),t._uU(4),t.qZA()()(),t.BQk()),2&e){const n=t.oxw().message;t.xp6(4),t.Oqu(n)}}function lt(e,s){if(1&e&&t.YNc(0,st,5,1,"ng-container",4),2&e){const n=s.control;t.Q6J("ngIf",n.hasError(s.validation)&&(n.dirty||n.touched))}}const mt=function(e,s){return{"is-invalid":e,"is-valid":s}},gt=function(e){return{validation:"required",message:"Email is required",control:e}},ct=function(e){return{validation:"email",message:"Email is invalid",control:e}},ut=function(e){return{validation:"minLength",message:"Email should have at least 3 symbols",control:e}},dt=function(e){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:e}};var c=function(e){return e[e.NotSubmitted=0]="NotSubmitted",e[e.HasError=1]="HasError",e[e.NoError=2]="NoError",e}(c||{});const ht=[{path:"",component:w,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:J,data:{returnUrl:window.location.pathname}},{path:"registration",component:nt},{path:"forgot-password",component:(()=>{class e{fb;authService;forgotPasswordForm;errorState=c.NotSubmitted;errorStates=c;isLoading$;unsubscribe=[];constructor(n,a){this.fb=n,this.authService=a,this.isLoading$=this.authService.isLoading$}ngOnInit(){this.initForm()}get f(){return this.forgotPasswordForm.controls}initForm(){this.forgotPasswordForm=this.fb.group({email:["admin@demo.com",r.kI.compose([r.kI.required,r.kI.email,r.kI.minLength(3),r.kI.maxLength(320)])]})}submit(){this.errorState=c.NotSubmitted;const n=this.authService.forgotPassword(this.f.email.value).pipe((0,p.P)()).subscribe(a=>{this.errorState=a?c.NoError:c.HasError});this.unsubscribe.push(n)}static \u0275fac=function(a){return new(a||e)(t.Y36(r.qu),t.Y36(u.e))};static \u0275cmp=t.Xpm({type:e,selectors:[["app-forgot-password"]],decls:26,vars:26,consts:[["novalidate","novalidate","id","kt_login_password_reset_form",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"text-center","mb-10"],[1,"text-dark","fw-bolder","mb-3"],[1,"text-gray-500","fw-semibold","fs-6"],[4,"ngIf"],[1,"fv-row","mb-8"],[1,"form-label","fw-bolder","text-gray-900","fs-6"],["type","email","formControlName","email","placeholder","Email","name","email","autocomplete","off",1,"form-control","bg-transparent",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","flex-wrap","justify-content-center","pb-lg-0"],["type","submit","id","kt_password_reset_submit",1,"btn","btn-primary","me-4"],[1,"indicator-label"],["routerLink","/auth/login","id","kt_login_password_reset_form_cancel_button",1,"btn","btn-light"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"mb-10","bg-light-info","p-8","rounded"],[1,"text-info"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],["role","alert"]],template:function(a,o){if(1&a&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"div",1)(2,"h1",2),t._uU(3," Forgot Password ? "),t.qZA(),t.TgZ(4,"div",3),t._uU(5," Enter your email to reset your password. "),t.qZA()(),t.YNc(6,rt,4,0,"ng-container",4),t.YNc(7,at,4,0,"ng-container",4),t.TgZ(8,"div",5)(9,"label",6),t._uU(10,"Email"),t.qZA(),t._UZ(11,"input",7),t.GkF(12,8)(13,8)(14,8)(15,8),t.qZA(),t.TgZ(16,"div",9)(17,"button",10)(18,"span",11),t._uU(19,"Submit"),t.qZA(),t.YNc(20,it,4,0,"ng-container",4),t.ALo(21,"async"),t.qZA(),t.TgZ(22,"a",12),t._uU(23," Cancel "),t.qZA()()(),t.YNc(24,lt,1,1,"ng-template",null,13,t.W1O)),2&a){const i=t.MAs(25);t.Q6J("formGroup",o.forgotPasswordForm),t.xp6(6),t.Q6J("ngIf",o.errorState===o.errorStates.HasError),t.xp6(1),t.Q6J("ngIf",o.errorState===o.errorStates.NoError),t.xp6(4),t.Q6J("ngClass",t.WLB(15,mt,o.forgotPasswordForm.controls.email.invalid,o.forgotPasswordForm.controls.email.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(18,gt,o.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(20,ct,o.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(22,ut,o.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(24,dt,o.forgotPasswordForm.controls.email)),t.xp6(5),t.Q6J("ngIf",t.lcZ(21,13,o.isLoading$))}},dependencies:[l.mk,l.O5,l.tP,g.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,l.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]})}return e})()},{path:"logout",component:(()=>{class e{authService;constructor(n){this.authService=n,this.authService.logout()}ngOnInit(){}static \u0275fac=function(a){return new(a||e)(t.Y36(u.e))};static \u0275cmp=t.Xpm({type:e,selectors:[["app-logout"]],decls:2,vars:0,template:function(a,o){1&a&&(t.TgZ(0,"p"),t._uU(1,"logout works!"),t.qZA())}})}return e})()},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}]}];let _t=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=t.oAB({type:e});static \u0275inj=t.cJS({imports:[g.Bz.forChild(ht),g.Bz]})}return e})();var bt=m(3660);let vt=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=t.oAB({type:e});static \u0275inj=t.cJS({imports:[l.ez,bt.q,_t,r.u5,r.UX,_.JF]})}return e})()}}]);