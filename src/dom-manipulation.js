import { setCoordinate } from './classes';

const playerBoard = document.querySelector('#player-board');
const computerBoard = document.querySelector('#computer-board');

function findShipNodes(object, array) {
  const node = array.find((obj) => {
    const cod = JSON.parse(obj.dataset.coordinates);

    return cod.x === object.x && cod.y === object.y;
  });
  node.classList.add('ship');
}

export function renderPlayerBoard() {
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.classList.add('rows');
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      const data = setCoordinate(i, j);
      cell.dataset.coordinates = JSON.stringify(data);
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    playerBoard.appendChild(row);
  }
}

export function renderCompBoard() {
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.classList.add('rows');
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      const data = setCoordinate(i, j);
      cell.dataset.coordinates = JSON.stringify(data);
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    computerBoard.appendChild(row);
  }
}

export function renderShip(board) {
  const playerCells = document.querySelectorAll('#player-board .cell');
  const cellsArray = Array.from(playerCells);

  board.shipsPlaced.forEach((item) => {
    findShipNodes(item, cellsArray);
  });
}
