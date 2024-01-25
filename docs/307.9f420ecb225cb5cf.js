"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[307],{4307:(K,d,a)=>{a.r(d),a.d(d,{KnowledgeModule:()=>A});var r=a(6814),p=a(7304),e=a(5879),g=a(9354),l=a(6223);let m=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["app-knowledge-videos"]],decls:2,vars:0,consts:[["data-bs-toggle","modal","data-bs-target","#kt_modal_create_project",1,"btn","btn-primary","btn-sm","cursor-pointer"]],template:function(s,o){1&s&&(e.TgZ(0,"a",0),e._uU(1," Add Youtube Video"),e.qZA())}})}return t})();var u=a(8354);let v=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["app-knowledge-documents"]],decls:16,vars:0,consts:[[1,"row","g-6","g-xl-9","mb-6","mb-xl-9"],[1,"col-12","col-sm-12","col-xl"],["icon","./assets/media/svg/files/pdf.svg","title","Project Reqs..","description","3 days ago"],["icon","./assets/media/svg/files/doc.svg","title","CRM App Docs..","description","3 days ago"],["icon","./assets/media/svg/files/css.svg","title","User CRUD Styles","description","4 days ago"],["icon","./assets/media/svg/files/ai.svg","title","Metronic Logo","description","5 days ago"],["icon","./assets/media/svg/files/sql.svg","title","Orders backup","description","1 week ago"],["icon","./assets/media/svg/files/xml.svg","title","UTAIR CRM API Co..","description","2 week ago"],["icon","./assets/media/svg/files/tif.svg","title","Tower Hill App..","description","3 week ago"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-card4",2),e.qZA(),e.TgZ(3,"div",1),e._UZ(4,"app-card4",3),e.qZA(),e.TgZ(5,"div",1),e._UZ(6,"app-card4",4),e.qZA(),e.TgZ(7,"div",1),e._UZ(8,"app-card4",5),e.qZA(),e.TgZ(9,"div",1),e._UZ(10,"app-card4",6),e.qZA()(),e.TgZ(11,"div",0)(12,"div",1),e._UZ(13,"app-card4",7),e.qZA(),e.TgZ(14,"div",1),e._UZ(15,"app-card4",8),e.qZA()())},dependencies:[u.k]})}return t})(),f=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["app-knowledge-quizzes"]],decls:2,vars:0,template:function(s,o){1&s&&(e.TgZ(0,"p"),e._uU(1,"knowledge-quizzes works!"),e.qZA())}})}return t})();const Z=["form"],i=function(t){return{active:t}};let T=(()=>{class t{layout;activeTab="Videos";model;form;configLoading=!1;resetLoading=!1;constructor(n){this.layout=n}ngOnInit(){this.model=this.layout.getLayoutConfig(this.layout.getBaseLayoutTypeFromLocalStorage())}setActiveTab(n){this.activeTab=n}resetPreview(){this.resetLoading=!0,this.layout.resetBaseConfig()}submitPreview(){this.configLoading=!0,this.layout.saveBaseConfig(this.model)}static \u0275fac=function(s){return new(s||t)(e.Y36(g.Pb))};static \u0275cmp=e.Xpm({type:t,selectors:[["app-knowledge"]],viewQuery:function(s,o){if(1&s&&e.Gf(Z,7),2&s){let c;e.iGM(c=e.CRH())&&(o.form=c.first)}},decls:22,vars:18,consts:[[1,"card","card-custom"],[1,"card-header","card-header-stretch","overflow-auto"],["role","tablist",1,"nav","nav-stretch","nav-line-tabs","fw-bold","border-transparent","flex-nowrap"],[1,"nav-item"],["role","tab",1,"nav-link","cursor-pointer","tab-menu",3,"ngClass","click"],["novalidate","",1,"form",3,"ngSubmit"],["form","ngForm"],[1,"card-body"],[1,"tab-content","pt-3"],[1,"tab-pane",3,"ngClass"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"ul",2)(3,"li",3)(4,"a",4),e.NdJ("click",function(){return o.setActiveTab("Videos")}),e._uU(5," Videos "),e.qZA()(),e.TgZ(6,"li",3)(7,"a",4),e.NdJ("click",function(){return o.setActiveTab("Documents")}),e._uU(8," Documents "),e.qZA()(),e.TgZ(9,"li",3)(10,"a",4),e.NdJ("click",function(){return o.setActiveTab("Quizzes")}),e._uU(11," Quizzes "),e.qZA()()()(),e.TgZ(12,"form",5,6),e.NdJ("ngSubmit",function(){return o.submitPreview()}),e.TgZ(14,"div",7)(15,"div",8)(16,"div",9),e._UZ(17,"app-knowledge-videos"),e.qZA(),e.TgZ(18,"div",9),e._UZ(19,"app-knowledge-documents"),e.qZA(),e.TgZ(20,"div",9),e._UZ(21,"app-knowledge-quizzes"),e.qZA()()()()()),2&s&&(e.xp6(4),e.Q6J("ngClass",e.VKq(6,i,"Videos"===o.activeTab)),e.xp6(3),e.Q6J("ngClass",e.VKq(8,i,"Documents"===o.activeTab)),e.xp6(3),e.Q6J("ngClass",e.VKq(10,i,"Quizzes"===o.activeTab)),e.xp6(6),e.Q6J("ngClass",e.VKq(12,i,"Videos"===o.activeTab)),e.xp6(2),e.Q6J("ngClass",e.VKq(14,i,"Documents"===o.activeTab)),e.xp6(2),e.Q6J("ngClass",e.VKq(16,i,"Quizzes"===o.activeTab)))},dependencies:[r.mk,l._Y,l.JL,l.F,m,v,f],encapsulation:2})}return t})();var w=a(2235),C=a(53),b=a(4955),y=a(2595);let A=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[r.ez,l.u5,y.mH,C.vi,w.HK,b.m,p.Bz.forChild([{path:"",component:T}])]})}return t})()}}]);