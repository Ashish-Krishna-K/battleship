import { setCoordinate } from './classes';

const playerBoard = document.querySelector('#player-board');
const computerBoard = document.querySelector('#computer-board');
const displayShipName = document.querySelector('#ship-name');
const orientation = document.querySelector('#orientation');
const insturctionsDiv = document.querySelector('#inst');
const computerName = document.querySelector('#comp');

export function getOrient() {
  return orientation.value;
}
export function broadcastWinner(who) {
  insturctionsDiv.textContent = `${who} wins the game`;
}

export function clearRoundResult() {
  displayShipName.textContent = '';
}

export function setInstruction(string) {
  if (string === '') {
    clearRoundResult();
    insturctionsDiv.textContent = 'Play Game!';
    return;
  }
  displayShipName.textContent = `Place your ${string}`;
  displayShipName.dataset.ship = string;
}

export function getInstruction() {
  return displayShipName.dataset.ship;
}

export function changeVisibility() {
  computerBoard.classList.toggle('hidden');
  computerName.classList.toggle('hidden');
}

function findShipNodes(object, array) {
  const node = array.find((obj) => {
    const cod = JSON.parse(obj.dataset.coordinates);

    return cod.x === object.x && cod.y === object.y;
  });

  return node;
}

export function renderPlayerBoard() {
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.classList.add('rows');
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      const data = setCoordinate(i, j);
      cell.dataset.coordinates = JSON.stringify(data);
      cell.dataset.who = 'player';
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
      cell.dataset.who = 'computer';
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
    const node = findShipNodes(item, cellsArray);
    node.classList.add('ship');
  });
}

// delete this below function after testing
// decided to keep the function itself(without invoking) just in case.
export function renderCompShips(board) {
  const playerCells = document.querySelectorAll('#computer-board .cell');
  const cellsArray = Array.from(playerCells);
  board.shipsPlaced.forEach((item) => {
    const node = findShipNodes(item, cellsArray);
    node.classList.add('ship');
  });
}

export function markPlay(coordinate, player) {
  if (player === 'player') {
    const computerCells = Array.from(document.querySelectorAll('#computer-board .cell'));
    const node = computerCells.find((obj) => {
      const cod = JSON.parse(obj.dataset.coordinates);
      return cod.x === coordinate.x && cod.y === coordinate.y;
    });
    node.classList.add('mark');
  }
  if (player === 'computer') {
    const playerCells = Array.from(document.querySelectorAll('#player-board .cell'));
    const node = playerCells.find((obj) => {
      const cod = JSON.parse(obj.dataset.coordinates);
      return cod.x === coordinate.x && cod.y === coordinate.y;
    });
    node.classList.add('mark');
  }
}

export function markShip(coordinate) {
  const computerCells = Array.from(document.querySelectorAll('#computer-board .cell'));
  const node = computerCells.find((obj) => {
    const cod = JSON.parse(obj.dataset.coordinates);
    return cod.x === coordinate.x && cod.y === coordinate.y;
  });
  node.classList.add('ship');
}

export function broadcastSunkShip(name, player) {
  displayShipName.textContent = `${player} has sunk enemy's ${name}`;
}
