import { Gameboard, generateRandomCoordinates } from './classes';
import { renderPlayerBoard, renderCompBoard, renderShip } from './dom-manipulation';

renderPlayerBoard();
const playerBoard = Gameboard();

renderCompBoard();
const computerBoard = Gameboard();

export function initiateGame() {
  playerBoard.createCarrier(generateRandomCoordinates(), 'horizontal');
  playerBoard.createBattleship(generateRandomCoordinates(), 'vertical');
  playerBoard.createDestroyer(generateRandomCoordinates(), 'horizontal');
  playerBoard.createSubmarine(generateRandomCoordinates(), 'vertical');
  playerBoard.createBoat(generateRandomCoordinates(), 'horizontal');

  computerBoard.createCarrier(generateRandomCoordinates(), 'horizontal');
  computerBoard.createBattleship(generateRandomCoordinates(), 'vertical');
  computerBoard.createDestroyer(generateRandomCoordinates(), 'horizontal');
  computerBoard.createSubmarine(generateRandomCoordinates(), 'vertical');
  computerBoard.createBoat(generateRandomCoordinates(), 'horizontal');

  renderShip(playerBoard);
}

export function playRound(coordinate) {
  computerBoard.receiveAttack(coordinate);
  console.log(computerBoard.plays);
}
