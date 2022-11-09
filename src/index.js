import { initiateGame, playRound } from './gameplay';

import './style.css';

initiateGame();

const compCells = document.querySelectorAll('#computer-board .cell');

compCells.forEach((node) => node.addEventListener('click', (e) => {
  const coordinate = JSON.parse(e.target.dataset.coordinates);
  playRound(coordinate);
  e.target.classList.add('mark');
}));
