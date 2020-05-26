(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/edit/edit.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/edit/edit.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title color=\"dark\">Favorito</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" defaultHref=\"favoritos\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <ion-item>\n      <ion-label position=\"floating\">Equipo</ion-label>\n      <ion-input placeholder=\"Introduzca el nombre de tu Equipo\" [(ngModel)]=\"favorito.name\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Color</ion-label>\n      <ion-input placeholder=\"Introduzca el color principal de tu Equipo\" [(ngModel)]=\"favorito.colorprincipal\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Jugadores</ion-label>\n      <ion-input type=\"number\" placeholder=\"Introduzca el numero de jugadores de tu Equipo\" [(ngModel)]=\"favorito.jugadores\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Puntos</ion-label>\n      <ion-input placeholder=\"Introduzca los puntos de tu Equipo\" [(ngModel)]=\"favorito.puntos\"></ion-input>\n    </ion-item>\n    <br>\n    <ion-grid>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col>\n            <ion-button (click)=\"addFav()\" shape=\"round\" strong=\"true\" color=\"success\">\n                Guardar\n              </ion-button>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/edit/edit-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/edit/edit-routing.module.ts ***!
  \***************************************************/
/*! exports provided: EditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function() { return EditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.page */ "./src/app/pages/edit/edit.page.ts");




var routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
    }
];
var EditPageRoutingModule = /** @class */ (function () {
    function EditPageRoutingModule() {
    }
    EditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EditPageRoutingModule);
    return EditPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/edit/edit.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/edit/edit.module.ts ***!
  \*******************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.module */ "./src/app/pages/edit/edit-routing.module.ts");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/pages/edit/edit.page.ts");







var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]
            ],
            declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
        })
    ], EditPageModule);
    return EditPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit/edit.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/edit/edit.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333333 !important;\n}\n\nion-item {\n  color: #bebebe;\n}\n\nion-label {\n  color: #bebebe;\n}\n\n.contenido ion-card-content p {\n  color: #bebebe;\n  font-size: 2.5ch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC9DOlxcVXNlcnNcXEFcXERlc2t0b3BcXDLCuiBEQU1cXEFEXFxJbmZvTGVhZ3VlXFxJbmZvbGVhZ3VlL3NyY1xcYXBwXFxwYWdlc1xcZWRpdFxcZWRpdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXQvZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0L2VkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBjb2xvcjogcmdiKDE5MCwgMTkwLCAxOTApO1xyXG4gIH1cclxuICBcclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6IHJnYigxOTAsIDE5MCwgMTkwKTtcclxuICB9XHJcblxyXG4gIC5jb250ZW5pZG8gaW9uLWNhcmQtY29udGVudCBwIHtcclxuICAgIGNvbG9yOiByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgICBmb250LXNpemU6IDIuNWNoO1xyXG4gIH0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogI2JlYmViZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNiZWJlYmU7XG59XG5cbi5jb250ZW5pZG8gaW9uLWNhcmQtY29udGVudCBwIHtcbiAgY29sb3I6ICNiZWJlYmU7XG4gIGZvbnQtc2l6ZTogMi41Y2g7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/edit/edit.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/edit/edit.page.ts ***!
  \*****************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_favorito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/favorito.service */ "./src/app/services/favorito.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditPage = /** @class */ (function () {
    function EditPage(favoritosService, router, activatedRoute) {
        this.favoritosService = favoritosService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pageTitle = "Nuevo equipo";
        this.favorito = {
            name: '', colorprincipal: '', jugadores: 0, puntos: 0
        };
        this.action = "Guardar";
    }
    EditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.id != null) {
            this.favoritosService.getFavByID(this.id).subscribe(function (data) {
                _this.favorito = data;
                _this.pageTitle = "Editar equipo";
                _this.action = "Actualizar";
            });
        }
    };
    EditPage.prototype.addFav = function () {
        if (this.action == "Guardar") {
            this.favoritosService.addFav(this.favorito);
        }
        else {
            this.favoritosService.updateFavById(this.id, this.favorito);
        }
        this.router.navigateByUrl("/favoritos");
    };
    EditPage.ctorParameters = function () { return [
        { type: src_app_services_favorito_service__WEBPACK_IMPORTED_MODULE_2__["FavoritoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/pages/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_favorito_service__WEBPACK_IMPORTED_MODULE_2__["FavoritoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-edit-module-es5.js.map