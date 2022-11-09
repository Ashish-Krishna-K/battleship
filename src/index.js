import {
  changeVisibility,
  renderPlayerBoard,
  renderCompBoard,
  setInstruction,
} from './dom-manipulation';

import {
  initiateGame,
  placeShipController,
  playRound,
  placementCounter,
} from './gameplay';

import './style.css';

setInstruction('Carrier');

renderPlayerBoard();
renderCompBoard();

const playerCells = document.querySelectorAll('#player-board .cell');

playerCells.forEach((cell) => cell.addEventListener('click', placeShipController));

playerCells.forEach((cell) => cell.addEventListener('click', () => {
  if (placementCounter > 3) {
    playerCells.forEach((thing) => thing.removeEventListener('click', placeShipController));
  }
}));

const startBtn = document.querySelector('#start');

startBtn.addEventListener('click', () => {
  console.log(placementCounter);
  if (placementCounter < 5) return;
  changeVisibility();
  initiateGame();
  playerCells.forEach((cell) => cell.removeEventListener('click', placeShipController));
});

const compCells = document.querySelectorAll('#computer-board .cell');

compCells.forEach((node) => node.addEventListener('click', (e) => {
  const coordinate = JSON.parse(e.target.dataset.coordinates);
  playRound(coordinate);
}));
