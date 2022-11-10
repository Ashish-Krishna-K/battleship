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
  renderCompShips,
} from './dom-manipulation';

let gameOver = false;

const playerBoard = Gameboard();

const computerBoard = Gameboard();

const winnerDisplay = getwinnerDisplay();

let placementCounter = 0;

function broadcastWinner(who) {
  winnerDisplay.gameWinner.textContent = `${who} wins the game`;
}

function handleInfiniteLoop() {
  alert('Oops! Something went wrong!\nPlease reload the page!');
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
let counter = 0;

export function initiateGame() {
  let shipPlacement = null;
  if (computerBoard.ships.carrier.coordinates.length !== 5) {
    shipPlacement = computerBoard.createCarrier(generateRandomCoordinates(), 'horizontal');
    if (!shipPlacement) {
      if (counter > 1000) {
        handleInfiniteLoop();
        return;
      }
      counter++;
      initiateGame();
      return;
    }
  }
  if (computerBoard.ships.battleship.coordinates.length !== 4) {
    shipPlacement = computerBoard.createBattleship(generateRandomCoordinates(), 'vertical');
    if (!shipPlacement) {
      if (counter > 2000) {
        handleInfiniteLoop();
        return;
      }
      counter++;
      initiateGame();
      return;
    }
  }
  if (computerBoard.ships.destroyer.coordinates.length !== 3) {
    shipPlacement = computerBoard.createDestroyer(generateRandomCoordinates(), 'horizontal');
    if (!shipPlacement) {
      if (counter > 3000) {
        handleInfiniteLoop();
        return;
      }
      counter++;
      initiateGame();
      return;
    }
  }
  if (computerBoard.ships.submarine.coordinates.length !== 3) {
    shipPlacement = computerBoard.createSubmarine(generateRandomCoordinates(), 'vertical');
    if (!shipPlacement) {
      if (counter > 4000) {
        handleInfiniteLoop();
        return;
      }
      counter++;
      initiateGame();
      return;
    }
  }
  if (computerBoard.ships.patrolBoat.coordinates.length !== 2) {
    shipPlacement = computerBoard.createBoat(generateRandomCoordinates(), 'horizontal');
    if (!shipPlacement) {
      if (counter > 5000) {
        handleInfiniteLoop();
        return;
      }
      counter++;
      initiateGame();
    }
  }
  renderCompShips(computerBoard);
}

export function playRound(coordinate, board) {
  if (gameOver) return;

  let currentPlay;

  for (const item of computerBoard.plays) {
    currentPlay = computerBoard.checkCoordinate(item, coordinate.x, coordinate.y);
  }

  if (currentPlay) return;

  computerBoard.receiveAttack(coordinate, board);
  markPlay(coordinate, 'player');

  if (computerBoard.shipsSunk()) {
    broadcastWinner('Player');
    gameOver = true;
    return;
  }
  setTimeout(() => {
    computerPlayer(playerBoard);
    if (playerBoard.shipsSunk()) {
      broadcastWinner('Computer');
      gameOver = true;
    }
  }, 500);
}

export { placementCounter };
