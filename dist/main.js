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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\n#boards {\n    display: flex;\n    gap: 100px;\n}\n\n#player-board {\n    width: 400px;\n    height: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n#computer-board {\n    width: 400px;\n    height: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n#place-ships {\n    width: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.cell {\n    height: 50px;\n    border: 1px solid black;\n}\n\n#computer-board .cell:hover {\n    background-color: aquamarine;\n}\n\n\n#place-ships .cell:hover {\n    background-color: aquamarine;\n}\n\n.ship {\n    background-color: gray;\n}\n\n.mark {\n    background-color: red;\n}\n\n.hidden {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,YAAY;;IAEZ,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,4BAA4B;AAChC;;;AAGA;IACI,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\n#boards {\n    display: flex;\n    gap: 100px;\n}\n\n#player-board {\n    width: 400px;\n    height: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n#computer-board {\n    width: 400px;\n    height: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n#place-ships {\n    width: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.cell {\n    height: 50px;\n    border: 1px solid black;\n}\n\n#computer-board .cell:hover {\n    background-color: aquamarine;\n}\n\n\n#place-ships .cell:hover {\n    background-color: aquamarine;\n}\n\n.ship {\n    background-color: gray;\n}\n\n.mark {\n    background-color: red;\n}\n\n.hidden {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
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
  console.log(obj1, obj2);
  console.log(obj1 === obj2);
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

          for (const item of shipsPlaced) {
            console.log('reached');
            const status = compareCoods(item, currentCoordinate);
            console.log(status);
            if (!status) {
              tempArr.push(currentCoordinate);
            }
          }
        }
      } else {
        for (let i = 0; i <= len - 1; i++) {
          const currentCoordinate = { x: coordinate.x - i, y: coordinate.y };
          for (const item of shipsPlaced) {
            if (!compareCoods(item, currentCoordinate)) {
              tempArr.push(currentCoordinate);
            }
          }
        }
      }
    } else if (orientation === 'vertical') {
      if (coordinate.y < max) {
        for (let i = 0; i <= len - 1; i++) {
          const currentCoordinate = { x: coordinate.x, y: coordinate.y + i };
          for (const item of shipsPlaced) {
            if (!compareCoods(item, currentCoordinate)) {
              tempArr.push(currentCoordinate);
            }
          }
        }
      } else {
        for (let i = 0; i <= len - 1; i++) {
          const currentCoordinate = { x: coordinate.x, y: coordinate.y - i };
          for (const item of shipsPlaced) {
            if (!compareCoods(item, currentCoordinate)) {
              tempArr.push(currentCoordinate);
            }
          }
        }
      }
    }

    if (tempArr.length !== len) return [];

    tempArr.forEach((item) => shipsPlaced.push(item));
    return tempArr;
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

  const checkShip = (coordinate) => {
    let status = false;

    for (const item of ships.carrier.coordinates) {
      status = checkCoordinate(item, coordinate.x, coordinate.y);
      if (status) {
        ships.carrier.name.isHit();
        ships.carrier.sunkStatus = ships.carrier.name.isSunk();
        return;
      }
    }
    for (const item of ships.battleship.coordinates) {
      status = checkCoordinate(item, coordinate.x, coordinate.y);
      if (status) {
        ships.battleship.name.isHit();
        ships.battleship.sunkStatus = ships.battleship.name.isSunk();
        return;
      }
    }
    for (const item of ships.destroyer.coordinates) {
      status = checkCoordinate(item, coordinate.x, coordinate.y);
      if (status) {
        ships.destroyer.name.isHit();
        ships.destroyer.sunkStatus = ships.destroyer.name.isSunk();
        return;
      }
    }
    for (const item of ships.submarine.coordinates) {
      status = checkCoordinate(item, coordinate.x, coordinate.y);
      if (status) {
        ships.submarine.name.isHit();
        ships.submarine.sunkStatus = ships.submarine.name.isSunk();
        return;
      }
    }
    for (const item of ships.patrolBoat.coordinates) {
      status = checkCoordinate(item, coordinate.x, coordinate.y);
      if (status) {
        ships.patrolBoat.name.isHit();
        ships.patrolBoat.sunkStatus = ships.patrolBoat.name.isSunk();
        return;
      }
    }
    missed.push(coordinate);
  };

  const receiveAttack = (coordinate) => {
    plays.push(coordinate);
    checkShip(coordinate);
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
    console.log('illegal', compPlay);
    computerPlayer(playerBoard);
    return;
  }

  console.log(compPlay);
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
/* harmony export */   "changeVisibility": () => (/* binding */ changeVisibility),
/* harmony export */   "getInstruction": () => (/* binding */ getInstruction),
/* harmony export */   "getOrient": () => (/* binding */ getOrient),
/* harmony export */   "getwinnerDisplay": () => (/* binding */ getwinnerDisplay),
/* harmony export */   "markPlay": () => (/* binding */ markPlay),
/* harmony export */   "renderCompBoard": () => (/* binding */ renderCompBoard),
/* harmony export */   "renderPlaceShipsBoard": () => (/* binding */ renderPlaceShipsBoard),
/* harmony export */   "renderPlayerBoard": () => (/* binding */ renderPlayerBoard),
/* harmony export */   "renderShip": () => (/* binding */ renderShip),
/* harmony export */   "setInstruction": () => (/* binding */ setInstruction)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");


const playerBoard = document.querySelector('#player-board');
const computerBoard = document.querySelector('#computer-board');
const placeShipsBoard = document.querySelector('#place-ships');
const displayShipName = document.querySelector('#ship-name');
const orientation = document.querySelector('#orientation');
const gameWinner = document.querySelector('#game-winner');
const roundWinner = document.querySelector('#round-winner');

function getOrient() {
  return orientation.value;
}

function setInstruction(string) {
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
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    playerBoard.appendChild(row);
  }
}

function renderPlaceShipsBoard() {
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.classList.add('rows');
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      const data = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setCoordinate)(i, j);
      cell.dataset.coordinates = JSON.stringify(data);
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    placeShipsBoard.appendChild(row);
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
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    computerBoard.appendChild(row);
  }
}

function renderShip(board) {
  const playerCells = document.querySelectorAll('#player-board .cell');
  const cellsArray = Array.from(playerCells);
  console.log(board.shipsPlaced);
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
  console.log(
    playerBoard.ships.carrier.sunkStatus,
    playerBoard.ships.battleship.sunkStatus,
    playerBoard.ships.destroyer.sunkStatus,
    playerBoard.ships.submarine.sunkStatus,
    playerBoard.ships.patrolBoat.sunkStatus,
  );
  console.log(
    computerBoard.ships.carrier.sunkStatus,
    computerBoard.ships.battleship.sunkStatus,
    computerBoard.ships.destroyer.sunkStatus,
    computerBoard.ships.submarine.sunkStatus,
    computerBoard.ships.patrolBoat.sunkStatus,
  );
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

function initiateGame() {
  if (!computerBoard.createCarrier((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'horizontal')) {
    initiateGame();
  }
  if (!computerBoard.createBattleship((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'vertical')) {
    initiateGame();
  }
  if (!computerBoard.createDestroyer((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'horizontal')) {
    initiateGame();
  }
  if (!computerBoard.createSubmarine((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'vertical')) {
    initiateGame();
  }
  if (!computerBoard.createBoat((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'horizontal')) {
    initiateGame();
  }
}

function playRound(coordinate) {
  if (gameOver) return;

  let currentPlay;

  for (const item of computerBoard.plays) {
    currentPlay = computerBoard.checkCoordinate(item, coordinate.x, coordinate.y);
  }

  if (currentPlay) return;

  computerBoard.receiveAttack(coordinate);
  console.log(computerBoard.plays.length);
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.markPlay)(coordinate, 'player');

  if (computerBoard.shipsSunk()) {
    broadcastWinner('Player');
    gameOver = true;
    return;
  }
  (0,_computer_player__WEBPACK_IMPORTED_MODULE_1__.computerPlayer)(playerBoard);
  console.log(playerBoard.plays.length);
  if (playerBoard.shipsSunk()) {
    broadcastWinner('Computer');
    gameOver = true;
  }
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
  if (_gameplay__WEBPACK_IMPORTED_MODULE_1__.placementCounter > 3) {
    playerCells.forEach((thing) => thing.removeEventListener('click', _gameplay__WEBPACK_IMPORTED_MODULE_1__.placeShipController));
  }
}));

const startBtn = document.querySelector('#start');

startBtn.addEventListener('click', () => {
  console.log(_gameplay__WEBPACK_IMPORTED_MODULE_1__.placementCounter);
  if (_gameplay__WEBPACK_IMPORTED_MODULE_1__.placementCounter < 5) return;
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.changeVisibility)();
  (0,_gameplay__WEBPACK_IMPORTED_MODULE_1__.initiateGame)();
  playerCells.forEach((cell) => cell.removeEventListener('click', _gameplay__WEBPACK_IMPORTED_MODULE_1__.placeShipController));
});

const compCells = document.querySelectorAll('#computer-board .cell');

compCells.forEach((node) => node.addEventListener('click', (e) => {
  const coordinate = JSON.parse(e.target.dataset.coordinates);
  (0,_gameplay__WEBPACK_IMPORTED_MODULE_1__.playRound)(coordinate);
}));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQixHQUFHLGFBQWEsb0JBQW9CLGlCQUFpQixHQUFHLG1CQUFtQixtQkFBbUIsb0JBQW9CLHNCQUFzQiw2Q0FBNkMsR0FBRyxxQkFBcUIsbUJBQW1CLG9CQUFvQixzQkFBc0IsNkNBQTZDLEdBQUcsa0JBQWtCLG1CQUFtQixzQkFBc0IsNkNBQTZDLEdBQUcsV0FBVyxtQkFBbUIsOEJBQThCLEdBQUcsaUNBQWlDLG1DQUFtQyxHQUFHLGdDQUFnQyxtQ0FBbUMsR0FBRyxXQUFXLDZCQUE2QixHQUFHLFdBQVcsNEJBQTRCLEdBQUcsYUFBYSx5QkFBeUIsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLDZCQUE2QixnQkFBZ0IsaUJBQWlCLEdBQUcsZ0JBQWdCLG1CQUFtQixrQkFBa0IsR0FBRyxhQUFhLG9CQUFvQixpQkFBaUIsR0FBRyxtQkFBbUIsbUJBQW1CLG9CQUFvQixzQkFBc0IsNkNBQTZDLEdBQUcscUJBQXFCLG1CQUFtQixvQkFBb0Isc0JBQXNCLDZDQUE2QyxHQUFHLGtCQUFrQixtQkFBbUIsc0JBQXNCLDZDQUE2QyxHQUFHLFdBQVcsbUJBQW1CLDhCQUE4QixHQUFHLGlDQUFpQyxtQ0FBbUMsR0FBRyxnQ0FBZ0MsbUNBQW1DLEdBQUcsV0FBVyw2QkFBNkIsR0FBRyxXQUFXLDRCQUE0QixHQUFHLGFBQWEseUJBQXlCLEdBQUcsbUJBQW1CO0FBQzNzRTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxnREFBZ0Q7QUFDL0Qsa0JBQWtCLGdEQUFnRDtBQUNsRSxpQkFBaUIsZ0RBQWdEO0FBQ2pFLGlCQUFpQixnREFBZ0Q7QUFDakUsa0JBQWtCLGdEQUFnRDtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QyxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUix3QkFBd0IsY0FBYztBQUN0QyxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSx3QkFBd0IsY0FBYztBQUN0QyxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHdCQUF3QixjQUFjO0FBQ3RDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNLNEI7O0FBT1I7O0FBRUM7O0FBRXJCLGlFQUFjOztBQUVkLG9FQUFpQjtBQUNqQixrRUFBZTs7QUFFZjs7QUFFQSw2REFBNkQsMERBQW1COztBQUVoRjtBQUNBLE1BQU0sdURBQWdCO0FBQ3RCLHNFQUFzRSwwREFBbUI7QUFDekY7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0EsY0FBYyx1REFBZ0I7QUFDOUIsTUFBTSx1REFBZ0I7QUFDdEIsRUFBRSxtRUFBZ0I7QUFDbEIsRUFBRSx1REFBWTtBQUNkLGtFQUFrRSwwREFBbUI7QUFDckYsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxvREFBUztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXB1dGVyLXBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuI2NvbXB1dGVyLWJvYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuI3BsYWNlLXNoaXBzIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29tcHV0ZXItYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG5cXG4jcGxhY2Utc2hpcHMgLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5tYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhOztJQUViLGFBQWE7SUFDYixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxZQUFZOztJQUVaLGFBQWE7SUFDYixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOzs7QUFHQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2JvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4jY29tcHV0ZXItYm9hcmQge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4jcGxhY2Utc2hpcHMge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNjb21wdXRlci1ib2FyZCAuY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcblxcbiNwbGFjZS1zaGlwcyAuY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLm1hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmNvbnN0IFNoaXAgPSAobGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICBsZXQgaHAgPSBsZW5ndGg7XG5cbiAgY29uc3QgZ2V0T3JpZW50YXRpb24gPSAoKSA9PiBvcmllbnRhdGlvbjtcblxuICBjb25zdCBnZXRIUCA9ICgpID0+IGhwO1xuXG4gIGNvbnN0IGlzSGl0ID0gKCkgPT4ge1xuICAgIGhwIC09IDE7XG4gICAgcmV0dXJuIGhwO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IChocCA8PSAwKTtcblxuICByZXR1cm4ge1xuICAgIGdldEhQLFxuICAgIGdldE9yaWVudGF0aW9uLFxuICAgIGlzSGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIHNldENvb3JkaW5hdGUoYSwgYikge1xuICByZXR1cm4ge1xuICAgIHg6IGEsXG4gICAgeTogYixcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcygpIHtcbiAgY29uc3QgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgY29uc3QgYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgcmV0dXJuIHNldENvb3JkaW5hdGUoYSwgYik7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVDb29kcyhjb2QxLCBjb2QyKSB7XG4gIGNvbnN0IG9iajEgPSBKU09OLnN0cmluZ2lmeShjb2QxKTtcbiAgY29uc3Qgb2JqMiA9IEpTT04uc3RyaW5naWZ5KGNvZDIpO1xuICBjb25zb2xlLmxvZyhvYmoxLCBvYmoyKTtcbiAgY29uc29sZS5sb2cob2JqMSA9PT0gb2JqMik7XG4gIHJldHVybiBvYmoxID09PSBvYmoyO1xufVxuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IHsgbmFtZTogbnVsbCwgY29vcmRpbmF0ZXM6IFtdLCBzdW5rU3RhdHVzOiBmYWxzZSB9LFxuICAgIGJhdHRsZXNoaXA6IHsgbmFtZTogbnVsbCwgY29vcmRpbmF0ZXM6IFtdLCBzdW5rU3RhdHVzOiBmYWxzZSB9LFxuICAgIGRlc3Ryb3llcjogeyBuYW1lOiBudWxsLCBjb29yZGluYXRlczogW10sIHN1bmtTdGF0dXM6IGZhbHNlIH0sXG4gICAgc3VibWFyaW5lOiB7IG5hbWU6IG51bGwsIGNvb3JkaW5hdGVzOiBbXSwgc3Vua1N0YXR1czogZmFsc2UgfSxcbiAgICBwYXRyb2xCb2F0OiB7IG5hbWU6IG51bGwsIGNvb3JkaW5hdGVzOiBbXSwgc3Vua1N0YXR1czogZmFsc2UgfSxcbiAgfTtcbiAgY29uc3QgbWlzc2VkID0gW107XG4gIGNvbnN0IHBsYXlzID0gW107XG4gIGNvbnN0IHNoaXBzUGxhY2VkID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGxlbiwgb3JpZW50YXRpb24sIGNvb3JkaW5hdGUsIG1heCkgPT4ge1xuICAgIGNvbnN0IHRlbXBBcnIgPSBbXTtcblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoY29vcmRpbmF0ZS54IDwgbWF4KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbiAtIDE7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb29yZGluYXRlID0geyB4OiBjb29yZGluYXRlLnggKyBpLCB5OiBjb29yZGluYXRlLnkgfTtcblxuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzaGlwc1BsYWNlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWNoZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGNvbXBhcmVDb29kcyhpdGVtLCBjdXJyZW50Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMpO1xuICAgICAgICAgICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgICAgICAgICAgdGVtcEFyci5wdXNoKGN1cnJlbnRDb29yZGluYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbiAtIDE7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb29yZGluYXRlID0geyB4OiBjb29yZGluYXRlLnggLSBpLCB5OiBjb29yZGluYXRlLnkgfTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2hpcHNQbGFjZWQpIHtcbiAgICAgICAgICAgIGlmICghY29tcGFyZUNvb2RzKGl0ZW0sIGN1cnJlbnRDb29yZGluYXRlKSkge1xuICAgICAgICAgICAgICB0ZW1wQXJyLnB1c2goY3VycmVudENvb3JkaW5hdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmIChjb29yZGluYXRlLnkgPCBtYXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudENvb3JkaW5hdGUgPSB7IHg6IGNvb3JkaW5hdGUueCwgeTogY29vcmRpbmF0ZS55ICsgaSB9O1xuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzaGlwc1BsYWNlZCkge1xuICAgICAgICAgICAgaWYgKCFjb21wYXJlQ29vZHMoaXRlbSwgY3VycmVudENvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICAgIHRlbXBBcnIucHVzaChjdXJyZW50Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW4gLSAxOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q29vcmRpbmF0ZSA9IHsgeDogY29vcmRpbmF0ZS54LCB5OiBjb29yZGluYXRlLnkgLSBpIH07XG4gICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNoaXBzUGxhY2VkKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXBhcmVDb29kcyhpdGVtLCBjdXJyZW50Q29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICAgICAgdGVtcEFyci5wdXNoKGN1cnJlbnRDb29yZGluYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVtcEFyci5sZW5ndGggIT09IGxlbikgcmV0dXJuIFtdO1xuXG4gICAgdGVtcEFyci5mb3JFYWNoKChpdGVtKSA9PiBzaGlwc1BsYWNlZC5wdXNoKGl0ZW0pKTtcbiAgICByZXR1cm4gdGVtcEFycjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVDYXJyaWVyID0gKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgb3JpZW50YXRpb24pO1xuICAgIHNoaXBzLmNhcnJpZXIubmFtZSA9IGNhcnJpZXI7XG5cbiAgICBzaGlwcy5jYXJyaWVyLmNvb3JkaW5hdGVzID0gcGxhY2VTaGlwKDUsIG9yaWVudGF0aW9uLCBjb29yZGluYXRlLCA2KTtcblxuICAgIHJldHVybiBzaGlwcy5jYXJyaWVyLmNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gNTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCYXR0bGVzaGlwID0gKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCwgb3JpZW50YXRpb24pO1xuICAgIHNoaXBzLmJhdHRsZXNoaXAubmFtZSA9IGJhdHRsZXNoaXA7XG5cbiAgICBzaGlwcy5iYXR0bGVzaGlwLmNvb3JkaW5hdGVzID0gcGxhY2VTaGlwKDQsIG9yaWVudGF0aW9uLCBjb29yZGluYXRlLCA3KTtcblxuICAgIHJldHVybiBzaGlwcy5iYXR0bGVzaGlwLmNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gNDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVEZXN0cm95ZXIgPSAoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDMsIG9yaWVudGF0aW9uKTtcbiAgICBzaGlwcy5kZXN0cm95ZXIubmFtZSA9IGRlc3Ryb3llcjtcblxuICAgIHNoaXBzLmRlc3Ryb3llci5jb29yZGluYXRlcyA9IHBsYWNlU2hpcCgzLCBvcmllbnRhdGlvbiwgY29vcmRpbmF0ZSwgOCk7XG5cbiAgICByZXR1cm4gc2hpcHMuZGVzdHJveWVyLmNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMztcbiAgfTtcblxuICBjb25zdCBjcmVhdGVTdWJtYXJpbmUgPSAoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKDMsIG9yaWVudGF0aW9uKTtcbiAgICBzaGlwcy5zdWJtYXJpbmUubmFtZSA9IHN1Ym1hcmluZTtcblxuICAgIHNoaXBzLnN1Ym1hcmluZS5jb29yZGluYXRlcyA9IHBsYWNlU2hpcCgzLCBvcmllbnRhdGlvbiwgY29vcmRpbmF0ZSwgOCk7XG5cbiAgICByZXR1cm4gc2hpcHMuc3VibWFyaW5lLmNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMztcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCb2F0ID0gKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3QgcGF0cm9sQm9hdCA9IFNoaXAoMiwgb3JpZW50YXRpb24pO1xuICAgIHNoaXBzLnBhdHJvbEJvYXQubmFtZSA9IHBhdHJvbEJvYXQ7XG5cbiAgICBzaGlwcy5wYXRyb2xCb2F0LmNvb3JkaW5hdGVzID0gcGxhY2VTaGlwKDIsIG9yaWVudGF0aW9uLCBjb29yZGluYXRlLCA5KTtcblxuICAgIHJldHVybiBzaGlwcy5wYXRyb2xCb2F0LmNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMjtcbiAgfTtcblxuICBjb25zdCBjaGVja0Nvb3JkaW5hdGUgPSAob2JqLCB4LCB5KSA9PiB7XG4gICAgaWYgKG9iai54ID09PSB4ICYmIG9iai55ID09PSB5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrU2hpcCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNoaXBzLmNhcnJpZXIuY29vcmRpbmF0ZXMpIHtcbiAgICAgIHN0YXR1cyA9IGNoZWNrQ29vcmRpbmF0ZShpdGVtLCBjb29yZGluYXRlLngsIGNvb3JkaW5hdGUueSk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHNoaXBzLmNhcnJpZXIubmFtZS5pc0hpdCgpO1xuICAgICAgICBzaGlwcy5jYXJyaWVyLnN1bmtTdGF0dXMgPSBzaGlwcy5jYXJyaWVyLm5hbWUuaXNTdW5rKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNoaXBzLmJhdHRsZXNoaXAuY29vcmRpbmF0ZXMpIHtcbiAgICAgIHN0YXR1cyA9IGNoZWNrQ29vcmRpbmF0ZShpdGVtLCBjb29yZGluYXRlLngsIGNvb3JkaW5hdGUueSk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHNoaXBzLmJhdHRsZXNoaXAubmFtZS5pc0hpdCgpO1xuICAgICAgICBzaGlwcy5iYXR0bGVzaGlwLnN1bmtTdGF0dXMgPSBzaGlwcy5iYXR0bGVzaGlwLm5hbWUuaXNTdW5rKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNoaXBzLmRlc3Ryb3llci5jb29yZGluYXRlcykge1xuICAgICAgc3RhdHVzID0gY2hlY2tDb29yZGluYXRlKGl0ZW0sIGNvb3JkaW5hdGUueCwgY29vcmRpbmF0ZS55KTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgc2hpcHMuZGVzdHJveWVyLm5hbWUuaXNIaXQoKTtcbiAgICAgICAgc2hpcHMuZGVzdHJveWVyLnN1bmtTdGF0dXMgPSBzaGlwcy5kZXN0cm95ZXIubmFtZS5pc1N1bmsoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2hpcHMuc3VibWFyaW5lLmNvb3JkaW5hdGVzKSB7XG4gICAgICBzdGF0dXMgPSBjaGVja0Nvb3JkaW5hdGUoaXRlbSwgY29vcmRpbmF0ZS54LCBjb29yZGluYXRlLnkpO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICBzaGlwcy5zdWJtYXJpbmUubmFtZS5pc0hpdCgpO1xuICAgICAgICBzaGlwcy5zdWJtYXJpbmUuc3Vua1N0YXR1cyA9IHNoaXBzLnN1Ym1hcmluZS5uYW1lLmlzU3VuaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzaGlwcy5wYXRyb2xCb2F0LmNvb3JkaW5hdGVzKSB7XG4gICAgICBzdGF0dXMgPSBjaGVja0Nvb3JkaW5hdGUoaXRlbSwgY29vcmRpbmF0ZS54LCBjb29yZGluYXRlLnkpO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICBzaGlwcy5wYXRyb2xCb2F0Lm5hbWUuaXNIaXQoKTtcbiAgICAgICAgc2hpcHMucGF0cm9sQm9hdC5zdW5rU3RhdHVzID0gc2hpcHMucGF0cm9sQm9hdC5uYW1lLmlzU3VuaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIG1pc3NlZC5wdXNoKGNvb3JkaW5hdGUpO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIHBsYXlzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgY2hlY2tTaGlwKGNvb3JkaW5hdGUpO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoIXNoaXBzLmNhcnJpZXIuc3Vua1N0YXR1cykgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghc2hpcHMuYmF0dGxlc2hpcC5zdW5rU3RhdHVzKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFzaGlwcy5kZXN0cm95ZXIuc3Vua1N0YXR1cykgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghc2hpcHMuc3VibWFyaW5lLnN1bmtTdGF0dXMpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXNoaXBzLnBhdHJvbEJvYXQuc3Vua1N0YXR1cykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2hpcHMsXG4gICAgbWlzc2VkLFxuICAgIHBsYXlzLFxuICAgIHNoaXBzUGxhY2VkLFxuICAgIGNyZWF0ZUNhcnJpZXIsXG4gICAgY3JlYXRlQmF0dGxlc2hpcCxcbiAgICBjcmVhdGVEZXN0cm95ZXIsXG4gICAgY3JlYXRlU3VibWFyaW5lLFxuICAgIGNyZWF0ZUJvYXQsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBzaGlwc1N1bmssXG4gICAgY2hlY2tDb29yZGluYXRlLFxuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgU2hpcCxcbiAgR2FtZWJvYXJkLFxuICBzZXRDb29yZGluYXRlLFxuICBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzIH0gZnJvbSAnLi9jbGFzc2VzJztcbmltcG9ydCB7IG1hcmtQbGF5IH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcblxuY29uc3QgY29tcHV0ZXJQbGF5ZXIgPSAocGxheWVyQm9hcmQpID0+IHtcbiAgY29uc3QgY29tcFBsYXkgPSBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCk7XG5cbiAgY29uc3QgY2hlY2tMZWdhbCA9IChhcnJheSwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmIChhcnJheSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFycmF5KSB7XG4gICAgICBpZiAoaXRlbS54ID09PSBjb29yZGluYXRlLnggJiYgaXRlbS55ID09PSBjb29yZGluYXRlLnkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBsZWdhbE1vdmUgPSBjaGVja0xlZ2FsKHBsYXllckJvYXJkLnBsYXlzLCBjb21wUGxheSk7XG5cbiAgaWYgKCFsZWdhbE1vdmUpIHtcbiAgICBjb25zb2xlLmxvZygnaWxsZWdhbCcsIGNvbXBQbGF5KTtcbiAgICBjb21wdXRlclBsYXllcihwbGF5ZXJCb2FyZCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc29sZS5sb2coY29tcFBsYXkpO1xuICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGNvbXBQbGF5KTtcbiAgbWFya1BsYXkoY29tcFBsYXksICdjb21wdXRlcicpO1xufTtcblxuZXhwb3J0IHtcbiAgY29tcHV0ZXJQbGF5ZXIsXG59O1xuIiwiaW1wb3J0IHsgc2V0Q29vcmRpbmF0ZSB9IGZyb20gJy4vY2xhc3Nlcyc7XG5cbmNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci1ib2FyZCcpO1xuY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wdXRlci1ib2FyZCcpO1xuY29uc3QgcGxhY2VTaGlwc0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLXNoaXBzJyk7XG5jb25zdCBkaXNwbGF5U2hpcE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcC1uYW1lJyk7XG5jb25zdCBvcmllbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcmllbnRhdGlvbicpO1xuY29uc3QgZ2FtZVdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLXdpbm5lcicpO1xuY29uc3Qgcm91bmRXaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm91bmQtd2lubmVyJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmllbnQoKSB7XG4gIHJldHVybiBvcmllbnRhdGlvbi52YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEluc3RydWN0aW9uKHN0cmluZykge1xuICBkaXNwbGF5U2hpcE5hbWUudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciAke3N0cmluZ31gO1xuICBkaXNwbGF5U2hpcE5hbWUuZGF0YXNldC5zaGlwID0gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdHJ1Y3Rpb24oKSB7XG4gIHJldHVybiBkaXNwbGF5U2hpcE5hbWUuZGF0YXNldC5zaGlwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmlzaWJpbGl0eSgpIHtcbiAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gZmluZFNoaXBOb2RlcyhvYmplY3QsIGFycmF5KSB7XG4gIGNvbnN0IG5vZGUgPSBhcnJheS5maW5kKChvYmopID0+IHtcbiAgICBjb25zdCBjb2QgPSBKU09OLnBhcnNlKG9iai5kYXRhc2V0LmNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBjb2QueCA9PT0gb2JqZWN0LnggJiYgY29kLnkgPT09IG9iamVjdC55O1xuICB9KTtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclBsYXllckJvYXJkKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93cycpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZGF0YSA9IHNldENvb3JkaW5hdGUoaSwgaik7XG4gICAgICBjZWxsLmRhdGFzZXQuY29vcmRpbmF0ZXMgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQbGFjZVNoaXBzQm9hcmQoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3dzJyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBkYXRhID0gc2V0Q29vcmRpbmF0ZShpLCBqKTtcbiAgICAgIGNlbGwuZGF0YXNldC5jb29yZGluYXRlcyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICAgIHBsYWNlU2hpcHNCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb21wQm9hcmQoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3dzJyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBkYXRhID0gc2V0Q29vcmRpbmF0ZShpLCBqKTtcbiAgICAgIGNlbGwuZGF0YXNldC5jb29yZGluYXRlcyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2hpcChib2FyZCkge1xuICBjb25zdCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXItYm9hcmQgLmNlbGwnKTtcbiAgY29uc3QgY2VsbHNBcnJheSA9IEFycmF5LmZyb20ocGxheWVyQ2VsbHMpO1xuICBjb25zb2xlLmxvZyhib2FyZC5zaGlwc1BsYWNlZCk7XG4gIGJvYXJkLnNoaXBzUGxhY2VkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBub2RlID0gZmluZFNoaXBOb2RlcyhpdGVtLCBjZWxsc0FycmF5KTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrUGxheShjb29yZGluYXRlLCBwbGF5ZXIpIHtcbiAgaWYgKHBsYXllciA9PT0gJ3BsYXllcicpIHtcbiAgICBjb25zdCBjb21wdXRlckNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29tcHV0ZXItYm9hcmQgLmNlbGwnKSk7XG4gICAgY29uc3Qgbm9kZSA9IGNvbXB1dGVyQ2VsbHMuZmluZCgob2JqKSA9PiB7XG4gICAgICBjb25zdCBjb2QgPSBKU09OLnBhcnNlKG9iai5kYXRhc2V0LmNvb3JkaW5hdGVzKTtcbiAgICAgIHJldHVybiBjb2QueCA9PT0gY29vcmRpbmF0ZS54ICYmIGNvZC55ID09PSBjb29yZGluYXRlLnk7XG4gICAgfSk7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdtYXJrJyk7XG4gIH1cbiAgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykge1xuICAgIGNvbnN0IHBsYXllckNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyLWJvYXJkIC5jZWxsJykpO1xuICAgIGNvbnN0IG5vZGUgPSBwbGF5ZXJDZWxscy5maW5kKChvYmopID0+IHtcbiAgICAgIGNvbnN0IGNvZCA9IEpTT04ucGFyc2Uob2JqLmRhdGFzZXQuY29vcmRpbmF0ZXMpO1xuICAgICAgcmV0dXJuIGNvZC54ID09PSBjb29yZGluYXRlLnggJiYgY29kLnkgPT09IGNvb3JkaW5hdGUueTtcbiAgICB9KTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ21hcmsnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0d2lubmVyRGlzcGxheSgpIHtcbiAgcmV0dXJuIHtcbiAgICBnYW1lV2lubmVyLFxuICAgIHJvdW5kV2lubmVyLFxuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCB7IEdhbWVib2FyZCwgZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcyB9IGZyb20gJy4vY2xhc3Nlcyc7XG5pbXBvcnQgeyBjb21wdXRlclBsYXllciB9IGZyb20gJy4vY29tcHV0ZXItcGxheWVyJztcbmltcG9ydCB7XG4gIHJlbmRlclNoaXAsXG4gIG1hcmtQbGF5LFxuICBnZXRJbnN0cnVjdGlvbixcbiAgZ2V0T3JpZW50LFxuICBzZXRJbnN0cnVjdGlvbixcbiAgZ2V0d2lubmVyRGlzcGxheSxcbn0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcblxubGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbmNvbnN0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuY29uc3Qgd2lubmVyRGlzcGxheSA9IGdldHdpbm5lckRpc3BsYXkoKTtcblxubGV0IHBsYWNlbWVudENvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBicm9hZGNhc3RXaW5uZXIod2hvKSB7XG4gIHdpbm5lckRpc3BsYXkuZ2FtZVdpbm5lci50ZXh0Q29udGVudCA9IGAke3dob30gd2lucyB0aGUgZ2FtZWA7XG4gIGNvbnNvbGUubG9nKFxuICAgIHBsYXllckJvYXJkLnNoaXBzLmNhcnJpZXIuc3Vua1N0YXR1cyxcbiAgICBwbGF5ZXJCb2FyZC5zaGlwcy5iYXR0bGVzaGlwLnN1bmtTdGF0dXMsXG4gICAgcGxheWVyQm9hcmQuc2hpcHMuZGVzdHJveWVyLnN1bmtTdGF0dXMsXG4gICAgcGxheWVyQm9hcmQuc2hpcHMuc3VibWFyaW5lLnN1bmtTdGF0dXMsXG4gICAgcGxheWVyQm9hcmQuc2hpcHMucGF0cm9sQm9hdC5zdW5rU3RhdHVzLFxuICApO1xuICBjb25zb2xlLmxvZyhcbiAgICBjb21wdXRlckJvYXJkLnNoaXBzLmNhcnJpZXIuc3Vua1N0YXR1cyxcbiAgICBjb21wdXRlckJvYXJkLnNoaXBzLmJhdHRsZXNoaXAuc3Vua1N0YXR1cyxcbiAgICBjb21wdXRlckJvYXJkLnNoaXBzLmRlc3Ryb3llci5zdW5rU3RhdHVzLFxuICAgIGNvbXB1dGVyQm9hcmQuc2hpcHMuc3VibWFyaW5lLnN1bmtTdGF0dXMsXG4gICAgY29tcHV0ZXJCb2FyZC5zaGlwcy5wYXRyb2xCb2F0LnN1bmtTdGF0dXMsXG4gICk7XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHMoc2hpcCwgY29vcmRpbmF0ZSwgb3JpZW50KSB7XG4gIHN3aXRjaCAoc2hpcCkge1xuICAgIGNhc2UgJ0NhcnJpZXInOlxuICAgICAgaWYgKCFwbGF5ZXJCb2FyZC5jcmVhdGVDYXJyaWVyKGNvb3JkaW5hdGUsIG9yaWVudCkpIHJldHVybjtcbiAgICAgIHBsYWNlbWVudENvdW50ZXIrKztcbiAgICAgIHNldEluc3RydWN0aW9uKCdCYXR0bGVzaGlwJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdCYXR0bGVzaGlwJzpcbiAgICAgIGlmICghcGxheWVyQm9hcmQuY3JlYXRlQmF0dGxlc2hpcChjb29yZGluYXRlLCBvcmllbnQpKSByZXR1cm47XG4gICAgICBwbGFjZW1lbnRDb3VudGVyKys7XG4gICAgICBzZXRJbnN0cnVjdGlvbignRGVzdHJveWVyJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdEZXN0cm95ZXInOlxuICAgICAgaWYgKCFwbGF5ZXJCb2FyZC5jcmVhdGVEZXN0cm95ZXIoY29vcmRpbmF0ZSwgb3JpZW50KSkgcmV0dXJuO1xuICAgICAgcGxhY2VtZW50Q291bnRlcisrO1xuICAgICAgc2V0SW5zdHJ1Y3Rpb24oJ1N1Ym1hcmluZScpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnU3VibWFyaW5lJzpcbiAgICAgIGlmICghcGxheWVyQm9hcmQuY3JlYXRlU3VibWFyaW5lKGNvb3JkaW5hdGUsIG9yaWVudCkpIHJldHVybjtcbiAgICAgIHBsYWNlbWVudENvdW50ZXIrKztcbiAgICAgIHNldEluc3RydWN0aW9uKCdQYXRyb2wgQm9hdCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUGF0cm9sIEJvYXQnOlxuICAgICAgaWYgKCFwbGF5ZXJCb2FyZC5jcmVhdGVCb2F0KGNvb3JkaW5hdGUsIG9yaWVudCkpIHJldHVybjtcbiAgICAgIHBsYWNlbWVudENvdW50ZXIrKztcbiAgICAgIHNldEluc3RydWN0aW9uKCcnKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzZXRJbnN0cnVjdGlvbignQ2FycmllcicpO1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcENvbnRyb2xsZXIoZXZlbnQpIHtcbiAgY29uc3QgY29vcmRpbmF0ZSA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29vcmRpbmF0ZXMpO1xuICBjb25zdCBzaGlwID0gZ2V0SW5zdHJ1Y3Rpb24oKTtcbiAgcGxhY2VTaGlwcyhzaGlwLCBjb29yZGluYXRlLCBnZXRPcmllbnQoKSk7XG4gIHJlbmRlclNoaXAocGxheWVyQm9hcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhdGVHYW1lKCkge1xuICBpZiAoIWNvbXB1dGVyQm9hcmQuY3JlYXRlQ2FycmllcihnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksICdob3Jpem9udGFsJykpIHtcbiAgICBpbml0aWF0ZUdhbWUoKTtcbiAgfVxuICBpZiAoIWNvbXB1dGVyQm9hcmQuY3JlYXRlQmF0dGxlc2hpcChnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksICd2ZXJ0aWNhbCcpKSB7XG4gICAgaW5pdGlhdGVHYW1lKCk7XG4gIH1cbiAgaWYgKCFjb21wdXRlckJvYXJkLmNyZWF0ZURlc3Ryb3llcihnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksICdob3Jpem9udGFsJykpIHtcbiAgICBpbml0aWF0ZUdhbWUoKTtcbiAgfVxuICBpZiAoIWNvbXB1dGVyQm9hcmQuY3JlYXRlU3VibWFyaW5lKGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMoKSwgJ3ZlcnRpY2FsJykpIHtcbiAgICBpbml0aWF0ZUdhbWUoKTtcbiAgfVxuICBpZiAoIWNvbXB1dGVyQm9hcmQuY3JlYXRlQm9hdChnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksICdob3Jpem9udGFsJykpIHtcbiAgICBpbml0aWF0ZUdhbWUoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheVJvdW5kKGNvb3JkaW5hdGUpIHtcbiAgaWYgKGdhbWVPdmVyKSByZXR1cm47XG5cbiAgbGV0IGN1cnJlbnRQbGF5O1xuXG4gIGZvciAoY29uc3QgaXRlbSBvZiBjb21wdXRlckJvYXJkLnBsYXlzKSB7XG4gICAgY3VycmVudFBsYXkgPSBjb21wdXRlckJvYXJkLmNoZWNrQ29vcmRpbmF0ZShpdGVtLCBjb29yZGluYXRlLngsIGNvb3JkaW5hdGUueSk7XG4gIH1cblxuICBpZiAoY3VycmVudFBsYXkpIHJldHVybjtcblxuICBjb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQucGxheXMubGVuZ3RoKTtcbiAgbWFya1BsYXkoY29vcmRpbmF0ZSwgJ3BsYXllcicpO1xuXG4gIGlmIChjb21wdXRlckJvYXJkLnNoaXBzU3VuaygpKSB7XG4gICAgYnJvYWRjYXN0V2lubmVyKCdQbGF5ZXInKTtcbiAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXB1dGVyUGxheWVyKHBsYXllckJvYXJkKTtcbiAgY29uc29sZS5sb2cocGxheWVyQm9hcmQucGxheXMubGVuZ3RoKTtcbiAgaWYgKHBsYXllckJvYXJkLnNoaXBzU3VuaygpKSB7XG4gICAgYnJvYWRjYXN0V2lubmVyKCdDb21wdXRlcicpO1xuICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgeyBwbGFjZW1lbnRDb3VudGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBjaGFuZ2VWaXNpYmlsaXR5LFxuICByZW5kZXJQbGF5ZXJCb2FyZCxcbiAgcmVuZGVyQ29tcEJvYXJkLFxuICBzZXRJbnN0cnVjdGlvbixcbn0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcblxuaW1wb3J0IHtcbiAgaW5pdGlhdGVHYW1lLFxuICBwbGFjZVNoaXBDb250cm9sbGVyLFxuICBwbGF5Um91bmQsXG4gIHBsYWNlbWVudENvdW50ZXIsXG59IGZyb20gJy4vZ2FtZXBsYXknO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuc2V0SW5zdHJ1Y3Rpb24oJ0NhcnJpZXInKTtcblxucmVuZGVyUGxheWVyQm9hcmQoKTtcbnJlbmRlckNvbXBCb2FyZCgpO1xuXG5jb25zdCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXItYm9hcmQgLmNlbGwnKTtcblxucGxheWVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlU2hpcENvbnRyb2xsZXIpKTtcblxucGxheWVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKHBsYWNlbWVudENvdW50ZXIgPiAzKSB7XG4gICAgcGxheWVyQ2VsbHMuZm9yRWFjaCgodGhpbmcpID0+IHRoaW5nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwQ29udHJvbGxlcikpO1xuICB9XG59KSk7XG5cbmNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0Jyk7XG5cbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhwbGFjZW1lbnRDb3VudGVyKTtcbiAgaWYgKHBsYWNlbWVudENvdW50ZXIgPCA1KSByZXR1cm47XG4gIGNoYW5nZVZpc2liaWxpdHkoKTtcbiAgaW5pdGlhdGVHYW1lKCk7XG4gIHBsYXllckNlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXBDb250cm9sbGVyKSk7XG59KTtcblxuY29uc3QgY29tcENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbXB1dGVyLWJvYXJkIC5jZWxsJyk7XG5cbmNvbXBDZWxscy5mb3JFYWNoKChub2RlKSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgY29vcmRpbmF0ZSA9IEpTT04ucGFyc2UoZS50YXJnZXQuZGF0YXNldC5jb29yZGluYXRlcyk7XG4gIHBsYXlSb3VuZChjb29yZGluYXRlKTtcbn0pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==