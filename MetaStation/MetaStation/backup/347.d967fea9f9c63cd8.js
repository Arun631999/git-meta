"use strict";(self.webpackChunkmeta_station=self.webpackChunkmeta_station||[]).push([[347],{5347:(Z,g,n)=>{n.r(g),n.d(g,{HistoryModule:()=>i});var l=n(6895),u=n(8800),m=n(433),s=n(1002),t=n(1571),h=n(3322),f=n(805),b=n(1755);function x(e,o){1&e&&(t.TgZ(0,"tr")(1,"th",6),t._uU(2,"Coin"),t.qZA(),t.TgZ(3,"th",6),t._uU(4,"Chain"),t.qZA(),t.TgZ(5,"th",6),t._uU(6,"TX ID"),t.qZA(),t.TgZ(7,"th",6),t._uU(8,"Address"),t.qZA(),t.TgZ(9,"th",6),t._uU(10,"Value"),t.qZA(),t.TgZ(11,"th",6),t._uU(12,"Fee"),t.qZA(),t.TgZ(13,"th",6),t._uU(14,"Status"),t.qZA()())}function w(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"tr")(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA()(),t.BQk()),2&e){const r=t.oxw().$implicit;t.xp6(3),t.Oqu(r.coin),t.xp6(2),t.Oqu(r.chain),t.xp6(2),t.Oqu(r.txID),t.xp6(2),t.Oqu(r.toAddress),t.xp6(2),t.Oqu(r.amount),t.xp6(2),t.Oqu(r.withdrawFee),t.xp6(2),t.Oqu(r.status)}}function _(e,o){1&e&&(t.TgZ(0,"tr")(1,"td",9),t._uU(2,"No records found"),t.qZA()())}function C(e,o){if(1&e&&(t.YNc(0,w,16,7,"ng-container",7),t.YNc(1,_,3,0,"ng-template",null,8,t.W1O)),2&e){const r=o.$implicit,c=t.MAs(2);t.Q6J("ngIf",r&&r.length>0)("ngIfElse",c)}}const O=function(){return{"min-width":"50rem"}};class p{constructor(o,r){this.router=o,this.walletService=r,this.totalRecords=10,this.first=0,this.last=10,this.deposit=[]}ngOnInit(){this.Deposit()}Deposit(){this.walletService.depositHistory(localStorage.getItem("selectedAccountId")).subscribe(o=>{Array.isArray(o.result)?this.deposit=o.result:console.error("The API response does not indicate success or result is not an array")},o=>{this.handleError(o)})}handleError(o){console.log(o)}}function k(e,o){1&e&&(t.TgZ(0,"tr")(1,"th",6),t._uU(2,"Coin"),t.qZA(),t.TgZ(3,"th",6),t._uU(4,"Chain"),t.qZA(),t.TgZ(5,"th",6),t._uU(6,"TX ID"),t.qZA(),t.TgZ(7,"th",6),t._uU(8,"Address"),t.qZA(),t.TgZ(9,"th",6),t._uU(10,"Value"),t.qZA(),t.TgZ(11,"th",6),t._uU(12,"Fee"),t.qZA(),t.TgZ(13,"th",6),t._uU(14,"Status"),t.qZA()())}function M(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"tr")(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA()(),t.BQk()),2&e){const r=t.oxw().$implicit;t.xp6(3),t.Oqu(r.coin),t.xp6(2),t.Oqu(r.chain),t.xp6(2),t.Oqu(r.txID),t.xp6(2),t.Oqu(r.toAddress),t.xp6(2),t.Oqu(r.amount),t.xp6(2),t.Oqu(r.withdrawFee),t.xp6(2),t.Oqu(r.status)}}function P(e,o){1&e&&(t.TgZ(0,"tr")(1,"td",9),t._uU(2,"No records found"),t.qZA()())}function y(e,o){if(1&e&&(t.YNc(0,M,16,7,"ng-container",7),t.YNc(1,P,3,0,"ng-template",null,8,t.W1O)),2&e){const r=o.$implicit,c=t.MAs(2);t.Q6J("ngIf",r&&r.length>0)("ngIfElse",c)}}p.\u0275fac=function(o){return new(o||p)(t.Y36(s.F0),t.Y36(h.X))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-deposit"]],decls:6,vars:6,consts:[[1,"card"],[1,"card-header","card-header","flex","justify-content-between",2,"width","100%","overflow","hidden","overflow-x","auto","margin-bottom","10px","overflow-x","auto"],[1,"common-table-style"],[3,"value","tableStyle","rows","showFirstLastIcon","paginator"],["pTemplate","header"],["pTemplate","body"],[1,"signal-provider-table-head"],[4,"ngIf","ngIfElse"],["noRecords",""],["colspan","7"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"p-table",3),t.YNc(4,x,15,0,"ng-template",4),t.YNc(5,C,3,2,"ng-template",5),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("value",r.deposit)("tableStyle",t.DdM(5,O))("rows",3)("showFirstLastIcon",!1)("paginator",!0))},dependencies:[l.O5,f.jx,b.iA],styles:['[_nghost-%COMP%]  .p-inputtext{margin:10px 0;width:100%;font-family:Euclid Circular A;font-style:normal;font-weight:400;font-size:.9rem;line-height:140%;color:#fff;background:#2e4060;border:1px solid #5c6276;border-radius:8px}[_nghost-%COMP%]  .p-inputtext:hover{border:1px solid #3c71fb;box-shadow:0 2px 8px 4px #0fa8ff2b;border-radius:8px}[_nghost-%COMP%]  .p-inputtext:enabled:focus{border:1px solid #3c71fb;box-shadow:0 2px 8px 4px #0fa8ff2b;border-radius:8px;font-size:.9rem}[_nghost-%COMP%]  .p-dropdown>.p-inputtext{margin:0}[_nghost-%COMP%]  .p-dropdown>.p-inputtext:hover{background:transparent;border:none}[_nghost-%COMP%]  .p-dropdown-items-wrapper{color:#fff;background:#2e4060}[_nghost-%COMP%]  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight{color:#000}[_nghost-%COMP%]  .p-dropdown-panel .p-dropdown-items .p-dropdown-item{color:#fff}[_nghost-%COMP%]  .p-tabview .p-tabview-nav{background:transparent;border:none;border-width:0 0 2px 0}[_nghost-%COMP%]  .p-tabview .p-tabview-panels{background:transparent;border:none;color:#fff}[_nghost-%COMP%]  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link{background:#3c71fb;opacity:.99;box-shadow:4px 0 4px #0000001f;color:#fff;border-radius:0}[_nghost-%COMP%]  .p-tabview .p-tabview-nav li .p-tabview-nav-link{background:#2a3f65;opacity:.99;box-shadow:4px 0 4px #0000001f;border-width:0 0 2px 0;color:#707688;padding:20px 40px;font-weight:700;transition:box-shadow .2s;margin:0 0 -2px;font-family:Euclid Circular A;font-style:normal;font-weight:400;font-size:1rem;border-radius:0;line-height:140%}[_nghost-%COMP%]  .p-calendar-w-btn .p-inputtext{border-top-right-radius:0!important;border-bottom-right-radius:0!important}[_nghost-%COMP%]  .p-calendar-w-btn .p-datepicker-trigger{height:10px;position:absolute;right:5px;top:20px}[_nghost-%COMP%]  .p-datepicker:not(.p-datepicker-inline){background:#2a3f65;color:#fff;border:0 none;box-shadow:0 2px 12px #0000001a}[_nghost-%COMP%]  .p-tabview .p-tabview-panels{padding:0}[_nghost-%COMP%]  .p-calendar .p-button{background:transparent;border:none}[_nghost-%COMP%]  .p-datepicker table td>span.p-highlight{background:#3c71fb;color:#fff}[_nghost-%COMP%]  .p-datepicker .p-datepicker-header .p-datepicker-prev, [_nghost-%COMP%]  .p-datepicker .p-datepicker-header .p-datepicker-next{color:#fff}[_nghost-%COMP%]  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year, [_nghost-%COMP%]  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month{color:#fff}[_nghost-%COMP%]  .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header{background:#2a3f65;color:#fff}[_nghost-%COMP%]  .p-button:enabled:hover{background:transparent;color:#fff;border-color:#0000001f}[_nghost-%COMP%]  .p-multiselect-panel .p-multiselect-header{padding:.75rem 1.25rem;border-bottom:1px solid transparent;background:#2a3f65;color:#fff;margin:0;border-top-right-radius:6px;border-top-left-radius:6px}[_nghost-%COMP%]  .p-multiselect{color:#fff;background:#2e4060;border:1px solid #5c6276;width:100%;margin:10px 0}[_nghost-%COMP%]  .p-multiselect-panel .p-multiselect-items{padding:0}[_nghost-%COMP%]  .p-multiselect-panel .p-multiselect-items .p-multiselect-item{background:#0f1a3a;color:#fff}[_nghost-%COMP%]  .p-checkbox .p-checkbox-box{background:#111b38;border:1px solid #5c6276}[_nghost-%COMP%]  .p-checkbox .p-checkbox-box.p-highlight{background:#3c71fb;border:1px solid #3c71fb}[_nghost-%COMP%]  .top-Filters{background:#1f2c4d;border-radius:8px;color:#fff}[_nghost-%COMP%]  .p-datatable .p-datatable-thead>tr>th{text-align:left;padding:1rem;border:none;border-width:0 0 0 0;font-weight:700;color:#ebebeb;box-shadow:33px 4px 16px #1f1f1f29;background-color:#ffffff17;transition:box-shadow .2s;font-family:Euclid Circular A;font-style:normal;font-weight:500;font-size:.9rem;line-height:140%;position:relative}[_nghost-%COMP%]  .p-datatable .p-datatable-tbody>tr{background:transparent;border-radius:10px;transition:box-shadow .2s;color:#fff;font-family:"Euclid Circular A - light";font-style:normal;font-size:.9rem;line-height:140%}[_nghost-%COMP%]  .p-datatable-table{border-spacing:0px;width:100%;font-family:Euclid Circular A;font-style:normal;font-weight:500;font-size:.9rem;line-height:140%}[_nghost-%COMP%]  .p-datatable .p-datatable-tbody>tr>td{color:#fff;font-family:Euclid Circular A;font-style:normal;font-weight:500;font-size:.8rem;line-height:140%;border:1px solid rgba(255,255,255,.29);border-width:0 0 1px 0}[_nghost-%COMP%]  .p-datatable .p-datatable-tbody tr:hover{border:1px solid #3c71fb;box-shadow:0 2px 8px 4px #0fa8ff2b;border-radius:8px;font-size:.9rem;cursor:pointer}[_nghost-%COMP%]  .p-inputswitch{width:40px;height:11px}[_nghost-%COMP%]  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider{background:rgba(0,199,91,.24)}[_nghost-%COMP%]  .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider{background:rgba(0,199,91,.24)}[_nghost-%COMP%]  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before{background:#00c75b}[_nghost-%COMP%]  .p-accordion{color:#fff;background:rgba(255,255,255,.1)}[_nghost-%COMP%]  .p-accordion .p-accordion-header .p-accordion-header-link{color:#fff;background:rgba(255,255,255,.1);border:none;font-family:Euclid Circular A;font-style:normal;font-weight:400;font-size:1rem;line-height:140%}[_nghost-%COMP%]  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link{color:#fff;background:rgba(255,255,255,.1);border:none;font-family:Euclid Circular A;font-style:normal;font-weight:400;font-size:1rem;line-height:140%}[_nghost-%COMP%]  .p-accordion .p-accordion-content{color:#fff;background:rgba(255,255,255,.1);border:none;font-family:Euclid Circular A;font-style:normal;font-weight:400;font-size:1rem;line-height:140%}[_nghost-%COMP%]  .p-accordion .p-accordion-header .p-icon{margin-top:-8px;position:absolute;right:.5em;top:50%}[_nghost-%COMP%]  .p-datatable .p-paginator{display:flex;align-items:center;justify-content:end;flex-wrap:wrap;background:transparent;color:#fff;border:solid #e9ecef;border-width:0;padding:10px;border-radius:6px}[_nghost-%COMP%]  .p-datatable .p-paginator .p-paginator-pages .p-paginator-page{background-color:transparent;border:0 none;min-width:25px;height:25px;margin:.143rem;transition:box-shadow .2s;border-radius:0%;color:#fff;opacity:.6}[_nghost-%COMP%]  .p-datatable .p-paginator .p-paginator-pages .p-paginator-page.p-highlight{color:#fff;background:#3c71fb;border:none;border-radius:5px;opacity:1}[_nghost-%COMP%]  .p-paginator .p-paginator-first, [_nghost-%COMP%]  .p-paginator .p-paginator-prev, [_nghost-%COMP%]  .p-paginator .p-paginator-next, [_nghost-%COMP%]  .p-paginator .p-paginator-last{background-color:transparent;border:0 none;color:#6c757d;min-width:25px;height:25px;margin:.143rem;transition:box-shadow .2s;border-radius:0}[_nghost-%COMP%]  .p-datatable .p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover, [_nghost-%COMP%]  .p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover, [_nghost-%COMP%]  .p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover, [_nghost-%COMP%]  .p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover{background:transparent;border-color:transparent;border:0px;color:#343a40}[_nghost-%COMP%]  .p-dropdown{width:100%!important;margin:10px 0!important;color:#fff!important;background:#2e4060!important;border:1px solid #5c6276;border-radius:8px}[_nghost-%COMP%]  .p-overlaypanel .p-overlaypanel-content{background:linear-gradient(90.88deg,#162e58 -7.31%,#1a3463 99.28%);padding:0;border-radius:14px}[_nghost-%COMP%]  .p-overlaypanel{z-index:1001;transform-origin:center top;top:60px;transform:translateY(0);opacity:1;padding:10px;border:2px solid #3c71fb;border-radius:16px;background:linear-gradient(90.88deg,#162e58 -7.31%,#1a3463 99.28%)}.hor-divider[_ngcontent-%COMP%]{height:2px;width:90%;border:2px solid #ffffff}.search-bar-top[_ngcontent-%COMP%]{height:44px;border-radius:24px;background:linear-gradient(83deg,rgba(217,217,217,.1) 0%,rgba(85,110,173,.1) 100%);outline:none;border:none;padding:6px 49px;font-family:Euclid Circular A;font-style:normal;font-weight:400;font-size:.9rem;line-height:140%;color:#fff}.search-bar-icon[_ngcontent-%COMP%]{position:absolute;right:14rem}.filter-icon[_ngcontent-%COMP%]{height:3rem;width:3rem;background:rgb(14,19,43);display:flex;align-items:center;justify-content:center;border-radius:6px;cursor:pointer}']});const v=function(){return{"min-width":"50rem"}};class d{constructor(o,r){this.router=o,this.walletService=r,this.totalRecords=10,this.first=0,this.last=10,this.withdraw=[]}ngOnInit(){this.Withdraw()}Withdraw(){this.walletService.withdrawHistory(localStorage.getItem("selectedAccountId")).subscribe(o=>{Array.isArray(o.result)?this.withdraw=o.result:console.error("The API response does not indicate success or result is not an array")},o=>{this.handleError(o)})}handleError(o){console.log(o)}}d.\u0275fac=function(o){return new(o||d)(t.Y36(s.F0),t.Y36(h.X))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-withdraw"]],decls:6,vars:6,consts:[[1,"card"],[1,"card-header","card-header","flex","justify-content-between",2,"width","100%","overflow","hidden","overflow-x","auto","margin-bottom","10px","overflow-x","auto"],[1,"common-table-style"],[3,"value","tableStyle","rows","showFirstLastIcon","paginator"],["pTemplate","header"],["pTemplate","body"],[1,"signal-provider-table-head"],[4,"ngIf","ngIfElse"],["noRecords",""],["colspan","7"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"p-table",3),t.YNc(4,k,15,0,"ng-template",4),t.YNc(5,y,3,2,"ng-template",5),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("value",r.withdraw)("tableStyle",t.DdM(5,v))("rows",3)("showFirstLastIcon",!1)("paginator",!0))},dependencies:[l.O5,f.jx,b.iA],styles:['[_nghost-%COMP%]  .p-inputtext{margin:10px 0;width:100%;font-family:Euclid Circular A;font-style:normal;font-weight:400;font-size:.9rem;line-height:140%;color:#fff;background:#2e4060;border:1px solid #5c6276;border-radius:8px}[_nghost-%COMP%]  .p-inputtext:hover{border:1px solid #3c71fb;box-shadow:0 2px 8px 4px #0fa8ff2b;border-radius:8px}[_nghost-%COMP%]  .p-inputtext:enabled:focus{border:1px solid #3c71fb;box-shadow:0 2px 8px 4px #0fa8ff2b;border-radius:8px;font-size:.9rem}[_nghost-%COMP%]  .p-dropdown>.p-inputtext{margin:0}[_nghost-%COMP%]  .p-dropdown>.p-inputtext:hover{background:transparent;border:none}[_nghost-%COMP%]  .p-dropdown-items-wrapper{color:#fff;background:#2e4060}[_nghost-%COMP%]  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight{color:#000}[_nghost-%COMP%]  .p-dropdown-panel .p-dropdown-items .p-dropdown-item{color:#fff}[_nghost-%COMP%]  .p-tabview .p-tabview-nav{background:transparent;border:none;border-width:0 0 2px 0}[_nghost-%COMP%]  .p-tabview .p-tabview-panels{background:transparent;border:none;color:#fff}[_nghost-%COMP%]  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link{background:#3c71fb;opacity:.99;box-shadow:4px 0 4px #0000001f;color:#fff;border-radius:0}[_nghost-%COMP%]  .p-tabview .p-tabview-nav li .p-tabview-nav-link{background:#2a3f65;opacity:.99;box-shadow:4px 0 4px #0000001f;border-width:0 0 2px 0;color:#707688;padding:20px 40px;font-weight:700;transition:box-shadow .2s;margin:0 0 -2px;font-family:Euclid Circular A;font-style:normal;font-weight:400;font-size:1rem;border-radius:0;line-height:140%}[_nghost-%COMP%]  .p-calendar-w-btn .p-inputtext{border-top-right-radius:0!important;border-bottom-right-radius:0!important}[_nghost-%COMP%]  .p-calendar-w-btn .p-datepicker-trigger{height:10px;position:absolute;right:5px;top:20px}[_nghost-%COMP%]  .p-datepicker:not(.p-datepicker-inline){background:#2a3f65;color:#fff;border:0 none;box-shadow:0 2px 12px #0000001a}[_nghost-%COMP%]  .p-tabview .p-tabview-panels{padding:0}[_nghost-%COMP%]  .p-calendar .p-button{background:transparent;border:none}[_nghost-%COMP%]  .p-datepicker table td>span.p-highlight{background:#3c71fb;color:#fff}[_nghost-%COMP%]  .p-datepicker .p-datepicker-header .p-datepicker-prev, [_nghost-%COMP%]  .p-datepicker .p-datepicker-header .p-datepicker-next{color:#fff}[_nghost-%COMP%]  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year, [_nghost-%COMP%]  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month{color:#fff}[_nghost-%COMP%]  .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header{background:#2a3f65;color:#fff}[_nghost-%COMP%]  .p-button:enabled:hover{background:transparent;color:#fff;border-color:#0000001f}[_nghost-%COMP%]  .p-multiselect-panel .p-multiselect-header{padding:.75rem 1.25rem;border-bottom:1px solid transparent;background:#2a3f65;color:#fff;margin:0;border-top-right-radius:6px;border-top-left-radius:6px}[_nghost-%COMP%]  .p-multiselect{color:#fff;background:#2e4060;border:1px solid #5c6276;width:100%;margin:10px 0}[_nghost-%COMP%]  .p-multiselect-panel .p-multiselect-items{padding:0}[_nghost-%COMP%]  .p-multiselect-panel .p-multiselect-items .p-multiselect-item{background:#0f1a3a;color:#fff}[_nghost-%COMP%]  .p-checkbox .p-checkbox-box{background:#111b38;border:1px solid #5c6276}[_nghost-%COMP%]  .p-checkbox .p-checkbox-box.p-highlight{background:#3c71fb;border:1px solid #3c71fb}[_nghost-%COMP%]  .top-Filters{background:#1f2c4d;border-radius:8px;color:#fff}[_nghost-%COMP%]  .p-datatable .p-datatable-thead>tr>th{text-align:left;padding:1rem;border:none;border-width:0 0 0 0;font-weight:700;color:#ebebeb;box-shadow:33px 4px 16px #1f1f1f29;background-color:#ffffff17;transition:box-shadow .2s;font-family:Euclid Circular A;font-style:normal;font-weight:500;font-size:.9rem;line-height:140%;position:relative}[_nghost-%COMP%]  .p-datatable .p-datatable-tbody>tr{background:transparent;border-radius:10px;transition:box-shadow .2s;color:#fff;font-family:"Euclid Circular A - light";font-style:normal;font-size:.9rem;line-height:140%}[_nghost-%COMP%]  .p-datatable-table{border-spacing:0px;width:100%;font-family:Euclid Circular A;font-style:normal;font-weight:500;font-size:.9rem;line-height:140%}[_nghost-%COMP%]  .p-datatable .p-datatable-tbody>tr>td{color:#fff;font-family:Euclid Circular A;font-style:normal;font-weight:500;font-size:.8rem;line-height:140%;border:1px solid rgba(255,255,255,.29);border-width:0 0 1px 0}[_nghost-%COMP%]  .p-datatable .p-datatable-tbody tr:hover{border:1px solid #3c71fb;box-shadow:0 2px 8px 4px #0fa8ff2b;border-radius:8px;font-size:.9rem;cursor:pointer}[_nghost-%COMP%]  .p-inputswitch{width:40px;height:11px}[_nghost-%COMP%]  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider{background:rgba(0,199,91,.24)}[_nghost-%COMP%]  .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider{background:rgba(0,199,91,.24)}[_nghost-%COMP%]  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before{background:#00c75b}[_nghost-%COMP%]  .p-accordion{color:#fff;background:rgba(255,255,255,.1)}[_nghost-%COMP%]  .p-accordion .p-accordion-header .p-accordion-header-link{color:#fff;background:rgba(255,255,255,.1);border:none;font-family:Euclid Circular A;font-style:normal;font-weight:400;font-size:1rem;line-height:140%}[_nghost-%COMP%]  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link{color:#fff;background:rgba(255,255,255,.1);border:none;font-family:Euclid Circular A;font-style:normal;font-weight:400;font-size:1rem;line-height:140%}[_nghost-%COMP%]  .p-accordion .p-accordion-content{color:#fff;background:rgba(255,255,255,.1);border:none;font-family:Euclid Circular A;font-style:normal;font-weight:400;font-size:1rem;line-height:140%}[_nghost-%COMP%]  .p-accordion .p-accordion-header .p-icon{margin-top:-8px;position:absolute;right:.5em;top:50%}[_nghost-%COMP%]  .p-datatable .p-paginator{display:flex;align-items:center;justify-content:end;flex-wrap:wrap;background:transparent;color:#fff;border:solid #e9ecef;border-width:0;padding:10px;border-radius:6px}[_nghost-%COMP%]  .p-datatable .p-paginator .p-paginator-pages .p-paginator-page{background-color:transparent;border:0 none;min-width:25px;height:25px;margin:.143rem;transition:box-shadow .2s;border-radius:0%;color:#fff;opacity:.6}[_nghost-%COMP%]  .p-datatable .p-paginator .p-paginator-pages .p-paginator-page.p-highlight{color:#fff;background:#3c71fb;border:none;border-radius:5px;opacity:1}[_nghost-%COMP%]  .p-paginator .p-paginator-first, [_nghost-%COMP%]  .p-paginator .p-paginator-prev, [_nghost-%COMP%]  .p-paginator .p-paginator-next, [_nghost-%COMP%]  .p-paginator .p-paginator-last{background-color:transparent;border:0 none;color:#6c757d;min-width:25px;height:25px;margin:.143rem;transition:box-shadow .2s;border-radius:0}[_nghost-%COMP%]  .p-datatable .p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover, [_nghost-%COMP%]  .p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover, [_nghost-%COMP%]  .p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover, [_nghost-%COMP%]  .p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover{background:transparent;border-color:transparent;border:0px;color:#343a40}[_nghost-%COMP%]  .p-dropdown{width:100%!important;margin:10px 0!important;color:#fff!important;background:#2e4060!important;border:1px solid #5c6276;border-radius:8px}[_nghost-%COMP%]  .p-overlaypanel .p-overlaypanel-content{background:linear-gradient(90.88deg,#162e58 -7.31%,#1a3463 99.28%);padding:0;border-radius:14px}[_nghost-%COMP%]  .p-overlaypanel{z-index:1001;transform-origin:center top;top:60px;transform:translateY(0);opacity:1;padding:10px;border:2px solid #3c71fb;border-radius:16px;background:linear-gradient(90.88deg,#162e58 -7.31%,#1a3463 99.28%)}.hor-divider[_ngcontent-%COMP%]{height:2px;width:90%;border:2px solid #ffffff}.search-bar-top[_ngcontent-%COMP%]{height:44px;border-radius:24px;background:linear-gradient(83deg,rgba(217,217,217,.1) 0%,rgba(85,110,173,.1) 100%);outline:none;border:none;padding:6px 49px;font-family:Euclid Circular A;font-style:normal;font-weight:400;font-size:.9rem;line-height:140%;color:#fff}.search-bar-icon[_ngcontent-%COMP%]{position:absolute;right:14rem}.filter-icon[_ngcontent-%COMP%]{height:3rem;width:3rem;background:rgb(14,19,43);display:flex;align-items:center;justify-content:center;border-radius:6px;cursor:pointer}']});const A=[{path:"deposit",component:p},{path:"withdraw",component:d}];class a{}a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[s.Bz.forChild(A),s.Bz]});class i{}i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.ez,u.m,m.u5,a]})}}]);