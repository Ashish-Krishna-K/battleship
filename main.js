/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\n#boards {\n    display: flex;\n    gap: 100px;\n}\n\n#player-board {\n    width: 400px;\n    height: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n#computer-board {\n    width: 400px;\n    height: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n#place-ships {\n    width: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.cell {\n    height: 50px;\n    border: 1px solid black;\n}\n\n#computer-board .cell:hover {\n    background-color: aquamarine;\n}\n\n\n#place-ships .cell:hover {\n    background-color: aquamarine;\n}\n\n.ship {\n    background-color: yellow;\n}\n\n.mark {\n    background-color: lightgreen;\n}\n\n.mark.ship {\n    background-color: lightcoral;\n}\n\n.hidden {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,YAAY;;IAEZ,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,4BAA4B;AAChC;;;AAGA;IACI,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\n#boards {\n    display: flex;\n    gap: 100px;\n}\n\n#player-board {\n    width: 400px;\n    height: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n#computer-board {\n    width: 400px;\n    height: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n#place-ships {\n    width: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.cell {\n    height: 50px;\n    border: 1px solid black;\n}\n\n#computer-board .cell:hover {\n    background-color: aquamarine;\n}\n\n\n#place-ships .cell:hover {\n    background-color: aquamarine;\n}\n\n.ship {\n    background-color: yellow;\n}\n\n.mark {\n    background-color: lightgreen;\n}\n\n.mark.ship {\n    background-color: lightcoral;\n}\n\n.hidden {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
  } // For old IE

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

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "generateRandomCoordinates": () => (/* binding */ generateRandomCoordinates),
/* harmony export */   "setCoordinate": () => (/* binding */ setCoordinate)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");


/* eslint-disable no-restricted-syntax */
const Ship = (length, orientation) => {
  let hp = length;

  const getOrientation = () => orientation;

  const getHP = () => hp;

  const isHit = () => {
    hp -= 1;
    return hp;
  };

  const isSunk = () => (hp <= 0);

  return {
    getHP,
    getOrientation,
    isHit,
    isSunk,
  };
};

function setCoordinate(a, b) {
  return {
    x: a,
    y: b,
  };
}

function generateRandomCoordinates() {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  return setCoordinate(a, b);
}

function compareCoods(cod1, cod2) {
  const obj1 = JSON.stringify(cod1);
  const obj2 = JSON.stringify(cod2);
  return obj1 === obj2;
}

const Gameboard = () => {
  const ships = {
    carrier: { name: null, coordinates: [], sunkStatus: false },
    battleship: { name: null, coordinates: [], sunkStatus: false },
    destroyer: { name: null, coordinates: [], sunkStatus: false },
    submarine: { name: null, coordinates: [], sunkStatus: false },
    patrolBoat: { name: null, coordinates: [], sunkStatus: false },
  };
  const missed = [];
  const plays = [];
  const shipsPlaced = [];

  const placeShip = (len, orientation, coordinate, max) => {
    const tempArr = [];

    if (orientation === 'horizontal') {
      if (coordinate.x < max) {
        for (let i = 0; i <= len - 1; i++) {
          const currentCoordinate = { x: coordinate.x + i, y: coordinate.y };
          tempArr.push(currentCoordinate);
        }
      } else {
        for (let i = 0; i <= len - 1; i++) {
          const currentCoordinate = { x: coordinate.x - i, y: coordinate.y };
          tempArr.push(currentCoordinate);
        }
      }
    } else if (orientation === 'vertical') {
      if (coordinate.y < max) {
        for (let i = 0; i <= len - 1; i++) {
          const currentCoordinate = { x: coordinate.x, y: coordinate.y + i };
          tempArr.push(currentCoordinate);
        }
      } else {
        for (let i = 0; i <= len - 1; i++) {
          const currentCoordinate = { x: coordinate.x, y: coordinate.y - i };
          tempArr.push(currentCoordinate);
        }
      }
    }

    const newTempArray = tempArr.filter((item) => {
      for (const obj of shipsPlaced) {
        if (compareCoods(item, obj)) return false;
      }
      return true;
    });
    if (newTempArray.length !== len) return [];
    newTempArray.forEach((item) => shipsPlaced.push(item));
    return newTempArray;
  };

  const createCarrier = (coordinate, orientation) => {
    const carrier = Ship(5, orientation);
    ships.carrier.name = carrier;

    ships.carrier.coordinates = placeShip(5, orientation, coordinate, 6);

    return ships.carrier.coordinates.length === 5;
  };

  const createBattleship = (coordinate, orientation) => {
    const battleship = Ship(4, orientation);
    ships.battleship.name = battleship;

    ships.battleship.coordinates = placeShip(4, orientation, coordinate, 7);

    return ships.battleship.coordinates.length === 4;
  };

  const createDestroyer = (coordinate, orientation) => {
    const destroyer = Ship(3, orientation);
    ships.destroyer.name = destroyer;

    ships.destroyer.coordinates = placeShip(3, orientation, coordinate, 8);

    return ships.destroyer.coordinates.length === 3;
  };

  const createSubmarine = (coordinate, orientation) => {
    const submarine = Ship(3, orientation);
    ships.submarine.name = submarine;

    ships.submarine.coordinates = placeShip(3, orientation, coordinate, 8);

    return ships.submarine.coordinates.length === 3;
  };

  const createBoat = (coordinate, orientation) => {
    const patrolBoat = Ship(2, orientation);
    ships.patrolBoat.name = patrolBoat;

    ships.patrolBoat.coordinates = placeShip(2, orientation, coordinate, 9);

    return ships.patrolBoat.coordinates.length === 2;
  };

  const checkCoordinate = (obj, x, y) => {
    if (obj.x === x && obj.y === y) {
      return true;
    }
    return false;
  };

  const checkShip = (coordinate, player) => {
    let displayPlayer;

    if (player === 'computer')displayPlayer = 'player';
    if (player === undefined) displayPlayer = 'computer';

    let status = false;

    for (const item of ships.carrier.coordinates) {
      status = checkCoordinate(item, coordinate.x, coordinate.y);
      if (status) {
        ships.carrier.name.isHit();
        if (player === 'computer') (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.markShip)(coordinate);
        ships.carrier.sunkStatus = ships.carrier.name.isSunk();
        if (ships.carrier.sunkStatus) {
          (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.broadcastSunkShip)('carrier', displayPlayer);
        }
        return;
      }
    }
    for (const item of ships.battleship.coordinates) {
      status = checkCoordinate(item, coordinate.x, coordinate.y);
      if (status) {
        ships.battleship.name.isHit();
        if (player === 'computer') (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.markShip)(coordinate);
        ships.battleship.sunkStatus = ships.battleship.name.isSunk();
        if (ships.battleship.sunkStatus) {
          (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.broadcastSunkShip)('battleship', displayPlayer);
        }
        return;
      }
    }
    for (const item of ships.destroyer.coordinates) {
      status = checkCoordinate(item, coordinate.x, coordinate.y);
      if (status) {
        ships.destroyer.name.isHit();
        if (player === 'computer') (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.markShip)(coordinate);
        ships.destroyer.sunkStatus = ships.destroyer.name.isSunk();
        if (ships.destroyer.sunkStatus) {
          (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.broadcastSunkShip)('destroyer', displayPlayer);
        }
        return;
      }
    }
    for (const item of ships.submarine.coordinates) {
      status = checkCoordinate(item, coordinate.x, coordinate.y);
      if (status) {
        ships.submarine.name.isHit();
        if (player === 'computer') (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.markShip)(coordinate);
        ships.submarine.sunkStatus = ships.submarine.name.isSunk();
        if (ships.submarine.sunkStatus) {
          (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.broadcastSunkShip)('submarine', displayPlayer);
        }
        return;
      }
    }
    for (const item of ships.patrolBoat.coordinates) {
      status = checkCoordinate(item, coordinate.x, coordinate.y);
      if (status) {
        ships.patrolBoat.name.isHit();
        if (player === 'computer') (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.markShip)(coordinate);
        ships.patrolBoat.sunkStatus = ships.patrolBoat.name.isSunk();
        if (ships.patrolBoat.sunkStatus) {
          (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.broadcastSunkShip)('patrol boat', displayPlayer);
        }
        return;
      }
    }
    missed.push(coordinate);
  };

  const receiveAttack = (coordinate, player) => {
    plays.push(coordinate);
    checkShip(coordinate, player);
  };

  const shipsSunk = () => {
    if (!ships.carrier.sunkStatus) return false;
    if (!ships.battleship.sunkStatus) return false;
    if (!ships.destroyer.sunkStatus) return false;
    if (!ships.submarine.sunkStatus) return false;
    if (!ships.patrolBoat.sunkStatus) return false;
    return true;
  };

  return {
    ships,
    missed,
    plays,
    shipsPlaced,
    createCarrier,
    createBattleship,
    createDestroyer,
    createSubmarine,
    createBoat,
    receiveAttack,
    shipsSunk,
    checkCoordinate,
  };
};




/***/ }),

/***/ "./src/computer-player.js":
/*!********************************!*\
  !*** ./src/computer-player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerPlayer": () => (/* binding */ computerPlayer)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* eslint-disable no-restricted-syntax */



const computerPlayer = (playerBoard) => {
  const compPlay = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)();

  const checkLegal = (array, coordinate) => {
    if (array === null) {
      return true;
    }

    for (const item of array) {
      if (item.x === coordinate.x && item.y === coordinate.y) {
        return false;
      }
    }
    return true;
  };

  const legalMove = checkLegal(playerBoard.plays, compPlay);

  if (!legalMove) {
    computerPlayer(playerBoard);
    return;
  }

  playerBoard.receiveAttack(compPlay);
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.markPlay)(compPlay, 'computer');
};




/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "broadcastSunkShip": () => (/* binding */ broadcastSunkShip),
/* harmony export */   "changeVisibility": () => (/* binding */ changeVisibility),
/* harmony export */   "getInstruction": () => (/* binding */ getInstruction),
/* harmony export */   "getOrient": () => (/* binding */ getOrient),
/* harmony export */   "getwinnerDisplay": () => (/* binding */ getwinnerDisplay),
/* harmony export */   "markPlay": () => (/* binding */ markPlay),
/* harmony export */   "markShip": () => (/* binding */ markShip),
/* harmony export */   "renderCompBoard": () => (/* binding */ renderCompBoard),
/* harmony export */   "renderCompShips": () => (/* binding */ renderCompShips),
/* harmony export */   "renderPlayerBoard": () => (/* binding */ renderPlayerBoard),
/* harmony export */   "renderShip": () => (/* binding */ renderShip),
/* harmony export */   "setInstruction": () => (/* binding */ setInstruction)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");


const playerBoard = document.querySelector('#player-board');
const computerBoard = document.querySelector('#computer-board');
const displayShipName = document.querySelector('#ship-name');
const orientation = document.querySelector('#orientation');
const gameWinner = document.querySelector('#game-winner');
const roundWinner = document.querySelector('#round-winner');
const insturctionsDiv = document.querySelector('#inst');

function getOrient() {
  return orientation.value;
}

function setInstruction(string) {
  if (string === '') {
    displayShipName.textContent = '';
    displayShipName.classList.toggle('hidden');
    insturctionsDiv.textContent = 'Play Game!';
    return;
  }
  displayShipName.textContent = `Place your ${string}`;
  displayShipName.dataset.ship = string;
}

function getInstruction() {
  return displayShipName.dataset.ship;
}

function changeVisibility() {
  computerBoard.classList.toggle('hidden');
}

function findShipNodes(object, array) {
  const node = array.find((obj) => {
    const cod = JSON.parse(obj.dataset.coordinates);

    return cod.x === object.x && cod.y === object.y;
  });

  return node;
}

function renderPlayerBoard() {
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.classList.add('rows');
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      const data = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setCoordinate)(i, j);
      cell.dataset.coordinates = JSON.stringify(data);
      cell.dataset.who = 'player';
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    playerBoard.appendChild(row);
  }
}

function renderCompBoard() {
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.classList.add('rows');
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      const data = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setCoordinate)(i, j);
      cell.dataset.coordinates = JSON.stringify(data);
      cell.dataset.who = 'computer';
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    computerBoard.appendChild(row);
  }
}

function renderShip(board) {
  const playerCells = document.querySelectorAll('#player-board .cell');
  const cellsArray = Array.from(playerCells);
  board.shipsPlaced.forEach((item) => {
    const node = findShipNodes(item, cellsArray);
    node.classList.add('ship');
  });
}
// delete this below function after testing
function renderCompShips(board) {
  const playerCells = document.querySelectorAll('#computer-board .cell');
  const cellsArray = Array.from(playerCells);
  board.shipsPlaced.forEach((item) => {
    const node = findShipNodes(item, cellsArray);
    node.classList.add('ship');
  });
}

function markPlay(coordinate, player) {
  if (player === 'player') {
    const computerCells = Array.from(document.querySelectorAll('#computer-board .cell'));
    const node = computerCells.find((obj) => {
      const cod = JSON.parse(obj.dataset.coordinates);
      return cod.x === coordinate.x && cod.y === coordinate.y;
    });
    node.classList.add('mark');
  }
  if (player === 'computer') {
    const playerCells = Array.from(document.querySelectorAll('#player-board .cell'));
    const node = playerCells.find((obj) => {
      const cod = JSON.parse(obj.dataset.coordinates);
      return cod.x === coordinate.x && cod.y === coordinate.y;
    });
    node.classList.add('mark');
  }
}

function markShip(coordinate) {
  const computerCells = Array.from(document.querySelectorAll('#computer-board .cell'));
  const node = computerCells.find((obj) => {
    const cod = JSON.parse(obj.dataset.coordinates);
    return cod.x === coordinate.x && cod.y === coordinate.y;
  });
  node.classList.add('ship');
}

function broadcastSunkShip(name, player) {
  roundWinner.textContent = `${player} has sunk enemy's ${name}`;
}

function getwinnerDisplay() {
  return {
    gameWinner,
    roundWinner,
  };
}


/***/ }),

/***/ "./src/gameplay.js":
/*!*************************!*\
  !*** ./src/gameplay.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initiateGame": () => (/* binding */ initiateGame),
/* harmony export */   "placeShipController": () => (/* binding */ placeShipController),
/* harmony export */   "placementCounter": () => (/* binding */ placementCounter),
/* harmony export */   "playRound": () => (/* binding */ playRound)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _computer_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer-player */ "./src/computer-player.js");
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* eslint-disable no-restricted-syntax */




let gameOver = false;

const playerBoard = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

const computerBoard = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

const winnerDisplay = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.getwinnerDisplay)();

let placementCounter = 0;

function broadcastWinner(who) {
  winnerDisplay.gameWinner.textContent = `${who} wins the game`;
}

function handleInfiniteLoop() {
  alert('Oops! Something went wrong!\nPlease reload the page!');
}

function placeShips(ship, coordinate, orient) {
  switch (ship) {
    case 'Carrier':
      if (!playerBoard.createCarrier(coordinate, orient)) return;
      placementCounter++;
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.setInstruction)('Battleship');
      break;
    case 'Battleship':
      if (!playerBoard.createBattleship(coordinate, orient)) return;
      placementCounter++;
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.setInstruction)('Destroyer');
      break;
    case 'Destroyer':
      if (!playerBoard.createDestroyer(coordinate, orient)) return;
      placementCounter++;
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.setInstruction)('Submarine');
      break;
    case 'Submarine':
      if (!playerBoard.createSubmarine(coordinate, orient)) return;
      placementCounter++;
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.setInstruction)('Patrol Boat');
      break;
    case 'Patrol Boat':
      if (!playerBoard.createBoat(coordinate, orient)) return;
      placementCounter++;
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.setInstruction)('');
      break;
    default:
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.setInstruction)('Carrier');
      console.log('error');
  }
}

function placeShipController(event) {
  const coordinate = JSON.parse(event.target.dataset.coordinates);
  const ship = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.getInstruction)();
  placeShips(ship, coordinate, (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.getOrient)());
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.renderShip)(playerBoard);
}
let counter = 0;

function initiateGame() {
  let shipPlacement = null;
  if (computerBoard.ships.carrier.coordinates.length !== 5) {
    shipPlacement = computerBoard.createCarrier((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'horizontal');
    if (!shipPlacement) {
      if (counter > 1000) {
        handleInfiniteLoop();
        return;
      }
      counter++;
      initiateGame();
      return;
    }
  }
  if (computerBoard.ships.battleship.coordinates.length !== 4) {
    shipPlacement = computerBoard.createBattleship((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'vertical');
    if (!shipPlacement) {
      if (counter > 2000) {
        handleInfiniteLoop();
        return;
      }
      counter++;
      initiateGame();
      return;
    }
  }
  if (computerBoard.ships.destroyer.coordinates.length !== 3) {
    shipPlacement = computerBoard.createDestroyer((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'horizontal');
    if (!shipPlacement) {
      if (counter > 3000) {
        handleInfiniteLoop();
        return;
      }
      counter++;
      initiateGame();
      return;
    }
  }
  if (computerBoard.ships.submarine.coordinates.length !== 3) {
    shipPlacement = computerBoard.createSubmarine((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'vertical');
    if (!shipPlacement) {
      if (counter > 4000) {
        handleInfiniteLoop();
        return;
      }
      counter++;
      initiateGame();
      return;
    }
  }
  if (computerBoard.ships.patrolBoat.coordinates.length !== 2) {
    shipPlacement = computerBoard.createBoat((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'horizontal');
    if (!shipPlacement) {
      if (counter > 5000) {
        handleInfiniteLoop();
        return;
      }
      counter++;
      initiateGame();
    }
  }
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.renderCompShips)(computerBoard);
}

function playRound(coordinate, board) {
  if (gameOver) return;

  let currentPlay;

  for (const item of computerBoard.plays) {
    currentPlay = computerBoard.checkCoordinate(item, coordinate.x, coordinate.y);
  }

  if (currentPlay) return;

  computerBoard.receiveAttack(coordinate, board);
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.markPlay)(coordinate, 'player');

  if (computerBoard.shipsSunk()) {
    broadcastWinner('Player');
    gameOver = true;
    return;
  }
  setTimeout(() => {
    (0,_computer_player__WEBPACK_IMPORTED_MODULE_1__.computerPlayer)(playerBoard);
    if (playerBoard.shipsSunk()) {
      broadcastWinner('Computer');
      gameOver = true;
    }
  }, 500);
}




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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameplay */ "./src/gameplay.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.setInstruction)('Carrier');

(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.renderPlayerBoard)();
(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.renderCompBoard)();

const playerCells = document.querySelectorAll('#player-board .cell');

playerCells.forEach((cell) => cell.addEventListener('click', _gameplay__WEBPACK_IMPORTED_MODULE_1__.placeShipController));

playerCells.forEach((cell) => cell.addEventListener('click', () => {
  if (_gameplay__WEBPACK_IMPORTED_MODULE_1__.placementCounter > 4) {
    playerCells.forEach((thing) => thing.removeEventListener('click', _gameplay__WEBPACK_IMPORTED_MODULE_1__.placeShipController));
  }
}));

const startBtn = document.querySelector('#start');

startBtn.addEventListener('click', () => {
  if (_gameplay__WEBPACK_IMPORTED_MODULE_1__.placementCounter < 5) return;
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.changeVisibility)();
  (0,_gameplay__WEBPACK_IMPORTED_MODULE_1__.initiateGame)();
  playerCells.forEach((cell) => cell.removeEventListener('click', _gameplay__WEBPACK_IMPORTED_MODULE_1__.placeShipController));
});

const compCells = document.querySelectorAll('#computer-board .cell');

compCells.forEach((node) => node.addEventListener('click', (e) => {
  const coordinate = JSON.parse(e.target.dataset.coordinates);
  const board = e.target.dataset.who;
  (0,_gameplay__WEBPACK_IMPORTED_MODULE_1__.playRound)(coordinate, board);
}));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0QixzRUFBc0UsMERBQW1CO0FBQ3pGO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLE1BQU0sdURBQWdCO0FBQ3RCLEVBQUUsbUVBQWdCO0FBQ2xCLEVBQUUsdURBQVk7QUFDZCxrRUFBa0UsMERBQW1CO0FBQ3JGLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBUztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXB1dGVyLXBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuI2NvbXB1dGVyLWJvYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuI3BsYWNlLXNoaXBzIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29tcHV0ZXItYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG5cXG4jcGxhY2Utc2hpcHMgLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLm1hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4ubWFyay5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhOztJQUViLGFBQWE7SUFDYixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7O0FBR0E7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuI2NvbXB1dGVyLWJvYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuI3BsYWNlLXNoaXBzIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29tcHV0ZXItYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG5cXG4jcGxhY2Utc2hpcHMgLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLm1hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4ubWFyay5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBtYXJrU2hpcCwgYnJvYWRjYXN0U3Vua1NoaXAgfSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24nO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuY29uc3QgU2hpcCA9IChsZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gIGxldCBocCA9IGxlbmd0aDtcblxuICBjb25zdCBnZXRPcmllbnRhdGlvbiA9ICgpID0+IG9yaWVudGF0aW9uO1xuXG4gIGNvbnN0IGdldEhQID0gKCkgPT4gaHA7XG5cbiAgY29uc3QgaXNIaXQgPSAoKSA9PiB7XG4gICAgaHAgLT0gMTtcbiAgICByZXR1cm4gaHA7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gKGhwIDw9IDApO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0SFAsXG4gICAgZ2V0T3JpZW50YXRpb24sXG4gICAgaXNIaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZnVuY3Rpb24gc2V0Q29vcmRpbmF0ZShhLCBiKSB7XG4gIHJldHVybiB7XG4gICAgeDogYSxcbiAgICB5OiBiLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCkge1xuICBjb25zdCBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBjb25zdCBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICByZXR1cm4gc2V0Q29vcmRpbmF0ZShhLCBiKTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZUNvb2RzKGNvZDEsIGNvZDIpIHtcbiAgY29uc3Qgb2JqMSA9IEpTT04uc3RyaW5naWZ5KGNvZDEpO1xuICBjb25zdCBvYmoyID0gSlNPTi5zdHJpbmdpZnkoY29kMik7XG4gIHJldHVybiBvYmoxID09PSBvYmoyO1xufVxuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IHsgbmFtZTogbnVsbCwgY29vcmRpbmF0ZXM6IFtdLCBzdW5rU3RhdHVzOiBmYWxzZSB9LFxuICAgIGJhdHRsZXNoaXA6IHsgbmFtZTogbnVsbCwgY29vcmRpbmF0ZXM6IFtdLCBzdW5rU3RhdHVzOiBmYWxzZSB9LFxuICAgIGRlc3Ryb3llcjogeyBuYW1lOiBudWxsLCBjb29yZGluYXRlczogW10sIHN1bmtTdGF0dXM6IGZhbHNlIH0sXG4gICAgc3VibWFyaW5lOiB7IG5hbWU6IG51bGwsIGNvb3JkaW5hdGVzOiBbXSwgc3Vua1N0YXR1czogZmFsc2UgfSxcbiAgICBwYXRyb2xCb2F0OiB7IG5hbWU6IG51bGwsIGNvb3JkaW5hdGVzOiBbXSwgc3Vua1N0YXR1czogZmFsc2UgfSxcbiAgfTtcbiAgY29uc3QgbWlzc2VkID0gW107XG4gIGNvbnN0IHBsYXlzID0gW107XG4gIGNvbnN0IHNoaXBzUGxhY2VkID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGxlbiwgb3JpZW50YXRpb24sIGNvb3JkaW5hdGUsIG1heCkgPT4ge1xuICAgIGNvbnN0IHRlbXBBcnIgPSBbXTtcblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoY29vcmRpbmF0ZS54IDwgbWF4KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbiAtIDE7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb29yZGluYXRlID0geyB4OiBjb29yZGluYXRlLnggKyBpLCB5OiBjb29yZGluYXRlLnkgfTtcbiAgICAgICAgICB0ZW1wQXJyLnB1c2goY3VycmVudENvb3JkaW5hdGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW4gLSAxOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q29vcmRpbmF0ZSA9IHsgeDogY29vcmRpbmF0ZS54IC0gaSwgeTogY29vcmRpbmF0ZS55IH07XG4gICAgICAgICAgdGVtcEFyci5wdXNoKGN1cnJlbnRDb29yZGluYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmIChjb29yZGluYXRlLnkgPCBtYXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudENvb3JkaW5hdGUgPSB7IHg6IGNvb3JkaW5hdGUueCwgeTogY29vcmRpbmF0ZS55ICsgaSB9O1xuICAgICAgICAgIHRlbXBBcnIucHVzaChjdXJyZW50Q29vcmRpbmF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbiAtIDE7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb29yZGluYXRlID0geyB4OiBjb29yZGluYXRlLngsIHk6IGNvb3JkaW5hdGUueSAtIGkgfTtcbiAgICAgICAgICB0ZW1wQXJyLnB1c2goY3VycmVudENvb3JkaW5hdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmV3VGVtcEFycmF5ID0gdGVtcEFyci5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIGZvciAoY29uc3Qgb2JqIG9mIHNoaXBzUGxhY2VkKSB7XG4gICAgICAgIGlmIChjb21wYXJlQ29vZHMoaXRlbSwgb2JqKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgaWYgKG5ld1RlbXBBcnJheS5sZW5ndGggIT09IGxlbikgcmV0dXJuIFtdO1xuICAgIG5ld1RlbXBBcnJheS5mb3JFYWNoKChpdGVtKSA9PiBzaGlwc1BsYWNlZC5wdXNoKGl0ZW0pKTtcbiAgICByZXR1cm4gbmV3VGVtcEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNhcnJpZXIgPSAoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcCg1LCBvcmllbnRhdGlvbik7XG4gICAgc2hpcHMuY2Fycmllci5uYW1lID0gY2FycmllcjtcblxuICAgIHNoaXBzLmNhcnJpZXIuY29vcmRpbmF0ZXMgPSBwbGFjZVNoaXAoNSwgb3JpZW50YXRpb24sIGNvb3JkaW5hdGUsIDYpO1xuXG4gICAgcmV0dXJuIHNoaXBzLmNhcnJpZXIuY29vcmRpbmF0ZXMubGVuZ3RoID09PSA1O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUJhdHRsZXNoaXAgPSAoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCBvcmllbnRhdGlvbik7XG4gICAgc2hpcHMuYmF0dGxlc2hpcC5uYW1lID0gYmF0dGxlc2hpcDtcblxuICAgIHNoaXBzLmJhdHRsZXNoaXAuY29vcmRpbmF0ZXMgPSBwbGFjZVNoaXAoNCwgb3JpZW50YXRpb24sIGNvb3JkaW5hdGUsIDcpO1xuXG4gICAgcmV0dXJuIHNoaXBzLmJhdHRsZXNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoID09PSA0O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZURlc3Ryb3llciA9IChjb29yZGluYXRlLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoMywgb3JpZW50YXRpb24pO1xuICAgIHNoaXBzLmRlc3Ryb3llci5uYW1lID0gZGVzdHJveWVyO1xuXG4gICAgc2hpcHMuZGVzdHJveWVyLmNvb3JkaW5hdGVzID0gcGxhY2VTaGlwKDMsIG9yaWVudGF0aW9uLCBjb29yZGluYXRlLCA4KTtcblxuICAgIHJldHVybiBzaGlwcy5kZXN0cm95ZXIuY29vcmRpbmF0ZXMubGVuZ3RoID09PSAzO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVN1Ym1hcmluZSA9IChjb29yZGluYXRlLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMywgb3JpZW50YXRpb24pO1xuICAgIHNoaXBzLnN1Ym1hcmluZS5uYW1lID0gc3VibWFyaW5lO1xuXG4gICAgc2hpcHMuc3VibWFyaW5lLmNvb3JkaW5hdGVzID0gcGxhY2VTaGlwKDMsIG9yaWVudGF0aW9uLCBjb29yZGluYXRlLCA4KTtcblxuICAgIHJldHVybiBzaGlwcy5zdWJtYXJpbmUuY29vcmRpbmF0ZXMubGVuZ3RoID09PSAzO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUJvYXQgPSAoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gU2hpcCgyLCBvcmllbnRhdGlvbik7XG4gICAgc2hpcHMucGF0cm9sQm9hdC5uYW1lID0gcGF0cm9sQm9hdDtcblxuICAgIHNoaXBzLnBhdHJvbEJvYXQuY29vcmRpbmF0ZXMgPSBwbGFjZVNoaXAoMiwgb3JpZW50YXRpb24sIGNvb3JkaW5hdGUsIDkpO1xuXG4gICAgcmV0dXJuIHNoaXBzLnBhdHJvbEJvYXQuY29vcmRpbmF0ZXMubGVuZ3RoID09PSAyO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrQ29vcmRpbmF0ZSA9IChvYmosIHgsIHkpID0+IHtcbiAgICBpZiAob2JqLnggPT09IHggJiYgb2JqLnkgPT09IHkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tTaGlwID0gKGNvb3JkaW5hdGUsIHBsYXllcikgPT4ge1xuICAgIGxldCBkaXNwbGF5UGxheWVyO1xuXG4gICAgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJylkaXNwbGF5UGxheWVyID0gJ3BsYXllcic7XG4gICAgaWYgKHBsYXllciA9PT0gdW5kZWZpbmVkKSBkaXNwbGF5UGxheWVyID0gJ2NvbXB1dGVyJztcblxuICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzaGlwcy5jYXJyaWVyLmNvb3JkaW5hdGVzKSB7XG4gICAgICBzdGF0dXMgPSBjaGVja0Nvb3JkaW5hdGUoaXRlbSwgY29vcmRpbmF0ZS54LCBjb29yZGluYXRlLnkpO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICBzaGlwcy5jYXJyaWVyLm5hbWUuaXNIaXQoKTtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykgbWFya1NoaXAoY29vcmRpbmF0ZSk7XG4gICAgICAgIHNoaXBzLmNhcnJpZXIuc3Vua1N0YXR1cyA9IHNoaXBzLmNhcnJpZXIubmFtZS5pc1N1bmsoKTtcbiAgICAgICAgaWYgKHNoaXBzLmNhcnJpZXIuc3Vua1N0YXR1cykge1xuICAgICAgICAgIGJyb2FkY2FzdFN1bmtTaGlwKCdjYXJyaWVyJywgZGlzcGxheVBsYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2hpcHMuYmF0dGxlc2hpcC5jb29yZGluYXRlcykge1xuICAgICAgc3RhdHVzID0gY2hlY2tDb29yZGluYXRlKGl0ZW0sIGNvb3JkaW5hdGUueCwgY29vcmRpbmF0ZS55KTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgc2hpcHMuYmF0dGxlc2hpcC5uYW1lLmlzSGl0KCk7XG4gICAgICAgIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIG1hcmtTaGlwKGNvb3JkaW5hdGUpO1xuICAgICAgICBzaGlwcy5iYXR0bGVzaGlwLnN1bmtTdGF0dXMgPSBzaGlwcy5iYXR0bGVzaGlwLm5hbWUuaXNTdW5rKCk7XG4gICAgICAgIGlmIChzaGlwcy5iYXR0bGVzaGlwLnN1bmtTdGF0dXMpIHtcbiAgICAgICAgICBicm9hZGNhc3RTdW5rU2hpcCgnYmF0dGxlc2hpcCcsIGRpc3BsYXlQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNoaXBzLmRlc3Ryb3llci5jb29yZGluYXRlcykge1xuICAgICAgc3RhdHVzID0gY2hlY2tDb29yZGluYXRlKGl0ZW0sIGNvb3JkaW5hdGUueCwgY29vcmRpbmF0ZS55KTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgc2hpcHMuZGVzdHJveWVyLm5hbWUuaXNIaXQoKTtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykgbWFya1NoaXAoY29vcmRpbmF0ZSk7XG4gICAgICAgIHNoaXBzLmRlc3Ryb3llci5zdW5rU3RhdHVzID0gc2hpcHMuZGVzdHJveWVyLm5hbWUuaXNTdW5rKCk7XG4gICAgICAgIGlmIChzaGlwcy5kZXN0cm95ZXIuc3Vua1N0YXR1cykge1xuICAgICAgICAgIGJyb2FkY2FzdFN1bmtTaGlwKCdkZXN0cm95ZXInLCBkaXNwbGF5UGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzaGlwcy5zdWJtYXJpbmUuY29vcmRpbmF0ZXMpIHtcbiAgICAgIHN0YXR1cyA9IGNoZWNrQ29vcmRpbmF0ZShpdGVtLCBjb29yZGluYXRlLngsIGNvb3JkaW5hdGUueSk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHNoaXBzLnN1Ym1hcmluZS5uYW1lLmlzSGl0KCk7XG4gICAgICAgIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIG1hcmtTaGlwKGNvb3JkaW5hdGUpO1xuICAgICAgICBzaGlwcy5zdWJtYXJpbmUuc3Vua1N0YXR1cyA9IHNoaXBzLnN1Ym1hcmluZS5uYW1lLmlzU3VuaygpO1xuICAgICAgICBpZiAoc2hpcHMuc3VibWFyaW5lLnN1bmtTdGF0dXMpIHtcbiAgICAgICAgICBicm9hZGNhc3RTdW5rU2hpcCgnc3VibWFyaW5lJywgZGlzcGxheVBsYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2hpcHMucGF0cm9sQm9hdC5jb29yZGluYXRlcykge1xuICAgICAgc3RhdHVzID0gY2hlY2tDb29yZGluYXRlKGl0ZW0sIGNvb3JkaW5hdGUueCwgY29vcmRpbmF0ZS55KTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgc2hpcHMucGF0cm9sQm9hdC5uYW1lLmlzSGl0KCk7XG4gICAgICAgIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIG1hcmtTaGlwKGNvb3JkaW5hdGUpO1xuICAgICAgICBzaGlwcy5wYXRyb2xCb2F0LnN1bmtTdGF0dXMgPSBzaGlwcy5wYXRyb2xCb2F0Lm5hbWUuaXNTdW5rKCk7XG4gICAgICAgIGlmIChzaGlwcy5wYXRyb2xCb2F0LnN1bmtTdGF0dXMpIHtcbiAgICAgICAgICBicm9hZGNhc3RTdW5rU2hpcCgncGF0cm9sIGJvYXQnLCBkaXNwbGF5UGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIG1pc3NlZC5wdXNoKGNvb3JkaW5hdGUpO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSwgcGxheWVyKSA9PiB7XG4gICAgcGxheXMucHVzaChjb29yZGluYXRlKTtcbiAgICBjaGVja1NoaXAoY29vcmRpbmF0ZSwgcGxheWVyKTtcbiAgfTtcblxuICBjb25zdCBzaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKCFzaGlwcy5jYXJyaWVyLnN1bmtTdGF0dXMpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXNoaXBzLmJhdHRsZXNoaXAuc3Vua1N0YXR1cykgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghc2hpcHMuZGVzdHJveWVyLnN1bmtTdGF0dXMpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXNoaXBzLnN1Ym1hcmluZS5zdW5rU3RhdHVzKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFzaGlwcy5wYXRyb2xCb2F0LnN1bmtTdGF0dXMpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNoaXBzLFxuICAgIG1pc3NlZCxcbiAgICBwbGF5cyxcbiAgICBzaGlwc1BsYWNlZCxcbiAgICBjcmVhdGVDYXJyaWVyLFxuICAgIGNyZWF0ZUJhdHRsZXNoaXAsXG4gICAgY3JlYXRlRGVzdHJveWVyLFxuICAgIGNyZWF0ZVN1Ym1hcmluZSxcbiAgICBjcmVhdGVCb2F0LFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgc2hpcHNTdW5rLFxuICAgIGNoZWNrQ29vcmRpbmF0ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7XG4gIFNoaXAsXG4gIEdhbWVib2FyZCxcbiAgc2V0Q29vcmRpbmF0ZSxcbiAgZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcyxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcyB9IGZyb20gJy4vY2xhc3Nlcyc7XG5pbXBvcnQgeyBtYXJrUGxheSB9IGZyb20gJy4vZG9tLW1hbmlwdWxhdGlvbic7XG5cbmNvbnN0IGNvbXB1dGVyUGxheWVyID0gKHBsYXllckJvYXJkKSA9PiB7XG4gIGNvbnN0IGNvbXBQbGF5ID0gZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcygpO1xuXG4gIGNvbnN0IGNoZWNrTGVnYWwgPSAoYXJyYXksIGNvb3JkaW5hdGUpID0+IHtcbiAgICBpZiAoYXJyYXkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnJheSkge1xuICAgICAgaWYgKGl0ZW0ueCA9PT0gY29vcmRpbmF0ZS54ICYmIGl0ZW0ueSA9PT0gY29vcmRpbmF0ZS55KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgbGVnYWxNb3ZlID0gY2hlY2tMZWdhbChwbGF5ZXJCb2FyZC5wbGF5cywgY29tcFBsYXkpO1xuXG4gIGlmICghbGVnYWxNb3ZlKSB7XG4gICAgY29tcHV0ZXJQbGF5ZXIocGxheWVyQm9hcmQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soY29tcFBsYXkpO1xuICBtYXJrUGxheShjb21wUGxheSwgJ2NvbXB1dGVyJyk7XG59O1xuXG5leHBvcnQge1xuICBjb21wdXRlclBsYXllcixcbn07XG4iLCJpbXBvcnQgeyBzZXRDb29yZGluYXRlIH0gZnJvbSAnLi9jbGFzc2VzJztcblxuY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLWJvYXJkJyk7XG5jb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyLWJvYXJkJyk7XG5jb25zdCBkaXNwbGF5U2hpcE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcC1uYW1lJyk7XG5jb25zdCBvcmllbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcmllbnRhdGlvbicpO1xuY29uc3QgZ2FtZVdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLXdpbm5lcicpO1xuY29uc3Qgcm91bmRXaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm91bmQtd2lubmVyJyk7XG5jb25zdCBpbnN0dXJjdGlvbnNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5zdCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50KCkge1xuICByZXR1cm4gb3JpZW50YXRpb24udmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbnN0cnVjdGlvbihzdHJpbmcpIHtcbiAgaWYgKHN0cmluZyA9PT0gJycpIHtcbiAgICBkaXNwbGF5U2hpcE5hbWUudGV4dENvbnRlbnQgPSAnJztcbiAgICBkaXNwbGF5U2hpcE5hbWUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgaW5zdHVyY3Rpb25zRGl2LnRleHRDb250ZW50ID0gJ1BsYXkgR2FtZSEnO1xuICAgIHJldHVybjtcbiAgfVxuICBkaXNwbGF5U2hpcE5hbWUudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciAke3N0cmluZ31gO1xuICBkaXNwbGF5U2hpcE5hbWUuZGF0YXNldC5zaGlwID0gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdHJ1Y3Rpb24oKSB7XG4gIHJldHVybiBkaXNwbGF5U2hpcE5hbWUuZGF0YXNldC5zaGlwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmlzaWJpbGl0eSgpIHtcbiAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gZmluZFNoaXBOb2RlcyhvYmplY3QsIGFycmF5KSB7XG4gIGNvbnN0IG5vZGUgPSBhcnJheS5maW5kKChvYmopID0+IHtcbiAgICBjb25zdCBjb2QgPSBKU09OLnBhcnNlKG9iai5kYXRhc2V0LmNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBjb2QueCA9PT0gb2JqZWN0LnggJiYgY29kLnkgPT09IG9iamVjdC55O1xuICB9KTtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclBsYXllckJvYXJkKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93cycpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZGF0YSA9IHNldENvb3JkaW5hdGUoaSwgaik7XG4gICAgICBjZWxsLmRhdGFzZXQuY29vcmRpbmF0ZXMgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgIGNlbGwuZGF0YXNldC53aG8gPSAncGxheWVyJztcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb21wQm9hcmQoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3dzJyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBkYXRhID0gc2V0Q29vcmRpbmF0ZShpLCBqKTtcbiAgICAgIGNlbGwuZGF0YXNldC5jb29yZGluYXRlcyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgY2VsbC5kYXRhc2V0LndobyA9ICdjb21wdXRlcic7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaGlwKGJvYXJkKSB7XG4gIGNvbnN0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllci1ib2FyZCAuY2VsbCcpO1xuICBjb25zdCBjZWxsc0FycmF5ID0gQXJyYXkuZnJvbShwbGF5ZXJDZWxscyk7XG4gIGJvYXJkLnNoaXBzUGxhY2VkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBub2RlID0gZmluZFNoaXBOb2RlcyhpdGVtLCBjZWxsc0FycmF5KTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgfSk7XG59XG4vLyBkZWxldGUgdGhpcyBiZWxvdyBmdW5jdGlvbiBhZnRlciB0ZXN0aW5nXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29tcFNoaXBzKGJvYXJkKSB7XG4gIGNvbnN0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbXB1dGVyLWJvYXJkIC5jZWxsJyk7XG4gIGNvbnN0IGNlbGxzQXJyYXkgPSBBcnJheS5mcm9tKHBsYXllckNlbGxzKTtcbiAgYm9hcmQuc2hpcHNQbGFjZWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBmaW5kU2hpcE5vZGVzKGl0ZW0sIGNlbGxzQXJyYXkpO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtQbGF5KGNvb3JkaW5hdGUsIHBsYXllcikge1xuICBpZiAocGxheWVyID09PSAncGxheWVyJykge1xuICAgIGNvbnN0IGNvbXB1dGVyQ2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb21wdXRlci1ib2FyZCAuY2VsbCcpKTtcbiAgICBjb25zdCBub2RlID0gY29tcHV0ZXJDZWxscy5maW5kKChvYmopID0+IHtcbiAgICAgIGNvbnN0IGNvZCA9IEpTT04ucGFyc2Uob2JqLmRhdGFzZXQuY29vcmRpbmF0ZXMpO1xuICAgICAgcmV0dXJuIGNvZC54ID09PSBjb29yZGluYXRlLnggJiYgY29kLnkgPT09IGNvb3JkaW5hdGUueTtcbiAgICB9KTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ21hcmsnKTtcbiAgfVxuICBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgY29uc3QgcGxheWVyQ2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXItYm9hcmQgLmNlbGwnKSk7XG4gICAgY29uc3Qgbm9kZSA9IHBsYXllckNlbGxzLmZpbmQoKG9iaikgPT4ge1xuICAgICAgY29uc3QgY29kID0gSlNPTi5wYXJzZShvYmouZGF0YXNldC5jb29yZGluYXRlcyk7XG4gICAgICByZXR1cm4gY29kLnggPT09IGNvb3JkaW5hdGUueCAmJiBjb2QueSA9PT0gY29vcmRpbmF0ZS55O1xuICAgIH0pO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbWFyaycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrU2hpcChjb29yZGluYXRlKSB7XG4gIGNvbnN0IGNvbXB1dGVyQ2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb21wdXRlci1ib2FyZCAuY2VsbCcpKTtcbiAgY29uc3Qgbm9kZSA9IGNvbXB1dGVyQ2VsbHMuZmluZCgob2JqKSA9PiB7XG4gICAgY29uc3QgY29kID0gSlNPTi5wYXJzZShvYmouZGF0YXNldC5jb29yZGluYXRlcyk7XG4gICAgcmV0dXJuIGNvZC54ID09PSBjb29yZGluYXRlLnggJiYgY29kLnkgPT09IGNvb3JkaW5hdGUueTtcbiAgfSk7XG4gIG5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJvYWRjYXN0U3Vua1NoaXAobmFtZSwgcGxheWVyKSB7XG4gIHJvdW5kV2lubmVyLnRleHRDb250ZW50ID0gYCR7cGxheWVyfSBoYXMgc3VuayBlbmVteSdzICR7bmFtZX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0d2lubmVyRGlzcGxheSgpIHtcbiAgcmV0dXJuIHtcbiAgICBnYW1lV2lubmVyLFxuICAgIHJvdW5kV2lubmVyLFxuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCB7IEdhbWVib2FyZCwgZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcyB9IGZyb20gJy4vY2xhc3Nlcyc7XG5pbXBvcnQgeyBjb21wdXRlclBsYXllciB9IGZyb20gJy4vY29tcHV0ZXItcGxheWVyJztcbmltcG9ydCB7XG4gIHJlbmRlclNoaXAsXG4gIG1hcmtQbGF5LFxuICBnZXRJbnN0cnVjdGlvbixcbiAgZ2V0T3JpZW50LFxuICBzZXRJbnN0cnVjdGlvbixcbiAgZ2V0d2lubmVyRGlzcGxheSxcbiAgcmVuZGVyQ29tcFNoaXBzLFxufSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24nO1xuXG5sZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG5jb25zdCB3aW5uZXJEaXNwbGF5ID0gZ2V0d2lubmVyRGlzcGxheSgpO1xuXG5sZXQgcGxhY2VtZW50Q291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGJyb2FkY2FzdFdpbm5lcih3aG8pIHtcbiAgd2lubmVyRGlzcGxheS5nYW1lV2lubmVyLnRleHRDb250ZW50ID0gYCR7d2hvfSB3aW5zIHRoZSBnYW1lYDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlSW5maW5pdGVMb29wKCkge1xuICBhbGVydCgnT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmchXFxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSEnKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwcyhzaGlwLCBjb29yZGluYXRlLCBvcmllbnQpIHtcbiAgc3dpdGNoIChzaGlwKSB7XG4gICAgY2FzZSAnQ2Fycmllcic6XG4gICAgICBpZiAoIXBsYXllckJvYXJkLmNyZWF0ZUNhcnJpZXIoY29vcmRpbmF0ZSwgb3JpZW50KSkgcmV0dXJuO1xuICAgICAgcGxhY2VtZW50Q291bnRlcisrO1xuICAgICAgc2V0SW5zdHJ1Y3Rpb24oJ0JhdHRsZXNoaXAnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0JhdHRsZXNoaXAnOlxuICAgICAgaWYgKCFwbGF5ZXJCb2FyZC5jcmVhdGVCYXR0bGVzaGlwKGNvb3JkaW5hdGUsIG9yaWVudCkpIHJldHVybjtcbiAgICAgIHBsYWNlbWVudENvdW50ZXIrKztcbiAgICAgIHNldEluc3RydWN0aW9uKCdEZXN0cm95ZXInKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Rlc3Ryb3llcic6XG4gICAgICBpZiAoIXBsYXllckJvYXJkLmNyZWF0ZURlc3Ryb3llcihjb29yZGluYXRlLCBvcmllbnQpKSByZXR1cm47XG4gICAgICBwbGFjZW1lbnRDb3VudGVyKys7XG4gICAgICBzZXRJbnN0cnVjdGlvbignU3VibWFyaW5lJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdTdWJtYXJpbmUnOlxuICAgICAgaWYgKCFwbGF5ZXJCb2FyZC5jcmVhdGVTdWJtYXJpbmUoY29vcmRpbmF0ZSwgb3JpZW50KSkgcmV0dXJuO1xuICAgICAgcGxhY2VtZW50Q291bnRlcisrO1xuICAgICAgc2V0SW5zdHJ1Y3Rpb24oJ1BhdHJvbCBCb2F0Jyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQYXRyb2wgQm9hdCc6XG4gICAgICBpZiAoIXBsYXllckJvYXJkLmNyZWF0ZUJvYXQoY29vcmRpbmF0ZSwgb3JpZW50KSkgcmV0dXJuO1xuICAgICAgcGxhY2VtZW50Q291bnRlcisrO1xuICAgICAgc2V0SW5zdHJ1Y3Rpb24oJycpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHNldEluc3RydWN0aW9uKCdDYXJyaWVyJyk7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwQ29udHJvbGxlcihldmVudCkge1xuICBjb25zdCBjb29yZGluYXRlID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQuZGF0YXNldC5jb29yZGluYXRlcyk7XG4gIGNvbnN0IHNoaXAgPSBnZXRJbnN0cnVjdGlvbigpO1xuICBwbGFjZVNoaXBzKHNoaXAsIGNvb3JkaW5hdGUsIGdldE9yaWVudCgpKTtcbiAgcmVuZGVyU2hpcChwbGF5ZXJCb2FyZCk7XG59XG5sZXQgY291bnRlciA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWF0ZUdhbWUoKSB7XG4gIGxldCBzaGlwUGxhY2VtZW50ID0gbnVsbDtcbiAgaWYgKGNvbXB1dGVyQm9hcmQuc2hpcHMuY2Fycmllci5jb29yZGluYXRlcy5sZW5ndGggIT09IDUpIHtcbiAgICBzaGlwUGxhY2VtZW50ID0gY29tcHV0ZXJCb2FyZC5jcmVhdGVDYXJyaWVyKGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMoKSwgJ2hvcml6b250YWwnKTtcbiAgICBpZiAoIXNoaXBQbGFjZW1lbnQpIHtcbiAgICAgIGlmIChjb3VudGVyID4gMTAwMCkge1xuICAgICAgICBoYW5kbGVJbmZpbml0ZUxvb3AoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY291bnRlcisrO1xuICAgICAgaW5pdGlhdGVHYW1lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmIChjb21wdXRlckJvYXJkLnNoaXBzLmJhdHRsZXNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgc2hpcFBsYWNlbWVudCA9IGNvbXB1dGVyQm9hcmQuY3JlYXRlQmF0dGxlc2hpcChnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksICd2ZXJ0aWNhbCcpO1xuICAgIGlmICghc2hpcFBsYWNlbWVudCkge1xuICAgICAgaWYgKGNvdW50ZXIgPiAyMDAwKSB7XG4gICAgICAgIGhhbmRsZUluZmluaXRlTG9vcCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb3VudGVyKys7XG4gICAgICBpbml0aWF0ZUdhbWUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbXB1dGVyQm9hcmQuc2hpcHMuZGVzdHJveWVyLmNvb3JkaW5hdGVzLmxlbmd0aCAhPT0gMykge1xuICAgIHNoaXBQbGFjZW1lbnQgPSBjb21wdXRlckJvYXJkLmNyZWF0ZURlc3Ryb3llcihnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksICdob3Jpem9udGFsJyk7XG4gICAgaWYgKCFzaGlwUGxhY2VtZW50KSB7XG4gICAgICBpZiAoY291bnRlciA+IDMwMDApIHtcbiAgICAgICAgaGFuZGxlSW5maW5pdGVMb29wKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIGluaXRpYXRlR2FtZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoY29tcHV0ZXJCb2FyZC5zaGlwcy5zdWJtYXJpbmUuY29vcmRpbmF0ZXMubGVuZ3RoICE9PSAzKSB7XG4gICAgc2hpcFBsYWNlbWVudCA9IGNvbXB1dGVyQm9hcmQuY3JlYXRlU3VibWFyaW5lKGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMoKSwgJ3ZlcnRpY2FsJyk7XG4gICAgaWYgKCFzaGlwUGxhY2VtZW50KSB7XG4gICAgICBpZiAoY291bnRlciA+IDQwMDApIHtcbiAgICAgICAgaGFuZGxlSW5maW5pdGVMb29wKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIGluaXRpYXRlR2FtZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoY29tcHV0ZXJCb2FyZC5zaGlwcy5wYXRyb2xCb2F0LmNvb3JkaW5hdGVzLmxlbmd0aCAhPT0gMikge1xuICAgIHNoaXBQbGFjZW1lbnQgPSBjb21wdXRlckJvYXJkLmNyZWF0ZUJvYXQoZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcygpLCAnaG9yaXpvbnRhbCcpO1xuICAgIGlmICghc2hpcFBsYWNlbWVudCkge1xuICAgICAgaWYgKGNvdW50ZXIgPiA1MDAwKSB7XG4gICAgICAgIGhhbmRsZUluZmluaXRlTG9vcCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb3VudGVyKys7XG4gICAgICBpbml0aWF0ZUdhbWUoKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyQ29tcFNoaXBzKGNvbXB1dGVyQm9hcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheVJvdW5kKGNvb3JkaW5hdGUsIGJvYXJkKSB7XG4gIGlmIChnYW1lT3ZlcikgcmV0dXJuO1xuXG4gIGxldCBjdXJyZW50UGxheTtcblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29tcHV0ZXJCb2FyZC5wbGF5cykge1xuICAgIGN1cnJlbnRQbGF5ID0gY29tcHV0ZXJCb2FyZC5jaGVja0Nvb3JkaW5hdGUoaXRlbSwgY29vcmRpbmF0ZS54LCBjb29yZGluYXRlLnkpO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRQbGF5KSByZXR1cm47XG5cbiAgY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUsIGJvYXJkKTtcbiAgbWFya1BsYXkoY29vcmRpbmF0ZSwgJ3BsYXllcicpO1xuXG4gIGlmIChjb21wdXRlckJvYXJkLnNoaXBzU3VuaygpKSB7XG4gICAgYnJvYWRjYXN0V2lubmVyKCdQbGF5ZXInKTtcbiAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbXB1dGVyUGxheWVyKHBsYXllckJvYXJkKTtcbiAgICBpZiAocGxheWVyQm9hcmQuc2hpcHNTdW5rKCkpIHtcbiAgICAgIGJyb2FkY2FzdFdpbm5lcignQ29tcHV0ZXInKTtcbiAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH0sIDUwMCk7XG59XG5cbmV4cG9ydCB7IHBsYWNlbWVudENvdW50ZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7XG4gIGNoYW5nZVZpc2liaWxpdHksXG4gIHJlbmRlclBsYXllckJvYXJkLFxuICByZW5kZXJDb21wQm9hcmQsXG4gIHNldEluc3RydWN0aW9uLFxufSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24nO1xuXG5pbXBvcnQge1xuICBpbml0aWF0ZUdhbWUsXG4gIHBsYWNlU2hpcENvbnRyb2xsZXIsXG4gIHBsYXlSb3VuZCxcbiAgcGxhY2VtZW50Q291bnRlcixcbn0gZnJvbSAnLi9nYW1lcGxheSc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5zZXRJbnN0cnVjdGlvbignQ2FycmllcicpO1xuXG5yZW5kZXJQbGF5ZXJCb2FyZCgpO1xucmVuZGVyQ29tcEJvYXJkKCk7XG5cbmNvbnN0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllci1ib2FyZCAuY2VsbCcpO1xuXG5wbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwQ29udHJvbGxlcikpO1xuXG5wbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAocGxhY2VtZW50Q291bnRlciA+IDQpIHtcbiAgICBwbGF5ZXJDZWxscy5mb3JFYWNoKCh0aGluZykgPT4gdGhpbmcucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXBDb250cm9sbGVyKSk7XG4gIH1cbn0pKTtcblxuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQnKTtcblxuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChwbGFjZW1lbnRDb3VudGVyIDwgNSkgcmV0dXJuO1xuICBjaGFuZ2VWaXNpYmlsaXR5KCk7XG4gIGluaXRpYXRlR2FtZSgpO1xuICBwbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwQ29udHJvbGxlcikpO1xufSk7XG5cbmNvbnN0IGNvbXBDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb21wdXRlci1ib2FyZCAuY2VsbCcpO1xuXG5jb21wQ2VsbHMuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBKU09OLnBhcnNlKGUudGFyZ2V0LmRhdGFzZXQuY29vcmRpbmF0ZXMpO1xuICBjb25zdCBib2FyZCA9IGUudGFyZ2V0LmRhdGFzZXQud2hvO1xuICBwbGF5Um91bmQoY29vcmRpbmF0ZSwgYm9hcmQpO1xufSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9