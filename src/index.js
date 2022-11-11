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

const startBtn = document.querySelector('#start');
const seletOrient = document.querySelector('#orientation');

setInstruction('Carrier');

renderPlayerBoard();
renderCompBoard();

// below section is for placing ships in the player board
const playerCells = document.querySelectorAll('#player-board .cell');

playerCells.forEach((cell) => cell.addEventListener('click', placeShipController));

playerCells.forEach((cell) => cell.addEventListener('click', () => {
  if (placementCounter > 4) {
    startBtn.classList.remove('hidden');
    seletOrient.classList.add('hidden');
    playerCells.forEach((thing) => thing.removeEventListener('click', placeShipController));
  }
}));

// below section is for start game

startBtn.addEventListener('click', () => {
  if (placementCounter < 5) return;
  changeVisibility();
  initiateGame();
  playerCells.forEach((cell) => cell.removeEventListener('click', placeShipController));
  startBtn.classList.add('hidden');
});

// below section is for marking cells in the computer board
const compCells = document.querySelectorAll('#computer-board .cell');

compCells.forEach((node) => node.addEventListener('click', (e) => {
  const coordinate = JSON.parse(e.target.dataset.coordinates);
  const board = e.target.dataset.who;
  playRound(coordinate, board);
}));
