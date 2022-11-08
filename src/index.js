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
    carrier: [],
    battleship: [],
    destroyer: [],
    submarine: [],
    patrolBoat: [],
  };
  const missed = [];

  return {
    ships,
    missed,
  };
};

function setCoordinate(x, y) {
  return { x, y };
}

export {
  Ship,
  Gameboard,
  setCoordinate,
};
