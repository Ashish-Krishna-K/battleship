/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Frijole&family=Roboto+Condensed:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --board-bg: rgb(148, 0, 255);
  --body-bg: rgb(39, 0, 93);
  --missed-tile: rgb(228, 241, 255);
  --hit-tile: rgb(255, 153, 153);
  --ship-tile: rgb(0, 255, 0);
  --modal-bg: rgb(174, 210, 255);
  --link-color: rgb(255, 255, 102);
}

html,
body {
  height: 100svh;
}

body {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  background-color: var(--body-bg);
  color: var(--modal-bg);
  font-family: 'Frijole', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', cursive;
}

header {
  text-align: center;
}

main {
  margin: auto;
}

footer {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
}

footer a,
footer a:visited {
  color: var(--link-color);
  text-decoration: none;
}

button {
  background-color: var(--body-bg);
  color: var(--modal-bg);
  border: none;
  padding: 1vh 3vw;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: scale 100ms ease-in-out;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
}

button:hover {
  scale: 0.9;
}

button.cancel-btn {
  fill: var(--modal-bg);
  width: 50px;
  height: auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

svg {
  margin: 0;
}

.game-container>div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 2vw;
}

.board-container {
  height: 500px;
  width: 500px;
}

.board-container>div {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

.tile {
  min-height: 45px;
  border: 1px solid var(--modal-bg);
  background-color: var(--board-bg);
}

.tile.ship,
.temp-ship {
  background-color: var(--ship-tile);
}

.tile.attacked {
  background-color: var(--missed-tile);
}

.tile.ship.attacked {
  background-color: var(--hit-tile);
}

.modal {
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal>div {
  background-color: var(--modal-bg);
  color: var(--body-bg);
  padding: 2vh 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cancel-btn {
  align-self: flex-end;
}
.modal-header {
  margin-bottom: 2.5vh;
  text-align: center;
}
.start-btn-container {
  margin: 4vh;
}

.hidden {
  display: none;
}

.boards {
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAEA;EACE,4BAA4B;EAC5B,yBAAyB;EACzB,iCAAiC;EACjC,8BAA8B;EAC9B,2BAA2B;EAC3B,8BAA8B;EAC9B,gCAAgC;AAClC;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,iCAAiC;EACjC,gCAAgC;EAChC,sBAAsB;EACtB,2JAA2J;AAC7J;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,kCAAkC;EAClC,qBAAqB;AACvB;;AAEA;;EAEE,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;EAChC,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,mCAAmC;EACnC,2CAA2C;EAC3C,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,iCAAiC;AACnC;;AAEA;;EAEE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,mCAAmC;EACnC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,iCAAiC;EACjC,qBAAqB;EACrB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Frijole&family=Roboto+Condensed:wght@700&display=swap');\n\n:root {\n  --board-bg: rgb(148, 0, 255);\n  --body-bg: rgb(39, 0, 93);\n  --missed-tile: rgb(228, 241, 255);\n  --hit-tile: rgb(255, 153, 153);\n  --ship-tile: rgb(0, 255, 0);\n  --modal-bg: rgb(174, 210, 255);\n  --link-color: rgb(255, 255, 102);\n}\n\nhtml,\nbody {\n  height: 100svh;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr auto;\n  background-color: var(--body-bg);\n  color: var(--modal-bg);\n  font-family: 'Frijole', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', cursive;\n}\n\nheader {\n  text-align: center;\n}\n\nmain {\n  margin: auto;\n}\n\nfooter {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(2, 1fr);\n  justify-items: center;\n}\n\nfooter a,\nfooter a:visited {\n  color: var(--link-color);\n  text-decoration: none;\n}\n\nbutton {\n  background-color: var(--body-bg);\n  color: var(--modal-bg);\n  border: none;\n  padding: 1vh 3vw;\n  border-radius: 5px;\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: scale 100ms ease-in-out;\n  font-family: 'Roboto Condensed', sans-serif;\n  font-weight: 900;\n}\n\nbutton:hover {\n  scale: 0.9;\n}\n\nbutton.cancel-btn {\n  fill: var(--modal-bg);\n  width: 50px;\n  height: auto;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nsvg {\n  margin: 0;\n}\n\n.game-container>div {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  gap: 2vw;\n}\n\n.board-container {\n  height: 500px;\n  width: 500px;\n}\n\n.board-container>div {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.tile {\n  min-height: 45px;\n  border: 1px solid var(--modal-bg);\n  background-color: var(--board-bg);\n}\n\n.tile.ship,\n.temp-ship {\n  background-color: var(--ship-tile);\n}\n\n.tile.attacked {\n  background-color: var(--missed-tile);\n}\n\n.tile.ship.attacked {\n  background-color: var(--hit-tile);\n}\n\n.modal {\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgb(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal>div {\n  background-color: var(--modal-bg);\n  color: var(--body-bg);\n  padding: 2vh 5vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.cancel-btn {\n  align-self: flex-end;\n}\n.modal-header {\n  margin-bottom: 2.5vh;\n  text-align: center;\n}\n.start-btn-container {\n  margin: 4vh;\n}\n\n.hidden {\n  display: none;\n}\n\n.boards {\n  text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/displayController.ts":
/*!******************************************!*\
  !*** ./src/scripts/displayController.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eventsObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsObserver */ "./src/scripts/eventsObserver.ts");

// Returns capitalized names for ships to display to user
const displayShipName = (ship) => {
    switch (ship) {
        case 'carrier':
            return 'Carrier';
        case 'battleship':
            return 'Battleship';
        case 'destroyer':
            return 'Destroyer';
        case 'submarine':
            return 'Submarine';
        case 'patrolBoat':
            return 'Patrol Boat';
        default:
            return '';
    }
};
// a function to generate coordinates corresponding to the 
// ship length provided, this is used to display a ship object
// on hover when the user is placing ships
const generateCoordinates = (length, start, orientation) => {
    // generated coordinates will be returned as an array
    const holder = [];
    for (let i = 0; i < length; i++) {
        // if orientation is horizontal we'll have to change only 
        // the x axis if it's vertical then we'll have to change only
        // the y axis
        if (orientation === 'horizontal') {
            // when the starting x axis coordinate plus the ship length is
            // greater than the max value of 9 then we'll have generate 
            // the coordinates in the opposite direction hence if start.x
            // + length is lesser than 9 we'll add if it's greater we'll
            // subtract. Same logic applies to vertical direction only in
            // that case the y axis is considered
            if (start.x + length < 9) {
                holder.push({
                    x: start.x + i,
                    y: start.y,
                });
            }
            else {
                holder.push({
                    x: start.x - i,
                    y: start.y,
                });
            }
        }
        else {
            if (start.y + length < 9) {
                holder.push({
                    x: start.x,
                    y: start.y + i,
                });
            }
            else {
                holder.push({
                    x: start.x,
                    y: start.y - i,
                });
            }
        }
    }
    return holder;
};
// a function to generate coordinates of the ship if it's placed in 
// given start position
const generateShipCoordinates = (shipType, start, orientation) => {
    switch (shipType) {
        case 'carrier':
            return generateCoordinates(5, start, orientation);
        case 'battleship':
            return generateCoordinates(4, start, orientation);
        case 'destroyer':
            return generateCoordinates(3, start, orientation);
        case 'submarine':
            return generateCoordinates(3, start, orientation);
        case 'patrolBoat':
            return generateCoordinates(2, start, orientation);
        default:
            return [];
    }
};
// a function to render the heading that says "place your..."
// i couldn't come up with a better name hence went with 
// instructions
const renderInstructions = (ship) => {
    const instructions = document.createElement('h2');
    // this is used as a state holder to keep track of which ship
    // is being placed hence adding a data attribute
    instructions.dataset.shipType = ship;
    instructions.classList.add('current-ship');
    instructions.textContent = `Place your ${displayShipName(ship)}`;
    return instructions;
};
// a function to change the orientation when the 'rotate' button
// is clicked
const renderOrientationControl = () => {
    const orientationControl = document.createElement('button');
    orientationControl.classList.add('orientaion-control');
    // once again the orientation state is stored as a value in the
    // button
    orientationControl.value = 'horizontal';
    orientationControl.textContent = 'Rotate';
    orientationControl.addEventListener('click', function () {
        // change the button's value on click, this is needed because
        // the button's value is the state to determine the orientation
        if (this.value === 'horizontal') {
            this.value = 'vertical';
        }
        else {
            this.value = 'horizontal';
        }
    });
    return orientationControl;
};
// a function to render a board the user can click on
const renderBoard = () => {
    const container = document.createElement('div');
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('tile');
            // the coordinates is everything throught the app.
            // to get the details of which coordinate is clicked
            // saving it as a string in the data attribute
            cell.dataset.coordinates = JSON.stringify({ x: j, y: i });
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    return container;
};
// a function to change the "instructions" heading as and when a ship is
// placed
const changeInstructions = ({ data }) => {
    const container = document.querySelector('div.instructions-container');
    if (container !== null) {
        // replace the current elements of the container with new
        // element
        const child = container.firstChild;
        if (child !== null)
            container.removeChild(child);
        container.appendChild(renderInstructions(data));
    }
};
// event handler when the start game button is clicking the start  
// game button should replace the current children of the app div 
// and render the game boards
const startGame = () => {
    const appBody = document.querySelector('div#app');
    if (appBody !== null) {
        const child = appBody.firstChild;
        if (child !== null)
            child.remove();
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('placeComputerShips', { data: null });
        appBody.appendChild(renderGame());
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('markShipsRequest', { data: 'player' });
    }
};
// a function to generate the "start game" button
const startButtonComponent = () => {
    const startBtn = document.createElement('button');
    startBtn.classList.add('start-game-btn');
    startBtn.textContent = 'Start Game';
    startBtn.addEventListener('click', startGame);
    return startBtn;
};
// a function to render the "place ships board" on initial page load
const renderPlaceShipsBoard = () => {
    const appBody = document.querySelector('div#app');
    if (appBody !== null) {
        // the entire contents of this board will be a modal to give a 
        // pop-up window effect
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal');
        const modal = document.createElement('div');
        const cancelBtn = document.createElement('button');
        // easiest way to directly append the svg to the html using 
        // javascript
        cancelBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>close</title>
          <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      `;
        cancelBtn.classList.add('cancel-btn');
        // the cancel button's purpose is to reset the current ship
        // placements on the board. Easiest way to acheive it is to 
        // reload the page
        cancelBtn.addEventListener('click', () => {
            location.reload();
        });
        modal.appendChild(cancelBtn);
        const modalHeader = document.createElement('div');
        modalHeader.classList.add('modal-header');
        const instructionsContainer = document.createElement('div');
        instructionsContainer.classList.add('instructions-container');
        instructionsContainer.appendChild(renderInstructions('carrier'));
        modalHeader.appendChild(instructionsContainer);
        const controlContainer = renderOrientationControl();
        modalHeader.appendChild(controlContainer);
        modal.appendChild(modalHeader);
        const startBtnContainer = document.createElement('div');
        startBtnContainer.classList.add('start-btn-container');
        // since the modal has display flex property on it,
        // the empty container will take up space hence adding 
        // a display: none to it when it's not required
        startBtnContainer.classList.add('hidden');
        modal.appendChild(startBtnContainer);
        const board = renderBoard();
        board.classList.add('player-board');
        board.classList.add('board-container');
        const tilesList = board.querySelectorAll('div.tile');
        // attaching the event listener to each cell in the board
        // that will mark the tile during the game loop
        tilesList.forEach((tile) => {
            let coordinates;
            if (tile.dataset.coordinates !== null && tile.dataset.coordinates !== undefined) {
                // the coordinates is stored as a string hence parsing it to 
                // get the object back
                coordinates = JSON.parse(tile.dataset.coordinates);
                tile.addEventListener('click', () => {
                    const shipType = instructionsContainer.firstChild.dataset.shipType;
                    // for somereason the null here is a string during runtime hence testing
                    // for a string "null" instead of the null object
                    if (shipType !== 'null' && shipType !== undefined) {
                        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('shipPlacementRequest', {
                            data: {
                                shipType,
                                coordinates,
                                orientation: controlContainer.value,
                            },
                        });
                    }
                });
                // when the user hovers over the board the ship's object should be indicated to the
                // user to give the user a visiual indication.
                tile.addEventListener('mouseenter', function () {
                    const currentCoordinates = this.dataset.coordinates;
                    const shipType = instructionsContainer.firstChild.dataset.shipType;
                    const orientation = controlContainer.value;
                    if (shipType !== undefined && currentCoordinates !== undefined && orientation !== undefined) {
                        // generating the tentative coordinates based on the current tile's coordinate as start position
                        const shipCoordinates = generateShipCoordinates(shipType, JSON.parse(currentCoordinates), orientation);
                        // the idea is to mark only the ship's tentative tiles, and the tiles which corresponds
                        // to the tentative tiles will change as the user hovers over each cell hence creating 
                        // an array of tiles which corresponds to the generated shipCoordinates
                        const tilesToMark = Array.from(tilesList).filter((currentTile) => {
                            return shipCoordinates.some((coordinates) => JSON.stringify(coordinates) === currentTile.dataset.coordinates);
                        });
                        // each time the eventHandler is triggered, remove the marking from all the tiles
                        // that are not included in the tilesToMark array and apply the mark if it's 
                        // included
                        tilesList.forEach((cell) => {
                            if (tilesToMark.includes(cell)) {
                                cell.classList.add('temp-ship');
                            }
                            else {
                                cell.classList.remove('temp-ship');
                            }
                        });
                    }
                });
            }
        });
        modal.appendChild(board);
        modalContainer.appendChild(modal);
        appBody.appendChild(modalContainer);
    }
};
// a function to render the start button once all the ships are placed
const renderStartButton = () => {
    const container = document.querySelector('div.start-btn-container');
    const modalHeader = document.querySelector('div.modal-header');
    if (container !== null) {
        // just in case remove all current contents of the container
        const child = container.firstChild;
        if (child !== null)
            child.remove();
        container.appendChild(startButtonComponent());
        container.classList.remove('hidden');
    }
    if (modalHeader !== null) {
        modalHeader.remove();
    }
};
// a eventHandler when a tile is clicked by the user to attack.
function tileClickEventHandler() {
    let coordinates = this.dataset.coordinates;
    if (coordinates !== undefined)
        coordinates = JSON.parse(coordinates);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('playerAttackRequest', { data: coordinates });
}
// render the player and computer boards to start the game
const renderGame = () => {
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');
    const boardContainer = document.createElement('div');
    const playerBoardContainer = document.createElement('div');
    playerBoardContainer.classList.add('boards');
    const playerBoardHeading = document.createElement('h2');
    playerBoardHeading.textContent = 'Your board';
    playerBoardContainer.appendChild(playerBoardHeading);
    const playerBoard = renderBoard();
    playerBoard.dataset.name = 'player';
    playerBoard.classList.add('player-board');
    playerBoard.classList.add('board-container');
    playerBoardContainer.appendChild(playerBoard);
    boardContainer.appendChild(playerBoardContainer);
    const computerBoardContainer = document.createElement('div');
    computerBoardContainer.classList.add('boards');
    const computerBoardHeading = document.createElement('h2');
    computerBoardHeading.textContent = "Enemy's board";
    computerBoardContainer.appendChild(computerBoardHeading);
    const computerBoard = renderBoard();
    computerBoard.dataset.name = 'computer';
    computerBoard.classList.add('computer-board');
    computerBoard.classList.add('board-container');
    // the user plays the game by clicking on the tiles in their enemy's 
    // board i.e., the computer's board and the user should not be able
    // click on their own board hence adding the eventHandler only on the
    // computer board
    const gameTiles = computerBoard.querySelectorAll('div.tile');
    gameTiles.forEach((tile) => {
        tile.addEventListener('click', tileClickEventHandler);
    });
    computerBoardContainer.appendChild(computerBoard);
    boardContainer.appendChild(computerBoardContainer);
    gameContainer.appendChild(boardContainer);
    return gameContainer;
};
// a function to return the winner display component
const winnerContainerComponent = (winner) => {
    // showing the winner as modal to give a pop-up window appearance
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const winnerContainer = document.createElement('div');
    winnerContainer.classList.add('winner-container');
    const winnerHeading = document.createElement('h2');
    winnerHeading.textContent = winner === 'computer' ? 'Computer wins the game!' : 'Player wins the game!';
    winnerContainer.appendChild(winnerHeading);
    const playAgainBtn = document.createElement('button');
    playAgainBtn.textContent = 'Play Again!';
    // easiest way to restart the game
    playAgainBtn.addEventListener('click', () => {
        location.reload();
    });
    winnerContainer.appendChild(playAgainBtn);
    modal.appendChild(winnerContainer);
    return modal;
};
// a function to mark a tile as attacked
const markTile = (allTiles, toMark) => {
    allTiles.forEach((tile) => {
        if (tile.dataset.coordinates === toMark) {
            tile.classList.add('attacked');
        }
    });
};
// a function to mark the provided tile as ship tile 
const markShip = (allTiles, toMark) => {
    allTiles.forEach((tile) => {
        if (tile.dataset.coordinates === toMark) {
            tile.classList.add('ship');
        }
    });
};
// a function to mark the coordinates corresponding to the ship's placement
// on the player board to give the user a visual indication of their 
// own board and ships
const markShips = ({ data }) => {
    const { coordinates, board } = data;
    // below if statement was remenant of testing the computer board's ship
    // placements decided to leave it as it is if needed in future
    let boardToMark;
    if (board === 'player') {
        boardToMark = document.querySelector('div.player-board');
    }
    else {
        boardToMark = document.querySelector('div.computer-board');
    }
    const allTiles = boardToMark === null || boardToMark === void 0 ? void 0 : boardToMark.querySelectorAll('div.tile');
    // the coordinates data from the EventPayload is of ShipMarkersType
    // which has both coordinates and ship name hence using Array.map to 
    // return only an array of coordinates
    const shipCoordinates = coordinates.map((item) => item.coordinate);
    if (allTiles !== undefined) {
        shipCoordinates.forEach((coordinate) => {
            markShip(allTiles, JSON.stringify(coordinate));
        });
    }
};
// a handler function when the shipIsHit event is fired, mark
// tile in the corresponding board
const markHitShip = ({ data }) => {
    const { coordinate, board } = data;
    const toMark = JSON.stringify(coordinate);
    let boardToMark;
    if (board === 'player') {
        boardToMark = document.querySelector('div.player-board');
    }
    else {
        boardToMark = document.querySelector('div.computer-board');
    }
    const allTiles = boardToMark === null || boardToMark === void 0 ? void 0 : boardToMark.querySelectorAll('div.tile');
    if (allTiles !== undefined)
        markShip(allTiles, toMark);
};
// a handler function to implement the tile hit function on the 
// correct board
const handleTileHit = ({ data }) => {
    const { coordinate, board } = data;
    const toMark = JSON.stringify(coordinate);
    let boardToMark;
    if (board === 'player') {
        boardToMark = document.querySelector('div.player-board');
    }
    else {
        boardToMark = document.querySelector('div.computer-board');
    }
    const allTiles = boardToMark === null || boardToMark === void 0 ? void 0 : boardToMark.querySelectorAll('div.tile');
    if (allTiles !== undefined)
        markTile(allTiles, toMark);
};
// a handler function to display the winner of the game to user
const showWinner = ({ data }) => {
    const appBody = document.querySelector('div#app');
    if (appBody !== null) {
        // remove current contents of the appBody
        const child = appBody.firstChild;
        if (child !== null)
            child.remove();
        appBody.appendChild(winnerContainerComponent(data));
    }
};
// subscribe to all required events, this is put in a function and 
// exported in order to call it when the index.ts file is loaded
const domSubscriptions = () => {
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('initialPageLoad', renderPlaceShipsBoard);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('shipPlaced', changeInstructions);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('renderStartGame', renderStartButton);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('markShips', markShips);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('tileIsHit', handleTileHit);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('shipIsHit', markHitShip);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('winnerFound', showWinner);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domSubscriptions);


/***/ }),

/***/ "./src/scripts/eventsObserver.ts":
/*!***************************************!*\
  !*** ./src/scripts/eventsObserver.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// An eventobserver object to handle all pub/sub activities
const EventsObserver = {
    events: {},
    subscribe: (eventName, eventHandler) => {
        // if the given event is not present in the events object
        // add it to the object first
        if (EventsObserver.events[eventName] === undefined) {
            EventsObserver.events[eventName] = [];
        }
        // add the provided handler to the subscribers list of the
        // event
        EventsObserver.events[eventName].push(eventHandler);
    },
    publish: (eventName, eventPayload) => {
        const event = EventsObserver.events[eventName];
        if (event !== undefined) {
            event.forEach((eventHandler) => {
                eventHandler(eventPayload);
            });
        }
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsObserver);


/***/ }),

/***/ "./src/scripts/models.ts":
/*!*******************************!*\
  !*** ./src/scripts/models.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _eventsObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsObserver */ "./src/scripts/eventsObserver.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Ship_length, _Ship_hits, _GameBoard_instances, _GameBoard_name, _GameBoard_allHits, _GameBoard_shipTiles, _GameBoard_carrier, _GameBoard_battleship, _GameBoard_destroyer, _GameBoard_submarine, _GameBoard_patrolBoat, _GameBoard_generateHorizontalCoordinates, _GameBoard_generateVerticalCoordinates, _GameBoard_placeAship;

// ship class to handle all behaviour of the ship
class Ship {
    constructor(shipLength) {
        _Ship_length.set(this, void 0);
        _Ship_hits.set(this, 0);
        __classPrivateFieldSet(this, _Ship_length, shipLength, "f");
    }
    get hits() {
        return __classPrivateFieldGet(this, _Ship_hits, "f");
    }
    hit() {
        __classPrivateFieldSet(this, _Ship_hits, __classPrivateFieldGet(this, _Ship_hits, "f") + 1, "f");
    }
    isSunk() {
        return __classPrivateFieldGet(this, _Ship_hits, "f") >= __classPrivateFieldGet(this, _Ship_length, "f");
    }
}
_Ship_length = new WeakMap(), _Ship_hits = new WeakMap();
// the gameboard class to handle all gameboard activities
class GameBoard {
    constructor(boardName) {
        _GameBoard_instances.add(this);
        _GameBoard_name.set(this, void 0);
        _GameBoard_allHits.set(this, []);
        _GameBoard_shipTiles.set(this, []);
        _GameBoard_carrier.set(this, null);
        _GameBoard_battleship.set(this, null);
        _GameBoard_destroyer.set(this, null);
        _GameBoard_submarine.set(this, null);
        _GameBoard_patrolBoat.set(this, null);
        __classPrivateFieldSet(this, _GameBoard_name, boardName, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _GameBoard_name, "f");
    }
    // public method to place the carrier
    placeCarrier(startCoordinate, orientation) {
        const carrier = __classPrivateFieldGet(this, _GameBoard_instances, "m", _GameBoard_placeAship).call(this, startCoordinate, orientation, 5);
        // if carrier is already placed we'll not do anything and return false
        // to indicate the ship was not placed
        if (carrier === null)
            return false;
        __classPrivateFieldSet(this, _GameBoard_carrier, carrier, "f");
        return true;
    }
    // public method to place the battleship
    placeBattleship(startCoordinate, orientation) {
        const battleship = __classPrivateFieldGet(this, _GameBoard_instances, "m", _GameBoard_placeAship).call(this, startCoordinate, orientation, 4);
        if (battleship === null)
            return false;
        __classPrivateFieldSet(this, _GameBoard_battleship, battleship, "f");
        return true;
    }
    // public method to place the destroyer
    placeDestroyer(startCoordinate, orientation) {
        const destroyer = __classPrivateFieldGet(this, _GameBoard_instances, "m", _GameBoard_placeAship).call(this, startCoordinate, orientation, 3);
        if (destroyer === null)
            return false;
        __classPrivateFieldSet(this, _GameBoard_destroyer, destroyer, "f");
        return true;
    }
    // public method to place the submarine
    placeSubmarine(startCoordinate, orientation) {
        const submarine = __classPrivateFieldGet(this, _GameBoard_instances, "m", _GameBoard_placeAship).call(this, startCoordinate, orientation, 3);
        if (submarine === null)
            return false;
        __classPrivateFieldSet(this, _GameBoard_submarine, submarine, "f");
        return true;
    }
    // public method to place the patrolBoat
    placePatrolBoat(startCoordinate, orientation) {
        const patrolBoat = __classPrivateFieldGet(this, _GameBoard_instances, "m", _GameBoard_placeAship).call(this, startCoordinate, orientation, 2);
        if (patrolBoat === null)
            return false;
        __classPrivateFieldSet(this, _GameBoard_patrolBoat, patrolBoat, "f");
        return true;
    }
    get attackedTiles() {
        return __classPrivateFieldGet(this, _GameBoard_allHits, "f").slice();
    }
    get shipsPlacedTiles() {
        return __classPrivateFieldGet(this, _GameBoard_shipTiles, "f").slice();
    }
    get carrier() {
        if (__classPrivateFieldGet(this, _GameBoard_carrier, "f") === null)
            return null;
        // returning a copy of the object instead of the object itself
        return Object.create(__classPrivateFieldGet(this, _GameBoard_carrier, "f"));
    }
    get carrierCoordinates() {
        if (__classPrivateFieldGet(this, _GameBoard_carrier, "f") === null)
            return null;
        // since the shipPlacedTiles are of ShipMarkerType with both coordinates
        // and the ship itself, using Array.map to return only the coordinates.
        return this.shipsPlacedTiles
            .filter((ship) => JSON.stringify(ship.ship) === JSON.stringify(__classPrivateFieldGet(this, _GameBoard_carrier, "f")))
            .map((ship) => ship.coordinate);
    }
    get battleship() {
        if (__classPrivateFieldGet(this, _GameBoard_battleship, "f") === null)
            return null;
        return Object.create(__classPrivateFieldGet(this, _GameBoard_battleship, "f"));
    }
    get battleshipCoordinates() {
        if (__classPrivateFieldGet(this, _GameBoard_battleship, "f") === null)
            return null;
        return this.shipsPlacedTiles
            .filter((ship) => JSON.stringify(ship.ship) === JSON.stringify(__classPrivateFieldGet(this, _GameBoard_battleship, "f")))
            .map((ship) => ship.coordinate);
    }
    get destroyer() {
        if (__classPrivateFieldGet(this, _GameBoard_destroyer, "f") === null)
            return null;
        return Object.create(__classPrivateFieldGet(this, _GameBoard_destroyer, "f"));
    }
    get destroyerCoordinates() {
        if (__classPrivateFieldGet(this, _GameBoard_destroyer, "f") === null)
            return null;
        return this.shipsPlacedTiles
            .filter((ship) => JSON.stringify(ship.ship) === JSON.stringify(__classPrivateFieldGet(this, _GameBoard_destroyer, "f")))
            .map((ship) => ship.coordinate);
    }
    get submarine() {
        if (__classPrivateFieldGet(this, _GameBoard_submarine, "f") === null)
            return null;
        return Object.create(__classPrivateFieldGet(this, _GameBoard_submarine, "f"));
    }
    get submarineCoordinates() {
        if (__classPrivateFieldGet(this, _GameBoard_submarine, "f") === null)
            return null;
        return this.shipsPlacedTiles
            .filter((ship) => JSON.stringify(ship.ship) === JSON.stringify(__classPrivateFieldGet(this, _GameBoard_submarine, "f")))
            .map((ship) => ship.coordinate);
    }
    get patrolBoat() {
        if (__classPrivateFieldGet(this, _GameBoard_patrolBoat, "f") === null)
            return null;
        return Object.create(__classPrivateFieldGet(this, _GameBoard_patrolBoat, "f"));
    }
    get patrolBoatCoordinates() {
        if (__classPrivateFieldGet(this, _GameBoard_patrolBoat, "f") === null)
            return null;
        return this.shipsPlacedTiles
            .filter((ship) => JSON.stringify(ship.ship) === JSON.stringify(__classPrivateFieldGet(this, _GameBoard_patrolBoat, "f")))
            .map((ship) => ship.coordinate);
    }
    // a public method to receive an attack to the board
    receiveAttack(coordinate) {
        // if the provided tile is already marked as hit, we'll do nothing 
        // and return false to indicate to the caller nothing was changed
        const alreadyHit = __classPrivateFieldGet(this, _GameBoard_allHits, "f").some((tile) => JSON.stringify(tile) === JSON.stringify(coordinate));
        if (alreadyHit)
            return false;
        __classPrivateFieldGet(this, _GameBoard_allHits, "f").push(coordinate);
        // after marking the given tile as hit, checking if that tile contains a
        // ship, if it does then call the hit method on the ship.
        __classPrivateFieldGet(this, _GameBoard_shipTiles, "f").forEach((tile) => {
            if (JSON.stringify(tile.coordinate) === JSON.stringify(coordinate)) {
                tile.ship.hit();
                _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('shipIsHit', {
                    data: {
                        coordinate,
                        board: this.name,
                    },
                });
            }
        });
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('tileIsHit', {
            data: {
                coordinate,
                board: this.name,
            },
        });
        return true;
    }
    // a public method to check if all ships in the board is sunk
    allShipsSunk() {
        if (__classPrivateFieldGet(this, _GameBoard_carrier, "f") !== null &&
            __classPrivateFieldGet(this, _GameBoard_carrier, "f").isSunk() &&
            __classPrivateFieldGet(this, _GameBoard_battleship, "f") !== null &&
            __classPrivateFieldGet(this, _GameBoard_battleship, "f").isSunk() &&
            __classPrivateFieldGet(this, _GameBoard_destroyer, "f") !== null &&
            __classPrivateFieldGet(this, _GameBoard_destroyer, "f").isSunk() &&
            __classPrivateFieldGet(this, _GameBoard_submarine, "f") !== null &&
            __classPrivateFieldGet(this, _GameBoard_submarine, "f").isSunk() &&
            __classPrivateFieldGet(this, _GameBoard_patrolBoat, "f") !== null &&
            __classPrivateFieldGet(this, _GameBoard_patrolBoat, "f").isSunk()) {
            return true;
        }
        return false;
    }
}
_GameBoard_name = new WeakMap(), _GameBoard_allHits = new WeakMap(), _GameBoard_shipTiles = new WeakMap(), _GameBoard_carrier = new WeakMap(), _GameBoard_battleship = new WeakMap(), _GameBoard_destroyer = new WeakMap(), _GameBoard_submarine = new WeakMap(), _GameBoard_patrolBoat = new WeakMap(), _GameBoard_instances = new WeakSet(), _GameBoard_generateHorizontalCoordinates = function _GameBoard_generateHorizontalCoordinates(start, length) {
    const coordinatesArray = [];
    for (let i = 0; i < length; i++) {
        let coordinate;
        // if x axis start positon + length is greater than
        // 9 we'll subtract the i to generate coordinate in
        // opposite direction
        if (start.x + length < 9) {
            coordinate = {
                x: start.x + i,
                y: start.y,
            };
        }
        else {
            coordinate = {
                x: start.x - i,
                y: start.y,
            };
        }
        coordinatesArray.push(coordinate);
    }
    return coordinatesArray;
}, _GameBoard_generateVerticalCoordinates = function _GameBoard_generateVerticalCoordinates(start, length) {
    const coordinatesArray = [];
    for (let i = 0; i < length; i++) {
        let coordinate;
        if (start.y + length < 9) {
            // if y axis start positon + length is greater than
            // 9 we'll subtract the i to generate coordinate in
            // opposite direction
            coordinate = {
                x: start.x,
                y: start.y + i,
            };
        }
        else {
            coordinate = {
                x: start.x,
                y: start.y - i,
            };
        }
        coordinatesArray.push(coordinate);
    }
    return coordinatesArray;
}, _GameBoard_placeAship = function _GameBoard_placeAship(startCoordinate, orientation, shipLength) {
    const ship = new Ship(shipLength);
    let coordinates = [];
    if (orientation === 'horizontal') {
        coordinates = __classPrivateFieldGet(this, _GameBoard_instances, "m", _GameBoard_generateHorizontalCoordinates).call(this, startCoordinate, shipLength);
    }
    else {
        coordinates = __classPrivateFieldGet(this, _GameBoard_instances, "m", _GameBoard_generateVerticalCoordinates).call(this, startCoordinate, shipLength);
    }
    // saving the ship coordinates in an array in the class, i have done this so that
    // when a tile corresponding to a ship is hit, I can directly call the ship's hit method
    // easily
    coordinates = coordinates.map((coord) => {
        return {
            coordinate: coord,
            ship,
        };
    });
    // if the ship's coordinates already exists in the class then we'll not place the ship
    // instead returning null to indicate to the caller the ship was not placed. If it 
    // doesn't exist then we'll place the ship
    const coordinateExists = coordinates.some((coord) => {
        return __classPrivateFieldGet(this, _GameBoard_shipTiles, "f").some((tile) => JSON.stringify(tile) === JSON.stringify(coord));
    });
    if (coordinateExists) {
        return null;
    }
    __classPrivateFieldGet(this, _GameBoard_shipTiles, "f").push(...coordinates);
    return ship;
};


/***/ }),

/***/ "./src/scripts/players.ts":
/*!********************************!*\
  !*** ./src/scripts/players.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerAttacks: () => (/* binding */ computerAttacks),
/* harmony export */   computerBoard: () => (/* binding */ computerBoard),
/* harmony export */   placeComputerShips: () => (/* binding */ placeComputerShips),
/* harmony export */   placePlayerShips: () => (/* binding */ placePlayerShips),
/* harmony export */   playerAttacks: () => (/* binding */ playerAttacks),
/* harmony export */   playerBoard: () => (/* binding */ playerBoard),
/* harmony export */   playerSubscriptions: () => (/* binding */ playerSubscriptions)
/* harmony export */ });
/* harmony import */ var _eventsObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsObserver */ "./src/scripts/eventsObserver.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/scripts/models.ts");


// a helper function to generate a random number
const generateRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
};
// a helper function to generate random coordinates
const generateRandomCoordinates = () => {
    return {
        x: generateRandomNumber(10),
        y: generateRandomNumber(10),
    };
};
// a helper function to randomly select an orientation
const generateRandomOrientation = () => {
    const orientations = ['horizontal', 'vertical'];
    return orientations[generateRandomNumber(2)];
};
const playerBoard = new _models__WEBPACK_IMPORTED_MODULE_1__.GameBoard('player');
const computerBoard = new _models__WEBPACK_IMPORTED_MODULE_1__.GameBoard('computer');
// the queue is used when computer makes a decision on a tile
// to attack, it will first take into consideration the tiles
// in the queue, which itself is nothing but adjacent tiles when
// a tile attacked contained a ship.
const queue = [];
// a function to place player's ships in the board
const placePlayerShips = (shipType, coordinates, orientation) => {
    switch (shipType) {
        case 'carrier':
            // if carrier is successfully placed publish the event and return
            // true, if it's not placed return false, incase the ship placement
            // fails the state is not changed and the user can continue placing
            // same ship
            if (playerBoard.placeCarrier(coordinates, orientation)) {
                // below event publish indicates the carrier is placed so change
                // the state to battleship, this follows for all ships untill patrol
                // boat at that point the state is changed to null
                _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('shipPlaced', { data: 'battleship' });
                return true;
            }
            return false;
        case 'battleship':
            if (playerBoard.placeBattleship(coordinates, orientation)) {
                _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('shipPlaced', { data: 'destroyer' });
                return true;
            }
            return false;
        case 'destroyer':
            if (playerBoard.placeDestroyer(coordinates, orientation)) {
                _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('shipPlaced', { data: 'submarine' });
                return true;
            }
            return false;
        case 'submarine':
            if (playerBoard.placeSubmarine(coordinates, orientation)) {
                _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('shipPlaced', { data: 'patrolBoat' });
                return true;
            }
            return false;
        case 'patrolBoat':
            if (playerBoard.placePatrolBoat(coordinates, orientation)) {
                // once the patrolBoat is placed change the state to null and 
                // publish the event indicating to render the start game button
                _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('shipPlaced', { data: null });
                _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('renderStartGame', { data: null });
            }
            return false;
        default:
            return false;
    }
};
// a function to place computer's ships in the computer's board
const placeComputerShips = () => {
    // the function is simple for each shipType call the respective method by passing
    // randomly generated coordinates and orientation, if the placement fails(which indicates
    // an overlap), keep trying untill the placement is successful.
    let isCarrierPlaced = false;
    while (!isCarrierPlaced) {
        isCarrierPlaced = computerBoard.placeCarrier(generateRandomCoordinates(), generateRandomOrientation());
    }
    let isBattleshipPlaced = false;
    while (!isBattleshipPlaced) {
        isBattleshipPlaced = computerBoard.placeBattleship(generateRandomCoordinates(), generateRandomOrientation());
    }
    let isDestroyerPlaced = false;
    while (!isDestroyerPlaced) {
        isDestroyerPlaced = computerBoard.placeDestroyer(generateRandomCoordinates(), generateRandomOrientation());
    }
    let isSubmarinePlaced = false;
    while (!isSubmarinePlaced) {
        isSubmarinePlaced = computerBoard.placeSubmarine(generateRandomCoordinates(), generateRandomOrientation());
    }
    let isPatrolBoatPlaced = false;
    while (!isPatrolBoatPlaced) {
        isPatrolBoatPlaced = computerBoard.placePatrolBoat(generateRandomCoordinates(), generateRandomOrientation());
    }
};
// a function to handle player's attacks
const playerAttacks = (coordinates) => {
    const result = computerBoard.receiveAttack(coordinates);
    // if the attack was successful, check to board to see if all ships were sunk.
    // if all ships are sunk then declare the player as the winner
    if (result) {
        if (computerBoard.allShipsSunk()) {
            _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('winnerFound', { data: 'player' });
        }
    }
    return result;
};
// a function to handle computer's attacks
const computerAttacks = () => {
    const completedMoves = playerBoard.attackedTiles;
    // if the queue has a tile, we'll grab the first tile to process, if not 
    // randomly generate the coordinates to attack
    let currentAttack = queue.length > 0 ? queue.shift() : generateRandomCoordinates();
    // checking if the tile to process is already hit, if it's true keep grabbing
    // the next tile from queue or (if queue is empty) generating random coordinates
    // until a tile which is not previously attacked is found
    while (completedMoves.some((tile) => JSON.stringify(tile) === JSON.stringify(currentAttack))) {
        currentAttack = queue.length > 0 ? queue.shift() : generateRandomCoordinates();
    }
    // an non-attacked tile is found hence attack that tile.
    if (currentAttack !== undefined) {
        playerBoard.receiveAttack(currentAttack);
    }
    // after each attack checking the board to see if all ships have sunk,
    // if yes declare computer as winner
    if (playerBoard.allShipsSunk()) {
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('winnerFound', { data: 'computer' });
    }
};
// a function to generate adjacent tile coordinates if computer
// attack hits a ship.
const shipHitHandler = (data) => {
    const { coordinate, board } = data.data;
    // since "shipIsHit" is called for both boards, ensuring
    // adjacent tiles are added only if the shipIsHit is called
    // from the playerBoard
    if (board === 'player') {
        // ensuring the adjacent tiles coordinates generated does not
        // go out of bounds
        if (coordinate.x < 9) {
            queue.push({
                x: coordinate.x + 1,
                y: coordinate.y,
            });
        }
        if (coordinate.x > 0) {
            queue.push({
                x: coordinate.x - 1,
                y: coordinate.y,
            });
        }
        if (coordinate.y < 9) {
            queue.push({
                x: coordinate.x,
                y: coordinate.y + 1,
            });
        }
        if (coordinate.y > 0) {
            queue.push({
                x: coordinate.x,
                y: coordinate.y - 1,
            });
        }
    }
};
// an handler function for shipPlacementRequest
const handleShipPlacementRequest = ({ data }) => {
    const { shipType, coordinates, orientation } = data;
    if (shipType !== null)
        placePlayerShips(shipType, coordinates, orientation);
};
// a middleware function, which when called by "shipPlaced" event will in turn
// publish an event to mark the placed ships in the UI
const handleShipPlaced = () => {
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('markShips', {
        data: {
            coordinates: playerBoard.shipsPlacedTiles,
            board: playerBoard.name,
        },
    });
};
// a handler function to handle player attack request
const handlePlayerAttackRequest = ({ data }) => {
    // we'll only allow computer turn only if the player attack is successful
    if (playerAttacks(data)) {
        computerAttacks();
    }
};
// a handler function to handle mark ships request
const handleMarkShipRequest = ({ data }) => {
    // if the request is for playerBoard return player's ship tiles
    // if not return computer's ship tiles
    if (data === 'player') {
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('markShips', {
            data: {
                coordinates: playerBoard.shipsPlacedTiles,
                board: playerBoard.name,
            },
        });
    }
    else {
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('markShips', {
            data: {
                coordinates: computerBoard.shipsPlacedTiles,
                board: computerBoard.name,
            },
        });
    }
};
// all Event subscriptions in a function which is called by index.ts on pageload to
// ensure subscriptions
const playerSubscriptions = () => {
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('placeComputerShips', placeComputerShips);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('shipIsHit', shipHitHandler);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('shipPlacementRequest', handleShipPlacementRequest);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('shipPlaced', handleShipPlaced);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('playerAttackRequest', handlePlayerAttackRequest);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('markShipsRequest', handleMarkShipRequest);
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
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventsObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsObserver */ "./src/scripts/eventsObserver.ts");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ "./src/scripts/displayController.ts");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players */ "./src/scripts/players.ts");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");




// call all the subscription methods first to set up
// subscribptions
(0,_displayController__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_players__WEBPACK_IMPORTED_MODULE_2__.playerSubscriptions)();
// render the inital page
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish('initialPageLoad', { data: null });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3RELHVEQUFjLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDN0UsdURBQWMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekQsdURBQWMsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUMzRSx1REFBYyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3RFLENBQUMsQ0FBQztBQVVBOzs7Ozs7O1VDblBGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDSztBQUNIO0FBQ25CO0FBRTdCLG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFDakIsOERBQWdCLEVBQUUsQ0FBQztBQUNuQiw2REFBbUIsRUFBRSxDQUFDO0FBQ3RCLHlCQUF5QjtBQUN6Qix1REFBYyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kaXNwbGF5Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZXZlbnRzT2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL21vZGVscy50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcGxheWVycy50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Gcmlqb2xlJmZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOndnaHRANzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWJvYXJkLWJnOiByZ2IoMTQ4LCAwLCAyNTUpO1xuICAtLWJvZHktYmc6IHJnYigzOSwgMCwgOTMpO1xuICAtLW1pc3NlZC10aWxlOiByZ2IoMjI4LCAyNDEsIDI1NSk7XG4gIC0taGl0LXRpbGU6IHJnYigyNTUsIDE1MywgMTUzKTtcbiAgLS1zaGlwLXRpbGU6IHJnYigwLCAyNTUsIDApO1xuICAtLW1vZGFsLWJnOiByZ2IoMTc0LCAyMTAsIDI1NSk7XG4gIC0tbGluay1jb2xvcjogcmdiKDI1NSwgMjU1LCAxMDIpO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwc3ZoO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZyk7XG4gIGNvbG9yOiB2YXIoLS1tb2RhbC1iZyk7XG4gIGZvbnQtZmFtaWx5OiAnRnJpam9sZScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBjdXJzaXZlO1xufVxuXG5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1haW4ge1xuICBtYXJnaW46IGF1dG87XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbmZvb3RlciBhLFxuZm9vdGVyIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnKTtcbiAgY29sb3I6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxdmggM3Z3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHNjYWxlIDEwMG1zIGVhc2UtaW4tb3V0O1xuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG5idXR0b246aG92ZXIge1xuICBzY2FsZTogMC45O1xufVxuXG5idXR0b24uY2FuY2VsLWJ0biB7XG4gIGZpbGw6IHZhcigtLW1vZGFsLWJnKTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnN2ZyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmdhbWUtY29udGFpbmVyPmRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBnYXA6IDJ2dztcbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuLmJvYXJkLWNvbnRhaW5lcj5kaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLnRpbGUge1xuICBtaW4taGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1iZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcbn1cblxuLnRpbGUuc2hpcCxcbi50ZW1wLXNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLXRpbGUpO1xufVxuXG4udGlsZS5hdHRhY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3NlZC10aWxlKTtcbn1cblxuLnRpbGUuc2hpcC5hdHRhY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC10aWxlKTtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsPmRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLWJnKTtcbiAgY29sb3I6IHZhcigtLWJvZHktYmcpO1xuICBwYWRkaW5nOiAydmggNXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhbmNlbC1idG4ge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5tb2RhbC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAyLjV2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN0YXJ0LWJ0bi1jb250YWluZXIge1xuICBtYXJnaW46IDR2aDtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ib2FyZHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0QiwySkFBMko7QUFDN0o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsMkNBQTJDO0VBQzNDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZyaWpvbGUmZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1ib2FyZC1iZzogcmdiKDE0OCwgMCwgMjU1KTtcXG4gIC0tYm9keS1iZzogcmdiKDM5LCAwLCA5Myk7XFxuICAtLW1pc3NlZC10aWxlOiByZ2IoMjI4LCAyNDEsIDI1NSk7XFxuICAtLWhpdC10aWxlOiByZ2IoMjU1LCAxNTMsIDE1Myk7XFxuICAtLXNoaXAtdGlsZTogcmdiKDAsIDI1NSwgMCk7XFxuICAtLW1vZGFsLWJnOiByZ2IoMTc0LCAyMTAsIDI1NSk7XFxuICAtLWxpbmstY29sb3I6IHJnYigyNTUsIDI1NSwgMTAyKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwc3ZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmcpO1xcbiAgY29sb3I6IHZhcigtLW1vZGFsLWJnKTtcXG4gIGZvbnQtZmFtaWx5OiAnRnJpam9sZScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBjdXJzaXZlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBhLFxcbmZvb3RlciBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZyk7XFxuICBjb2xvcjogdmFyKC0tbW9kYWwtYmcpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXZoIDN2dztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogc2NhbGUgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHNjYWxlOiAwLjk7XFxufVxcblxcbmJ1dHRvbi5jYW5jZWwtYnRuIHtcXG4gIGZpbGw6IHZhcigtLW1vZGFsLWJnKTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbnN2ZyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5nYW1lLWNvbnRhaW5lcj5kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdhcDogMnZ3O1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXI+ZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnRpbGUge1xcbiAgbWluLWhlaWdodDogNDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJnKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG59XFxuXFxuLnRpbGUuc2hpcCxcXG4udGVtcC1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtdGlsZSk7XFxufVxcblxcbi50aWxlLmF0dGFja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3NlZC10aWxlKTtcXG59XFxuXFxuLnRpbGUuc2hpcC5hdHRhY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtdGlsZSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA1O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWw+ZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWJnKTtcXG4gIHBhZGRpbmc6IDJ2aCA1dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYW5jZWwtYnRuIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIuNXZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc3RhcnQtYnRuLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDR2aDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHR5cGUgRXZlbnRQYXlsb2FkVHlwZSwgdHlwZSBDb29yZGluYXRlc1R5cGUsIHR5cGUgU2hpcE1hcmtlcnNUeXBlIH0gZnJvbSAnLi4vdHlwZXMvYXBwVHlwZXMnO1xuaW1wb3J0IEV2ZW50c09ic2VydmVyIGZyb20gJy4vZXZlbnRzT2JzZXJ2ZXInO1xuXG4vLyBSZXR1cm5zIGNhcGl0YWxpemVkIG5hbWVzIGZvciBzaGlwcyB0byBkaXNwbGF5IHRvIHVzZXJcbmNvbnN0IGRpc3BsYXlTaGlwTmFtZSA9IChzaGlwOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBzd2l0Y2ggKHNoaXApIHtcbiAgICBjYXNlICdjYXJyaWVyJzpcbiAgICAgIHJldHVybiAnQ2Fycmllcic7XG4gICAgY2FzZSAnYmF0dGxlc2hpcCc6XG4gICAgICByZXR1cm4gJ0JhdHRsZXNoaXAnO1xuICAgIGNhc2UgJ2Rlc3Ryb3llcic6XG4gICAgICByZXR1cm4gJ0Rlc3Ryb3llcic7XG4gICAgY2FzZSAnc3VibWFyaW5lJzpcbiAgICAgIHJldHVybiAnU3VibWFyaW5lJztcbiAgICBjYXNlICdwYXRyb2xCb2F0JzpcbiAgICAgIHJldHVybiAnUGF0cm9sIEJvYXQnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbi8vIGEgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgY29vcmRpbmF0ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgXG4vLyBzaGlwIGxlbmd0aCBwcm92aWRlZCwgdGhpcyBpcyB1c2VkIHRvIGRpc3BsYXkgYSBzaGlwIG9iamVjdFxuLy8gb24gaG92ZXIgd2hlbiB0aGUgdXNlciBpcyBwbGFjaW5nIHNoaXBzXG5jb25zdCBnZW5lcmF0ZUNvb3JkaW5hdGVzID0gKGxlbmd0aDogbnVtYmVyLCBzdGFydDogQ29vcmRpbmF0ZXNUeXBlLCBvcmllbnRhdGlvbjogc3RyaW5nKTogQ29vcmRpbmF0ZXNUeXBlW10gPT4ge1xuICAvLyBnZW5lcmF0ZWQgY29vcmRpbmF0ZXMgd2lsbCBiZSByZXR1cm5lZCBhcyBhbiBhcnJheVxuICBjb25zdCBob2xkZXI6IENvb3JkaW5hdGVzVHlwZVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAvLyBpZiBvcmllbnRhdGlvbiBpcyBob3Jpem9udGFsIHdlJ2xsIGhhdmUgdG8gY2hhbmdlIG9ubHkgXG4gICAgLy8gdGhlIHggYXhpcyBpZiBpdCdzIHZlcnRpY2FsIHRoZW4gd2UnbGwgaGF2ZSB0byBjaGFuZ2Ugb25seVxuICAgIC8vIHRoZSB5IGF4aXNcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgLy8gd2hlbiB0aGUgc3RhcnRpbmcgeCBheGlzIGNvb3JkaW5hdGUgcGx1cyB0aGUgc2hpcCBsZW5ndGggaXNcbiAgICAgIC8vIGdyZWF0ZXIgdGhhbiB0aGUgbWF4IHZhbHVlIG9mIDkgdGhlbiB3ZSdsbCBoYXZlIGdlbmVyYXRlIFxuICAgICAgLy8gdGhlIGNvb3JkaW5hdGVzIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24gaGVuY2UgaWYgc3RhcnQueFxuICAgICAgLy8gKyBsZW5ndGggaXMgbGVzc2VyIHRoYW4gOSB3ZSdsbCBhZGQgaWYgaXQncyBncmVhdGVyIHdlJ2xsXG4gICAgICAvLyBzdWJ0cmFjdC4gU2FtZSBsb2dpYyBhcHBsaWVzIHRvIHZlcnRpY2FsIGRpcmVjdGlvbiBvbmx5IGluXG4gICAgICAvLyB0aGF0IGNhc2UgdGhlIHkgYXhpcyBpcyBjb25zaWRlcmVkXG4gICAgICBpZiAoc3RhcnQueCArIGxlbmd0aCA8IDkpIHtcbiAgICAgICAgaG9sZGVyLnB1c2goe1xuICAgICAgICAgIHg6IHN0YXJ0LnggKyBpLFxuICAgICAgICAgIHk6IHN0YXJ0LnksXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaG9sZGVyLnB1c2goe1xuICAgICAgICAgIHg6IHN0YXJ0LnggLSBpLFxuICAgICAgICAgIHk6IHN0YXJ0LnksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3RhcnQueSArIGxlbmd0aCA8IDkpIHtcbiAgICAgICAgaG9sZGVyLnB1c2goe1xuICAgICAgICAgIHg6IHN0YXJ0LngsXG4gICAgICAgICAgeTogc3RhcnQueSArIGksXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaG9sZGVyLnB1c2goe1xuICAgICAgICAgIHg6IHN0YXJ0LngsXG4gICAgICAgICAgeTogc3RhcnQueSAtIGksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gaG9sZGVyO1xufTtcblxuLy8gYSBmdW5jdGlvbiB0byBnZW5lcmF0ZSBjb29yZGluYXRlcyBvZiB0aGUgc2hpcCBpZiBpdCdzIHBsYWNlZCBpbiBcbi8vIGdpdmVuIHN0YXJ0IHBvc2l0aW9uXG5jb25zdCBnZW5lcmF0ZVNoaXBDb29yZGluYXRlcyA9IChzaGlwVHlwZTogc3RyaW5nLCBzdGFydDogQ29vcmRpbmF0ZXNUeXBlLCBvcmllbnRhdGlvbjogc3RyaW5nKTogQ29vcmRpbmF0ZXNUeXBlW10gPT4ge1xuICBzd2l0Y2ggKHNoaXBUeXBlKSB7XG4gICAgY2FzZSAnY2Fycmllcic6XG4gICAgICByZXR1cm4gZ2VuZXJhdGVDb29yZGluYXRlcyg1LCBzdGFydCwgb3JpZW50YXRpb24pO1xuICAgIGNhc2UgJ2JhdHRsZXNoaXAnOlxuICAgICAgcmV0dXJuIGdlbmVyYXRlQ29vcmRpbmF0ZXMoNCwgc3RhcnQsIG9yaWVudGF0aW9uKTtcbiAgICBjYXNlICdkZXN0cm95ZXInOlxuICAgICAgcmV0dXJuIGdlbmVyYXRlQ29vcmRpbmF0ZXMoMywgc3RhcnQsIG9yaWVudGF0aW9uKTtcbiAgICBjYXNlICdzdWJtYXJpbmUnOlxuICAgICAgcmV0dXJuIGdlbmVyYXRlQ29vcmRpbmF0ZXMoMywgc3RhcnQsIG9yaWVudGF0aW9uKTtcbiAgICBjYXNlICdwYXRyb2xCb2F0JzpcbiAgICAgIHJldHVybiBnZW5lcmF0ZUNvb3JkaW5hdGVzKDIsIHN0YXJ0LCBvcmllbnRhdGlvbik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8gYSBmdW5jdGlvbiB0byByZW5kZXIgdGhlIGhlYWRpbmcgdGhhdCBzYXlzIFwicGxhY2UgeW91ci4uLlwiXG4vLyBpIGNvdWxkbid0IGNvbWUgdXAgd2l0aCBhIGJldHRlciBuYW1lIGhlbmNlIHdlbnQgd2l0aCBcbi8vIGluc3RydWN0aW9uc1xuY29uc3QgcmVuZGVySW5zdHJ1Y3Rpb25zID0gKHNoaXA6IHN0cmluZyk6IEhUTUxFbGVtZW50ID0+IHtcbiAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgLy8gdGhpcyBpcyB1c2VkIGFzIGEgc3RhdGUgaG9sZGVyIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggc2hpcFxuICAvLyBpcyBiZWluZyBwbGFjZWQgaGVuY2UgYWRkaW5nIGEgZGF0YSBhdHRyaWJ1dGVcbiAgaW5zdHJ1Y3Rpb25zLmRhdGFzZXQuc2hpcFR5cGUgPSBzaGlwO1xuICBpbnN0cnVjdGlvbnMuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1zaGlwJyk7XG4gIGluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyICR7ZGlzcGxheVNoaXBOYW1lKHNoaXApfWA7XG4gIHJldHVybiBpbnN0cnVjdGlvbnM7XG59O1xuXG4vLyBhIGZ1bmN0aW9uIHRvIGNoYW5nZSB0aGUgb3JpZW50YXRpb24gd2hlbiB0aGUgJ3JvdGF0ZScgYnV0dG9uXG4vLyBpcyBjbGlja2VkXG5jb25zdCByZW5kZXJPcmllbnRhdGlvbkNvbnRyb2wgPSAoKTogSFRNTEJ1dHRvbkVsZW1lbnQgPT4ge1xuICBjb25zdCBvcmllbnRhdGlvbkNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgb3JpZW50YXRpb25Db250cm9sLmNsYXNzTGlzdC5hZGQoJ29yaWVudGFpb24tY29udHJvbCcpO1xuICAvLyBvbmNlIGFnYWluIHRoZSBvcmllbnRhdGlvbiBzdGF0ZSBpcyBzdG9yZWQgYXMgYSB2YWx1ZSBpbiB0aGVcbiAgLy8gYnV0dG9uXG4gIG9yaWVudGF0aW9uQ29udHJvbC52YWx1ZSA9ICdob3Jpem9udGFsJztcbiAgb3JpZW50YXRpb25Db250cm9sLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gIG9yaWVudGF0aW9uQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICh0aGlzOiBIVE1MQnV0dG9uRWxlbWVudCkge1xuICAgIC8vIGNoYW5nZSB0aGUgYnV0dG9uJ3MgdmFsdWUgb24gY2xpY2ssIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2VcbiAgICAvLyB0aGUgYnV0dG9uJ3MgdmFsdWUgaXMgdGhlIHN0YXRlIHRvIGRldGVybWluZSB0aGUgb3JpZW50YXRpb25cbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9ICdob3Jpem9udGFsJztcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3JpZW50YXRpb25Db250cm9sO1xufTtcblxuLy8gYSBmdW5jdGlvbiB0byByZW5kZXIgYSBib2FyZCB0aGUgdXNlciBjYW4gY2xpY2sgb25cbmNvbnN0IHJlbmRlckJvYXJkID0gKCk6IEhUTUxEaXZFbGVtZW50ID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAvLyB0aGUgY29vcmRpbmF0ZXMgaXMgZXZlcnl0aGluZyB0aHJvdWdodCB0aGUgYXBwLlxuICAgICAgLy8gdG8gZ2V0IHRoZSBkZXRhaWxzIG9mIHdoaWNoIGNvb3JkaW5hdGUgaXMgY2xpY2tlZFxuICAgICAgLy8gc2F2aW5nIGl0IGFzIGEgc3RyaW5nIGluIHRoZSBkYXRhIGF0dHJpYnV0ZVxuICAgICAgY2VsbC5kYXRhc2V0LmNvb3JkaW5hdGVzID0gSlNPTi5zdHJpbmdpZnkoeyB4OiBqLCB5OiBpIH0pO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuLy8gYSBmdW5jdGlvbiB0byBjaGFuZ2UgdGhlIFwiaW5zdHJ1Y3Rpb25zXCIgaGVhZGluZyBhcyBhbmQgd2hlbiBhIHNoaXAgaXNcbi8vIHBsYWNlZFxuY29uc3QgY2hhbmdlSW5zdHJ1Y3Rpb25zID0gKHsgZGF0YSB9OiBFdmVudFBheWxvYWRUeXBlKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5pbnN0cnVjdGlvbnMtY29udGFpbmVyJyk7XG4gIGlmIChjb250YWluZXIgIT09IG51bGwpIHtcbiAgICAvLyByZXBsYWNlIHRoZSBjdXJyZW50IGVsZW1lbnRzIG9mIHRoZSBjb250YWluZXIgd2l0aCBuZXdcbiAgICAvLyBlbGVtZW50XG4gICAgY29uc3QgY2hpbGQgPSBjb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICBpZiAoY2hpbGQgIT09IG51bGwpIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckluc3RydWN0aW9ucyhkYXRhKSk7XG4gIH1cbn07XG5cbi8vIGV2ZW50IGhhbmRsZXIgd2hlbiB0aGUgc3RhcnQgZ2FtZSBidXR0b24gaXMgY2xpY2tpbmcgdGhlIHN0YXJ0ICBcbi8vIGdhbWUgYnV0dG9uIHNob3VsZCByZXBsYWNlIHRoZSBjdXJyZW50IGNoaWxkcmVuIG9mIHRoZSBhcHAgZGl2IFxuLy8gYW5kIHJlbmRlciB0aGUgZ2FtZSBib2FyZHNcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpOnZvaWQgPT4ge1xuICBjb25zdCBhcHBCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2FwcCcpO1xuICBpZiAoYXBwQm9keSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGNoaWxkID0gYXBwQm9keS5maXJzdENoaWxkO1xuICAgIGlmIChjaGlsZCAhPT0gbnVsbCkgY2hpbGQucmVtb3ZlKCk7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaCgncGxhY2VDb21wdXRlclNoaXBzJywgeyBkYXRhOiBudWxsIH0pO1xuICAgIGFwcEJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyR2FtZSgpKTtcbiAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKCdtYXJrU2hpcHNSZXF1ZXN0JywgeyBkYXRhOiAncGxheWVyJyB9KTtcbiAgfVxufVxuXG4vLyBhIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBcInN0YXJ0IGdhbWVcIiBidXR0b25cbmNvbnN0IHN0YXJ0QnV0dG9uQ29tcG9uZW50ID0gKCk6IEhUTUxCdXR0b25FbGVtZW50ID0+IHtcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZCgnc3RhcnQtZ2FtZS1idG4nKTtcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbiAgcmV0dXJuIHN0YXJ0QnRuO1xufTtcblxuLy8gYSBmdW5jdGlvbiB0byByZW5kZXIgdGhlIFwicGxhY2Ugc2hpcHMgYm9hcmRcIiBvbiBpbml0aWFsIHBhZ2UgbG9hZFxuY29uc3QgcmVuZGVyUGxhY2VTaGlwc0JvYXJkID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBhcHBCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2FwcCcpO1xuXG4gIGlmIChhcHBCb2R5ICE9PSBudWxsKSB7XG4gICAgLy8gdGhlIGVudGlyZSBjb250ZW50cyBvZiB0aGlzIGJvYXJkIHdpbGwgYmUgYSBtb2RhbCB0byBnaXZlIGEgXG4gICAgLy8gcG9wLXVwIHdpbmRvdyBlZmZlY3RcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgLy8gZWFzaWVzdCB3YXkgdG8gZGlyZWN0bHkgYXBwZW5kIHRoZSBzdmcgdG8gdGhlIGh0bWwgdXNpbmcgXG4gICAgLy8gamF2YXNjcmlwdFxuICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICA8dGl0bGU+Y2xvc2U8L3RpdGxlPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICBgO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnRuJyk7XG4gICAgLy8gdGhlIGNhbmNlbCBidXR0b24ncyBwdXJwb3NlIGlzIHRvIHJlc2V0IHRoZSBjdXJyZW50IHNoaXBcbiAgICAvLyBwbGFjZW1lbnRzIG9uIHRoZSBib2FyZC4gRWFzaWVzdCB3YXkgdG8gYWNoZWl2ZSBpdCBpcyB0byBcbiAgICAvLyByZWxvYWQgdGhlIHBhZ2VcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKTtcblxuICAgIGNvbnN0IGluc3RydWN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluc3RydWN0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbnMtY29udGFpbmVyJyk7XG4gICAgaW5zdHJ1Y3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckluc3RydWN0aW9ucygnY2FycmllcicpKTtcblxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKGluc3RydWN0aW9uc0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb250cm9sQ29udGFpbmVyID0gcmVuZGVyT3JpZW50YXRpb25Db250cm9sKCk7XG5cbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjb250cm9sQ29udGFpbmVyKTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcblxuICAgIGNvbnN0IHN0YXJ0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhcnRCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RhcnQtYnRuLWNvbnRhaW5lcicpO1xuICAgIC8vIHNpbmNlIHRoZSBtb2RhbCBoYXMgZGlzcGxheSBmbGV4IHByb3BlcnR5IG9uIGl0LFxuICAgIC8vIHRoZSBlbXB0eSBjb250YWluZXIgd2lsbCB0YWtlIHVwIHNwYWNlIGhlbmNlIGFkZGluZyBcbiAgICAvLyBhIGRpc3BsYXk6IG5vbmUgdG8gaXQgd2hlbiBpdCdzIG5vdCByZXF1aXJlZFxuICAgIHN0YXJ0QnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoc3RhcnRCdG5Db250YWluZXIpO1xuXG4gICAgY29uc3QgYm9hcmQgPSByZW5kZXJCb2FyZCgpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1ib2FyZCcpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRpbGVzTGlzdCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi50aWxlJyk7XG4gICAgLy8gYXR0YWNoaW5nIHRoZSBldmVudCBsaXN0ZW5lciB0byBlYWNoIGNlbGwgaW4gdGhlIGJvYXJkXG4gICAgLy8gdGhhdCB3aWxsIG1hcmsgdGhlIHRpbGUgZHVyaW5nIHRoZSBnYW1lIGxvb3BcbiAgICB0aWxlc0xpc3QuZm9yRWFjaCgodGlsZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBjb29yZGluYXRlczogQ29vcmRpbmF0ZXNUeXBlO1xuICAgICAgaWYgKHRpbGUuZGF0YXNldC5jb29yZGluYXRlcyAhPT0gbnVsbCAmJiB0aWxlLmRhdGFzZXQuY29vcmRpbmF0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyB0aGUgY29vcmRpbmF0ZXMgaXMgc3RvcmVkIGFzIGEgc3RyaW5nIGhlbmNlIHBhcnNpbmcgaXQgdG8gXG4gICAgICAgIC8vIGdldCB0aGUgb2JqZWN0IGJhY2tcbiAgICAgICAgY29vcmRpbmF0ZXMgPSBKU09OLnBhcnNlKHRpbGUuZGF0YXNldC5jb29yZGluYXRlcyk7XG4gICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2hpcFR5cGUgPSAoaW5zdHJ1Y3Rpb25zQ29udGFpbmVyLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQuc2hpcFR5cGU7XG4gICAgICAgICAgLy8gZm9yIHNvbWVyZWFzb24gdGhlIG51bGwgaGVyZSBpcyBhIHN0cmluZyBkdXJpbmcgcnVudGltZSBoZW5jZSB0ZXN0aW5nXG4gICAgICAgICAgLy8gZm9yIGEgc3RyaW5nIFwibnVsbFwiIGluc3RlYWQgb2YgdGhlIG51bGwgb2JqZWN0XG4gICAgICAgICAgaWYgKHNoaXBUeXBlICE9PSAnbnVsbCcgJiYgc2hpcFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaCgnc2hpcFBsYWNlbWVudFJlcXVlc3QnLCB7XG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBzaGlwVHlwZSxcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogY29udHJvbENvbnRhaW5lci52YWx1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHdoZW4gdGhlIHVzZXIgaG92ZXJzIG92ZXIgdGhlIGJvYXJkIHRoZSBzaGlwJ3Mgb2JqZWN0IHNob3VsZCBiZSBpbmRpY2F0ZWQgdG8gdGhlXG4gICAgICAgIC8vIHVzZXIgdG8gZ2l2ZSB0aGUgdXNlciBhIHZpc2l1YWwgaW5kaWNhdGlvbi5cbiAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudENvb3JkaW5hdGVzID0gdGhpcy5kYXRhc2V0LmNvb3JkaW5hdGVzO1xuICAgICAgICAgIGNvbnN0IHNoaXBUeXBlID0gKGluc3RydWN0aW9uc0NvbnRhaW5lci5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50KS5kYXRhc2V0LnNoaXBUeXBlO1xuICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gY29udHJvbENvbnRhaW5lci52YWx1ZTtcbiAgICAgICAgICBpZiAoc2hpcFR5cGUgIT09IHVuZGVmaW5lZCAmJiBjdXJyZW50Q29vcmRpbmF0ZXMgIT09IHVuZGVmaW5lZCAmJiBvcmllbnRhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBnZW5lcmF0aW5nIHRoZSB0ZW50YXRpdmUgY29vcmRpbmF0ZXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgdGlsZSdzIGNvb3JkaW5hdGUgYXMgc3RhcnQgcG9zaXRpb25cbiAgICAgICAgICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IGdlbmVyYXRlU2hpcENvb3JkaW5hdGVzKHNoaXBUeXBlLCBKU09OLnBhcnNlKGN1cnJlbnRDb29yZGluYXRlcyksIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIC8vIHRoZSBpZGVhIGlzIHRvIG1hcmsgb25seSB0aGUgc2hpcCdzIHRlbnRhdGl2ZSB0aWxlcywgYW5kIHRoZSB0aWxlcyB3aGljaCBjb3JyZXNwb25kc1xuICAgICAgICAgICAgLy8gdG8gdGhlIHRlbnRhdGl2ZSB0aWxlcyB3aWxsIGNoYW5nZSBhcyB0aGUgdXNlciBob3ZlcnMgb3ZlciBlYWNoIGNlbGwgaGVuY2UgY3JlYXRpbmcgXG4gICAgICAgICAgICAvLyBhbiBhcnJheSBvZiB0aWxlcyB3aGljaCBjb3JyZXNwb25kcyB0byB0aGUgZ2VuZXJhdGVkIHNoaXBDb29yZGluYXRlc1xuICAgICAgICAgICAgY29uc3QgdGlsZXNUb01hcmsgPSBBcnJheS5mcm9tKHRpbGVzTGlzdCkuZmlsdGVyKChjdXJyZW50VGlsZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNoaXBDb29yZGluYXRlcy5zb21lKFxuICAgICAgICAgICAgICAgIChjb29yZGluYXRlcykgPT4gSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZXMpID09PSBjdXJyZW50VGlsZS5kYXRhc2V0LmNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBlYWNoIHRpbWUgdGhlIGV2ZW50SGFuZGxlciBpcyB0cmlnZ2VyZWQsIHJlbW92ZSB0aGUgbWFya2luZyBmcm9tIGFsbCB0aGUgdGlsZXNcbiAgICAgICAgICAgIC8vIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdGlsZXNUb01hcmsgYXJyYXkgYW5kIGFwcGx5IHRoZSBtYXJrIGlmIGl0J3MgXG4gICAgICAgICAgICAvLyBpbmNsdWRlZFxuICAgICAgICAgICAgdGlsZXNMaXN0LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRpbGVzVG9NYXJrLmluY2x1ZGVzKGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCd0ZW1wLXNoaXAnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3RlbXAtc2hpcCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgYXBwQm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG4gIH1cbn07XG5cbi8vIGEgZnVuY3Rpb24gdG8gcmVuZGVyIHRoZSBzdGFydCBidXR0b24gb25jZSBhbGwgdGhlIHNoaXBzIGFyZSBwbGFjZWRcbmNvbnN0IHJlbmRlclN0YXJ0QnV0dG9uID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuc3RhcnQtYnRuLWNvbnRhaW5lcicpO1xuICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5tb2RhbC1oZWFkZXInKTtcbiAgaWYgKGNvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgIC8vIGp1c3QgaW4gY2FzZSByZW1vdmUgYWxsIGN1cnJlbnQgY29udGVudHMgb2YgdGhlIGNvbnRhaW5lclxuICAgIGNvbnN0IGNoaWxkID0gY29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgaWYgKGNoaWxkICE9PSBudWxsKSBjaGlsZC5yZW1vdmUoKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b25Db21wb25lbnQoKSk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG4gIGlmIChtb2RhbEhlYWRlciAhPT0gbnVsbCkge1xuICAgIG1vZGFsSGVhZGVyLnJlbW92ZSgpO1xuICB9XG59O1xuXG4vLyBhIGV2ZW50SGFuZGxlciB3aGVuIGEgdGlsZSBpcyBjbGlja2VkIGJ5IHRoZSB1c2VyIHRvIGF0dGFjay5cbmZ1bmN0aW9uIHRpbGVDbGlja0V2ZW50SGFuZGxlciAodGhpczogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgbGV0IGNvb3JkaW5hdGVzID0gdGhpcy5kYXRhc2V0LmNvb3JkaW5hdGVzO1xuICBpZiAoY29vcmRpbmF0ZXMgIT09IHVuZGVmaW5lZCkgY29vcmRpbmF0ZXMgPSBKU09OLnBhcnNlKGNvb3JkaW5hdGVzKTtcbiAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaCgncGxheWVyQXR0YWNrUmVxdWVzdCcsIHsgZGF0YTogY29vcmRpbmF0ZXMgfSk7XG59XG5cbi8vIHJlbmRlciB0aGUgcGxheWVyIGFuZCBjb21wdXRlciBib2FyZHMgdG8gc3RhcnQgdGhlIGdhbWVcbmNvbnN0IHJlbmRlckdhbWUgPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xuICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250YWluZXInKTtcblxuICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHBsYXllckJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllckJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkcycpO1xuICBjb25zdCBwbGF5ZXJCb2FyZEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwbGF5ZXJCb2FyZEhlYWRpbmcudGV4dENvbnRlbnQgPSAnWW91ciBib2FyZCc7XG4gIHBsYXllckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkSGVhZGluZyk7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gcmVuZGVyQm9hcmQoKTtcbiAgcGxheWVyQm9hcmQuZGF0YXNldC5uYW1lID0gJ3BsYXllcic7XG4gIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1ib2FyZCcpO1xuICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jb250YWluZXInKTtcbiAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuXG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkQ29udGFpbmVyKTtcblxuICBjb25zdCBjb21wdXRlckJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbXB1dGVyQm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmRzJyk7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29tcHV0ZXJCb2FyZEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkVuZW15J3MgYm9hcmRcIjtcbiAgY29tcHV0ZXJCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkSGVhZGluZyk7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSByZW5kZXJCb2FyZCgpO1xuICBjb21wdXRlckJvYXJkLmRhdGFzZXQubmFtZSA9ICdjb21wdXRlcic7XG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItYm9hcmQnKTtcbiAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jb250YWluZXInKTtcbiAgLy8gdGhlIHVzZXIgcGxheXMgdGhlIGdhbWUgYnkgY2xpY2tpbmcgb24gdGhlIHRpbGVzIGluIHRoZWlyIGVuZW15J3MgXG4gIC8vIGJvYXJkIGkuZS4sIHRoZSBjb21wdXRlcidzIGJvYXJkIGFuZCB0aGUgdXNlciBzaG91bGQgbm90IGJlIGFibGVcbiAgLy8gY2xpY2sgb24gdGhlaXIgb3duIGJvYXJkIGhlbmNlIGFkZGluZyB0aGUgZXZlbnRIYW5kbGVyIG9ubHkgb24gdGhlXG4gIC8vIGNvbXB1dGVyIGJvYXJkXG4gIGNvbnN0IGdhbWVUaWxlcyA9IGNvbXB1dGVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnZGl2LnRpbGUnKTtcbiAgZ2FtZVRpbGVzLmZvckVhY2goKHRpbGU6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRpbGVDbGlja0V2ZW50SGFuZGxlcik7XG4gIH0pO1xuICBjb21wdXRlckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpO1xuXG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmRDb250YWluZXIpO1xuXG4gIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuICByZXR1cm4gZ2FtZUNvbnRhaW5lcjtcbn07XG5cbi8vIGEgZnVuY3Rpb24gdG8gcmV0dXJuIHRoZSB3aW5uZXIgZGlzcGxheSBjb21wb25lbnRcbmNvbnN0IHdpbm5lckNvbnRhaW5lckNvbXBvbmVudCA9ICh3aW5uZXI6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50ID0+IHtcbiAgLy8gc2hvd2luZyB0aGUgd2lubmVyIGFzIG1vZGFsIHRvIGdpdmUgYSBwb3AtdXAgd2luZG93IGFwcGVhcmFuY2VcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICBjb25zdCB3aW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2lubmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lci1jb250YWluZXInKTtcblxuICBjb25zdCB3aW5uZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgd2lubmVySGVhZGluZy50ZXh0Q29udGVudCA9IHdpbm5lciA9PT0gJ2NvbXB1dGVyJyA/ICdDb21wdXRlciB3aW5zIHRoZSBnYW1lIScgOiAnUGxheWVyIHdpbnMgdGhlIGdhbWUhJztcbiAgd2lubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbm5lckhlYWRpbmcpO1xuXG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwbGF5QWdhaW5CdG4udGV4dENvbnRlbnQgPSAnUGxheSBBZ2FpbiEnO1xuICAvLyBlYXNpZXN0IHdheSB0byByZXN0YXJ0IHRoZSBnYW1lXG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG4gIHdpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh3aW5uZXJDb250YWluZXIpO1xuICByZXR1cm4gbW9kYWw7XG59O1xuXG5cbi8vIGEgZnVuY3Rpb24gdG8gbWFyayBhIHRpbGUgYXMgYXR0YWNrZWRcbmNvbnN0IG1hcmtUaWxlID0gKGFsbFRpbGVzOiBOb2RlTGlzdCwgdG9NYXJrOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgYWxsVGlsZXMuZm9yRWFjaCgodGlsZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAodGlsZS5kYXRhc2V0LmNvb3JkaW5hdGVzID09PSB0b01hcmspIHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gYSBmdW5jdGlvbiB0byBtYXJrIHRoZSBwcm92aWRlZCB0aWxlIGFzIHNoaXAgdGlsZSBcbmNvbnN0IG1hcmtTaGlwID0gKGFsbFRpbGVzOiBOb2RlTGlzdCwgdG9NYXJrOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgYWxsVGlsZXMuZm9yRWFjaCgodGlsZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAodGlsZS5kYXRhc2V0LmNvb3JkaW5hdGVzID09PSB0b01hcmspIHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBhIGZ1bmN0aW9uIHRvIG1hcmsgdGhlIGNvb3JkaW5hdGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHNoaXAncyBwbGFjZW1lbnRcbi8vIG9uIHRoZSBwbGF5ZXIgYm9hcmQgdG8gZ2l2ZSB0aGUgdXNlciBhIHZpc3VhbCBpbmRpY2F0aW9uIG9mIHRoZWlyIFxuLy8gb3duIGJvYXJkIGFuZCBzaGlwc1xuY29uc3QgbWFya1NoaXBzID0gKHsgZGF0YSB9OiBFdmVudFBheWxvYWRUeXBlKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgY29vcmRpbmF0ZXMsIGJvYXJkIH0gPSBkYXRhO1xuICAvLyBiZWxvdyBpZiBzdGF0ZW1lbnQgd2FzIHJlbWVuYW50IG9mIHRlc3RpbmcgdGhlIGNvbXB1dGVyIGJvYXJkJ3Mgc2hpcFxuICAvLyBwbGFjZW1lbnRzIGRlY2lkZWQgdG8gbGVhdmUgaXQgYXMgaXQgaXMgaWYgbmVlZGVkIGluIGZ1dHVyZVxuICBsZXQgYm9hcmRUb01hcms7XG4gIGlmIChib2FyZCA9PT0gJ3BsYXllcicpIHtcbiAgICBib2FyZFRvTWFyayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5wbGF5ZXItYm9hcmQnKTtcbiAgfSBlbHNlIHtcbiAgICBib2FyZFRvTWFyayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jb21wdXRlci1ib2FyZCcpO1xuICB9XG4gIGNvbnN0IGFsbFRpbGVzID0gYm9hcmRUb01hcms/LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi50aWxlJyk7XG4gIC8vIHRoZSBjb29yZGluYXRlcyBkYXRhIGZyb20gdGhlIEV2ZW50UGF5bG9hZCBpcyBvZiBTaGlwTWFya2Vyc1R5cGVcbiAgLy8gd2hpY2ggaGFzIGJvdGggY29vcmRpbmF0ZXMgYW5kIHNoaXAgbmFtZSBoZW5jZSB1c2luZyBBcnJheS5tYXAgdG8gXG4gIC8vIHJldHVybiBvbmx5IGFuIGFycmF5IG9mIGNvb3JkaW5hdGVzXG4gIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzLm1hcCgoaXRlbTogU2hpcE1hcmtlcnNUeXBlKSA9PiBpdGVtLmNvb3JkaW5hdGUpXG4gIGlmIChhbGxUaWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGU6IENvb3JkaW5hdGVzVHlwZSkgPT4ge1xuICAgICAgbWFya1NoaXAoYWxsVGlsZXMsIEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKVxuICAgIH0pXG4gIH1cbn07XG5cbi8vIGEgaGFuZGxlciBmdW5jdGlvbiB3aGVuIHRoZSBzaGlwSXNIaXQgZXZlbnQgaXMgZmlyZWQsIG1hcmtcbi8vIHRpbGUgaW4gdGhlIGNvcnJlc3BvbmRpbmcgYm9hcmRcbmNvbnN0IG1hcmtIaXRTaGlwID0gKHsgZGF0YSB9OiBFdmVudFBheWxvYWRUeXBlKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgY29vcmRpbmF0ZSwgYm9hcmQgfSA9IGRhdGE7XG4gIGNvbnN0IHRvTWFyayA9IEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpO1xuICBsZXQgYm9hcmRUb01hcms7XG4gIGlmIChib2FyZCA9PT0gJ3BsYXllcicpIHtcbiAgICBib2FyZFRvTWFyayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5wbGF5ZXItYm9hcmQnKTtcbiAgfSBlbHNlIHtcbiAgICBib2FyZFRvTWFyayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jb21wdXRlci1ib2FyZCcpO1xuICB9XG4gIGNvbnN0IGFsbFRpbGVzID0gYm9hcmRUb01hcms/LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi50aWxlJyk7XG4gIGlmIChhbGxUaWxlcyAhPT0gdW5kZWZpbmVkKSBtYXJrU2hpcChhbGxUaWxlcywgdG9NYXJrKTtcbn07XG5cblxuLy8gYSBoYW5kbGVyIGZ1bmN0aW9uIHRvIGltcGxlbWVudCB0aGUgdGlsZSBoaXQgZnVuY3Rpb24gb24gdGhlIFxuLy8gY29ycmVjdCBib2FyZFxuY29uc3QgaGFuZGxlVGlsZUhpdCA9ICh7IGRhdGEgfTogRXZlbnRQYXlsb2FkVHlwZSk6IHZvaWQgPT4ge1xuICBjb25zdCB7IGNvb3JkaW5hdGUsIGJvYXJkIH0gPSBkYXRhO1xuICBjb25zdCB0b01hcmsgPSBKU09OLnN0cmluZ2lmeShjb29yZGluYXRlKTtcbiAgbGV0IGJvYXJkVG9NYXJrO1xuICBpZiAoYm9hcmQgPT09ICdwbGF5ZXInKSB7XG4gICAgYm9hcmRUb01hcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYucGxheWVyLWJvYXJkJyk7XG4gIH0gZWxzZSB7XG4gICAgYm9hcmRUb01hcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY29tcHV0ZXItYm9hcmQnKTtcbiAgfVxuICBjb25zdCBhbGxUaWxlcyA9IGJvYXJkVG9NYXJrPy5xdWVyeVNlbGVjdG9yQWxsKCdkaXYudGlsZScpO1xuICBpZiAoYWxsVGlsZXMgIT09IHVuZGVmaW5lZCkgbWFya1RpbGUoYWxsVGlsZXMsIHRvTWFyayk7XG59O1xuXG4vLyBhIGhhbmRsZXIgZnVuY3Rpb24gdG8gZGlzcGxheSB0aGUgd2lubmVyIG9mIHRoZSBnYW1lIHRvIHVzZXJcbmNvbnN0IHNob3dXaW5uZXIgPSAoeyBkYXRhIH06IEV2ZW50UGF5bG9hZFR5cGUpOiB2b2lkID0+IHtcbiAgY29uc3QgYXBwQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNhcHAnKTtcbiAgaWYgKGFwcEJvZHkgIT09IG51bGwpIHtcbiAgICAvLyByZW1vdmUgY3VycmVudCBjb250ZW50cyBvZiB0aGUgYXBwQm9keVxuICAgIGNvbnN0IGNoaWxkID0gYXBwQm9keS5maXJzdENoaWxkO1xuICAgIGlmIChjaGlsZCAhPT0gbnVsbCkgY2hpbGQucmVtb3ZlKClcbiAgICBhcHBCb2R5LmFwcGVuZENoaWxkKHdpbm5lckNvbnRhaW5lckNvbXBvbmVudChkYXRhKSk7XG4gIH1cbn07XG5cbi8vIHN1YnNjcmliZSB0byBhbGwgcmVxdWlyZWQgZXZlbnRzLCB0aGlzIGlzIHB1dCBpbiBhIGZ1bmN0aW9uIGFuZCBcbi8vIGV4cG9ydGVkIGluIG9yZGVyIHRvIGNhbGwgaXQgd2hlbiB0aGUgaW5kZXgudHMgZmlsZSBpcyBsb2FkZWRcbmNvbnN0IGRvbVN1YnNjcmlwdGlvbnMgPSAoKTogdm9pZCA9PiB7XG4gIEV2ZW50c09ic2VydmVyLnN1YnNjcmliZSgnaW5pdGlhbFBhZ2VMb2FkJywgcmVuZGVyUGxhY2VTaGlwc0JvYXJkKTtcbiAgRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKCdzaGlwUGxhY2VkJywgY2hhbmdlSW5zdHJ1Y3Rpb25zKTtcbiAgRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKCdyZW5kZXJTdGFydEdhbWUnLCByZW5kZXJTdGFydEJ1dHRvbik7XG4gIEV2ZW50c09ic2VydmVyLnN1YnNjcmliZSgnbWFya1NoaXBzJywgbWFya1NoaXBzKTtcbiAgRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKCd0aWxlSXNIaXQnLCBoYW5kbGVUaWxlSGl0KTtcbiAgRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKCdzaGlwSXNIaXQnLCBtYXJrSGl0U2hpcCk7XG4gIEV2ZW50c09ic2VydmVyLnN1YnNjcmliZSgnd2lubmVyRm91bmQnLCBzaG93V2lubmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVN1YnNjcmlwdGlvbnM7XG4iLCJpbXBvcnQgeyB0eXBlIEV2ZW50c09ic2VydmVyVHlwZSB9IGZyb20gJy4uL3R5cGVzL2FwcFR5cGVzJztcblxuLy8gQW4gZXZlbnRvYnNlcnZlciBvYmplY3QgdG8gaGFuZGxlIGFsbCBwdWIvc3ViIGFjdGl2aXRpZXNcbmNvbnN0IEV2ZW50c09ic2VydmVyOiBFdmVudHNPYnNlcnZlclR5cGUgPSB7XG4gIGV2ZW50czoge30sXG4gIHN1YnNjcmliZTogKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKSA9PiB7XG4gICAgLy8gaWYgdGhlIGdpdmVuIGV2ZW50IGlzIG5vdCBwcmVzZW50IGluIHRoZSBldmVudHMgb2JqZWN0XG4gICAgLy8gYWRkIGl0IHRvIHRoZSBvYmplY3QgZmlyc3RcbiAgICBpZiAoRXZlbnRzT2JzZXJ2ZXIuZXZlbnRzW2V2ZW50TmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgRXZlbnRzT2JzZXJ2ZXIuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgLy8gYWRkIHRoZSBwcm92aWRlZCBoYW5kbGVyIHRvIHRoZSBzdWJzY3JpYmVycyBsaXN0IG9mIHRoZVxuICAgIC8vIGV2ZW50XG4gICAgRXZlbnRzT2JzZXJ2ZXIuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChldmVudEhhbmRsZXIpO1xuICB9LFxuICBwdWJsaXNoOiAoZXZlbnROYW1lLCBldmVudFBheWxvYWQpID0+IHtcbiAgICBjb25zdCBldmVudCA9IEV2ZW50c09ic2VydmVyLmV2ZW50c1tldmVudE5hbWVdO1xuICAgIGlmIChldmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudC5mb3JFYWNoKChldmVudEhhbmRsZXIpID0+IHtcbiAgICAgICAgZXZlbnRIYW5kbGVyKGV2ZW50UGF5bG9hZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHNPYnNlcnZlcjtcbiIsImltcG9ydCBFdmVudHNPYnNlcnZlciBmcm9tICcuL2V2ZW50c09ic2VydmVyJztcbmltcG9ydCB7IHR5cGUgQ29vcmRpbmF0ZXNUeXBlLCB0eXBlIFNoaXBNYXJrZXJzVHlwZSB9IGZyb20gJy4uL3R5cGVzL2FwcFR5cGVzJztcblxuLy8gc2hpcCBjbGFzcyB0byBoYW5kbGUgYWxsIGJlaGF2aW91ciBvZiB0aGUgc2hpcFxuZXhwb3J0IGNsYXNzIFNoaXAge1xuICAjbGVuZ3RoOiBudW1iZXI7XG5cbiAgI2hpdHM6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3Ioc2hpcExlbmd0aDogbnVtYmVyKSB7XG4gICAgdGhpcy4jbGVuZ3RoID0gc2hpcExlbmd0aDtcbiAgfVxuXG4gIGdldCBoaXRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdHM7XG4gIH1cblxuICBoaXQoKTogdm9pZCB7XG4gICAgdGhpcy4jaGl0cyArPSAxO1xuICB9XG5cbiAgaXNTdW5rKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLiNoaXRzID49IHRoaXMuI2xlbmd0aDtcbiAgfVxufVxuXG4vLyB0aGUgZ2FtZWJvYXJkIGNsYXNzIHRvIGhhbmRsZSBhbGwgZ2FtZWJvYXJkIGFjdGl2aXRpZXNcbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmQge1xuICAjbmFtZTogc3RyaW5nO1xuXG4gICNhbGxIaXRzOiBDb29yZGluYXRlc1R5cGVbXSA9IFtdO1xuXG4gICNzaGlwVGlsZXM6IFNoaXBNYXJrZXJzVHlwZVtdID0gW107XG5cbiAgI2NhcnJpZXI6IFNoaXAgfCBudWxsID0gbnVsbDtcblxuICAjYmF0dGxlc2hpcDogU2hpcCB8IG51bGwgPSBudWxsO1xuXG4gICNkZXN0cm95ZXI6IFNoaXAgfCBudWxsID0gbnVsbDtcblxuICAjc3VibWFyaW5lOiBTaGlwIHwgbnVsbCA9IG51bGw7XG5cbiAgI3BhdHJvbEJvYXQ6IFNoaXAgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihib2FyZE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuI25hbWUgPSBib2FyZE5hbWU7XG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBtZXRob2QgdG8gZ2VuZXJhdGUgY29vcmRpbmF0ZXMgaW4gaG9yaXpvbnRhbCBvcmllbnRhdGlvblxuICAjZ2VuZXJhdGVIb3Jpem9udGFsQ29vcmRpbmF0ZXMoc3RhcnQ6IENvb3JkaW5hdGVzVHlwZSwgbGVuZ3RoOiBudW1iZXIpOiBDb29yZGluYXRlc1R5cGVbXSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXNBcnJheTogQ29vcmRpbmF0ZXNUeXBlW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjb29yZGluYXRlO1xuICAgICAgLy8gaWYgeCBheGlzIHN0YXJ0IHBvc2l0b24gKyBsZW5ndGggaXMgZ3JlYXRlciB0aGFuXG4gICAgICAvLyA5IHdlJ2xsIHN1YnRyYWN0IHRoZSBpIHRvIGdlbmVyYXRlIGNvb3JkaW5hdGUgaW5cbiAgICAgIC8vIG9wcG9zaXRlIGRpcmVjdGlvblxuICAgICAgaWYgKHN0YXJ0LnggKyBsZW5ndGggPCA5KSB7XG4gICAgICAgIGNvb3JkaW5hdGUgPSB7XG4gICAgICAgICAgeDogc3RhcnQueCArIGksXG4gICAgICAgICAgeTogc3RhcnQueSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvb3JkaW5hdGUgPSB7XG4gICAgICAgICAgeDogc3RhcnQueCAtIGksXG4gICAgICAgICAgeTogc3RhcnQueSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvb3JkaW5hdGVzQXJyYXkucHVzaChjb29yZGluYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXNBcnJheTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgbWV0aG9kIHRvIGdlbmVyYXRlIGNvb3JkaW5hdGVzIGluIHZlcnRpY2FsIG9yaWVudGF0aW9uXG4gICNnZW5lcmF0ZVZlcnRpY2FsQ29vcmRpbmF0ZXMoc3RhcnQ6IENvb3JkaW5hdGVzVHlwZSwgbGVuZ3RoOiBudW1iZXIpOiBDb29yZGluYXRlc1R5cGVbXSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXNBcnJheTogQ29vcmRpbmF0ZXNUeXBlW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjb29yZGluYXRlO1xuICAgICAgaWYgKHN0YXJ0LnkgKyBsZW5ndGggPCA5KSB7XG4gICAgICAgIC8vIGlmIHkgYXhpcyBzdGFydCBwb3NpdG9uICsgbGVuZ3RoIGlzIGdyZWF0ZXIgdGhhblxuICAgICAgICAvLyA5IHdlJ2xsIHN1YnRyYWN0IHRoZSBpIHRvIGdlbmVyYXRlIGNvb3JkaW5hdGUgaW5cbiAgICAgICAgLy8gb3Bwb3NpdGUgZGlyZWN0aW9uXG4gICAgICAgIGNvb3JkaW5hdGUgPSB7XG4gICAgICAgICAgeDogc3RhcnQueCxcbiAgICAgICAgICB5OiBzdGFydC55ICsgaSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvb3JkaW5hdGUgPSB7XG4gICAgICAgICAgeDogc3RhcnQueCxcbiAgICAgICAgICB5OiBzdGFydC55IC0gaSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvb3JkaW5hdGVzQXJyYXkucHVzaChjb29yZGluYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXNBcnJheTtcbiAgfVxuXG4gIC8vIGEgcHJpdmF0ZSBtZXRob2QgdG8gcGxhY2UgdGhlIHNoaXBzIG9uIHRoZSBib2FyZFxuICAvLyAocGxhY2luZyBzaGlwcyBoYWQgOTAlIHNpbWlsYXJpdHkgYmV0d2VlbiBhbGwgdHlwZXMgb2Ygc2hpcHMgd2l0aCB0aGUgXG4gIC8vIGRpZmZlcmVuY2Ugb25seSBpbiB0aGUgc2hpcExlbmd0aCBoZW5jZSBleHRyYWN0ZWQgaXQgdG8gaXQncyBvd24gbWV0aG9kKVxuICAjcGxhY2VBc2hpcChzdGFydENvb3JkaW5hdGU6IENvb3JkaW5hdGVzVHlwZSwgb3JpZW50YXRpb246IHN0cmluZywgc2hpcExlbmd0aDogbnVtYmVyKTogU2hpcCB8IG51bGwge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChzaGlwTGVuZ3RoKTtcbiAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLiNnZW5lcmF0ZUhvcml6b250YWxDb29yZGluYXRlcyhzdGFydENvb3JkaW5hdGUsIHNoaXBMZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb29yZGluYXRlcyA9IHRoaXMuI2dlbmVyYXRlVmVydGljYWxDb29yZGluYXRlcyhzdGFydENvb3JkaW5hdGUsIHNoaXBMZW5ndGgpO1xuICAgIH1cbiAgICAvLyBzYXZpbmcgdGhlIHNoaXAgY29vcmRpbmF0ZXMgaW4gYW4gYXJyYXkgaW4gdGhlIGNsYXNzLCBpIGhhdmUgZG9uZSB0aGlzIHNvIHRoYXRcbiAgICAvLyB3aGVuIGEgdGlsZSBjb3JyZXNwb25kaW5nIHRvIGEgc2hpcCBpcyBoaXQsIEkgY2FuIGRpcmVjdGx5IGNhbGwgdGhlIHNoaXAncyBoaXQgbWV0aG9kXG4gICAgLy8gZWFzaWx5XG4gICAgY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcy5tYXAoKGNvb3JkKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb29yZGluYXRlOiBjb29yZCxcbiAgICAgICAgc2hpcCxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgLy8gaWYgdGhlIHNoaXAncyBjb29yZGluYXRlcyBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgY2xhc3MgdGhlbiB3ZSdsbCBub3QgcGxhY2UgdGhlIHNoaXBcbiAgICAvLyBpbnN0ZWFkIHJldHVybmluZyBudWxsIHRvIGluZGljYXRlIHRvIHRoZSBjYWxsZXIgdGhlIHNoaXAgd2FzIG5vdCBwbGFjZWQuIElmIGl0IFxuICAgIC8vIGRvZXNuJ3QgZXhpc3QgdGhlbiB3ZSdsbCBwbGFjZSB0aGUgc2hpcFxuICAgIGNvbnN0IGNvb3JkaW5hdGVFeGlzdHMgPSBjb29yZGluYXRlcy5zb21lKChjb29yZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuI3NoaXBUaWxlcy5zb21lKCh0aWxlKSA9PiBKU09OLnN0cmluZ2lmeSh0aWxlKSA9PT0gSlNPTi5zdHJpbmdpZnkoY29vcmQpKTtcbiAgICB9KTtcbiAgICBpZiAoY29vcmRpbmF0ZUV4aXN0cykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRoaXMuI3NoaXBUaWxlcy5wdXNoKC4uLmNvb3JkaW5hdGVzKTtcbiAgICByZXR1cm4gc2hpcDtcbiAgfVxuXG4gIC8vIHB1YmxpYyBtZXRob2QgdG8gcGxhY2UgdGhlIGNhcnJpZXJcbiAgcGxhY2VDYXJyaWVyKHN0YXJ0Q29vcmRpbmF0ZTogQ29vcmRpbmF0ZXNUeXBlLCBvcmllbnRhdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY2FycmllciA9IHRoaXMuI3BsYWNlQXNoaXAoc3RhcnRDb29yZGluYXRlLCBvcmllbnRhdGlvbiwgNSk7XG4gICAgLy8gaWYgY2FycmllciBpcyBhbHJlYWR5IHBsYWNlZCB3ZSdsbCBub3QgZG8gYW55dGhpbmcgYW5kIHJldHVybiBmYWxzZVxuICAgIC8vIHRvIGluZGljYXRlIHRoZSBzaGlwIHdhcyBub3QgcGxhY2VkXG4gICAgaWYgKGNhcnJpZXIgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLiNjYXJyaWVyID0gY2FycmllcjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBtZXRob2QgdG8gcGxhY2UgdGhlIGJhdHRsZXNoaXBcbiAgcGxhY2VCYXR0bGVzaGlwKHN0YXJ0Q29vcmRpbmF0ZTogQ29vcmRpbmF0ZXNUeXBlLCBvcmllbnRhdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IHRoaXMuI3BsYWNlQXNoaXAoc3RhcnRDb29yZGluYXRlLCBvcmllbnRhdGlvbiwgNCk7XG4gICAgaWYgKGJhdHRsZXNoaXAgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLiNiYXR0bGVzaGlwID0gYmF0dGxlc2hpcDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBtZXRob2QgdG8gcGxhY2UgdGhlIGRlc3Ryb3llclxuICBwbGFjZURlc3Ryb3llcihzdGFydENvb3JkaW5hdGU6IENvb3JkaW5hdGVzVHlwZSwgb3JpZW50YXRpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IHRoaXMuI3BsYWNlQXNoaXAoc3RhcnRDb29yZGluYXRlLCBvcmllbnRhdGlvbiwgMyk7XG4gICAgaWYgKGRlc3Ryb3llciA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuI2Rlc3Ryb3llciA9IGRlc3Ryb3llcjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBtZXRob2QgdG8gcGxhY2UgdGhlIHN1Ym1hcmluZVxuICBwbGFjZVN1Ym1hcmluZShzdGFydENvb3JkaW5hdGU6IENvb3JkaW5hdGVzVHlwZSwgb3JpZW50YXRpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IHRoaXMuI3BsYWNlQXNoaXAoc3RhcnRDb29yZGluYXRlLCBvcmllbnRhdGlvbiwgMyk7XG4gICAgaWYgKHN1Ym1hcmluZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuI3N1Ym1hcmluZSA9IHN1Ym1hcmluZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBtZXRob2QgdG8gcGxhY2UgdGhlIHBhdHJvbEJvYXRcbiAgcGxhY2VQYXRyb2xCb2F0KHN0YXJ0Q29vcmRpbmF0ZTogQ29vcmRpbmF0ZXNUeXBlLCBvcmllbnRhdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGF0cm9sQm9hdCA9IHRoaXMuI3BsYWNlQXNoaXAoc3RhcnRDb29yZGluYXRlLCBvcmllbnRhdGlvbiwgMik7XG4gICAgaWYgKHBhdHJvbEJvYXQgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLiNwYXRyb2xCb2F0ID0gcGF0cm9sQm9hdDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldCBhdHRhY2tlZFRpbGVzKCk6IENvb3JkaW5hdGVzVHlwZVtdIHtcbiAgICByZXR1cm4gdGhpcy4jYWxsSGl0cy5zbGljZSgpO1xuICB9XG5cbiAgZ2V0IHNoaXBzUGxhY2VkVGlsZXMoKTogU2hpcE1hcmtlcnNUeXBlW10ge1xuICAgIHJldHVybiB0aGlzLiNzaGlwVGlsZXMuc2xpY2UoKTtcbiAgfVxuXG4gIGdldCBjYXJyaWVyKCk6IFNoaXAgfCBudWxsIHtcbiAgICBpZiAodGhpcy4jY2FycmllciA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgLy8gcmV0dXJuaW5nIGEgY29weSBvZiB0aGUgb2JqZWN0IGluc3RlYWQgb2YgdGhlIG9iamVjdCBpdHNlbGZcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzLiNjYXJyaWVyKTtcbiAgfVxuXG4gIGdldCBjYXJyaWVyQ29vcmRpbmF0ZXMoKTogQ29vcmRpbmF0ZXNUeXBlW10gfCBudWxsIHtcbiAgICBpZiAodGhpcy4jY2FycmllciA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgLy8gc2luY2UgdGhlIHNoaXBQbGFjZWRUaWxlcyBhcmUgb2YgU2hpcE1hcmtlclR5cGUgd2l0aCBib3RoIGNvb3JkaW5hdGVzXG4gICAgLy8gYW5kIHRoZSBzaGlwIGl0c2VsZiwgdXNpbmcgQXJyYXkubWFwIHRvIHJldHVybiBvbmx5IHRoZSBjb29yZGluYXRlcy5cbiAgICByZXR1cm4gdGhpcy5zaGlwc1BsYWNlZFRpbGVzXG4gICAgICAuZmlsdGVyKChzaGlwKSA9PiBKU09OLnN0cmluZ2lmeShzaGlwLnNoaXApID09PSBKU09OLnN0cmluZ2lmeSh0aGlzLiNjYXJyaWVyKSlcbiAgICAgIC5tYXAoKHNoaXApID0+IHNoaXAuY29vcmRpbmF0ZSk7XG4gIH1cblxuICBnZXQgYmF0dGxlc2hpcCgpOiBTaGlwIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuI2JhdHRsZXNoaXAgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHRoaXMuI2JhdHRsZXNoaXApO1xuICB9XG5cbiAgZ2V0IGJhdHRsZXNoaXBDb29yZGluYXRlcygpOiBDb29yZGluYXRlc1R5cGVbXSB8IG51bGwge1xuICAgIGlmICh0aGlzLiNiYXR0bGVzaGlwID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5zaGlwc1BsYWNlZFRpbGVzXG4gICAgICAuZmlsdGVyKChzaGlwKSA9PiBKU09OLnN0cmluZ2lmeShzaGlwLnNoaXApID09PSBKU09OLnN0cmluZ2lmeSh0aGlzLiNiYXR0bGVzaGlwKSlcbiAgICAgIC5tYXAoKHNoaXApID0+IHNoaXAuY29vcmRpbmF0ZSk7XG4gIH1cblxuICBnZXQgZGVzdHJveWVyKCk6IFNoaXAgfCBudWxsIHtcbiAgICBpZiAodGhpcy4jZGVzdHJveWVyID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzLiNkZXN0cm95ZXIpO1xuICB9XG5cbiAgZ2V0IGRlc3Ryb3llckNvb3JkaW5hdGVzKCk6IENvb3JkaW5hdGVzVHlwZVtdIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuI2Rlc3Ryb3llciA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHNQbGFjZWRUaWxlc1xuICAgICAgLmZpbHRlcigoc2hpcCkgPT4gSlNPTi5zdHJpbmdpZnkoc2hpcC5zaGlwKSA9PT0gSlNPTi5zdHJpbmdpZnkodGhpcy4jZGVzdHJveWVyKSlcbiAgICAgIC5tYXAoKHNoaXApID0+IHNoaXAuY29vcmRpbmF0ZSk7XG4gIH1cblxuICBnZXQgc3VibWFyaW5lKCk6IFNoaXAgfCBudWxsIHtcbiAgICBpZiAodGhpcy4jc3VibWFyaW5lID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzLiNzdWJtYXJpbmUpO1xuICB9XG5cbiAgZ2V0IHN1Ym1hcmluZUNvb3JkaW5hdGVzKCk6IENvb3JkaW5hdGVzVHlwZVtdIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuI3N1Ym1hcmluZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHNQbGFjZWRUaWxlc1xuICAgICAgLmZpbHRlcigoc2hpcCkgPT4gSlNPTi5zdHJpbmdpZnkoc2hpcC5zaGlwKSA9PT0gSlNPTi5zdHJpbmdpZnkodGhpcy4jc3VibWFyaW5lKSlcbiAgICAgIC5tYXAoKHNoaXApID0+IHNoaXAuY29vcmRpbmF0ZSk7XG4gIH1cblxuICBnZXQgcGF0cm9sQm9hdCgpOiBTaGlwIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuI3BhdHJvbEJvYXQgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHRoaXMuI3BhdHJvbEJvYXQpO1xuICB9XG5cbiAgZ2V0IHBhdHJvbEJvYXRDb29yZGluYXRlcygpOiBDb29yZGluYXRlc1R5cGVbXSB8IG51bGwge1xuICAgIGlmICh0aGlzLiNwYXRyb2xCb2F0ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5zaGlwc1BsYWNlZFRpbGVzXG4gICAgICAuZmlsdGVyKChzaGlwKSA9PiBKU09OLnN0cmluZ2lmeShzaGlwLnNoaXApID09PSBKU09OLnN0cmluZ2lmeSh0aGlzLiNwYXRyb2xCb2F0KSlcbiAgICAgIC5tYXAoKHNoaXApID0+IHNoaXAuY29vcmRpbmF0ZSk7XG4gIH1cblxuICAvLyBhIHB1YmxpYyBtZXRob2QgdG8gcmVjZWl2ZSBhbiBhdHRhY2sgdG8gdGhlIGJvYXJkXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZTogQ29vcmRpbmF0ZXNUeXBlKTogYm9vbGVhbiB7XG4gICAgLy8gaWYgdGhlIHByb3ZpZGVkIHRpbGUgaXMgYWxyZWFkeSBtYXJrZWQgYXMgaGl0LCB3ZSdsbCBkbyBub3RoaW5nIFxuICAgIC8vIGFuZCByZXR1cm4gZmFsc2UgdG8gaW5kaWNhdGUgdG8gdGhlIGNhbGxlciBub3RoaW5nIHdhcyBjaGFuZ2VkXG4gICAgY29uc3QgYWxyZWFkeUhpdCA9IHRoaXMuI2FsbEhpdHMuc29tZSgodGlsZSkgPT4gSlNPTi5zdHJpbmdpZnkodGlsZSkgPT09IEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKTtcbiAgICBpZiAoYWxyZWFkeUhpdCkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuI2FsbEhpdHMucHVzaChjb29yZGluYXRlKTtcbiAgICAvLyBhZnRlciBtYXJraW5nIHRoZSBnaXZlbiB0aWxlIGFzIGhpdCwgY2hlY2tpbmcgaWYgdGhhdCB0aWxlIGNvbnRhaW5zIGFcbiAgICAvLyBzaGlwLCBpZiBpdCBkb2VzIHRoZW4gY2FsbCB0aGUgaGl0IG1ldGhvZCBvbiB0aGUgc2hpcC5cbiAgICB0aGlzLiNzaGlwVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRpbGUuY29vcmRpbmF0ZSkgPT09IEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGUpKSB7XG4gICAgICAgIHRpbGUuc2hpcC5oaXQoKTtcbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaCgnc2hpcElzSGl0Jywge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGUsXG4gICAgICAgICAgICBib2FyZDogdGhpcy5uYW1lLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goJ3RpbGVJc0hpdCcsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29vcmRpbmF0ZSxcbiAgICAgICAgYm9hcmQ6IHRoaXMubmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBhIHB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYWxsIHNoaXBzIGluIHRoZSBib2FyZCBpcyBzdW5rXG4gIGFsbFNoaXBzU3VuaygpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLiNjYXJyaWVyICE9PSBudWxsICYmXG4gICAgICB0aGlzLiNjYXJyaWVyLmlzU3VuaygpICYmXG4gICAgICB0aGlzLiNiYXR0bGVzaGlwICE9PSBudWxsICYmXG4gICAgICB0aGlzLiNiYXR0bGVzaGlwLmlzU3VuaygpICYmXG4gICAgICB0aGlzLiNkZXN0cm95ZXIgIT09IG51bGwgJiZcbiAgICAgIHRoaXMuI2Rlc3Ryb3llci5pc1N1bmsoKSAmJlxuICAgICAgdGhpcy4jc3VibWFyaW5lICE9PSBudWxsICYmXG4gICAgICB0aGlzLiNzdWJtYXJpbmUuaXNTdW5rKCkgJiZcbiAgICAgIHRoaXMuI3BhdHJvbEJvYXQgIT09IG51bGwgJiZcbiAgICAgIHRoaXMuI3BhdHJvbEJvYXQuaXNTdW5rKClcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IHR5cGUgQ29vcmRpbmF0ZXNUeXBlLCB0eXBlIEV2ZW50UGF5bG9hZFR5cGUgfSBmcm9tICcuLi90eXBlcy9hcHBUeXBlcyc7XG5pbXBvcnQgRXZlbnRzT2JzZXJ2ZXIgZnJvbSAnLi9ldmVudHNPYnNlcnZlcic7XG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tICcuL21vZGVscyc7XG5cbi8vIGEgaGVscGVyIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgcmFuZG9tIG51bWJlclxuY29uc3QgZ2VuZXJhdGVSYW5kb21OdW1iZXIgPSAobGltaXQ6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsaW1pdCk7XG59O1xuXG4vLyBhIGhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSByYW5kb20gY29vcmRpbmF0ZXNcbmNvbnN0IGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMgPSAoKTogQ29vcmRpbmF0ZXNUeXBlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB4OiBnZW5lcmF0ZVJhbmRvbU51bWJlcigxMCksXG4gICAgeTogZ2VuZXJhdGVSYW5kb21OdW1iZXIoMTApLFxuICB9O1xufTtcblxuLy8gYSBoZWxwZXIgZnVuY3Rpb24gdG8gcmFuZG9tbHkgc2VsZWN0IGFuIG9yaWVudGF0aW9uXG5jb25zdCBnZW5lcmF0ZVJhbmRvbU9yaWVudGF0aW9uID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IG9yaWVudGF0aW9ucyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xuICByZXR1cm4gb3JpZW50YXRpb25zW2dlbmVyYXRlUmFuZG9tTnVtYmVyKDIpXTtcbn07XG5cbmNvbnN0IHBsYXllckJvYXJkID0gbmV3IEdhbWVCb2FyZCgncGxheWVyJyk7XG5jb25zdCBjb21wdXRlckJvYXJkID0gbmV3IEdhbWVCb2FyZCgnY29tcHV0ZXInKTtcbi8vIHRoZSBxdWV1ZSBpcyB1c2VkIHdoZW4gY29tcHV0ZXIgbWFrZXMgYSBkZWNpc2lvbiBvbiBhIHRpbGVcbi8vIHRvIGF0dGFjaywgaXQgd2lsbCBmaXJzdCB0YWtlIGludG8gY29uc2lkZXJhdGlvbiB0aGUgdGlsZXNcbi8vIGluIHRoZSBxdWV1ZSwgd2hpY2ggaXRzZWxmIGlzIG5vdGhpbmcgYnV0IGFkamFjZW50IHRpbGVzIHdoZW5cbi8vIGEgdGlsZSBhdHRhY2tlZCBjb250YWluZWQgYSBzaGlwLlxuY29uc3QgcXVldWU6IENvb3JkaW5hdGVzVHlwZVtdID0gW107XG5cbi8vIGEgZnVuY3Rpb24gdG8gcGxhY2UgcGxheWVyJ3Mgc2hpcHMgaW4gdGhlIGJvYXJkXG5jb25zdCBwbGFjZVBsYXllclNoaXBzID0gKHNoaXBUeXBlOiBzdHJpbmcsIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlc1R5cGUsIG9yaWVudGF0aW9uOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgc3dpdGNoIChzaGlwVHlwZSkge1xuICAgIGNhc2UgJ2NhcnJpZXInOlxuICAgICAgLy8gaWYgY2FycmllciBpcyBzdWNjZXNzZnVsbHkgcGxhY2VkIHB1Ymxpc2ggdGhlIGV2ZW50IGFuZCByZXR1cm5cbiAgICAgIC8vIHRydWUsIGlmIGl0J3Mgbm90IHBsYWNlZCByZXR1cm4gZmFsc2UsIGluY2FzZSB0aGUgc2hpcCBwbGFjZW1lbnRcbiAgICAgIC8vIGZhaWxzIHRoZSBzdGF0ZSBpcyBub3QgY2hhbmdlZCBhbmQgdGhlIHVzZXIgY2FuIGNvbnRpbnVlIHBsYWNpbmdcbiAgICAgIC8vIHNhbWUgc2hpcFxuICAgICAgaWYgKHBsYXllckJvYXJkLnBsYWNlQ2Fycmllcihjb29yZGluYXRlcywgb3JpZW50YXRpb24pKSB7XG4gICAgICAgIC8vIGJlbG93IGV2ZW50IHB1Ymxpc2ggaW5kaWNhdGVzIHRoZSBjYXJyaWVyIGlzIHBsYWNlZCBzbyBjaGFuZ2VcbiAgICAgICAgLy8gdGhlIHN0YXRlIHRvIGJhdHRsZXNoaXAsIHRoaXMgZm9sbG93cyBmb3IgYWxsIHNoaXBzIHVudGlsbCBwYXRyb2xcbiAgICAgICAgLy8gYm9hdCBhdCB0aGF0IHBvaW50IHRoZSBzdGF0ZSBpcyBjaGFuZ2VkIHRvIG51bGxcbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaCgnc2hpcFBsYWNlZCcsIHsgZGF0YTogJ2JhdHRsZXNoaXAnIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjYXNlICdiYXR0bGVzaGlwJzpcbiAgICAgIGlmIChwbGF5ZXJCb2FyZC5wbGFjZUJhdHRsZXNoaXAoY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSkge1xuICAgICAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKCdzaGlwUGxhY2VkJywgeyBkYXRhOiAnZGVzdHJveWVyJyB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgY2FzZSAnZGVzdHJveWVyJzpcbiAgICAgIGlmIChwbGF5ZXJCb2FyZC5wbGFjZURlc3Ryb3llcihjb29yZGluYXRlcywgb3JpZW50YXRpb24pKSB7XG4gICAgICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goJ3NoaXBQbGFjZWQnLCB7IGRhdGE6ICdzdWJtYXJpbmUnIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjYXNlICdzdWJtYXJpbmUnOlxuICAgICAgaWYgKHBsYXllckJvYXJkLnBsYWNlU3VibWFyaW5lKGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikpIHtcbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaCgnc2hpcFBsYWNlZCcsIHsgZGF0YTogJ3BhdHJvbEJvYXQnIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjYXNlICdwYXRyb2xCb2F0JzpcbiAgICAgIGlmIChwbGF5ZXJCb2FyZC5wbGFjZVBhdHJvbEJvYXQoY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSkge1xuICAgICAgICAvLyBvbmNlIHRoZSBwYXRyb2xCb2F0IGlzIHBsYWNlZCBjaGFuZ2UgdGhlIHN0YXRlIHRvIG51bGwgYW5kIFxuICAgICAgICAvLyBwdWJsaXNoIHRoZSBldmVudCBpbmRpY2F0aW5nIHRvIHJlbmRlciB0aGUgc3RhcnQgZ2FtZSBidXR0b25cbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaCgnc2hpcFBsYWNlZCcsIHsgZGF0YTogbnVsbCB9KTtcbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaCgncmVuZGVyU3RhcnRHYW1lJywgeyBkYXRhOiBudWxsIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbi8vIGEgZnVuY3Rpb24gdG8gcGxhY2UgY29tcHV0ZXIncyBzaGlwcyBpbiB0aGUgY29tcHV0ZXIncyBib2FyZFxuY29uc3QgcGxhY2VDb21wdXRlclNoaXBzID0gKCk6IHZvaWQgPT4ge1xuICAvLyB0aGUgZnVuY3Rpb24gaXMgc2ltcGxlIGZvciBlYWNoIHNoaXBUeXBlIGNhbGwgdGhlIHJlc3BlY3RpdmUgbWV0aG9kIGJ5IHBhc3NpbmdcbiAgLy8gcmFuZG9tbHkgZ2VuZXJhdGVkIGNvb3JkaW5hdGVzIGFuZCBvcmllbnRhdGlvbiwgaWYgdGhlIHBsYWNlbWVudCBmYWlscyh3aGljaCBpbmRpY2F0ZXNcbiAgLy8gYW4gb3ZlcmxhcCksIGtlZXAgdHJ5aW5nIHVudGlsbCB0aGUgcGxhY2VtZW50IGlzIHN1Y2Nlc3NmdWwuXG4gIGxldCBpc0NhcnJpZXJQbGFjZWQgPSBmYWxzZTtcbiAgd2hpbGUgKCFpc0NhcnJpZXJQbGFjZWQpIHtcbiAgICBpc0NhcnJpZXJQbGFjZWQgPSBjb21wdXRlckJvYXJkLnBsYWNlQ2FycmllcihnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksIGdlbmVyYXRlUmFuZG9tT3JpZW50YXRpb24oKSk7XG4gIH1cbiAgbGV0IGlzQmF0dGxlc2hpcFBsYWNlZCA9IGZhbHNlO1xuICB3aGlsZSAoIWlzQmF0dGxlc2hpcFBsYWNlZCkge1xuICAgIGlzQmF0dGxlc2hpcFBsYWNlZCA9IGNvbXB1dGVyQm9hcmQucGxhY2VCYXR0bGVzaGlwKGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMoKSwgZ2VuZXJhdGVSYW5kb21PcmllbnRhdGlvbigpKTtcbiAgfVxuICBsZXQgaXNEZXN0cm95ZXJQbGFjZWQgPSBmYWxzZTtcbiAgd2hpbGUgKCFpc0Rlc3Ryb3llclBsYWNlZCkge1xuICAgIGlzRGVzdHJveWVyUGxhY2VkID0gY29tcHV0ZXJCb2FyZC5wbGFjZURlc3Ryb3llcihnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksIGdlbmVyYXRlUmFuZG9tT3JpZW50YXRpb24oKSk7XG4gIH1cbiAgbGV0IGlzU3VibWFyaW5lUGxhY2VkID0gZmFsc2U7XG4gIHdoaWxlICghaXNTdWJtYXJpbmVQbGFjZWQpIHtcbiAgICBpc1N1Ym1hcmluZVBsYWNlZCA9IGNvbXB1dGVyQm9hcmQucGxhY2VTdWJtYXJpbmUoZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcygpLCBnZW5lcmF0ZVJhbmRvbU9yaWVudGF0aW9uKCkpO1xuICB9XG4gIGxldCBpc1BhdHJvbEJvYXRQbGFjZWQgPSBmYWxzZTtcbiAgd2hpbGUgKCFpc1BhdHJvbEJvYXRQbGFjZWQpIHtcbiAgICBpc1BhdHJvbEJvYXRQbGFjZWQgPSBjb21wdXRlckJvYXJkLnBsYWNlUGF0cm9sQm9hdChnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksIGdlbmVyYXRlUmFuZG9tT3JpZW50YXRpb24oKSk7XG4gIH1cbn07XG5cbi8vIGEgZnVuY3Rpb24gdG8gaGFuZGxlIHBsYXllcidzIGF0dGFja3NcbmNvbnN0IHBsYXllckF0dGFja3MgPSAoY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzVHlwZSk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCByZXN1bHQgPSBjb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAvLyBpZiB0aGUgYXR0YWNrIHdhcyBzdWNjZXNzZnVsLCBjaGVjayB0byBib2FyZCB0byBzZWUgaWYgYWxsIHNoaXBzIHdlcmUgc3Vuay5cbiAgLy8gaWYgYWxsIHNoaXBzIGFyZSBzdW5rIHRoZW4gZGVjbGFyZSB0aGUgcGxheWVyIGFzIHRoZSB3aW5uZXJcbiAgaWYgKHJlc3VsdCkge1xuICAgIGlmIChjb21wdXRlckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKCd3aW5uZXJGb3VuZCcsIHsgZGF0YTogJ3BsYXllcicgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyBhIGZ1bmN0aW9uIHRvIGhhbmRsZSBjb21wdXRlcidzIGF0dGFja3NcbmNvbnN0IGNvbXB1dGVyQXR0YWNrcyA9ICgpOiB2b2lkID0+IHtcbiAgY29uc3QgY29tcGxldGVkTW92ZXMgPSBwbGF5ZXJCb2FyZC5hdHRhY2tlZFRpbGVzO1xuICAvLyBpZiB0aGUgcXVldWUgaGFzIGEgdGlsZSwgd2UnbGwgZ3JhYiB0aGUgZmlyc3QgdGlsZSB0byBwcm9jZXNzLCBpZiBub3QgXG4gIC8vIHJhbmRvbWx5IGdlbmVyYXRlIHRoZSBjb29yZGluYXRlcyB0byBhdHRhY2tcbiAgbGV0IGN1cnJlbnRBdHRhY2sgPSBxdWV1ZS5sZW5ndGggPiAwID8gcXVldWUuc2hpZnQoKSA6IGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMoKTtcbiAgLy8gY2hlY2tpbmcgaWYgdGhlIHRpbGUgdG8gcHJvY2VzcyBpcyBhbHJlYWR5IGhpdCwgaWYgaXQncyB0cnVlIGtlZXAgZ3JhYmJpbmdcbiAgLy8gdGhlIG5leHQgdGlsZSBmcm9tIHF1ZXVlIG9yIChpZiBxdWV1ZSBpcyBlbXB0eSkgZ2VuZXJhdGluZyByYW5kb20gY29vcmRpbmF0ZXNcbiAgLy8gdW50aWwgYSB0aWxlIHdoaWNoIGlzIG5vdCBwcmV2aW91c2x5IGF0dGFja2VkIGlzIGZvdW5kXG4gIHdoaWxlIChjb21wbGV0ZWRNb3Zlcy5zb21lKCh0aWxlKSA9PiBKU09OLnN0cmluZ2lmeSh0aWxlKSA9PT0gSlNPTi5zdHJpbmdpZnkoY3VycmVudEF0dGFjaykpKSB7XG4gICAgY3VycmVudEF0dGFjayA9IHF1ZXVlLmxlbmd0aCA+IDAgPyBxdWV1ZS5zaGlmdCgpIDogZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcygpO1xuICB9XG4gIC8vIGFuIG5vbi1hdHRhY2tlZCB0aWxlIGlzIGZvdW5kIGhlbmNlIGF0dGFjayB0aGF0IHRpbGUuXG4gIGlmIChjdXJyZW50QXR0YWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGN1cnJlbnRBdHRhY2spO1xuICB9XG4gIC8vIGFmdGVyIGVhY2ggYXR0YWNrIGNoZWNraW5nIHRoZSBib2FyZCB0byBzZWUgaWYgYWxsIHNoaXBzIGhhdmUgc3VuayxcbiAgLy8gaWYgeWVzIGRlY2xhcmUgY29tcHV0ZXIgYXMgd2lubmVyXG4gIGlmIChwbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goJ3dpbm5lckZvdW5kJywgeyBkYXRhOiAnY29tcHV0ZXInIH0pO1xuICB9XG59O1xuXG4vLyBhIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGFkamFjZW50IHRpbGUgY29vcmRpbmF0ZXMgaWYgY29tcHV0ZXJcbi8vIGF0dGFjayBoaXRzIGEgc2hpcC5cbmNvbnN0IHNoaXBIaXRIYW5kbGVyID0gKGRhdGE6IEV2ZW50UGF5bG9hZFR5cGUpOiB2b2lkID0+IHtcbiAgY29uc3QgeyBjb29yZGluYXRlLCBib2FyZCB9ID0gZGF0YS5kYXRhO1xuICAvLyBzaW5jZSBcInNoaXBJc0hpdFwiIGlzIGNhbGxlZCBmb3IgYm90aCBib2FyZHMsIGVuc3VyaW5nXG4gIC8vIGFkamFjZW50IHRpbGVzIGFyZSBhZGRlZCBvbmx5IGlmIHRoZSBzaGlwSXNIaXQgaXMgY2FsbGVkXG4gIC8vIGZyb20gdGhlIHBsYXllckJvYXJkXG4gIGlmIChib2FyZCA9PT0gJ3BsYXllcicpIHtcbiAgICAvLyBlbnN1cmluZyB0aGUgYWRqYWNlbnQgdGlsZXMgY29vcmRpbmF0ZXMgZ2VuZXJhdGVkIGRvZXMgbm90XG4gICAgLy8gZ28gb3V0IG9mIGJvdW5kc1xuICAgIGlmIChjb29yZGluYXRlLnggPCA5KSB7XG4gICAgICBxdWV1ZS5wdXNoKHtcbiAgICAgICAgeDogY29vcmRpbmF0ZS54ICsgMSxcbiAgICAgICAgeTogY29vcmRpbmF0ZS55LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjb29yZGluYXRlLnggPiAwKSB7XG4gICAgICBxdWV1ZS5wdXNoKHtcbiAgICAgICAgeDogY29vcmRpbmF0ZS54IC0gMSxcbiAgICAgICAgeTogY29vcmRpbmF0ZS55LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjb29yZGluYXRlLnkgPCA5KSB7XG4gICAgICBxdWV1ZS5wdXNoKHtcbiAgICAgICAgeDogY29vcmRpbmF0ZS54LFxuICAgICAgICB5OiBjb29yZGluYXRlLnkgKyAxLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjb29yZGluYXRlLnkgPiAwKSB7XG4gICAgICBxdWV1ZS5wdXNoKHtcbiAgICAgICAgeDogY29vcmRpbmF0ZS54LFxuICAgICAgICB5OiBjb29yZGluYXRlLnkgLSAxLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBhbiBoYW5kbGVyIGZ1bmN0aW9uIGZvciBzaGlwUGxhY2VtZW50UmVxdWVzdFxuY29uc3QgaGFuZGxlU2hpcFBsYWNlbWVudFJlcXVlc3QgPSAoeyBkYXRhIH06IEV2ZW50UGF5bG9hZFR5cGUpOiB2b2lkID0+IHtcbiAgY29uc3QgeyBzaGlwVHlwZSwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uIH0gPSBkYXRhO1xuICBpZiAoc2hpcFR5cGUgIT09IG51bGwpIHBsYWNlUGxheWVyU2hpcHMoc2hpcFR5cGUsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbik7XG59O1xuXG4vLyBhIG1pZGRsZXdhcmUgZnVuY3Rpb24sIHdoaWNoIHdoZW4gY2FsbGVkIGJ5IFwic2hpcFBsYWNlZFwiIGV2ZW50IHdpbGwgaW4gdHVyblxuLy8gcHVibGlzaCBhbiBldmVudCB0byBtYXJrIHRoZSBwbGFjZWQgc2hpcHMgaW4gdGhlIFVJXG5jb25zdCBoYW5kbGVTaGlwUGxhY2VkID0gKCk6IHZvaWQgPT4ge1xuICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKCdtYXJrU2hpcHMnLCB7XG4gICAgZGF0YToge1xuICAgICAgY29vcmRpbmF0ZXM6IHBsYXllckJvYXJkLnNoaXBzUGxhY2VkVGlsZXMsXG4gICAgICBib2FyZDogcGxheWVyQm9hcmQubmFtZSxcbiAgICB9LFxuICB9KTtcbn07XG5cbi8vIGEgaGFuZGxlciBmdW5jdGlvbiB0byBoYW5kbGUgcGxheWVyIGF0dGFjayByZXF1ZXN0XG5jb25zdCBoYW5kbGVQbGF5ZXJBdHRhY2tSZXF1ZXN0ID0gKHsgZGF0YSB9OiBFdmVudFBheWxvYWRUeXBlKTogdm9pZCA9PiB7XG4gIC8vIHdlJ2xsIG9ubHkgYWxsb3cgY29tcHV0ZXIgdHVybiBvbmx5IGlmIHRoZSBwbGF5ZXIgYXR0YWNrIGlzIHN1Y2Nlc3NmdWxcbiAgaWYgKHBsYXllckF0dGFja3MoZGF0YSkpIHtcbiAgICBjb21wdXRlckF0dGFja3MoKTtcbiAgfVxufTtcblxuLy8gYSBoYW5kbGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSBtYXJrIHNoaXBzIHJlcXVlc3RcbmNvbnN0IGhhbmRsZU1hcmtTaGlwUmVxdWVzdCA9ICh7IGRhdGEgfTogRXZlbnRQYXlsb2FkVHlwZSk6IHZvaWQgPT4ge1xuICAvLyBpZiB0aGUgcmVxdWVzdCBpcyBmb3IgcGxheWVyQm9hcmQgcmV0dXJuIHBsYXllcidzIHNoaXAgdGlsZXNcbiAgLy8gaWYgbm90IHJldHVybiBjb21wdXRlcidzIHNoaXAgdGlsZXNcbiAgaWYgKGRhdGEgPT09ICdwbGF5ZXInKSB7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaCgnbWFya1NoaXBzJywge1xuICAgICAgZGF0YToge1xuICAgICAgICBjb29yZGluYXRlczogcGxheWVyQm9hcmQuc2hpcHNQbGFjZWRUaWxlcyxcbiAgICAgICAgYm9hcmQ6IHBsYXllckJvYXJkLm5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goJ21hcmtTaGlwcycsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvbXB1dGVyQm9hcmQuc2hpcHNQbGFjZWRUaWxlcyxcbiAgICAgICAgYm9hcmQ6IGNvbXB1dGVyQm9hcmQubmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIGFsbCBFdmVudCBzdWJzY3JpcHRpb25zIGluIGEgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGJ5IGluZGV4LnRzIG9uIHBhZ2Vsb2FkIHRvXG4vLyBlbnN1cmUgc3Vic2NyaXB0aW9uc1xuY29uc3QgcGxheWVyU3Vic2NyaXB0aW9ucyA9ICgpOiB2b2lkID0+IHtcbiAgRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKCdwbGFjZUNvbXB1dGVyU2hpcHMnLCBwbGFjZUNvbXB1dGVyU2hpcHMpO1xuICBFdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoJ3NoaXBJc0hpdCcsIHNoaXBIaXRIYW5kbGVyKTtcbiAgRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKCdzaGlwUGxhY2VtZW50UmVxdWVzdCcsIGhhbmRsZVNoaXBQbGFjZW1lbnRSZXF1ZXN0KTtcbiAgRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKCdzaGlwUGxhY2VkJywgaGFuZGxlU2hpcFBsYWNlZCk7XG4gIEV2ZW50c09ic2VydmVyLnN1YnNjcmliZSgncGxheWVyQXR0YWNrUmVxdWVzdCcsIGhhbmRsZVBsYXllckF0dGFja1JlcXVlc3QpO1xuICBFdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoJ21hcmtTaGlwc1JlcXVlc3QnLCBoYW5kbGVNYXJrU2hpcFJlcXVlc3QpO1xufTtcblxuZXhwb3J0IHtcbiAgcGxheWVyQm9hcmQsXG4gIGNvbXB1dGVyQm9hcmQsXG4gIHBsYWNlUGxheWVyU2hpcHMsXG4gIHBsYWNlQ29tcHV0ZXJTaGlwcyxcbiAgY29tcHV0ZXJBdHRhY2tzLFxuICBwbGF5ZXJBdHRhY2tzLFxuICBwbGF5ZXJTdWJzY3JpcHRpb25zLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBFdmVudHNPYnNlcnZlciBmcm9tICcuL2V2ZW50c09ic2VydmVyJztcbmltcG9ydCBkb21TdWJzY3JpcHRpb25zIGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgcGxheWVyU3Vic2NyaXB0aW9ucyB9IGZyb20gJy4vcGxheWVycyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnO1xuXG4vLyBjYWxsIGFsbCB0aGUgc3Vic2NyaXB0aW9uIG1ldGhvZHMgZmlyc3QgdG8gc2V0IHVwXG4vLyBzdWJzY3JpYnB0aW9uc1xuZG9tU3Vic2NyaXB0aW9ucygpO1xucGxheWVyU3Vic2NyaXB0aW9ucygpO1xuLy8gcmVuZGVyIHRoZSBpbml0YWwgcGFnZVxuRXZlbnRzT2JzZXJ2ZXIucHVibGlzaCgnaW5pdGlhbFBhZ2VMb2FkJywgeyBkYXRhOiBudWxsIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9