/* eslint-disable no-restricted-syntax */
import { Gameboard, generateRandomCoordinates } from './classes';
import { computerPlayer } from './computer-player';
import {
  renderShip,
  markPlay,
  getInstruction,
  getOrient,
  setInstruction,
  getwinnerDisplay,
} from './dom-manipulation';

let gameOver = false;

const playerBoard = Gameboard();

const computerBoard = Gameboard();

const winnerDisplay = getwinnerDisplay();

let placementCounter = 0;

function broadcastWinner(who) {
  winnerDisplay.gameWinner.textContent = `${who} wins the game`;
  console.log(
    playerBoard.ships.carrier.sunkStatus,
    playerBoard.ships.battleship.sunkStatus,
    playerBoard.ships.destroyer.sunkStatus,
    playerBoard.ships.submarine.sunkStatus,
    playerBoard.ships.patrolBoat.sunkStatus,
  );
  console.log(
    computerBoard.ships.carrier.sunkStatus,
    computerBoard.ships.battleship.sunkStatus,
    computerBoard.ships.destroyer.sunkStatus,
    computerBoard.ships.submarine.sunkStatus,
    computerBoard.ships.patrolBoat.sunkStatus,
  );
}

function placeShips(ship, coordinate, orient) {
  switch (ship) {
    case 'Carrier':
      if (!playerBoard.createCarrier(coordinate, orient)) return;
      placementCounter++;
      setInstruction('Battleship');
      break;
    case 'Battleship':
      if (!playerBoard.createBattleship(coordinate, orient)) return;
      placementCounter++;
      setInstruction('Destroyer');
      break;
    case 'Destroyer':
      if (!playerBoard.createDestroyer(coordinate, orient)) return;
      placementCounter++;
      setInstruction('Submarine');
      break;
    case 'Submarine':
      if (!playerBoard.createSubmarine(coordinate, orient)) return;
      placementCounter++;
      setInstruction('Patrol Boat');
      break;
    case 'Patrol Boat':
      if (!playerBoard.createBoat(coordinate, orient)) return;
      placementCounter++;
      setInstruction('');
      break;
    default:
      setInstruction('Carrier');
      console.log('error');
  }
}

export function placeShipController(event) {
  const coordinate = JSON.parse(event.target.dataset.coordinates);
  const ship = getInstruction();
  placeShips(ship, coordinate, getOrient());
  renderShip(playerBoard);
}

export function initiateGame() {
  if (!computerBoard.createCarrier(generateRandomCoordinates(), 'horizontal')) {
    initiateGame();
  }
  if (!computerBoard.createBattleship(generateRandomCoordinates(), 'vertical')) {
    initiateGame();
  }
  if (!computerBoard.createDestroyer(generateRandomCoordinates(), 'horizontal')) {
    initiateGame();
  }
  if (!computerBoard.createSubmarine(generateRandomCoordinates(), 'vertical')) {
    initiateGame();
  }
  if (!computerBoard.createBoat(generateRandomCoordinates(), 'horizontal')) {
    initiateGame();
  }
}

export function playRound(coordinate) {
  if (gameOver) return;

  let currentPlay;

  for (const item of computerBoard.plays) {
    currentPlay = computerBoard.checkCoordinate(item, coordinate.x, coordinate.y);
  }

  if (currentPlay) return;

  computerBoard.receiveAttack(coordinate);
  console.log(computerBoard.plays.length);
  markPlay(coordinate, 'player');

  if (computerBoard.shipsSunk()) {
    broadcastWinner('Player');
    gameOver = true;
    return;
  }
  computerPlayer(playerBoard);
  console.log(playerBoard.plays.length);
  if (playerBoard.shipsSunk()) {
    broadcastWinner('Computer');
    gameOver = true;
  }
}

export { placementCounter };
