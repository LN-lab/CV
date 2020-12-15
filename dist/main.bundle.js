/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_variables_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/variables.css */ "./src/css/variables.css");


console.log("Je suis la nouvelle collègue que vous recherchez");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.css":
/*!**************************************************************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.css ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: borderbox; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-family: var(--font-family);\n  color: var(--text);\n  font-size: 1.6rem; }\n\np {\n  margin-top: 1rem 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 1rem 0 2rem 0; }\n\nul {\n  list-style: none; }\n\na {\n  color: var(--text);\n  text-decoration: none; }\n\nimg {\n  max-width: 100%; }\n\n.mb-5 {\n  margin-bottom: 5rem; }\n\n.mb-2 {\n  margin-bottom: 2rem; }\n\n.title-small {\n  letter-spacing: 0.5rem;\n  font-size: 1.7rem; }\n\n.text-primary {\n  color: var(--primary); }\n\n.text-dark {\n  color: var(--dark); }\n\n.text-hint {\n  color: var(--hint); }\n\n@keyframes bounce {\n  0% {\n    transform: rotate(-45deg); }\n  10% {\n    transform: rotate(-35deg); }\n  70% {\n    transform: rotate(20deg); }\n  80% {\n    transform: rotate(-10deg); }\n  90% {\n    transform: rotate(5deg); }\n  100% {\n    transform: rotate(0deg); } }\n\n/* Landscape phones and down */\n/* Landscape phone to portrait tablet */\n/* Portrait tablet to landscape and desktop */\n/* Large desktop */\n/* Print */\n.grid-container {\n  display: grid;\n  grid: \"picture header\" auto \"aside main\" 1fr \"footer footer\" auto / 350px auto; }\n\n@media (max-width: 480px) {\n  .grid-container {\n    grid: \"header\" auto \"main\" auto \"picture\" auto \"aside\" auto \"footer\" auto / auto; } }\n\nheader {\n  grid-area: header;\n  background: linear-gradient(to bottom, var(--dark), var(--light));\n  padding: 8rem 5rem;\n  text-align: center;\n  color: white; }\n\n@media (max-width: 480px) {\n  header {\n    padding: 4rem 1rem; } }\n\nheader h1 {\n  font-size: 6rem;\n  line-height: 8rem;\n  font-weight: 300;\n  letter-spacing: 3rem; }\n\n@media (max-width: 480px) {\n  header h1 {\n    font-size: 4rem; } }\n\nheader p {\n  letter-spacing: 0.5rem; }\n\nheader span {\n  display: inline-block;\n  animation: bounce 2s; }\n\n.picture {\n  grid-area: picture;\n  background: var(--background);\n  width: 276px;\n  padding: 6rem;\n  text-align: center;\n  border-right: 1px solid var(--border); }\n\n.picture img {\n  border-radius: 50%; }\n\naside {\n  grid-area: aside;\n  background: var(--background);\n  border-right: 1px solid var(--border);\n  padding: 5rem; }\n\naside .block {\n  margin-bottom: 5rem; }\n\naside .block h3 {\n  margin-bottom: 0;\n  font-size: 1.4rem; }\n\naside .block p {\n  margin: 0 0 2rem 0;\n  font-style: italic; }\n\naside .block .bar-skill {\n  margin: 2rem 0;\n  height: 5px;\n  background: var(--hint);\n  position: relative; }\n\naside .block .bar-skill .bar-skill-progress {\n  position: absolute;\n  height: 5px;\n  top: O;\n  left: 0;\n  width: 80%;\n  background: var(--light); }\n\naside .block .bar-skill .bar-skill-progress.html {\n  width: 100%; }\n\naside .block .bar-skill .bar-skill-dot.html {\n  left: calc(100% - 5px); }\n\naside .block .bar-skill .bar-skill-progress.css {\n  width: 80%; }\n\naside .block .bar-skill .bar-skill-dot.css {\n  left: calc(80% - 5px); }\n\naside .block .bar-skill .bar-skill-progress.js {\n  width: 60%; }\n\naside .block .bar-skill .bar-skill-dot.js {\n  left: calc(60% - 5px); }\n\naside .block .bar-skill .bar-skill-dot {\n  position: absolute;\n  height: 10px;\n  width: 10px;\n  background: var(--dark);\n  top: -2.5px;\n  transform: rotate(45deg); }\n\naside .block .stars-container {\n  display: flex;\n  margin: 2rem 0 3rem 0;\n  color: var(--hint); }\n\naside .block .stars-container i {\n  font-size: 2rem;\n  margin: 0 1rem; }\n\naside .block .social-container {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  border-radius: 5px;\n  padding: 1rem 1rem;\n  margin: 2rem 0;\n  transition: all 0.2s;\n  cursor: pointer; }\n\naside .block .social-container:hover {\n  background: var(--border); }\n\naside .block .social-container:hover i {\n  color: var(--primary);\n  transform: scale(1.3);\n  transition: 0.2s; }\n\naside .block .social-container i {\n  font-size: 2rem;\n  flex: 0 0 50px;\n  margin-right: 1rem; }\n\naside .block .social-container p {\n  flex: auto;\n  margin: 0; }\n\naside .qrcode {\n  display: none; }\n\nmain {\n  grid-area: main;\n  padding: 5rem; }\n\n@media (max-width: 480px) {\n  main {\n    padding: 1.5rem; } }\n\nmain h2 {\n  margin-bottom: 4rem; }\n\nmain p {\n  letter-spacing: 0.1rem;\n  line-height: 3rem;\n  margin-bottom: 5rem; }\n\nmain .experience {\n  display: flex;\n  margin: 6rem 0; }\n\nmain .experience .timeline {\n  text-align: center;\n  color: var(--hint);\n  padding-right: 2rem;\n  border-right: 1px solid var(--border); }\n\nmain .experience .timeline p {\n  margin: 0; }\n\nmain .content {\n  padding: 0 1rem; }\n\nmain .content h3 {\n  margin: 0; }\n\nmain .content .text-hint {\n  margin-bottom: 2rem; }\n\n@media print {\n  main .content .text-hint {\n    margin-bottom: 0.5rem; } }\n\nmain .content p {\n  margin: 0; }\n\nmain .content ul {\n  margin: 2rem 0;\n  list-style: circle;\n  padding-left: 4rem; }\n\nmain .content .soft-skills li {\n  list-style-type: none;\n  font-style: oblique; }\n\nfooter {\n  grid-area: footer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: white;\n  padding: 5rem;\n  background: var(--text); }\n\n@media (max-width: 480px) {\n  footer {\n    padding: 5rem 1.2rem; } }\n\nfooter h2 {\n  margin-bottom: 4rem; }\n\nfooter form {\n  display: flex;\n  align-items: center; }\n\nfooter form .prefix {\n  background: linear-gradient(to top, var(--dark), var(--light));\n  padding: 1rem 2rem;\n  color: white;\n  font-size: 2rem;\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem; }\n\nfooter form button {\n  background: var(--text);\n  border: 0;\n  cursor: pointer;\n  transition: all 0.2s; }\n\nfooter form button:hover {\n  opacity: 0.8; }\n\nfooter form button .postfix {\n  background: linear-gradient(to top, var(--dark), var(--light));\n  padding: 1rem 2rem;\n  color: white;\n  font-size: 2rem;\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem; }\n\nfooter form input {\n  outline: 0;\n  border: 0;\n  min-width: 400px;\n  padding: 1rem 2rem;\n  line-height: 2rem; }\n\n@media (max-width: 480px) {\n  footer form input {\n    min-width: 140px; } }\n\nfooter form input::placeholder {\n  color: var(--text); }\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: borderbox; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-family: var(--font-family);\n  color: var(--text);\n  font-size: 1.6rem; }\n\np {\n  margin-top: 1rem 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 1rem 0 2rem 0; }\n\nul {\n  list-style: none; }\n\na {\n  color: var(--text);\n  text-decoration: none; }\n\nimg {\n  max-width: 100%; }\n\n.mb-5 {\n  margin-bottom: 5rem; }\n\n.mb-2 {\n  margin-bottom: 2rem; }\n\n.title-small {\n  letter-spacing: 0.5rem;\n  font-size: 1.7rem; }\n\n.text-primary {\n  color: var(--primary); }\n\n.text-dark {\n  color: var(--dark); }\n\n.text-hint {\n  color: var(--hint); }\n\n@keyframes bounce {\n  0% {\n    transform: rotate(-45deg); }\n  10% {\n    transform: rotate(-35deg); }\n  70% {\n    transform: rotate(20deg); }\n  80% {\n    transform: rotate(-10deg); }\n  90% {\n    transform: rotate(5deg); }\n  100% {\n    transform: rotate(0deg); } }\n\n/* Landscape phones and down */\n/* Landscape phone to portrait tablet */\n/* Portrait tablet to landscape and desktop */\n/* Large desktop */\n/* Print */\n.grid-container {\n  display: grid;\n  grid: \"picture header\" auto \"aside main\" 1fr \"footer footer\" auto / 350px auto; }\n  @media (max-width: 480px) {\n    .grid-container {\n      grid: \"header\" auto \"main\" auto \"picture\" auto \"aside\" auto \"footer\" auto / auto; } }\n\nheader {\n  grid-area: header;\n  background: linear-gradient(to bottom, var(--dark), var(--light));\n  padding: 8rem 5rem;\n  text-align: center;\n  color: white; }\n  @media (max-width: 480px) {\n    header {\n      padding: 4rem 1rem; } }\n  header h1 {\n    font-size: 6rem;\n    line-height: 8rem;\n    font-weight: 300;\n    letter-spacing: 3rem; }\n    @media (max-width: 480px) {\n      header h1 {\n        font-size: 4rem; } }\n  header p {\n    letter-spacing: 0.5rem; }\n  header span {\n    display: inline-block;\n    animation: bounce 2s; }\n\n.picture {\n  grid-area: picture;\n  background: var(--background);\n  width: 276px;\n  padding: 6rem;\n  text-align: center;\n  border-right: 1px solid var(--border); }\n  .picture img {\n    border-radius: 50%; }\n\naside {\n  grid-area: aside;\n  background: var(--background);\n  border-right: 1px solid var(--border);\n  padding: 5rem; }\n  aside .block {\n    margin-bottom: 5rem; }\n    aside .block h3 {\n      margin-bottom: 0;\n      font-size: 1.4rem; }\n    aside .block p {\n      margin: 0 0 2rem 0;\n      font-style: italic; }\n    aside .block .bar-skill {\n      margin: 2rem 0;\n      height: 5px;\n      background: var(--hint);\n      position: relative; }\n      aside .block .bar-skill .bar-skill-progress {\n        position: absolute;\n        height: 5px;\n        top: O;\n        left: 0;\n        width: 80%;\n        background: var(--light); }\n      aside .block .bar-skill .bar-skill-progress.html {\n        width: 100%; }\n      aside .block .bar-skill .bar-skill-dot.html {\n        left: calc(100% - 5px); }\n      aside .block .bar-skill .bar-skill-progress.css {\n        width: 80%; }\n      aside .block .bar-skill .bar-skill-dot.css {\n        left: calc(80% - 5px); }\n      aside .block .bar-skill .bar-skill-progress.js {\n        width: 60%; }\n      aside .block .bar-skill .bar-skill-dot.js {\n        left: calc(60% - 5px); }\n      aside .block .bar-skill .bar-skill-dot {\n        position: absolute;\n        height: 10px;\n        width: 10px;\n        background: var(--dark);\n        top: -2.5px;\n        transform: rotate(45deg); }\n    aside .block .stars-container {\n      display: flex;\n      margin: 2rem 0 3rem 0;\n      color: var(--hint); }\n      aside .block .stars-container i {\n        font-size: 2rem;\n        margin: 0 1rem; }\n    aside .block .social-container {\n      display: flex;\n      justify-content: start;\n      align-items: center;\n      border-radius: 5px;\n      padding: 1rem 1rem;\n      margin: 2rem 0;\n      transition: all 0.2s;\n      cursor: pointer; }\n      aside .block .social-container:hover {\n        background: var(--border); }\n        aside .block .social-container:hover i {\n          color: var(--primary);\n          transform: scale(1.3);\n          transition: 0.2s; }\n      aside .block .social-container i {\n        font-size: 2rem;\n        flex: 0 0 50px;\n        margin-right: 1rem; }\n      aside .block .social-container p {\n        flex: auto;\n        margin: 0; }\n  aside .qrcode {\n    display: none; }\n\nmain {\n  grid-area: main;\n  padding: 5rem; }\n  @media (max-width: 480px) {\n    main {\n      padding: 1.5rem; } }\n  main h2 {\n    margin-bottom: 4rem; }\n  main p {\n    letter-spacing: 0.1rem;\n    line-height: 3rem;\n    margin-bottom: 5rem; }\n  main .experience {\n    display: flex;\n    margin: 6rem 0; }\n    main .experience .timeline {\n      text-align: center;\n      color: var(--hint);\n      padding-right: 2rem;\n      border-right: 1px solid var(--border); }\n      main .experience .timeline p {\n        margin: 0; }\n  main .content {\n    padding: 0 1rem; }\n    main .content h3 {\n      margin: 0; }\n    main .content .text-hint {\n      margin-bottom: 2rem; }\n      @media print {\n        main .content .text-hint {\n          margin-bottom: 0.5rem; } }\n    main .content p {\n      margin: 0; }\n    main .content ul {\n      margin: 2rem 0;\n      list-style: circle;\n      padding-left: 4rem; }\n    main .content .soft-skills li {\n      list-style-type: none;\n      font-style: oblique; }\n\nfooter {\n  grid-area: footer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: white;\n  padding: 5rem;\n  background: var(--text); }\n  @media (max-width: 480px) {\n    footer {\n      padding: 5rem 1.2rem; } }\n  footer h2 {\n    margin-bottom: 4rem; }\n  footer form {\n    display: flex;\n    align-items: center; }\n    footer form .prefix {\n      background: linear-gradient(to top, var(--dark), var(--light));\n      padding: 1rem 2rem;\n      color: white;\n      font-size: 2rem;\n      border-top-left-radius: 0.5rem;\n      border-bottom-left-radius: 0.5rem; }\n    footer form button {\n      background: var(--text);\n      border: 0;\n      cursor: pointer;\n      transition: all 0.2s; }\n      footer form button:hover {\n        opacity: 0.8; }\n      footer form button .postfix {\n        background: linear-gradient(to top, var(--dark), var(--light));\n        padding: 1rem 2rem;\n        color: white;\n        font-size: 2rem;\n        border-top-right-radius: 0.5rem;\n        border-bottom-right-radius: 0.5rem; }\n    footer form input {\n      outline: 0;\n      border: 0;\n      min-width: 400px;\n      padding: 1rem 2rem;\n      line-height: 2rem; }\n      @media (max-width: 480px) {\n        footer form input {\n          min-width: 140px; } }\n      footer form input::placeholder {\n        color: var(--text); }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/variables.css":
/*!******************************************************************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/variables.css ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-family: \"Mulish\", sans-serif;\n  --light: #7799ed;\n  --primary: #1466d8;\n  --dark: #210402;\n  --text: #333;\n  --background: #fafafa;\n  --hint: #999;\n  --border: #ddd; }\n", "",{"version":3,"sources":["webpack://./src/css/variables.css"],"names":[],"mappings":"AAAA;EACE,mCAAc;EACd,gBAAQ;EACR,kBAAU;EACV,eAAO;EACP,YAAO;EACP,qBAAa;EACb,YAAO;EACP,cAAS,EAAA","sourcesContent":[":root {\n  --font-family: \"Mulish\", sans-serif;\n  --light: #7799ed;\n  --primary: #1466d8;\n  --dark: #210402;\n  --text: #333;\n  --background: #fafafa;\n  --hint: #999;\n  --border: #ddd; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/variables.css":
/*!*******************************!*
  !*** ./src/css/variables.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./variables.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/variables.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map