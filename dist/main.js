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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\n#boards {\n    display: flex;\n    gap: 100px;\n}\n\n#player-board {\n    width: 400px;\n    height: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n#computer-board {\n    width: 400px;\n    height: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.cell {\n    height: 50px;\n    border: 1px solid black;\n}\n\n#computer-board .cell:hover {\n    background-color: aquamarine;\n}\n\n.ship {\n    background-color: gray;\n}\n\n.mark {\n    background-color: red;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\n#boards {\n    display: flex;\n    gap: 100px;\n}\n\n#player-board {\n    width: 400px;\n    height: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n#computer-board {\n    width: 400px;\n    height: 400px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.cell {\n    height: 50px;\n    border: 1px solid black;\n}\n\n#computer-board .cell:hover {\n    background-color: aquamarine;\n}\n\n.ship {\n    background-color: gray;\n}\n\n.mark {\n    background-color: red;\n}"],"sourceRoot":""}]);
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

  const placeShip = (len, orientation, coordinate, max, vessel) => {
    if (orientation === 'horizontal') {
      if (coordinate.x < max) {
        for (let i = 0; i <= len - 1; i++) {
          // eslint-disable-next-line no-param-reassign
          vessel[i] = { x: coordinate.x + i, y: coordinate.y };
          shipsPlaced.push({ x: coordinate.x + i, y: coordinate.y });
        }
      } else {
        for (let i = 0; i <= len - 1; i++) {
          // eslint-disable-next-line no-param-reassign
          vessel[i] = { x: coordinate.x - i, y: coordinate.y };
          shipsPlaced.push({ x: coordinate.x - i, y: coordinate.y });
        }
      }
    } else if (orientation === 'vertical') {
      if (coordinate.y < max) {
        for (let i = 0; i <= len - 1; i++) {
          // eslint-disable-next-line no-param-reassign
          vessel[i] = { x: coordinate.x, y: coordinate.y + i };
          shipsPlaced.push({ x: coordinate.x, y: coordinate.y + i });
        }
      } else {
        for (let i = 0; i <= len - 1; i++) {
          // eslint-disable-next-line no-param-reassign
          vessel[i] = { x: coordinate.x, y: coordinate.y - i };
          shipsPlaced.push({ x: coordinate.x, y: coordinate.y - i });
        }
      }
    }
  };

  const createCarrier = (coordinate, orientation) => {
    const carrier = Ship(5, orientation);
    ships.carrier.name = carrier;

    placeShip(5, orientation, coordinate, 6, ships.carrier.coordinates);
  };

  const createBattleship = (coordinate, orientation) => {
    const battleship = Ship(4, orientation);
    ships.battleship.name = battleship;

    placeShip(4, orientation, coordinate, 7, ships.battleship.coordinates);
  };

  const createDestroyer = (coordinate, orientation) => {
    const destroyer = Ship(3, orientation);
    ships.destroyer.name = destroyer;

    placeShip(3, orientation, coordinate, 8, ships.destroyer.coordinates);
  };

  const createSubmarine = (coordinate, orientation) => {
    const submarine = Ship(3, orientation);
    ships.submarine.name = submarine;

    placeShip(3, orientation, coordinate, 8, ships.submarine.coordinates);
  };

  const createBoat = (coordinate, orientation) => {
    const patrolBoat = Ship(2, orientation);
    ships.patrolBoat.name = patrolBoat;

    placeShip(2, orientation, coordinate, 9, ships.patrolBoat.coordinates);
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
    const currentPlay = plays.forEach((item) => checkCoordinate(item, coordinate.x, coordinate.y));
    console.log(currentPlay);
    if (currentPlay) {
      console.log('true');
    } else {
      plays.push(coordinate);
      checkShip(coordinate);
    }
  };

  const shipsSunk = () => {
    if (!ships.carrier.sunkStatus) return false;
    if (!ships.battleship.sunkStatus) return false;
    if (!ships.destroyer.sunkStatus) return false;
    if (!ships.submarine.sunkStatus) return false;
    if (!ships.patrolBoat.sunkStatus) return false;
    console.log('you win the game');
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




/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCompBoard": () => (/* binding */ renderCompBoard),
/* harmony export */   "renderPlayerBoard": () => (/* binding */ renderPlayerBoard),
/* harmony export */   "renderShip": () => (/* binding */ renderShip)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");


const playerBoard = document.querySelector('#player-board');
const computerBoard = document.querySelector('#computer-board');

function findShipNodes(object, array) {
  const node = array.find((obj) => {
    const cod = JSON.parse(obj.dataset.coordinates);

    return cod.x === object.x && cod.y === object.y;
  });
  node.classList.add('ship');
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

  board.shipsPlaced.forEach((item) => {
    findShipNodes(item, cellsArray);
  });
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
/* harmony export */   "playRound": () => (/* binding */ playRound)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");



(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.renderPlayerBoard)();
const playerBoard = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.renderCompBoard)();
const computerBoard = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

function initiateGame() {
  playerBoard.createCarrier((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'horizontal');
  playerBoard.createBattleship((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'vertical');
  playerBoard.createDestroyer((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'horizontal');
  playerBoard.createSubmarine((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'vertical');
  playerBoard.createBoat((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'horizontal');

  computerBoard.createCarrier((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'horizontal');
  computerBoard.createBattleship((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'vertical');
  computerBoard.createDestroyer((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'horizontal');
  computerBoard.createSubmarine((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'vertical');
  computerBoard.createBoat((0,_classes__WEBPACK_IMPORTED_MODULE_0__.generateRandomCoordinates)(), 'horizontal');

  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.renderShip)(playerBoard);
}

function playRound(coordinate) {
  computerBoard.receiveAttack(coordinate);
  console.log(computerBoard.plays);
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
/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameplay */ "./src/gameplay.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_gameplay__WEBPACK_IMPORTED_MODULE_0__.initiateGame)();

const compCells = document.querySelectorAll('#computer-board .cell');

compCells.forEach((node) => node.addEventListener('click', (e) => {
  const coordinate = JSON.parse(e.target.dataset.coordinates);
  (0,_gameplay__WEBPACK_IMPORTED_MODULE_0__.playRound)(coordinate);
  e.target.classList.add('mark');
}));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuI2NvbXB1dGVyLWJvYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29tcHV0ZXItYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5tYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhOztJQUViLGFBQWE7SUFDYixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuI3BsYXllci1ib2FyZCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbiNjb21wdXRlci1ib2FyZCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2NvbXB1dGVyLWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ubWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuY29uc3QgU2hpcCA9IChsZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gIGxldCBocCA9IGxlbmd0aDtcblxuICBjb25zdCBnZXRPcmllbnRhdGlvbiA9ICgpID0+IG9yaWVudGF0aW9uO1xuXG4gIGNvbnN0IGdldEhQID0gKCkgPT4gaHA7XG5cbiAgY29uc3QgaXNIaXQgPSAoKSA9PiB7XG4gICAgaHAgLT0gMTtcbiAgICByZXR1cm4gaHA7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gKGhwIDw9IDApO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0SFAsXG4gICAgZ2V0T3JpZW50YXRpb24sXG4gICAgaXNIaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBzaGlwcyA9IHtcbiAgICBjYXJyaWVyOiB7IG5hbWU6IG51bGwsIGNvb3JkaW5hdGVzOiBbXSwgc3Vua1N0YXR1czogZmFsc2UgfSxcbiAgICBiYXR0bGVzaGlwOiB7IG5hbWU6IG51bGwsIGNvb3JkaW5hdGVzOiBbXSwgc3Vua1N0YXR1czogZmFsc2UgfSxcbiAgICBkZXN0cm95ZXI6IHsgbmFtZTogbnVsbCwgY29vcmRpbmF0ZXM6IFtdLCBzdW5rU3RhdHVzOiBmYWxzZSB9LFxuICAgIHN1Ym1hcmluZTogeyBuYW1lOiBudWxsLCBjb29yZGluYXRlczogW10sIHN1bmtTdGF0dXM6IGZhbHNlIH0sXG4gICAgcGF0cm9sQm9hdDogeyBuYW1lOiBudWxsLCBjb29yZGluYXRlczogW10sIHN1bmtTdGF0dXM6IGZhbHNlIH0sXG4gIH07XG4gIGNvbnN0IG1pc3NlZCA9IFtdO1xuICBjb25zdCBwbGF5cyA9IFtdO1xuICBjb25zdCBzaGlwc1BsYWNlZCA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChsZW4sIG9yaWVudGF0aW9uLCBjb29yZGluYXRlLCBtYXgsIHZlc3NlbCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoY29vcmRpbmF0ZS54IDwgbWF4KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbiAtIDE7IGkrKykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIHZlc3NlbFtpXSA9IHsgeDogY29vcmRpbmF0ZS54ICsgaSwgeTogY29vcmRpbmF0ZS55IH07XG4gICAgICAgICAgc2hpcHNQbGFjZWQucHVzaCh7IHg6IGNvb3JkaW5hdGUueCArIGksIHk6IGNvb3JkaW5hdGUueSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgdmVzc2VsW2ldID0geyB4OiBjb29yZGluYXRlLnggLSBpLCB5OiBjb29yZGluYXRlLnkgfTtcbiAgICAgICAgICBzaGlwc1BsYWNlZC5wdXNoKHsgeDogY29vcmRpbmF0ZS54IC0gaSwgeTogY29vcmRpbmF0ZS55IH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKGNvb3JkaW5hdGUueSA8IG1heCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW4gLSAxOyBpKyspIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICB2ZXNzZWxbaV0gPSB7IHg6IGNvb3JkaW5hdGUueCwgeTogY29vcmRpbmF0ZS55ICsgaSB9O1xuICAgICAgICAgIHNoaXBzUGxhY2VkLnB1c2goeyB4OiBjb29yZGluYXRlLngsIHk6IGNvb3JkaW5hdGUueSArIGkgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbiAtIDE7IGkrKykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIHZlc3NlbFtpXSA9IHsgeDogY29vcmRpbmF0ZS54LCB5OiBjb29yZGluYXRlLnkgLSBpIH07XG4gICAgICAgICAgc2hpcHNQbGFjZWQucHVzaCh7IHg6IGNvb3JkaW5hdGUueCwgeTogY29vcmRpbmF0ZS55IC0gaSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVDYXJyaWVyID0gKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgb3JpZW50YXRpb24pO1xuICAgIHNoaXBzLmNhcnJpZXIubmFtZSA9IGNhcnJpZXI7XG5cbiAgICBwbGFjZVNoaXAoNSwgb3JpZW50YXRpb24sIGNvb3JkaW5hdGUsIDYsIHNoaXBzLmNhcnJpZXIuY29vcmRpbmF0ZXMpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUJhdHRsZXNoaXAgPSAoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCBvcmllbnRhdGlvbik7XG4gICAgc2hpcHMuYmF0dGxlc2hpcC5uYW1lID0gYmF0dGxlc2hpcDtcblxuICAgIHBsYWNlU2hpcCg0LCBvcmllbnRhdGlvbiwgY29vcmRpbmF0ZSwgNywgc2hpcHMuYmF0dGxlc2hpcC5jb29yZGluYXRlcyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRGVzdHJveWVyID0gKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgzLCBvcmllbnRhdGlvbik7XG4gICAgc2hpcHMuZGVzdHJveWVyLm5hbWUgPSBkZXN0cm95ZXI7XG5cbiAgICBwbGFjZVNoaXAoMywgb3JpZW50YXRpb24sIGNvb3JkaW5hdGUsIDgsIHNoaXBzLmRlc3Ryb3llci5jb29yZGluYXRlcyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU3VibWFyaW5lID0gKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCBvcmllbnRhdGlvbik7XG4gICAgc2hpcHMuc3VibWFyaW5lLm5hbWUgPSBzdWJtYXJpbmU7XG5cbiAgICBwbGFjZVNoaXAoMywgb3JpZW50YXRpb24sIGNvb3JkaW5hdGUsIDgsIHNoaXBzLnN1Ym1hcmluZS5jb29yZGluYXRlcyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQm9hdCA9IChjb29yZGluYXRlLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBTaGlwKDIsIG9yaWVudGF0aW9uKTtcbiAgICBzaGlwcy5wYXRyb2xCb2F0Lm5hbWUgPSBwYXRyb2xCb2F0O1xuXG4gICAgcGxhY2VTaGlwKDIsIG9yaWVudGF0aW9uLCBjb29yZGluYXRlLCA5LCBzaGlwcy5wYXRyb2xCb2F0LmNvb3JkaW5hdGVzKTtcbiAgfTtcblxuICBjb25zdCBjaGVja0Nvb3JkaW5hdGUgPSAob2JqLCB4LCB5KSA9PiB7XG4gICAgaWYgKG9iai54ID09PSB4ICYmIG9iai55ID09PSB5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrU2hpcCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNoaXBzLmNhcnJpZXIuY29vcmRpbmF0ZXMpIHtcbiAgICAgIHN0YXR1cyA9IGNoZWNrQ29vcmRpbmF0ZShpdGVtLCBjb29yZGluYXRlLngsIGNvb3JkaW5hdGUueSk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHNoaXBzLmNhcnJpZXIubmFtZS5pc0hpdCgpO1xuICAgICAgICBzaGlwcy5jYXJyaWVyLnN1bmtTdGF0dXMgPSBzaGlwcy5jYXJyaWVyLm5hbWUuaXNTdW5rKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNoaXBzLmJhdHRsZXNoaXAuY29vcmRpbmF0ZXMpIHtcbiAgICAgIHN0YXR1cyA9IGNoZWNrQ29vcmRpbmF0ZShpdGVtLCBjb29yZGluYXRlLngsIGNvb3JkaW5hdGUueSk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHNoaXBzLmJhdHRsZXNoaXAubmFtZS5pc0hpdCgpO1xuICAgICAgICBzaGlwcy5iYXR0bGVzaGlwLnN1bmtTdGF0dXMgPSBzaGlwcy5iYXR0bGVzaGlwLm5hbWUuaXNTdW5rKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNoaXBzLmRlc3Ryb3llci5jb29yZGluYXRlcykge1xuICAgICAgc3RhdHVzID0gY2hlY2tDb29yZGluYXRlKGl0ZW0sIGNvb3JkaW5hdGUueCwgY29vcmRpbmF0ZS55KTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgc2hpcHMuZGVzdHJveWVyLm5hbWUuaXNIaXQoKTtcbiAgICAgICAgc2hpcHMuZGVzdHJveWVyLnN1bmtTdGF0dXMgPSBzaGlwcy5kZXN0cm95ZXIubmFtZS5pc1N1bmsoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2hpcHMuc3VibWFyaW5lLmNvb3JkaW5hdGVzKSB7XG4gICAgICBzdGF0dXMgPSBjaGVja0Nvb3JkaW5hdGUoaXRlbSwgY29vcmRpbmF0ZS54LCBjb29yZGluYXRlLnkpO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICBzaGlwcy5zdWJtYXJpbmUubmFtZS5pc0hpdCgpO1xuICAgICAgICBzaGlwcy5zdWJtYXJpbmUuc3Vua1N0YXR1cyA9IHNoaXBzLnN1Ym1hcmluZS5uYW1lLmlzU3VuaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzaGlwcy5wYXRyb2xCb2F0LmNvb3JkaW5hdGVzKSB7XG4gICAgICBzdGF0dXMgPSBjaGVja0Nvb3JkaW5hdGUoaXRlbSwgY29vcmRpbmF0ZS54LCBjb29yZGluYXRlLnkpO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICBzaGlwcy5wYXRyb2xCb2F0Lm5hbWUuaXNIaXQoKTtcbiAgICAgICAgc2hpcHMucGF0cm9sQm9hdC5zdW5rU3RhdHVzID0gc2hpcHMucGF0cm9sQm9hdC5uYW1lLmlzU3VuaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIG1pc3NlZC5wdXNoKGNvb3JkaW5hdGUpO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQbGF5ID0gcGxheXMuZm9yRWFjaCgoaXRlbSkgPT4gY2hlY2tDb29yZGluYXRlKGl0ZW0sIGNvb3JkaW5hdGUueCwgY29vcmRpbmF0ZS55KSk7XG4gICAgY29uc29sZS5sb2coY3VycmVudFBsYXkpO1xuICAgIGlmIChjdXJyZW50UGxheSkge1xuICAgICAgY29uc29sZS5sb2coJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheXMucHVzaChjb29yZGluYXRlKTtcbiAgICAgIGNoZWNrU2hpcChjb29yZGluYXRlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGlmICghc2hpcHMuY2Fycmllci5zdW5rU3RhdHVzKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFzaGlwcy5iYXR0bGVzaGlwLnN1bmtTdGF0dXMpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXNoaXBzLmRlc3Ryb3llci5zdW5rU3RhdHVzKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFzaGlwcy5zdWJtYXJpbmUuc3Vua1N0YXR1cykgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghc2hpcHMucGF0cm9sQm9hdC5zdW5rU3RhdHVzKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc29sZS5sb2coJ3lvdSB3aW4gdGhlIGdhbWUnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNoaXBzLFxuICAgIG1pc3NlZCxcbiAgICBwbGF5cyxcbiAgICBzaGlwc1BsYWNlZCxcbiAgICBjcmVhdGVDYXJyaWVyLFxuICAgIGNyZWF0ZUJhdHRsZXNoaXAsXG4gICAgY3JlYXRlRGVzdHJveWVyLFxuICAgIGNyZWF0ZVN1Ym1hcmluZSxcbiAgICBjcmVhdGVCb2F0LFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgc2hpcHNTdW5rLFxuICB9O1xufTtcblxuZnVuY3Rpb24gc2V0Q29vcmRpbmF0ZShhLCBiKSB7XG4gIHJldHVybiB7XG4gICAgeDogYSxcbiAgICB5OiBiLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCkge1xuICBjb25zdCBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBjb25zdCBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICByZXR1cm4gc2V0Q29vcmRpbmF0ZShhLCBiKTtcbn1cblxuZXhwb3J0IHtcbiAgU2hpcCxcbiAgR2FtZWJvYXJkLFxuICBzZXRDb29yZGluYXRlLFxuICBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzLFxufTtcbiIsImltcG9ydCB7IHNldENvb3JkaW5hdGUgfSBmcm9tICcuL2NsYXNzZXMnO1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItYm9hcmQnKTtcbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXItYm9hcmQnKTtcblxuZnVuY3Rpb24gZmluZFNoaXBOb2RlcyhvYmplY3QsIGFycmF5KSB7XG4gIGNvbnN0IG5vZGUgPSBhcnJheS5maW5kKChvYmopID0+IHtcbiAgICBjb25zdCBjb2QgPSBKU09OLnBhcnNlKG9iai5kYXRhc2V0LmNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBjb2QueCA9PT0gb2JqZWN0LnggJiYgY29kLnkgPT09IG9iamVjdC55O1xuICB9KTtcbiAgbm9kZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQbGF5ZXJCb2FyZCgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3Jvd3MnKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBzZXRDb29yZGluYXRlKGksIGopO1xuICAgICAgY2VsbC5kYXRhc2V0LmNvb3JkaW5hdGVzID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29tcEJvYXJkKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93cycpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZGF0YSA9IHNldENvb3JkaW5hdGUoaSwgaik7XG4gICAgICBjZWxsLmRhdGFzZXQuY29vcmRpbmF0ZXMgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNoaXAoYm9hcmQpIHtcbiAgY29uc3QgcGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyLWJvYXJkIC5jZWxsJyk7XG4gIGNvbnN0IGNlbGxzQXJyYXkgPSBBcnJheS5mcm9tKHBsYXllckNlbGxzKTtcblxuICBib2FyZC5zaGlwc1BsYWNlZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgZmluZFNoaXBOb2RlcyhpdGVtLCBjZWxsc0FycmF5KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQsIGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMgfSBmcm9tICcuL2NsYXNzZXMnO1xuaW1wb3J0IHsgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlckNvbXBCb2FyZCwgcmVuZGVyU2hpcCB9IGZyb20gJy4vZG9tLW1hbmlwdWxhdGlvbic7XG5cbnJlbmRlclBsYXllckJvYXJkKCk7XG5jb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG5yZW5kZXJDb21wQm9hcmQoKTtcbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYXRlR2FtZSgpIHtcbiAgcGxheWVyQm9hcmQuY3JlYXRlQ2FycmllcihnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksICdob3Jpem9udGFsJyk7XG4gIHBsYXllckJvYXJkLmNyZWF0ZUJhdHRsZXNoaXAoZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcygpLCAndmVydGljYWwnKTtcbiAgcGxheWVyQm9hcmQuY3JlYXRlRGVzdHJveWVyKGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMoKSwgJ2hvcml6b250YWwnKTtcbiAgcGxheWVyQm9hcmQuY3JlYXRlU3VibWFyaW5lKGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMoKSwgJ3ZlcnRpY2FsJyk7XG4gIHBsYXllckJvYXJkLmNyZWF0ZUJvYXQoZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcygpLCAnaG9yaXpvbnRhbCcpO1xuXG4gIGNvbXB1dGVyQm9hcmQuY3JlYXRlQ2FycmllcihnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksICdob3Jpem9udGFsJyk7XG4gIGNvbXB1dGVyQm9hcmQuY3JlYXRlQmF0dGxlc2hpcChnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksICd2ZXJ0aWNhbCcpO1xuICBjb21wdXRlckJvYXJkLmNyZWF0ZURlc3Ryb3llcihnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksICdob3Jpem9udGFsJyk7XG4gIGNvbXB1dGVyQm9hcmQuY3JlYXRlU3VibWFyaW5lKGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMoKSwgJ3ZlcnRpY2FsJyk7XG4gIGNvbXB1dGVyQm9hcmQuY3JlYXRlQm9hdChnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCksICdob3Jpem9udGFsJyk7XG5cbiAgcmVuZGVyU2hpcChwbGF5ZXJCb2FyZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5Um91bmQoY29vcmRpbmF0ZSkge1xuICBjb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQucGxheXMpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdGlhdGVHYW1lLCBwbGF5Um91bmQgfSBmcm9tICcuL2dhbWVwbGF5JztcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRpYXRlR2FtZSgpO1xuXG5jb25zdCBjb21wQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29tcHV0ZXItYm9hcmQgLmNlbGwnKTtcblxuY29tcENlbGxzLmZvckVhY2goKG5vZGUpID0+IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCBjb29yZGluYXRlID0gSlNPTi5wYXJzZShlLnRhcmdldC5kYXRhc2V0LmNvb3JkaW5hdGVzKTtcbiAgcGxheVJvdW5kKGNvb3JkaW5hdGUpO1xuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtYXJrJyk7XG59KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=