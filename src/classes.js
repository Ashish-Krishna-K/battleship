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

export {
  Ship,
  Gameboard,
  setCoordinate,
  generateRandomCoordinates,
};
