(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favoritos-favoritos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/favoritos/favoritos.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/favoritos/favoritos.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"dark\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"dark\">Favoritos</ion-title>\n    <ion-buttons slot=\"end\" padding>\n      <ion-button color=\"dark\" (click)=\"addFav()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"contenido\">\n  <div class=\"ion-padding\">\n    <p>¡Añade aquí a tus equipos favoritos!</p>\n    <ion-list>\n      <ion-item *ngFor=\"let f of favoritos | async\">\n        <ion-label>Nombre: {{ f.name }} Color: {{ f.colorprincipal }} Nº Jugadores: {{ f.jugadores }} Puntos: {{ f.puntos }}</ion-label>\n        <ion-icon\n          color=\"warning\"\n          name=\"create\"\n          (click)=\"goEditFav(f.id)\">\n        </ion-icon>\n        <ion-icon\n        color=\"danger\" \n        name=\"trash\" \n        (click)=\"presentAlertConfirm(f.id, f.name)\">\n        </ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/favoritos/favoritos-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/favoritos/favoritos-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FavoritosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosPageRoutingModule", function() { return FavoritosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _favoritos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favoritos.page */ "./src/app/pages/favoritos/favoritos.page.ts");




var routes = [
    {
        path: '',
        component: _favoritos_page__WEBPACK_IMPORTED_MODULE_3__["FavoritosPage"]
    }
];
var FavoritosPageRoutingModule = /** @class */ (function () {
    function FavoritosPageRoutingModule() {
    }
    FavoritosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FavoritosPageRoutingModule);
    return FavoritosPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/favoritos/favoritos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/favoritos/favoritos.module.ts ***!
  \*****************************************************/
/*! exports provided: FavoritosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosPageModule", function() { return FavoritosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favoritos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favoritos-routing.module */ "./src/app/pages/favoritos/favoritos-routing.module.ts");
/* harmony import */ var _favoritos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favoritos.page */ "./src/app/pages/favoritos/favoritos.page.ts");







var FavoritosPageModule = /** @class */ (function () {
    function FavoritosPageModule() {
    }
    FavoritosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _favoritos_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritosPageRoutingModule"]
            ],
            declarations: [_favoritos_page__WEBPACK_IMPORTED_MODULE_6__["FavoritosPage"]]
        })
    ], FavoritosPageModule);
    return FavoritosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/favoritos/favoritos.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/favoritos/favoritos.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333333 !important;\n}\n\nion-item {\n  color: #bebebe;\n}\n\nion-label {\n  color: #bebebe;\n}\n\n.contenido p {\n  color: #bebebe;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmF2b3JpdG9zL0M6XFxVc2Vyc1xcQVxcRG9jdW1lbnRzXFxpb25pY1xcSW5mb2xlYWd1ZS9zcmNcXGFwcFxccGFnZXNcXGZhdm9yaXRvc1xcZmF2b3JpdG9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmF2b3JpdG9zL2Zhdm9yaXRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmF2b3JpdG9zL2Zhdm9yaXRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGNvbG9yOiByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogcmdiKDE5MCwgMTkwLCAxOTApO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbmlkbyBwIHtcclxuICAgIGNvbG9yOiByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiAjYmViZWJlO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogI2JlYmViZTtcbn1cblxuLmNvbnRlbmlkbyBwIHtcbiAgY29sb3I6ICNiZWJlYmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/favoritos/favoritos.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/favoritos/favoritos.page.ts ***!
  \***************************************************/
/*! exports provided: FavoritosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosPage", function() { return FavoritosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_favorito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/favorito.service */ "./src/app/services/favorito.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






var FavoritosPage = /** @class */ (function () {
    function FavoritosPage(favoritoService, router, authService, alertController) {
        this.favoritoService = favoritoService;
        this.router = router;
        this.authService = authService;
        this.alertController = alertController;
    }
    FavoritosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getCurrentUser().subscribe(function (data) { return _this.favoritos = _this.favoritoService.getFavoritos(); });
        //console.log(this.favoritoService.favoritos);
        //console.log(this.favoritos);
    };
    FavoritosPage.prototype.addFav = function () {
        this.router.navigateByUrl('/create-fav');
    };
    // Ruta para la pagina de edición
    FavoritosPage.prototype.goEditFav = function (id) {
        this.router.navigateByUrl("/edit" + (id != undefined ? '/' + id : ''));
    };
    // Borrado del equipo favorito con promesa y una vez borrado se recargan los equipos favoritos
    /* deleteFav(id: number) {
      this.favoritoService.deleteFav(id).then(
      () => this.favoritoService.getFavoritos().then(
      data => this.favoritos = data)
      );
    } */
    // Confirmación para borrado
    FavoritosPage.prototype.presentAlertConfirm = function (id, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Eliminar equipo favorito',
                            message: "Vas a borrar tu equipo <strong>" + name + "</strong>, \u00BFEst\u00E1s seguro?",
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }, {
                                    text: 'Sí',
                                    handler: function () { return _this.favoritoService.deleteFavById(id); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FavoritosPage.ctorParameters = function () { return [
        { type: src_app_services_favorito_service__WEBPACK_IMPORTED_MODULE_2__["FavoritoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    FavoritosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favoritos',
            template: __webpack_require__(/*! raw-loader!./favoritos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/favoritos/favoritos.page.html"),
            styles: [__webpack_require__(/*! ./favoritos.page.scss */ "./src/app/pages/favoritos/favoritos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_favorito_service__WEBPACK_IMPORTED_MODULE_2__["FavoritoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], FavoritosPage);
    return FavoritosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-favoritos-favoritos-module-es5.js.map