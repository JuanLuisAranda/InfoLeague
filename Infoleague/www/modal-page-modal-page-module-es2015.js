(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-page-modal-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modal-page/modal-page.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal-page/modal-page.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ModalPage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modal-page/modal-page-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modal-page/modal-page-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ModalPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPagePageRoutingModule", function() { return ModalPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modal_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-page.page */ "./src/app/modal-page/modal-page.page.ts");




const routes = [
    {
        path: '',
        component: _modal_page_page__WEBPACK_IMPORTED_MODULE_3__["ModalPagePage"]
    }
];
let ModalPagePageRoutingModule = class ModalPagePageRoutingModule {
};
ModalPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalPagePageRoutingModule);



/***/ }),

/***/ "./src/app/modal-page/modal-page.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modal-page/modal-page.module.ts ***!
  \*************************************************/
/*! exports provided: ModalPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPagePageModule", function() { return ModalPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-page-routing.module */ "./src/app/modal-page/modal-page-routing.module.ts");
/* harmony import */ var _modal_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-page.page */ "./src/app/modal-page/modal-page.page.ts");







let ModalPagePageModule = class ModalPagePageModule {
};
ModalPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalPagePageRoutingModule"]
        ],
        declarations: [_modal_page_page__WEBPACK_IMPORTED_MODULE_6__["ModalPagePage"]]
    })
], ModalPagePageModule);



/***/ }),

/***/ "./src/app/modal-page/modal-page.page.scss":
/*!*************************************************!*\
  !*** ./src/app/modal-page/modal-page.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLXBhZ2UvbW9kYWwtcGFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modal-page/modal-page.page.ts":
/*!***********************************************!*\
  !*** ./src/app/modal-page/modal-page.page.ts ***!
  \***********************************************/
/*! exports provided: ModalPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPagePage", function() { return ModalPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalPagePage = class ModalPagePage {
    constructor() { }
    ngOnInit() {
    }
};
ModalPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-page',
        template: __webpack_require__(/*! raw-loader!./modal-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/modal-page/modal-page.page.html"),
        styles: [__webpack_require__(/*! ./modal-page.page.scss */ "./src/app/modal-page/modal-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ModalPagePage);



/***/ })

}]);
//# sourceMappingURL=modal-page-modal-page-module-es2015.js.map