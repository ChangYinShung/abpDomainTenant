(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"MM+m":function(t,e,n){"use strict";n.r(e),n.d(e,"SettingManagementComponent",(function(){return m})),n.d(e,"SettingManagementModule",(function(){return y})),n.d(e,"\u0275a",(function(){return h})),n.d(e,"\u0275b",(function(){return g})),n.d(e,"\u0275c",(function(){return u}));var c=n("HmNo"),i=n("1REP"),a=n("tyNb"),o=n("AcyG"),r=n("mrSG"),s=n("fXoL"),b=n("ofXK");function l(t,e){if(1&t){const t=s.Wb();s.Vb(0,"li",15),s.hc("click",(function(){s.zc(t);const n=e.$implicit;return s.jc().selected=n})),s.Vb(1,"a",16),s.Hc(2),s.kc(3,"abpLocalization"),s.Ub(),s.Ub()}if(2&t){const t=e.$implicit,n=s.jc();s.pc("abpPermission",t.requiredPolicy),s.Cb(1),s.Hb("active",t.name===n.selected.name),s.pc("id",t.name+"-tab"),s.Cb(1),s.Ic(s.lc(3,5,t.name))}}function d(t,e){1&t&&s.Rb(0)}function p(t,e){if(1&t&&(s.Vb(0,"div",17),s.Vb(1,"div",18),s.Fc(2,d,1,0,"ng-container",19),s.Ub(),s.Ub()),2&t){const t=s.jc();s.Cb(1),s.pc("id",t.selected.name+"-tab"),s.Cb(1),s.pc("ngComponentOutlet",t.selected.component)}}let u=(()=>{class t{constructor(t){this.payload=t}}return t.type="[SettingManagement] Set Selected Tab",t})(),g=(()=>{let t=class{static getSelectedTab({selectedTab:t}){return t}settingManagementAction({patchState:t},{payload:e}){t({selectedTab:e})}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Lb({token:t,factory:t.\u0275fac}),Object(r.b)([Object(o.a)(u),Object(r.c)("design:type",Function),Object(r.c)("design:paramtypes",[Object,u]),Object(r.c)("design:returntype",void 0)],t.prototype,"settingManagementAction",null),Object(r.b)([Object(o.g)(),Object(r.c)("design:type",Function),Object(r.c)("design:paramtypes",[Object]),Object(r.c)("design:returntype",void 0)],t,"getSelectedTab",null),t=Object(r.b)([Object(o.h)({name:"SettingManagementState",defaults:{selectedTab:{}}})],t),t})(),m=(()=>{class t{constructor(t){this.store=t,this.settings=[],this.trackByFn=(t,e)=>e.name}set selected(t){this.store.dispatch(new u(t))}get selected(){const t=this.store.selectSnapshot(g.getSelectedTab);return t&&t.component||!this.settings.length?t:this.settings[0]}ngOnInit(){this.settings=Object(i.q)().filter(t=>this.store.selectSnapshot(c.e.getGrantedPolicy(t.requiredPolicy))).sort((t,e)=>t.order-e.order),!this.selected&&this.settings.length&&(this.selected=this.settings[0])}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(o.j))},t.\u0275cmp=s.Jb({type:t,selectors:[["abp-setting-management"]],decls:18,vars:6,consts:[[1,"row","entry-row"],[1,"col-auto"],[1,"content-header-title"],["id","breadcrumb",1,"col-lg-auto","pl-lg-0"],[1,"col"],["id","AbpContentToolbar",1,"text-lg-right","pt-2"],["id","SettingManagementWrapper"],[1,"card"],[1,"card-body"],[1,"row"],[1,"col-12","col-md-3"],["id","nav-tab","role","tablist",1,"nav","flex-column","nav-pills"],["class","nav-item pointer",3,"abpPermission","click",4,"abpFor","abpForOf","abpForTrackBy"],[1,"col-12","col-md-9"],["class","tab-content",4,"ngIf"],[1,"nav-item","pointer",3,"abpPermission","click"],["role","tab",1,"nav-link",3,"id"],[1,"tab-content"],["role","tabpanel",1,"tab-pane","fade","show","active",3,"id"],[4,"ngComponentOutlet"]],template:function(t,e){1&t&&(s.Vb(0,"div",0),s.Vb(1,"div",1),s.Vb(2,"h1",2),s.Hc(3),s.kc(4,"abpLocalization"),s.Ub(),s.Ub(),s.Vb(5,"div",3),s.Qb(6,"abp-breadcrumb"),s.Ub(),s.Vb(7,"div",4),s.Qb(8,"div",5),s.Ub(),s.Ub(),s.Vb(9,"div",6),s.Vb(10,"div",7),s.Vb(11,"div",8),s.Vb(12,"div",9),s.Vb(13,"div",10),s.Vb(14,"ul",11),s.Fc(15,l,4,7,"li",12),s.Ub(),s.Ub(),s.Vb(16,"div",13),s.Fc(17,p,3,2,"div",14),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub()),2&t&&(s.Cb(3),s.Ic(s.lc(4,4,"AbpSettingManagement::Settings")),s.Cb(12),s.pc("abpForOf",e.settings)("abpForTrackBy",e.trackByFn),s.Cb(2),s.pc("ngIf",e.settings.length))},directives:[i.a,c.i,b.n,c.r,b.l],pipes:[c.o],encapsulation:2}),t})();const f=[{path:"",component:c.g,children:[{path:"",component:c.u,data:{requiredPolicy:"AbpAccount.SettingManagement",replaceableComponent:{key:"SettingManagement.SettingManagementComponent",defaultComponent:m}}}]}];let h=(()=>{class t{}return t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({factory:function(e){return new(e||t)},imports:[[a.j.forChild(f)],a.j]}),t})(),y=(()=>{class t{}return t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({factory:function(e){return new(e||t)},imports:[[h,c.f,i.l,o.e.forFeature([g])]]}),t})()}}]);