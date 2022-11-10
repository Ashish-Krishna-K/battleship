/* eslint-disable no-restricted-syntax */
import { generateRandomCoordinates } from './classes';
import { markPlay } from './dom-manipulation';

const computerPlayer = (playerBoard) => {
  const compPlay = generateRandomCoordinates();

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
  markPlay(compPlay, 'computer');
};

export {
  computerPlayer,
};
