/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

  const placeShip = (len, orientation, coordinate, max, vessel) => {
    if (orientation === 'horizontal') {
      if (coordinate.x < max) {
        for (let i = 0; i <= len - 1; i++) {
          vessel[i] = { x: coordinate.x + i, y: coordinate.y };
        }
      } else {
        for (let i = 0; i <= len - 1; i++) {
          vessel[i] = { x: coordinate.x - i, y: coordinate.y };
        }
      }
    } else if (orientation === 'vertical') {
      if (coordinate.y < max) {
        for (let i = 0; i <= len - 1; i++) {
          vessel[i] = { x: coordinate.x, y: coordinate.y + i };
        }
      } else {
        for (let i = 0; i <= len - 1; i++) {
          vessel[i] = { x: coordinate.x, y: coordinate.y - i };
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
    if (plays.forEach((item) => {
      checkCoordinate(item, coordinate.x, coordinate.y);
    })) return;
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxnREFBZ0Q7QUFDL0Qsa0JBQWtCLGdEQUFnRDtBQUNsRSxpQkFBaUIsZ0RBQWdEO0FBQ2pFLGlCQUFpQixnREFBZ0Q7QUFDakUsa0JBQWtCLGdEQUFnRDtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEMsd0JBQXdCO0FBQ3hCO0FBQ0EsUUFBUTtBQUNSLHdCQUF3QixjQUFjO0FBQ3RDLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEMsd0JBQXdCO0FBQ3hCO0FBQ0EsUUFBUTtBQUNSLHdCQUF3QixjQUFjO0FBQ3RDLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBT0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5jb25zdCBTaGlwID0gKGxlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgbGV0IGhwID0gbGVuZ3RoO1xuXG4gIGNvbnN0IGdldE9yaWVudGF0aW9uID0gKCkgPT4gb3JpZW50YXRpb247XG5cbiAgY29uc3QgZ2V0SFAgPSAoKSA9PiBocDtcblxuICBjb25zdCBpc0hpdCA9ICgpID0+IHtcbiAgICBocCAtPSAxO1xuICAgIHJldHVybiBocDtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiAoaHAgPD0gMCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRIUCxcbiAgICBnZXRPcmllbnRhdGlvbixcbiAgICBpc0hpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IHsgbmFtZTogbnVsbCwgY29vcmRpbmF0ZXM6IFtdLCBzdW5rU3RhdHVzOiBmYWxzZSB9LFxuICAgIGJhdHRsZXNoaXA6IHsgbmFtZTogbnVsbCwgY29vcmRpbmF0ZXM6IFtdLCBzdW5rU3RhdHVzOiBmYWxzZSB9LFxuICAgIGRlc3Ryb3llcjogeyBuYW1lOiBudWxsLCBjb29yZGluYXRlczogW10sIHN1bmtTdGF0dXM6IGZhbHNlIH0sXG4gICAgc3VibWFyaW5lOiB7IG5hbWU6IG51bGwsIGNvb3JkaW5hdGVzOiBbXSwgc3Vua1N0YXR1czogZmFsc2UgfSxcbiAgICBwYXRyb2xCb2F0OiB7IG5hbWU6IG51bGwsIGNvb3JkaW5hdGVzOiBbXSwgc3Vua1N0YXR1czogZmFsc2UgfSxcbiAgfTtcbiAgY29uc3QgbWlzc2VkID0gW107XG4gIGNvbnN0IHBsYXlzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGxlbiwgb3JpZW50YXRpb24sIGNvb3JkaW5hdGUsIG1heCwgdmVzc2VsKSA9PiB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmIChjb29yZGluYXRlLnggPCBtYXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgdmVzc2VsW2ldID0geyB4OiBjb29yZGluYXRlLnggKyBpLCB5OiBjb29yZGluYXRlLnkgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgdmVzc2VsW2ldID0geyB4OiBjb29yZGluYXRlLnggLSBpLCB5OiBjb29yZGluYXRlLnkgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmIChjb29yZGluYXRlLnkgPCBtYXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgdmVzc2VsW2ldID0geyB4OiBjb29yZGluYXRlLngsIHk6IGNvb3JkaW5hdGUueSArIGkgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgdmVzc2VsW2ldID0geyB4OiBjb29yZGluYXRlLngsIHk6IGNvb3JkaW5hdGUueSAtIGkgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVDYXJyaWVyID0gKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgb3JpZW50YXRpb24pO1xuICAgIHNoaXBzLmNhcnJpZXIubmFtZSA9IGNhcnJpZXI7XG5cbiAgICBwbGFjZVNoaXAoNSwgb3JpZW50YXRpb24sIGNvb3JkaW5hdGUsIDYsIHNoaXBzLmNhcnJpZXIuY29vcmRpbmF0ZXMpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUJhdHRsZXNoaXAgPSAoY29vcmRpbmF0ZSwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCBvcmllbnRhdGlvbik7XG4gICAgc2hpcHMuYmF0dGxlc2hpcC5uYW1lID0gYmF0dGxlc2hpcDtcblxuICAgIHBsYWNlU2hpcCg0LCBvcmllbnRhdGlvbiwgY29vcmRpbmF0ZSwgNywgc2hpcHMuYmF0dGxlc2hpcC5jb29yZGluYXRlcyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRGVzdHJveWVyID0gKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgzLCBvcmllbnRhdGlvbik7XG4gICAgc2hpcHMuZGVzdHJveWVyLm5hbWUgPSBkZXN0cm95ZXI7XG5cbiAgICBwbGFjZVNoaXAoMywgb3JpZW50YXRpb24sIGNvb3JkaW5hdGUsIDgsIHNoaXBzLmRlc3Ryb3llci5jb29yZGluYXRlcyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU3VibWFyaW5lID0gKGNvb3JkaW5hdGUsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCBvcmllbnRhdGlvbik7XG4gICAgc2hpcHMuc3VibWFyaW5lLm5hbWUgPSBzdWJtYXJpbmU7XG5cbiAgICBwbGFjZVNoaXAoMywgb3JpZW50YXRpb24sIGNvb3JkaW5hdGUsIDgsIHNoaXBzLnN1Ym1hcmluZS5jb29yZGluYXRlcyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQm9hdCA9IChjb29yZGluYXRlLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBTaGlwKDIsIG9yaWVudGF0aW9uKTtcbiAgICBzaGlwcy5wYXRyb2xCb2F0Lm5hbWUgPSBwYXRyb2xCb2F0O1xuXG4gICAgcGxhY2VTaGlwKDIsIG9yaWVudGF0aW9uLCBjb29yZGluYXRlLCA5LCBzaGlwcy5wYXRyb2xCb2F0LmNvb3JkaW5hdGVzKTtcbiAgfTtcblxuICBjb25zdCBjaGVja0Nvb3JkaW5hdGUgPSAob2JqLCB4LCB5KSA9PiB7XG4gICAgaWYgKG9iai54ID09PSB4ICYmIG9iai55ID09PSB5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrU2hpcCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNoaXBzLmNhcnJpZXIuY29vcmRpbmF0ZXMpIHtcbiAgICAgIHN0YXR1cyA9IGNoZWNrQ29vcmRpbmF0ZShpdGVtLCBjb29yZGluYXRlLngsIGNvb3JkaW5hdGUueSk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHNoaXBzLmNhcnJpZXIubmFtZS5pc0hpdCgpO1xuICAgICAgICBzaGlwcy5jYXJyaWVyLnN1bmtTdGF0dXMgPSBzaGlwcy5jYXJyaWVyLm5hbWUuaXNTdW5rKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNoaXBzLmJhdHRsZXNoaXAuY29vcmRpbmF0ZXMpIHtcbiAgICAgIHN0YXR1cyA9IGNoZWNrQ29vcmRpbmF0ZShpdGVtLCBjb29yZGluYXRlLngsIGNvb3JkaW5hdGUueSk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHNoaXBzLmJhdHRsZXNoaXAubmFtZS5pc0hpdCgpO1xuICAgICAgICBzaGlwcy5iYXR0bGVzaGlwLnN1bmtTdGF0dXMgPSBzaGlwcy5iYXR0bGVzaGlwLm5hbWUuaXNTdW5rKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNoaXBzLmRlc3Ryb3llci5jb29yZGluYXRlcykge1xuICAgICAgc3RhdHVzID0gY2hlY2tDb29yZGluYXRlKGl0ZW0sIGNvb3JkaW5hdGUueCwgY29vcmRpbmF0ZS55KTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgc2hpcHMuZGVzdHJveWVyLm5hbWUuaXNIaXQoKTtcbiAgICAgICAgc2hpcHMuZGVzdHJveWVyLnN1bmtTdGF0dXMgPSBzaGlwcy5kZXN0cm95ZXIubmFtZS5pc1N1bmsoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2hpcHMuc3VibWFyaW5lLmNvb3JkaW5hdGVzKSB7XG4gICAgICBzdGF0dXMgPSBjaGVja0Nvb3JkaW5hdGUoaXRlbSwgY29vcmRpbmF0ZS54LCBjb29yZGluYXRlLnkpO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICBzaGlwcy5zdWJtYXJpbmUubmFtZS5pc0hpdCgpO1xuICAgICAgICBzaGlwcy5zdWJtYXJpbmUuc3Vua1N0YXR1cyA9IHNoaXBzLnN1Ym1hcmluZS5uYW1lLmlzU3VuaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzaGlwcy5wYXRyb2xCb2F0LmNvb3JkaW5hdGVzKSB7XG4gICAgICBzdGF0dXMgPSBjaGVja0Nvb3JkaW5hdGUoaXRlbSwgY29vcmRpbmF0ZS54LCBjb29yZGluYXRlLnkpO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICBzaGlwcy5wYXRyb2xCb2F0Lm5hbWUuaXNIaXQoKTtcbiAgICAgICAgc2hpcHMucGF0cm9sQm9hdC5zdW5rU3RhdHVzID0gc2hpcHMucGF0cm9sQm9hdC5uYW1lLmlzU3VuaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIG1pc3NlZC5wdXNoKGNvb3JkaW5hdGUpO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmIChwbGF5cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjaGVja0Nvb3JkaW5hdGUoaXRlbSwgY29vcmRpbmF0ZS54LCBjb29yZGluYXRlLnkpO1xuICAgIH0pKSByZXR1cm47XG4gICAgcGxheXMucHVzaChjb29yZGluYXRlKTtcbiAgICBjaGVja1NoaXAoY29vcmRpbmF0ZSk7XG4gIH07XG5cbiAgY29uc3Qgc2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGlmICghc2hpcHMuY2Fycmllci5zdW5rU3RhdHVzKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFzaGlwcy5iYXR0bGVzaGlwLnN1bmtTdGF0dXMpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXNoaXBzLmRlc3Ryb3llci5zdW5rU3RhdHVzKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFzaGlwcy5zdWJtYXJpbmUuc3Vua1N0YXR1cykgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghc2hpcHMucGF0cm9sQm9hdC5zdW5rU3RhdHVzKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNoaXBzLFxuICAgIG1pc3NlZCxcbiAgICBwbGF5cyxcbiAgICBjcmVhdGVDYXJyaWVyLFxuICAgIGNyZWF0ZUJhdHRsZXNoaXAsXG4gICAgY3JlYXRlRGVzdHJveWVyLFxuICAgIGNyZWF0ZVN1Ym1hcmluZSxcbiAgICBjcmVhdGVCb2F0LFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgc2hpcHNTdW5rLFxuICB9O1xufTtcblxuZnVuY3Rpb24gc2V0Q29vcmRpbmF0ZShhLCBiKSB7XG4gIHJldHVybiB7XG4gICAgeDogYSxcbiAgICB5OiBiLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzKCkge1xuICBjb25zdCBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBjb25zdCBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIHJldHVybiBzZXRDb29yZGluYXRlKGEsIGIpO1xufVxuXG5leHBvcnQge1xuICBTaGlwLFxuICBHYW1lYm9hcmQsXG4gIHNldENvb3JkaW5hdGUsXG4gIGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9