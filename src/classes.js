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

export {
  Ship,
  Gameboard,
  setCoordinate,
  generateRandomCoordinates,
};
