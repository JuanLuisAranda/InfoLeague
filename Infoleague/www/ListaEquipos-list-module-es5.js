(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListaEquipos-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ListaEquipos/list.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ListaEquipos/list.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"dark\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"dark\">\n      Equipos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div *ngFor=\"let e of equipos\">\n    <ion-item (click)=\"muestraDetalles(e.id)\">\n\n      <img [src]=\"e.escudo\">\n      <h2>{{ e.name }}</h2>\n\n    </ion-item>\n    <div *ngIf=\"isClicked && equipos [index].id == e.id\" class=\"detalles\">\n      <h2>Estadio : {{ e.estadio }}</h2>\n      <h2>Ciudad : {{ e.ciudad }}</h2>\n      <h2>Año de Fundación : {{ e.year }}</h2>\n      <h2>Ligas Ganadas : {{ e.ligasWin }}</h2>\n    </div>\n    </div>\n\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/ListaEquipos/list.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ListaEquipos/list.module.ts ***!
  \*********************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/ListaEquipos/list.page.ts");







var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
                    }
                ])
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/ListaEquipos/list.page.scss":
/*!*********************************************!*\
  !*** ./src/app/ListaEquipos/list.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333333 !important;\n}\n\nion-item {\n  color: #bebebe;\n}\n\nion-label {\n  color: #bebebe;\n}\n\nion-button {\n  height: 3.7em;\n  background-color: #333333;\n}\n\n.detalles {\n  color: #bebebe;\n  padding: 3%;\n  background-color: #444444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGFFcXVpcG9zL0M6XFxVc2Vyc1xcQVxcRGVza3RvcFxcMsK6IERBTVxcQURcXEluZm9MZWFndWVcXEluZm9sZWFndWUvc3JjXFxhcHBcXExpc3RhRXF1aXBvc1xcbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL0xpc3RhRXF1aXBvcy9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0xpc3RhRXF1aXBvcy9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgICBjb2xvcjogcmdiKDE5MCwgMTkwLCAxOTApO1xuICB9XG4gIFxuICBpb24tbGFiZWwge1xuICAgIGNvbG9yOiByZ2IoMTkwLCAxOTAsIDE5MCk7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDMuN2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIH1cblxuICAuZGV0YWxsZXMge1xuICAgIGNvbG9yOiByZ2IoMTkwLCAxOTAsIDE5MCk7XG4gICAgcGFkZGluZzogMyU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiAjYmViZWJlO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogI2JlYmViZTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMy43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG59XG5cbi5kZXRhbGxlcyB7XG4gIGNvbG9yOiAjYmViZWJlO1xuICBwYWRkaW5nOiAzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ListaEquipos/list.page.ts":
/*!*******************************************!*\
  !*** ./src/app/ListaEquipos/list.page.ts ***!
  \*******************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_equipo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/equipo.service */ "./src/app/services/equipo.service.ts");



var ListPage = /** @class */ (function () {
    function ListPage(equipoService) {
        this.equipoService = equipoService;
        this.isClicked = false;
    }
    ListPage.prototype.ionViewWillEnter = function () {
        this.equipos = this.equipoService.getequipos();
    };
    ListPage.prototype.muestraDetalles = function (id) {
        this.index = this.equipos.findIndex(function (e) { return e.id == id; });
        this.equipo = this.equipoService.getequipo(id);
        this.isClicked = !this.isClicked;
    };
    ListPage.ctorParameters = function () { return [
        { type: _services_equipo_service__WEBPACK_IMPORTED_MODULE_2__["EquipoService"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/ListaEquipos/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/ListaEquipos/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_equipo_service__WEBPACK_IMPORTED_MODULE_2__["EquipoService"]])
    ], ListPage);
    return ListPage;
}());



/***/ }),

/***/ "./src/app/services/equipo.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/equipo.service.ts ***!
  \********************************************/
/*! exports provided: EquipoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoService", function() { return EquipoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EquipoService = /** @class */ (function () {
    function EquipoService() {
        this.equipos = [
            { "id": 1, "name": 'Real Madrid CF', "escudo": "../../assets/teams/RMCF.png", "estadio": "Santiago Bernabéu", "ciudad": "Madrid", "year": 1902, "ligasWin": 33 },
            { "id": 2, "name": 'Barcelona FC', "escudo": "../assets/teams/FCB.png", "estadio": "Camp Nou", "ciudad": "Barcelona", "year": 1899, "ligasWin": 25 },
            { "id": 3, "name": 'Sevilla CF', "escudo": "../../assets/teams/SFC.png", "estadio": "Ramón Sánchez Pizjuán", "ciudad": "Sevilla", "year": 1890, "ligasWin": 1 },
            { "id": 4, "name": 'Atlético de Madrid', "escudo": "../../assets/teams/ATM.png", "estadio": "Wanda Metropolitano", "ciudad": "Madrid", "year": 1903, "ligasWin": 10 },
            { "id": 5, "name": 'Athletic Club de Bilbao', "escudo": "../../assets/teams/ATH.png", "estadio": "Ramón Sánchez Pizjuán", "ciudad": "Sevilla", "year": 1890, "ligasWin": 8 },
            { "id": 6, "name": 'Real Sociedad', "escudo": "../../assets/teams/RSO.png", "estadio": "Anoeta", "ciudad": "San Sebastián", "year": 1909, "ligasWin": 2 },
            { "id": 7, "name": 'Getafe CF', "escudo": "../../assets/teams/GTF.png", "estadio": "Coliseum Alfonso Pérez", "ciudad": "Madrid", "year": 1923, "ligasWin": 0 },
            { "id": 8, "name": 'Granada CF', "escudo": "../../assets/teams/GRA.png", "estadio": "Nuevo Los Cármenes", "ciudad": "Granada", "year": 1931, "ligasWin": 0 },
            { "id": 9, "name": 'Levante UD', "escudo": "../../assets/teams/LEV.png", "estadio": "Ciutat de Valencia", "ciudad": "Valencia", "year": 1909, "ligasWin": 0 },
            { "id": 10, "name": 'Villarreal CF', "escudo": "../../assets/teams/VIL.png", "estadio": "Estadio de la Cerámica", "ciudad": "Villareal", "year": 1923, "ligasWin": 0 },
            { "id": 11, "name": 'Alavés', "escudo": "../../assets/teams/ALA.png", "estadio": "Mendizorroza", "ciudad": "Vitoria", "year": 1921, "ligasWin": 0 },
            { "id": 12, "name": 'Valladolid CF', "escudo": "../../assets/teams/VAL.png", "estadio": "Municipal José Zorrilla", "ciudad": "Valladolid", "year": 1928, "ligasWin": 0 },
            { "id": 13, "name": 'Real Betis Balompié', "escudo": "../../assets/teams/BET.png", "estadio": "Benito Villamarín", "ciudad": "Sevilla", "year": 1907, "ligasWin": 1 },
            { "id": 14, "name": 'Eibar', "escudo": "../../assets/teams/EIB.png", "estadio": "Municipal de Ipurua", "ciudad": "Eibar", "year": 1940, "ligasWin": 0 },
            { "id": 15, "name": 'RCD Mallorca', "escudo": "../../assets/teams/MAL.png", "estadio": "Son Moix", "ciudad": "Palma de Mallorca", "year": 1916, "ligasWin": 0 },
            { "id": 16, "name": 'Celta de Vigo', "escudo": "../../assets/teams/CEL.png", "estadio": "Abanca Balaídos", "ciudad": "Vigo", "year": 1923, "ligasWin": 0 },
            { "id": 17, "name": 'RCD Espanyol', "escudo": "../../assets/teams/ESP.png", "estadio": "RCDE Stadium", "ciudad": "Cornellá de Llobregat", "year": 1900, "ligasWin": 0 },
            { "id": 18, "name": 'Leganés', "escudo": "../../assets/teams/LEG.png", "estadio": "Municipal de Butarque", "ciudad": "Leganés", "year": 1928, "ligasWin": 0 },
            { "id": 19, "name": 'Valencia CF', "escudo": "../../assets/teams/VCF.png", "estadio": "Mestalla", "ciudad": "Valencia", "year": 1919, "ligasWin": 6 },
            { "id": 20, "name": 'Osasuna', "escudo": "../../assets/teams/OSA.png", "estadio": "El Sadar", "ciudad": "Pamplona", "year": 1920, "ligasWin": 0 },
        ];
    }
    EquipoService.prototype.getequipos = function () {
        return this.equipos;
    };
    EquipoService.prototype.getequipo = function (id) {
        return this.equipos.filter(function (e) { return e.id == id; })[0];
    };
    EquipoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EquipoService);
    return EquipoService;
}());



/***/ })

}]);
//# sourceMappingURL=ListaEquipos-list-module-es5.js.map