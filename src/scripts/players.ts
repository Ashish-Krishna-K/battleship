import EventsObserver from "./eventsObserver";
import { GameBoard } from "./models";

const generateRandomNumber = (limit: number) => {
  return Math.floor(Math.random() * limit)
}

const generateRandomCoordinates = () => {
  return {
    x: generateRandomNumber(10),
    y: generateRandomNumber(10)
  }
}

const generateRandomOrientation = () => {
  const orientations = ["horizontal", "vertical"];
  return orientations[generateRandomNumber(2)];
}

const playerBoard = new GameBoard("player");
const computerBoard = new GameBoard("computer");
const queue:CoordinatesType[] = []

const placePlayerShips = (shipType: string, coordinates: CoordinatesType, orientation: string) => {
  switch (shipType) {
    case "carrier":
      return playerBoard.placeCarrier(coordinates, orientation);
    case "battleship":
      return playerBoard.placeBattleship(coordinates, orientation);
    case "destroyer":
      return playerBoard.placeDestroyer(coordinates, orientation);
    case "submarine":
      return playerBoard.placeSubmarine(coordinates, orientation);
    case "patrolBoat":
      return playerBoard.placePatrolBoat(coordinates, orientation);
  }
}

const placeComputerShips = () => {
  let isCarrierPlaced = false;
  while(!isCarrierPlaced) {
    isCarrierPlaced = computerBoard.placeCarrier(generateRandomCoordinates(), generateRandomOrientation());
  }
  let isBattleshipPlaced = false;
  while(!isBattleshipPlaced) {
    isBattleshipPlaced = computerBoard.placeBattleship(generateRandomCoordinates(), generateRandomOrientation());
  }
  let isDestroyerPlaced = false;
  while(!isDestroyerPlaced) {
    isDestroyerPlaced = computerBoard.placeDestroyer(generateRandomCoordinates(), generateRandomOrientation());
  }
  let isSubmarinePlaced = false;
  while(!isSubmarinePlaced) {
    isSubmarinePlaced = computerBoard.placeSubmarine(generateRandomCoordinates(), generateRandomOrientation());
  }
  let isPatrolBoatPlaced = false;
  while(!isPatrolBoatPlaced) {
    isPatrolBoatPlaced = computerBoard.placePatrolBoat(generateRandomCoordinates(), generateRandomOrientation());
  }
}

const computerAttacks = () => {
  const completedMoves = playerBoard.attackedTiles;
  let currentAttack = queue.length > 0 ? queue.shift() : generateRandomCoordinates();
  while (completedMoves.some(tile => JSON.stringify(tile) === JSON.stringify(currentAttack))) {
    currentAttack = queue.length > 0 ? queue.shift() : generateRandomCoordinates();
  }
  playerBoard.receiveAttack(currentAttack);
  if (playerBoard.allShipsSunk()) {
    EventsObserver.publish("winnerFound", {data: "computer"})
  };
  return;
}

const playerAttacks = (coordinates: CoordinatesType) => {
  computerBoard.receiveAttack(coordinates);
  if (computerBoard.allShipsSunk()) {
    EventsObserver.publish("winnerFound", {data: "player"});
  }
}

const shipHitHandler = (data: EventPayloadType) => {
  const {coordinate, board} = data.data;
  if (board.name === "player") {
    if (coordinate.x < 9) {
      queue.push({
        x: coordinate.x + 1,
        y: coordinate.y
      })
    }
    if (coordinate.x > 0) {
      queue.push({
        x: coordinate.x - 1,
        y: coordinate.y
      })
    }
    if (coordinate.y < 9) {
      queue.push({
        x: coordinate.x,
        y: coordinate.y + 1
      })
    }
    if (coordinate.y > 0) {
      queue.push({
        x: coordinate.x,
        y: coordinate.y - 1
      })
    }
  }
}

export {
  playerBoard,
  computerBoard,
  placePlayerShips,
  placeComputerShips,
  computerAttacks,
  playerAttacks
}
