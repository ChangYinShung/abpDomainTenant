(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6MLJ":function(e,t,n){"use strict";n.r(t);var a=n("HmNo"),c=n("1REP"),i=n("fXoL"),o=n("1kSV"),r=n("AcyG"),s=n("mrSG"),l=n("3Pt+"),u=n("HDdC"),b=n("vkgz"),d=n("wO+i"),p=n("eIep"),m=n("IzEk"),g=n("nYR2"),f=n("tyNb"),h=n("ofXK");function y(e,t){1&e&&(i.Vb(0,"h3"),i.Hc(1),i.kc(2,"abpLocalization"),i.Ub()),2&e&&(i.Cb(1),i.Ic(i.lc(2,1,"AbpFeatureManagement::Features")))}function v(e,t){if(1&e&&(i.Vb(0,"div",11),i.Qb(1,"input",12),i.Ub()),2&e){const e=i.jc().index;i.Cb(1),i.pc("formControlName",e)}}function C(e,t){if(1&e&&(i.Vb(0,"div",11),i.Qb(1,"input",13),i.Ub()),2&e){const e=i.jc().index;i.Cb(1),i.pc("formControlName",e)}}function T(e,t){if(1&e&&(i.Vb(0,"div",8),i.Vb(1,"div",9),i.Hc(2),i.Ub(),i.Fc(3,v,2,1,"div",10),i.Fc(4,C,2,1,"div",10),i.Ub()),2&e){const e=t.$implicit;i.pc("ngSwitch",e.valueType.name),i.Cb(2),i.Ic(e.name),i.Cb(1),i.pc("ngSwitchCase","ToggleStringValueType"),i.Cb(1),i.pc("ngSwitchCase","FreeTextStringValueType")}}function j(e,t){1&e&&(i.Vb(0,"div"),i.Hc(1),i.kc(2,"abpLocalization"),i.Ub()),2&e&&(i.Cb(1),i.Jc(" ",i.lc(2,1,"AbpFeatureManagement::NoFeatureFoundMessage")," "))}function S(e,t){if(1&e){const e=i.Wb();i.Vb(0,"form",5),i.hc("ngSubmit",(function(){return i.zc(e),i.jc(2).save()})),i.Fc(1,T,5,4,"div",6),i.kc(2,"async"),i.Fc(3,j,3,3,"div",7),i.kc(4,"async"),i.Ub()}if(2&e){const e=i.jc(2);var n;const t=!(null!=(n=i.lc(4,5,e.features$))&&n.length);i.pc("formGroup",e.form),i.Cb(1),i.pc("ngForOf",i.lc(2,3,e.features$)),i.Cb(2),i.pc("ngIf",t)}}function F(e,t){if(1&e&&i.Fc(0,S,5,7,"form",4),2&e){const e=i.jc();i.pc("ngIf",e.form)}}function O(e,t){if(1&e){const e=i.Wb();i.Tb(0),i.Vb(1,"button",14,15),i.Hc(3),i.kc(4,"abpLocalization"),i.Ub(),i.Vb(5,"abp-button",16),i.hc("click",(function(){return i.zc(e),i.jc(2).save()})),i.Hc(6),i.kc(7,"abpLocalization"),i.Ub(),i.Sb()}if(2&e){const e=i.jc(2);i.Cb(3),i.Jc(" ",i.lc(4,3,"AbpFeatureManagement::Cancel")," "),i.Cb(2),i.pc("disabled",(null==e.form?null:e.form.invalid)||e.modalBusy),i.Cb(1),i.Jc(" ",i.lc(7,5,"AbpFeatureManagement::Save")," ")}}function M(e,t){if(1&e&&(i.Fc(0,O,8,7,"ng-container",7),i.kc(1,"async")),2&e){const e=i.jc();var n;const t=null==(n=i.lc(1,1,e.features$))?null:n.length;i.pc("ngIf",t)}}let w=(()=>{class e{constructor(e){this.payload=e}}return e.type="[FeatureManagement] Get Features",e})(),U=(()=>{class e{constructor(e){this.payload=e}}return e.type="[FeatureManagement] Update Features",e})(),V=(()=>{class e{constructor(e,t){this.rest=e,this.store=t}getFeatures(e){return this.rest.request({method:"GET",url:"/api/abp/features",params:e})}updateFeatures({features:e,providerKey:t,providerName:n}){return this.rest.request({method:"PUT",url:"/api/abp/features",body:{features:e},params:{providerKey:t,providerName:n}})}}return e.\u0275fac=function(t){return new(t||e)(i.dc(a.x),i.dc(r.j))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e.ngInjectableDef=Object(i.Lb)({factory:function(){return new e(Object(i.dc)(a.x),Object(i.dc)(r.j))},token:e,providedIn:"root"}),e})(),k=(()=>{let e=class{constructor(e){this.featureManagementService=e}static getFeatures({features:e}){return e||[]}getFeatures({patchState:e},{payload:t}){return this.featureManagementService.getFeatures(t).pipe(Object(b.a)(({features:t})=>e({features:t})))}updateFeatures(e,{payload:t}){return this.featureManagementService.updateFeatures(t)}};return e.\u0275fac=function(t){return new(t||e)(i.dc(V))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac}),Object(s.b)([Object(r.a)(w),Object(s.c)("design:type",Function),Object(s.c)("design:paramtypes",[Object,w]),Object(s.c)("design:returntype",void 0)],e.prototype,"getFeatures",null),Object(s.b)([Object(r.a)(U),Object(s.c)("design:type",Function),Object(s.c)("design:paramtypes",[Object,U]),Object(s.c)("design:returntype",void 0)],e.prototype,"updateFeatures",null),Object(s.b)([Object(r.g)(),Object(s.c)("design:type",Function),Object(s.c)("design:paramtypes",[Object]),Object(s.c)("design:returntype",void 0)],e,"getFeatures",null),e=Object(s.b)([Object(r.h)({name:"FeatureManagementState",defaults:{features:{}}})],e),e})(),I=(()=>{class e{constructor(e){this.store=e,this.visibleChange=new i.p,this.modalBusy=!1}get visible(){return this._visible}set visible(e){this._visible=e,this.visibleChange.emit(e),e&&this.openModal()}openModal(){if(!this.providerKey||!this.providerName)throw new Error("Provider Key and Provider Name are required.");this.getFeatures()}getFeatures(){this.store.dispatch(new w({providerKey:this.providerKey,providerName:this.providerName})).pipe(Object(d.a)("FeatureManagementState","features")).subscribe(e=>{this.buildForm(e)})}buildForm(e){const t={};for(let n=0;n<e.length;n++)t[n]=new l.d("false"===e[n].value?null:e[n].value);this.form=new l.g(t)}save(){if(this.modalBusy)return;this.modalBusy=!0;let e=this.store.selectSnapshot(k.getFeatures);e=e.map((e,t)=>({name:e.name,value:this.form.value[t]&&"false"!==this.form.value[t]?this.form.value[t]:null})),this.store.dispatch(new U({providerKey:this.providerKey,providerName:this.providerName,features:e})).pipe(Object(g.a)(()=>this.modalBusy=!1)).subscribe(()=>{this.visible=!1})}}return e.\u0275fac=function(t){return new(t||e)(i.Pb(r.j))},e.\u0275cmp=i.Jb({type:e,selectors:[["abp-feature-management"]],inputs:{visible:"visible",providerKey:"providerKey",providerName:"providerName"},outputs:{visibleChange:"visibleChange"},exportAs:["abpFeatureManagement"],decls:7,vars:2,consts:[["size","md",3,"visible","busy","visibleChange"],["abpHeader",""],["abpBody",""],["abpFooter",""],["validateOnSubmit","",3,"formGroup","ngSubmit",4,"ngIf"],["validateOnSubmit","",3,"formGroup","ngSubmit"],["class","row my-3",3,"ngSwitch",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row","my-3",3,"ngSwitch"],[1,"col-4"],["class","col-8",4,"ngSwitchCase"],[1,"col-8"],["type","checkbox","name","feature.name",3,"formControlName"],["type","text","name","feature.name",3,"formControlName"],["type","button",1,"btn","btn-secondary"],["abpClose",""],["iconClass","fa fa-check",3,"disabled","click"]],template:function(e,t){1&e&&(i.Vb(0,"abp-modal",0),i.hc("visibleChange",(function(e){return t.visible=e})),i.Fc(1,y,3,3,"ng-template",null,1,i.Gc),i.Fc(3,F,1,1,"ng-template",null,2,i.Gc),i.Fc(5,M,2,3,"ng-template",null,3,i.Gc),i.Ub()),2&e&&i.pc("visible",t.visible)("busy",t.modalBusy)},directives:[c.h,h.n,l.v,l.o,a.j,l.h,h.m,h.p,h.q,l.a,l.n,l.f,l.b,c.b],pipes:[a.o,h.b],encapsulation:2}),Object(s.b)([Object(r.f)(k.getFeatures),Object(s.c)("design:type",u.a)],e.prototype,"features$",void 0),e})(),D=(()=>{class e{}return e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({factory:function(t){return new(t||e)},imports:[[a.f,c.l,r.e.forFeature([k])]]}),e})();var A=n("iWZL");n.d(t,"CreateTenant",(function(){return pe})),n.d(t,"DeleteTenant",(function(){return ge})),n.d(t,"GetTenantById",(function(){return de})),n.d(t,"GetTenants",(function(){return be})),n.d(t,"TenantManagementModule",(function(){return Te})),n.d(t,"TenantManagementService",(function(){return fe})),n.d(t,"TenantManagementState",(function(){return he})),n.d(t,"TenantManagementStateService",(function(){return Se})),n.d(t,"TenantsComponent",(function(){return ye})),n.d(t,"UpdateTenant",(function(){return me})),n.d(t,"\u0275a",(function(){return ye})),n.d(t,"\u0275b",(function(){return he})),n.d(t,"\u0275c",(function(){return fe})),n.d(t,"\u0275d",(function(){return be})),n.d(t,"\u0275e",(function(){return de})),n.d(t,"\u0275f",(function(){return pe})),n.d(t,"\u0275g",(function(){return me})),n.d(t,"\u0275h",(function(){return ge})),n.d(t,"\u0275j",(function(){return Ce}));const L=["tenantModalTemplate"],z=["connectionStringModalTemplate"];function N(e,t){if(1&e){const e=i.Wb();i.Vb(0,"button",18),i.hc("click",(function(){return i.zc(e),i.jc().addTenant()})),i.Qb(1,"i",19),i.Vb(2,"span"),i.Hc(3),i.kc(4,"abpLocalization"),i.Ub(),i.Ub()}2&e&&(i.Cb(3),i.Ic(i.lc(4,1,"AbpTenantManagement::NewTenant")))}const P=function(e){return{"width.px":e}};function G(e,t){1&e&&i.Qb(0,"col",25),2&e&&i.pc("ngStyle",i.tc(1,P,t.$implicit||void 0))}function K(e,t){if(1&e&&(i.Vb(0,"colgroup"),i.Fc(1,G,1,3,"col",24),i.Ub()),2&e){const e=i.jc().ngIf;i.Cb(1),i.pc("ngForOf",e)}}function B(e,t){if(1&e){const e=i.Wb();i.Vb(0,"tr"),i.Vb(1,"th"),i.Hc(2),i.kc(3,"abpLocalization"),i.Ub(),i.Vb(4,"th",26),i.hc("click",(function(){return i.zc(e),i.yc(8).sort("name")})),i.Hc(5),i.kc(6,"abpLocalization"),i.Vb(7,"abp-sort-order-icon",27,28),i.hc("selectedSortKeyChange",(function(t){return i.zc(e),i.jc(2).sortKey=t}))("orderChange",(function(t){return i.zc(e),i.jc(2).sortOrder=t})),i.Ub(),i.Ub(),i.Ub()}if(2&e){const e=i.jc(2);i.Cb(2),i.Ic(i.lc(3,4,"AbpTenantManagement::Actions")),i.Cb(3),i.Jc(" ",i.lc(6,6,"AbpTenantManagement::TenantName")," "),i.Cb(2),i.pc("selectedSortKey",e.sortKey)("order",e.sortOrder)}}function H(e,t){if(1&e){const e=i.Wb();i.Vb(0,"button",35),i.hc("click",(function(){i.zc(e);const t=i.jc().$implicit;return i.jc(2).editTenant(t.id)})),i.Hc(1),i.kc(2,"abpLocalization"),i.Ub()}2&e&&(i.Cb(1),i.Jc(" ",i.lc(2,1,"AbpTenantManagement::Edit")," "))}function x(e,t){if(1&e){const e=i.Wb();i.Vb(0,"button",35),i.hc("click",(function(){i.zc(e);const t=i.jc().$implicit;return i.jc(2).onEditConnectionString(t.id)})),i.Hc(1),i.kc(2,"abpLocalization"),i.Ub()}2&e&&(i.Cb(1),i.Jc(" ",i.lc(2,1,"AbpTenantManagement::Permission:ManageConnectionStrings")," "))}function E(e,t){if(1&e){const e=i.Wb();i.Vb(0,"button",35),i.hc("click",(function(){i.zc(e);const t=i.jc().$implicit;return i.jc(2).openFeaturesModal(t.id)})),i.Hc(1),i.kc(2,"abpLocalization"),i.Ub()}2&e&&(i.Cb(1),i.Jc(" ",i.lc(2,1,"AbpTenantManagement::Permission:ManageFeatures")," "))}function $(e,t){if(1&e){const e=i.Wb();i.Vb(0,"button",35),i.hc("click",(function(){i.zc(e);const t=i.jc().$implicit;return i.jc(2).delete(t.id,t.name)})),i.Hc(1),i.kc(2,"abpLocalization"),i.Ub()}2&e&&(i.Cb(1),i.Jc(" ",i.lc(2,1,"AbpTenantManagement::Delete")," "))}function q(e,t){if(1&e&&(i.Vb(0,"tr"),i.Vb(1,"td",29),i.Vb(2,"div",30),i.Vb(3,"button",31),i.Qb(4,"i",32),i.Hc(5),i.kc(6,"abpLocalization"),i.Ub(),i.Vb(7,"div",33),i.Fc(8,H,3,3,"button",34),i.Fc(9,x,3,3,"button",34),i.Fc(10,E,3,3,"button",34),i.Fc(11,$,3,3,"button",34),i.Ub(),i.Ub(),i.Ub(),i.Vb(12,"td"),i.Hc(13),i.Ub(),i.Ub()),2&e){const e=t.$implicit;i.Cb(5),i.Jc("",i.lc(6,6,"AbpTenantManagement::Actions")," "),i.Cb(3),i.pc("abpPermission","AbpTenantManagement.Tenants.Update"),i.Cb(1),i.pc("abpPermission","AbpTenantManagement.Tenants.ManageConnectionStrings"),i.Cb(1),i.pc("abpPermission","AbpTenantManagement.Tenants.ManageFeatures"),i.Cb(1),i.pc("abpPermission","AbpTenantManagement.Tenants.Delete"),i.Cb(2),i.Ic(e.name)}}const Q=function(e,t){return{key:e,order:t}};function J(e,t){if(1&e){const e=i.Wb();i.Vb(0,"abp-table",20),i.hc("pageChange",(function(t){return i.zc(e),i.jc().onPageChange(t)})),i.kc(1,"async"),i.kc(2,"async"),i.Fc(3,K,2,1,"ng-template",null,21,i.Gc),i.Fc(5,B,9,8,"ng-template",null,22,i.Gc),i.Fc(7,q,14,8,"ng-template",null,23,i.Gc),i.Ub()}if(2&e){const e=i.yc(4),t=i.yc(6),n=i.yc(8),a=i.jc();i.pc("abpLoading",a.loading)("abpLoadingDelay",500)("abpTableSort",i.uc(15,Q,a.sortKey,a.sortOrder))("colgroupTemplate",e)("headerTemplate",t)("bodyTemplate",n)("value",i.lc(1,11,a.data$))("abpTableSort",i.uc(18,Q,a.sortKey,a.sortOrder))("rows",a.pageQuery.maxResultCount)("totalRecords",i.lc(2,13,a.totalCount$))("scrollable",!0)}}function W(e,t){if(1&e&&(i.Vb(0,"h3"),i.Hc(1),i.kc(2,"abpLocalization"),i.Ub()),2&e){const e=i.jc();i.Cb(1),i.Ic(i.lc(2,1,e.selectedModalContent.title))}}function R(e,t){1&e&&i.Rb(0)}function _(e,t){if(1&e&&i.Fc(0,R,1,0,"ng-container",36),2&e){const e=i.jc();i.pc("ngTemplateOutlet",null==e.selectedModalContent?null:e.selectedModalContent.template)}}function X(e,t){if(1&e){const e=i.Wb();i.Vb(0,"button",37,38),i.Hc(2),i.kc(3,"abpLocalization"),i.Ub(),i.Vb(4,"abp-button",39),i.hc("click",(function(){return i.zc(e),i.jc().save()})),i.Hc(5),i.kc(6,"abpLocalization"),i.Ub()}if(2&e){const e=i.jc();i.Cb(2),i.Jc(" ",i.lc(3,3,"AbpTenantManagement::Cancel")," "),i.Cb(2),i.pc("disabled",e.isDisabledSaveButton),i.Cb(1),i.Ic(i.lc(6,5,"AbpIdentity::Save"))}}function Y(e,t){1&e&&(i.Vb(0,"div",42),i.Vb(1,"label",43),i.Hc(2),i.kc(3,"abpLocalization"),i.Ub(),i.Qb(4,"input",46),i.Ub()),2&e&&(i.Cb(2),i.Ic(i.lc(3,1,"AbpTenantManagement::DisplayName:AdminEmailAddress")))}function Z(e,t){1&e&&(i.Vb(0,"div",42),i.Vb(1,"label",43),i.Hc(2),i.kc(3,"abpLocalization"),i.Ub(),i.Qb(4,"input",47),i.Ub()),2&e&&(i.Cb(2),i.Ic(i.lc(3,1,"AbpTenantManagement::DisplayName:AdminPassword")))}function ee(e,t){if(1&e){const e=i.Wb();i.Vb(0,"form",40),i.hc("ngSubmit",(function(){return i.zc(e),i.jc().save()})),i.Vb(1,"div",41),i.Vb(2,"div",42),i.Vb(3,"label",43),i.Hc(4),i.kc(5,"abpLocalization"),i.Ub(),i.Qb(6,"input",44),i.Ub(),i.Fc(7,Y,5,3,"div",45),i.Fc(8,Z,5,3,"div",45),i.Ub(),i.Ub()}if(2&e){const e=i.jc();i.pc("formGroup",e.tenantForm),i.Cb(4),i.Ic(i.lc(5,4,"AbpTenantManagement::TenantName")),i.Cb(3),i.pc("ngIf",e.tenantForm.controls.adminEmailAddress),i.Cb(1),i.pc("ngIf",e.tenantForm.controls.adminPassword)}}function te(e,t){1&e&&(i.Vb(0,"div",42),i.Vb(1,"label",51),i.Hc(2),i.kc(3,"abpLocalization"),i.Ub(),i.Qb(4,"input",52),i.Ub()),2&e&&(i.Cb(2),i.Ic(i.lc(3,1,"AbpTenantManagement::DisplayName:DefaultConnectionString")))}function ne(e,t){if(1&e){const e=i.Wb();i.Vb(0,"form",40),i.hc("ngSubmit",(function(){return i.zc(e),i.jc().save()})),i.Vb(1,"div",42),i.Vb(2,"div",48),i.Vb(3,"input",49),i.hc("ngModelChange",(function(t){return i.zc(e),i.jc().onSharedDatabaseChange(t)})),i.Ub(),i.Vb(4,"label",50),i.Hc(5),i.kc(6,"abpLocalization"),i.Ub(),i.Ub(),i.Ub(),i.Fc(7,te,5,3,"div",45),i.Ub()}if(2&e){const e=i.jc();i.pc("formGroup",e.defaultConnectionStringForm),i.Cb(5),i.Ic(i.lc(6,3,"AbpTenantManagement::DisplayName:UseSharedDatabase")),i.Cb(2),i.pc("ngIf",!e.useSharedDatabase)}}function ae(e,t){if(1&e){const e=i.Wb();i.Vb(0,"abp-feature-management",53),i.hc("visibleChange",(function(t){return i.zc(e),i.jc().visibleFeatures=t})),i.Ub()}if(2&e){const e=i.jc();i.pc("visible",e.visibleFeatures)("providerKey",e.providerKey)}}const ce=function(){return[150,0]},ie=function(){return{value:"T"}},oe=function(e){return{value:e}},re=function(e){return{value:e,twoWay:!0}},se=function(e,t,n){return{providerName:e,providerKey:t,visible:n}},le=function(e){return{visibleChange:e}},ue=function(e,t){return{inputs:e,outputs:t,componentKey:"FeatureManagement.FeatureManagementComponent"}};let be=(()=>{class e{constructor(e){this.payload=e}}return e.type="[TenantManagement] Get Tenant",e})(),de=(()=>{class e{constructor(e){this.payload=e}}return e.type="[TenantManagement] Get Tenant By Id",e})(),pe=(()=>{class e{constructor(e){this.payload=e}}return e.type="[TenantManagement] Create Tenant",e})(),me=(()=>{class e{constructor(e){this.payload=e}}return e.type="[TenantManagement] Update Tenant",e})(),ge=(()=>{class e{constructor(e){this.payload=e}}return e.type="[TenantManagement] Delete Tenant",e})(),fe=(()=>{class e{constructor(e){this.rest=e}getTenant(e={}){return this.rest.request({method:"GET",url:"/api/multi-tenancy/tenants",params:e})}getTenantById(e){return this.rest.request({method:"GET",url:`/api/multi-tenancy/tenants/${e}`})}deleteTenant(e){return this.rest.request({method:"DELETE",url:`/api/multi-tenancy/tenants/${e}`})}createTenant(e){return this.rest.request({method:"POST",url:"/api/multi-tenancy/tenants",body:e})}updateTenant(e){const t=`/api/multi-tenancy/tenants/${e.id}`;return delete e.id,this.rest.request({method:"PUT",url:t,body:e})}getDefaultConnectionString(e){return this.rest.request({method:"GET",responseType:"text",url:`/api/multi-tenancy/tenants/${e}/default-connection-string`})}updateDefaultConnectionString(e){return this.rest.request({method:"PUT",url:`/api/multi-tenancy/tenants/${e.id}/default-connection-string`,params:{defaultConnectionString:e.defaultConnectionString}})}deleteDefaultConnectionString(e){return this.rest.request({method:"DELETE",url:`/api/multi-tenancy/tenants/${e}/default-connection-string`})}}return e.\u0275fac=function(t){return new(t||e)(i.dc(a.x))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e.ngInjectableDef=Object(i.Lb)({factory:function(){return new e(Object(i.dc)(a.x))},token:e,providedIn:"root"}),e})(),he=(()=>{let e=class{constructor(e){this.tenantManagementService=e}static get({result:e}){return e.items||[]}static getTenantsTotalCount({result:e}){return e.totalCount}get({patchState:e},{payload:t}){return this.tenantManagementService.getTenant(t).pipe(Object(b.a)(t=>e({result:t})))}getById({patchState:e},{payload:t}){return this.tenantManagementService.getTenantById(t).pipe(Object(b.a)(t=>e({selectedItem:t})))}delete(e,{payload:t}){return this.tenantManagementService.deleteTenant(t)}add(e,{payload:t}){return this.tenantManagementService.createTenant(t)}update({getState:e},{payload:t}){return this.tenantManagementService.updateTenant(Object.assign({},e().selectedItem,t))}};return e.\u0275fac=function(t){return new(t||e)(i.dc(fe))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac}),Object(s.b)([Object(r.a)(be),Object(s.c)("design:type",Function),Object(s.c)("design:paramtypes",[Object,be]),Object(s.c)("design:returntype",void 0)],e.prototype,"get",null),Object(s.b)([Object(r.a)(de),Object(s.c)("design:type",Function),Object(s.c)("design:paramtypes",[Object,de]),Object(s.c)("design:returntype",void 0)],e.prototype,"getById",null),Object(s.b)([Object(r.a)(ge),Object(s.c)("design:type",Function),Object(s.c)("design:paramtypes",[Object,ge]),Object(s.c)("design:returntype",void 0)],e.prototype,"delete",null),Object(s.b)([Object(r.a)(pe),Object(s.c)("design:type",Function),Object(s.c)("design:paramtypes",[Object,pe]),Object(s.c)("design:returntype",void 0)],e.prototype,"add",null),Object(s.b)([Object(r.a)(me),Object(s.c)("design:type",Function),Object(s.c)("design:paramtypes",[Object,me]),Object(s.c)("design:returntype",void 0)],e.prototype,"update",null),Object(s.b)([Object(r.g)(),Object(s.c)("design:type",Function),Object(s.c)("design:paramtypes",[Object]),Object(s.c)("design:returntype",Array)],e,"get",null),Object(s.b)([Object(r.g)(),Object(s.c)("design:type",Function),Object(s.c)("design:paramtypes",[Object]),Object(s.c)("design:returntype",Number)],e,"getTenantsTotalCount",null),e=Object(s.b)([Object(r.h)({name:"TenantManagementState",defaults:{result:{},selectedItem:{}}})],e),e})(),ye=(()=>{class e{constructor(e,t,n,a){this.confirmationService=e,this.tenantService=t,this.fb=n,this.store=a,this.selectedModalContent={},this.visibleFeatures=!1,this.pageQuery={maxResultCount:10},this.loading=!1,this.modalBusy=!1,this.sortOrder="",this.sortKey="",this.onVisibleFeaturesChange=e=>{this.visibleFeatures=e}}get hasSelectedTenant(){return Boolean(this.selected.id)}get useSharedDatabase(){return this.defaultConnectionStringForm.get("useSharedDatabase").value}get connectionString(){return this.defaultConnectionStringForm.get("defaultConnectionString").value}get isDisabledSaveButton(){return!(!this.selectedModalContent||!("saveConnStr"===this.selectedModalContent.type&&this.defaultConnectionStringForm&&this.defaultConnectionStringForm.invalid||"saveTenant"===this.selectedModalContent.type&&this.tenantForm&&this.tenantForm.invalid))}ngOnInit(){this.get()}onSearch(e){this.pageQuery.filter=e,this.get()}createTenantForm(){const e=this.fb.group({name:[this.selected.name||"",[l.t.required,l.t.maxLength(256)]],adminEmailAddress:[null,[l.t.required,l.t.maxLength(256),l.t.email]],adminPassword:[null,[l.t.required]]});this.hasSelectedTenant&&(e.removeControl("adminEmailAddress"),e.removeControl("adminPassword")),this.tenantForm=e}createDefaultConnectionStringForm(){this.defaultConnectionStringForm=this.fb.group({useSharedDatabase:this._useSharedDatabase,defaultConnectionString:[this.defaultConnectionString||""]})}openModal(e,t,n){this.selectedModalContent={title:e,template:t,type:n},this.isModalVisible=!0}onEditConnectionString(e){this.store.dispatch(new de(e)).pipe(Object(d.a)("TenantManagementState","selectedItem"),Object(p.a)(t=>(this.selected=t,this.tenantService.getDefaultConnectionString(e)))).subscribe(e=>{this._useSharedDatabase=!e,this.defaultConnectionString=e||"",this.createDefaultConnectionStringForm(),this.openModal("AbpTenantManagement::ConnectionStrings",this.connectionStringModalTemplate,"saveConnStr")})}addTenant(){this.selected={},this.createTenantForm(),this.openModal("AbpTenantManagement::NewTenant",this.tenantModalTemplate,"saveTenant")}editTenant(e){this.store.dispatch(new de(e)).pipe(Object(d.a)("TenantManagementState","selectedItem")).subscribe(e=>{this.selected=e,this.createTenantForm(),this.openModal("AbpTenantManagement::Edit",this.tenantModalTemplate,"saveTenant")})}save(){const{type:e}=this.selectedModalContent;e&&("saveTenant"===e?this.saveTenant():"saveConnStr"===e&&this.saveConnectionString())}saveConnectionString(){this.modalBusy||(this.modalBusy=!0,this.useSharedDatabase||!this.useSharedDatabase&&!this.connectionString?this.tenantService.deleteDefaultConnectionString(this.selected.id).pipe(Object(m.a)(1),Object(g.a)(()=>this.modalBusy=!1)).subscribe(()=>{this.isModalVisible=!1}):this.tenantService.updateDefaultConnectionString({id:this.selected.id,defaultConnectionString:this.connectionString}).pipe(Object(m.a)(1),Object(g.a)(()=>this.modalBusy=!1)).subscribe(()=>{this.isModalVisible=!1}))}saveTenant(){this.tenantForm.valid&&!this.modalBusy&&(this.modalBusy=!0,this.store.dispatch(this.selected.id?new me(Object.assign({},this.selected,this.tenantForm.value,{id:this.selected.id})):new pe(this.tenantForm.value)).pipe(Object(g.a)(()=>this.modalBusy=!1)).subscribe(()=>{this.isModalVisible=!1,this.get()}))}delete(e,t){this.confirmationService.warn("AbpTenantManagement::TenantDeletionConfirmationMessage","AbpTenantManagement::AreYouSure",{messageLocalizationParams:[t]}).subscribe(t=>{t===c.m.Status.confirm&&this.store.dispatch(new ge(e)).subscribe(()=>this.get())})}onPageChange(e){this.pageQuery.skipCount=(e-1)*this.pageQuery.maxResultCount,this.get()}get(){this.loading=!0,this.store.dispatch(new be(this.pageQuery)).pipe(Object(g.a)(()=>this.loading=!1)).subscribe()}onSharedDatabaseChange(e){e||setTimeout(()=>{const e=document.getElementById("defaultConnectionString");e&&e.focus()},0)}openFeaturesModal(e){this.providerKey=e,setTimeout(()=>{this.visibleFeatures=!0},0)}}return e.\u0275fac=function(t){return new(t||e)(i.Pb(c.e),i.Pb(fe),i.Pb(l.c),i.Pb(r.j))},e.\u0275cmp=i.Jb({type:e,selectors:[["abp-tenants"]],viewQuery:function(e,t){var n;1&e&&(i.Lc(L,!0),i.Lc(z,!0)),2&e&&(i.xc(n=i.ic())&&(t.tenantModalTemplate=n.first),i.xc(n=i.ic())&&(t.connectionStringModalTemplate=n.first))},decls:27,vars:26,consts:[["id","wrapper",1,"card"],[1,"card-header"],[1,"row"],[1,"col","col-md-6"],[1,"card-title"],[1,"text-right","col","col-md-6"],["id","create-tenants","class","btn btn-primary","type","button",3,"click",4,"abpPermission"],[1,"card-body"],["id","data-tables-table-filter",1,"data-tables-filter"],["type","search",1,"form-control","form-control-sm",3,"placeholder","input.debounce"],[3,"abpLoading","abpLoadingDelay","abpTableSort","colgroupTemplate","headerTemplate","bodyTemplate","value","rows","totalRecords","scrollable","pageChange",4,"ngIf"],["size","md",3,"visible","busy","visibleChange"],["abpHeader",""],["abpBody",""],["abpFooter",""],["tenantModalTemplate",""],["connectionStringModalTemplate",""],["providerName","T",3,"visible","providerKey","visibleChange",4,"abpReplaceableTemplate"],["id","create-tenants","type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-plus","mr-1"],[3,"abpLoading","abpLoadingDelay","abpTableSort","colgroupTemplate","headerTemplate","bodyTemplate","value","rows","totalRecords","scrollable","pageChange"],["tableColGroup",""],["tableHeader",""],["tableBody",""],[3,"ngStyle",4,"ngFor","ngForOf"],[3,"ngStyle"],[3,"click"],["sortKey","name",3,"selectedSortKey","order","selectedSortKeyChange","orderChange"],["sortOrderIcon",""],[1,"text-center"],["ngbDropdown","","container","body",1,"d-inline-block"],["data-toggle","dropdown","aria-haspopup","true","ngbDropdownToggle","",1,"btn","btn-primary","btn-sm","dropdown-toggle"],[1,"fa","fa-cog","mr-1"],["ngbDropdownMenu",""],["ngbDropdownItem","",3,"click",4,"abpPermission"],["ngbDropdownItem","",3,"click"],[4,"ngTemplateOutlet"],["type","button",1,"btn","btn-secondary"],["abpClose",""],["iconClass","fa fa-check",3,"disabled","click"],["validateOnSubmit","",3,"formGroup","ngSubmit"],[1,"mt-2"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name","autofocus","",1,"form-control"],["class","form-group",4,"ngIf"],["autocomplete","email","type","email","id","admin-email-address","formControlName","adminEmailAddress",1,"form-control"],["autocomplete","new-password","type","password","id","admin-password","formControlName","adminPassword",1,"form-control"],[1,"custom-checkbox","custom-control","mb-2"],["id","useSharedDatabase","type","checkbox","formControlName","useSharedDatabase","autofocus","",1,"custom-control-input",3,"ngModelChange"],["for","useSharedDatabase",1,"custom-control-label"],["for","defaultConnectionString"],["type","text","id","defaultConnectionString","formControlName","defaultConnectionString",1,"form-control"],["providerName","T",3,"visible","providerKey","visibleChange"]],template:function(e,t){1&e&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.Vb(2,"div",2),i.Vb(3,"div",3),i.Vb(4,"h5",4),i.Hc(5),i.kc(6,"abpLocalization"),i.Ub(),i.Ub(),i.Vb(7,"div",5),i.Fc(8,N,5,3,"button",6),i.Ub(),i.Ub(),i.Ub(),i.Vb(9,"div",7),i.Vb(10,"div",8),i.Vb(11,"label"),i.Vb(12,"input",9),i.hc("input.debounce",(function(e){return t.onSearch(e.target.value)})),i.kc(13,"abpLocalization"),i.Ub(),i.Ub(),i.Ub(),i.Fc(14,J,9,21,"abp-table",10),i.Ub(),i.Ub(),i.Vb(15,"abp-modal",11),i.hc("visibleChange",(function(e){return t.isModalVisible=e})),i.Fc(16,W,3,3,"ng-template",null,12,i.Gc),i.Fc(18,_,1,1,"ng-template",null,13,i.Gc),i.Fc(20,X,7,7,"ng-template",null,14,i.Gc),i.Ub(),i.Fc(22,ee,9,6,"ng-template",null,15,i.Gc),i.Fc(24,ne,8,5,"ng-template",null,16,i.Gc),i.Fc(26,ae,1,2,"abp-feature-management",17)),2&e&&(i.Cb(5),i.Ic(i.lc(6,7,"AbpTenantManagement::Tenants")),i.Cb(3),i.pc("abpPermission","AbpTenantManagement.Tenants.Create"),i.Cb(4),i.pc("placeholder",i.lc(13,9,"AbpUi::PagerSearch")),i.Cb(2),i.pc("ngIf",i.sc(11,ce)),i.Cb(1),i.pc("visible",t.isModalVisible)("busy",t.modalBusy),i.Cb(11),i.pc("abpReplaceableTemplate",i.uc(23,ue,i.vc(17,se,i.sc(12,ie),i.tc(13,oe,t.providerKey),i.tc(15,re,t.visibleFeatures)),i.tc(21,le,t.onVisibleFeaturesChange))))},directives:[a.r,a.K,h.n,c.h,a.v,c.j,c.g,c.k,h.m,h.o,c.i,o.c,o.g,o.e,o.d,h.r,c.b,l.v,l.o,a.j,A.d,l.h,l.b,A.b,l.n,l.f,a.c,l.a,I],pipes:[a.o,h.b],encapsulation:2}),Object(s.b)([Object(r.f)(he.get),Object(s.c)("design:type",u.a)],e.prototype,"data$",void 0),Object(s.b)([Object(r.f)(he.getTenantsTotalCount),Object(s.c)("design:type",u.a)],e.prototype,"totalCount$",void 0),e})();const ve=[{path:"",redirectTo:"tenants",pathMatch:"full"},{path:"",component:a.g,canActivate:[a.a,a.s],children:[{path:"tenants",component:a.u,data:{requiredPolicy:"AbpTenantManagement.Tenants",replaceableComponent:{key:"TenantManagement.TenantsComponent",defaultComponent:ye}}}]}];let Ce=(()=>{class e{}return e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({factory:function(t){return new(t||e)},imports:[[f.j.forChild(ve)],f.j]}),e})(),Te=(()=>{class e{}return e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({factory:function(t){return new(t||e)},imports:[[Ce,r.e.forFeature([he]),A.a,a.f,c.l,o.f,D]]}),e})();var je;!function(e){e.State=function(){},e.Item=function(){},e.AddRequest=function(){},e.UpdateRequest=function(){},e.DefaultConnectionStringRequest=function(){}}(je||(je={}));let Se=(()=>{class e{constructor(e){this.store=e}get(){return this.store.selectSnapshot(he.get)}getTenantsTotalCount(){return this.store.selectSnapshot(he.getTenantsTotalCount)}dispatchGetTenants(...e){return this.store.dispatch(new be(...e))}dispatchGetTenantById(...e){return this.store.dispatch(new de(...e))}dispatchCreateTenant(...e){return this.store.dispatch(new pe(...e))}dispatchUpdateTenant(...e){return this.store.dispatch(new me(...e))}dispatchDeleteTenant(...e){return this.store.dispatch(new ge(...e))}}return e.\u0275fac=function(t){return new(t||e)(i.dc(r.j))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e.ngInjectableDef=Object(i.Lb)({factory:function(){return new e(Object(i.dc)(r.j))},token:e,providedIn:"root"}),e})()}}]);