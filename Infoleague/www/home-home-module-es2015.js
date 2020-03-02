(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      InfoLeague\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"inicio-card\">\n      <img src=\"/assets/infoleaguelogo.png\" alt=\"\" />\n      <ion-card-header>\n        <ion-card-title>¡Bienvenido a InfoLeague!</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Aquí podrás observar los equipos de la mejor liga del mundo, La Liga Santander! Y además podrás añadir tus equipos a favoritos\n           para que no pierdas tiempo en buscar la información sobre ellos.</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-list lines=\"none\">\n      <ion-list-header>\n        <ion-label>Resources</ion-label>\n      </ion-list-header>\n      <ion-item href=\"https://www.laliga.com/\">\n        <ion-icon slot=\"start\" color=\"primary\" name=\"globe\" ios=\"ios-globe\" md=\"md-globe\"></ion-icon>\n        <ion-label>Web oficial de LaLiga</ion-label>\n      </ion-item>\n      <ion-item href=\"https://www.google.com/search?q=clasificacion+LaLiga&oq=clasificacion+LaLiga&aqs=chrome..69i57j0l4j69i60.4351j0j7&sourceid=chrome&ie=UTF-8#sie=lg;/g/11ff1xzn64;2;/m/09gqx;st;fp;1;;\">\n        <ion-icon slot=\"start\" color=\"primary\" name=\"clipboard\"></ion-icon>\n        <ion-label>Clasificación LaLiga</ion-label>\n      </ion-item>\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inicio-card img {\n  overflow: hidden;\n}\n\n.inicio-card {\n  background-color: #333333;\n}\n\n.inicio-card ion-card-title {\n  color: #56a56c;\n}\n\n.inicio-card ion-card-content p {\n  color: #bebebe;\n}\n\nion-content {\n  --ion-background-color: #333333 !important;\n}\n\nion-item {\n  color: #bebebe;\n}\n\nion-label {\n  color: #bebebe;\n}\n\nion-icon {\n  color: #56a56c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEFcXERvY3VtZW50c1xcaW9uaWNcXEluZm9sZWFndWUvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDQSxjQUFBO0FDRUE7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FERUE7RUFDRSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmljaW8tY2FyZCBpbWcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmluaWNpby1jYXJkICB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG59XG5cbi5pbmljaW8tY2FyZCBpb24tY2FyZC10aXRsZSB7XG5jb2xvcjogcmdiKDg2LCAxNjUsIDEwOCk7XG59XG5cbi5pbmljaW8tY2FyZCBpb24tY2FyZC1jb250ZW50IHAge1xuICBjb2xvcjogcmdiKDE5MCwgMTkwLCAxOTApO1xufVxuXG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xuICBcbn1cbmlvbi1pdGVtIHtcbiAgY29sb3I6IHJnYigxOTAsIDE5MCwgMTkwKTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IHJnYigxOTAsIDE5MCwgMTkwKTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogcmdiKDg2LCAxNjUsIDEwOCk7XG59IiwiLmluaWNpby1jYXJkIGltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbmljaW8tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG59XG5cbi5pbmljaW8tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjNTZhNTZjO1xufVxuXG4uaW5pY2lvLWNhcmQgaW9uLWNhcmQtY29udGVudCBwIHtcbiAgY29sb3I6ICNiZWJlYmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiAjYmViZWJlO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogI2JlYmViZTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzU2YTU2Yztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map