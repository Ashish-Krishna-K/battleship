import { type CoordinatesType, type EventPayloadType } from '../types/appTypes';
import EventsObserver from './eventsObserver';
import { GameBoard } from './models';

// a helper function to generate a random number
const generateRandomNumber = (limit: number): number => {
  return Math.floor(Math.random() * limit);
};

// a helper function to generate random coordinates
const generateRandomCoordinates = (): CoordinatesType => {
  return {
    x: generateRandomNumber(10),
    y: generateRandomNumber(10),
  };
};

// a helper function to randomly select an orientation
const generateRandomOrientation = (): string => {
  const orientations = ['horizontal', 'vertical'];
  return orientations[generateRandomNumber(2)];
};

const playerBoard = new GameBoard('player');
const computerBoard = new GameBoard('computer');
// the queue is used when computer makes a decision on a tile
// to attack, it will first take into consideration the tiles
// in the queue, which itself is nothing but adjacent tiles when
// a tile attacked contained a ship.
const queue: CoordinatesType[] = [];

// a function to place player's ships in the board
const placePlayerShips = (shipType: string, coordinates: CoordinatesType, orientation: string): boolean => {
  switch (shipType) {
    case 'carrier':
      // if carrier is successfully placed publish the event and return
      // true, if it's not placed return false, incase the ship placement
      // fails the state is not changed and the user can continue placing
      // same ship
      if (playerBoard.placeCarrier(coordinates, orientation)) {
        // below event publish indicates the carrier is placed so change
        // the state to battleship, this follows for all ships untill patrol
        // boat at that point the state is changed to null
        EventsObserver.publish('shipPlaced', { data: 'battleship' });
        return true;
      }
      return false;
    case 'battleship':
      if (playerBoard.placeBattleship(coordinates, orientation)) {
        EventsObserver.publish('shipPlaced', { data: 'destroyer' });
        return true;
      }
      return false;
    case 'destroyer':
      if (playerBoard.placeDestroyer(coordinates, orientation)) {
        EventsObserver.publish('shipPlaced', { data: 'submarine' });
        return true;
      }
      return false;
    case 'submarine':
      if (playerBoard.placeSubmarine(coordinates, orientation)) {
        EventsObserver.publish('shipPlaced', { data: 'patrolBoat' });
        return true;
      }
      return false;
    case 'patrolBoat':
      if (playerBoard.placePatrolBoat(coordinates, orientation)) {
        // once the patrolBoat is placed change the state to null and 
        // publish the event indicating to render the start game button
        EventsObserver.publish('shipPlaced', { data: null });
        EventsObserver.publish('renderStartGame', { data: null });
      }
      return false;
    default:
      return false;
  }
};

// a function to place computer's ships in the computer's board
const placeComputerShips = (): void => {
  // the function is simple for each shipType call the respective method by passing
  // randomly generated coordinates and orientation, if the placement fails(which indicates
  // an overlap), keep trying untill the placement is successful.
  let isCarrierPlaced = false;
  while (!isCarrierPlaced) {
    isCarrierPlaced = computerBoard.placeCarrier(generateRandomCoordinates(), generateRandomOrientation());
  }
  let isBattleshipPlaced = false;
  while (!isBattleshipPlaced) {
    isBattleshipPlaced = computerBoard.placeBattleship(generateRandomCoordinates(), generateRandomOrientation());
  }
  let isDestroyerPlaced = false;
  while (!isDestroyerPlaced) {
    isDestroyerPlaced = computerBoard.placeDestroyer(generateRandomCoordinates(), generateRandomOrientation());
  }
  let isSubmarinePlaced = false;
  while (!isSubmarinePlaced) {
    isSubmarinePlaced = computerBoard.placeSubmarine(generateRandomCoordinates(), generateRandomOrientation());
  }
  let isPatrolBoatPlaced = false;
  while (!isPatrolBoatPlaced) {
    isPatrolBoatPlaced = computerBoard.placePatrolBoat(generateRandomCoordinates(), generateRandomOrientation());
  }
};

// a function to handle player's attacks
const playerAttacks = (coordinates: CoordinatesType): boolean => {
  const result = computerBoard.receiveAttack(coordinates);
  // if the attack was successful, check to board to see if all ships were sunk.
  // if all ships are sunk then declare the player as the winner
  if (result) {
    if (computerBoard.allShipsSunk()) {
      EventsObserver.publish('winnerFound', { data: 'player' });
    }
  }
  return result;
};

// a function to handle computer's attacks
const computerAttacks = (): void => {
  const completedMoves = playerBoard.attackedTiles;
  // if the queue has a tile, we'll grab the first tile to process, if not 
  // randomly generate the coordinates to attack
  let currentAttack = queue.length > 0 ? queue.shift() : generateRandomCoordinates();
  // checking if the tile to process is already hit, if it's true keep grabbing
  // the next tile from queue or (if queue is empty) generating random coordinates
  // until a tile which is not previously attacked is found
  while (completedMoves.some((tile) => JSON.stringify(tile) === JSON.stringify(currentAttack))) {
    currentAttack = queue.length > 0 ? queue.shift() : generateRandomCoordinates();
  }
  // an non-attacked tile is found hence attack that tile.
  if (currentAttack !== undefined) {
    playerBoard.receiveAttack(currentAttack);
  }
  // after each attack checking the board to see if all ships have sunk,
  // if yes declare computer as winner
  if (playerBoard.allShipsSunk()) {
    EventsObserver.publish('winnerFound', { data: 'computer' });
  }
};

// a function to generate adjacent tile coordinates if computer
// attack hits a ship.
const shipHitHandler = (data: EventPayloadType): void => {
  const { coordinate, board } = data.data;
  // since "shipIsHit" is called for both boards, ensuring
  // adjacent tiles are added only if the shipIsHit is called
  // from the playerBoard
  if (board === 'player') {
    // ensuring the adjacent tiles coordinates generated does not
    // go out of bounds
    if (coordinate.x < 9) {
      queue.push({
        x: coordinate.x + 1,
        y: coordinate.y,
      });
    }
    if (coordinate.x > 0) {
      queue.push({
        x: coordinate.x - 1,
        y: coordinate.y,
      });
    }
    if (coordinate.y < 9) {
      queue.push({
        x: coordinate.x,
        y: coordinate.y + 1,
      });
    }
    if (coordinate.y > 0) {
      queue.push({
        x: coordinate.x,
        y: coordinate.y - 1,
      });
    }
  }
};

// an handler function for shipPlacementRequest
const handleShipPlacementRequest = ({ data }: EventPayloadType): void => {
  const { shipType, coordinates, orientation } = data;
  if (shipType !== null) placePlayerShips(shipType, coordinates, orientation);
};

// a middleware function, which when called by "shipPlaced" event will in turn
// publish an event to mark the placed ships in the UI
const handleShipPlaced = (): void => {
  EventsObserver.publish('markShips', {
    data: {
      coordinates: playerBoard.shipsPlacedTiles,
      board: playerBoard.name,
    },
  });
};

// a handler function to handle player attack request
const handlePlayerAttackRequest = ({ data }: EventPayloadType): void => {
  // we'll only allow computer turn only if the player attack is successful
  if (playerAttacks(data)) {
    computerAttacks();
  }
};

// a handler function to handle mark ships request
const handleMarkShipRequest = ({ data }: EventPayloadType): void => {
  // if the request is for playerBoard return player's ship tiles
  // if not return computer's ship tiles
  if (data === 'player') {
    EventsObserver.publish('markShips', {
      data: {
        coordinates: playerBoard.shipsPlacedTiles,
        board: playerBoard.name,
      },
    });
  } else {
    EventsObserver.publish('markShips', {
      data: {
        coordinates: computerBoard.shipsPlacedTiles,
        board: computerBoard.name,
      },
    });
  }
};

// all Event subscriptions in a function which is called by index.ts on pageload to
// ensure subscriptions
const playerSubscriptions = (): void => {
  EventsObserver.subscribe('placeComputerShips', placeComputerShips);
  EventsObserver.subscribe('shipIsHit', shipHitHandler);
  EventsObserver.subscribe('shipPlacementRequest', handleShipPlacementRequest);
  EventsObserver.subscribe('shipPlaced', handleShipPlaced);
  EventsObserver.subscribe('playerAttackRequest', handlePlayerAttackRequest);
  EventsObserver.subscribe('markShipsRequest', handleMarkShipRequest);
};

export {
  playerBoard,
  computerBoard,
  placePlayerShips,
  placeComputerShips,
  computerAttacks,
  playerAttacks,
  playerSubscriptions,
};
