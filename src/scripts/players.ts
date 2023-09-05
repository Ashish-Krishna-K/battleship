import { type CoordinatesType, type EventPayloadType } from '../types/appTypes'
import EventsObserver from './eventsObserver'
import { GameBoard } from './models'

const generateRandomNumber = (limit: number): number => {
  return Math.floor(Math.random() * limit)
}

const generateRandomCoordinates = (): CoordinatesType => {
  return {
    x: generateRandomNumber(10),
    y: generateRandomNumber(10)
  }
}

const generateRandomOrientation = (): string => {
  const orientations = ['horizontal', 'vertical']
  return orientations[generateRandomNumber(2)]
}

const playerBoard = new GameBoard('player')
const computerBoard = new GameBoard('computer')
const queue: CoordinatesType[] = []

const placePlayerShips = (shipType: string, coordinates: CoordinatesType, orientation: string): boolean => {
  switch (shipType) {
    case 'carrier':
      if (playerBoard.placeCarrier(coordinates, orientation)) {
        EventsObserver.publish("shipPlaced", {data: "battleship"})
        return true;
      }
      return false;
    case 'battleship':
      if (playerBoard.placeBattleship(coordinates, orientation)) {
        EventsObserver.publish("shipPlaced", {data: "destroyer"})
        return true
      }
      return false
    case 'destroyer':
      if (playerBoard.placeDestroyer(coordinates, orientation)) {
        EventsObserver.publish("shipPlaced", {data: "submarine"})
        return true
      }
      return false
    case 'submarine':
      if (playerBoard.placeSubmarine(coordinates, orientation)) {
        EventsObserver.publish("shipPlaced", {data: "patrolBoat"})
        return true
      }
      return false
    case 'patrolBoat':
      if (playerBoard.placePatrolBoat(coordinates, orientation)) {
        EventsObserver.publish("shipPlaced", {data: null})
        EventsObserver.publish("renderStartGame", {data: null})
      }
      return false
    default:
      return false
  }
}

const placeComputerShips = (): void => {
  let isCarrierPlaced = false
  while (!isCarrierPlaced) {
    isCarrierPlaced = computerBoard.placeCarrier(generateRandomCoordinates(), generateRandomOrientation())
  }
  let isBattleshipPlaced = false
  while (!isBattleshipPlaced) {
    isBattleshipPlaced = computerBoard.placeBattleship(generateRandomCoordinates(), generateRandomOrientation())
  }
  let isDestroyerPlaced = false
  while (!isDestroyerPlaced) {
    isDestroyerPlaced = computerBoard.placeDestroyer(generateRandomCoordinates(), generateRandomOrientation())
  }
  let isSubmarinePlaced = false
  while (!isSubmarinePlaced) {
    isSubmarinePlaced = computerBoard.placeSubmarine(generateRandomCoordinates(), generateRandomOrientation())
  }
  let isPatrolBoatPlaced = false
  while (!isPatrolBoatPlaced) {
    isPatrolBoatPlaced = computerBoard.placePatrolBoat(generateRandomCoordinates(), generateRandomOrientation())
  }
}

const computerAttacks = (): void => {
  const completedMoves = playerBoard.attackedTiles
  let currentAttack = queue.length > 0 ? queue.shift() : generateRandomCoordinates()
  while (completedMoves.some((tile) => JSON.stringify(tile) === JSON.stringify(currentAttack))) {
    currentAttack = queue.length > 0 ? queue.shift() : generateRandomCoordinates()
  }
  if (currentAttack !== undefined) {
    playerBoard.receiveAttack(currentAttack)
  }
  if (playerBoard.allShipsSunk()) {
    EventsObserver.publish('winnerFound', { data: 'computer' })
  }
}

const playerAttacks = (coordinates: CoordinatesType): boolean => {
  const result = computerBoard.receiveAttack(coordinates);
  if (result) {
    if (computerBoard.allShipsSunk()) {
      EventsObserver.publish('winnerFound', { data: 'player' })
    }
  }
  return result
}

const shipHitHandler = (data: EventPayloadType): void => {
  const { coordinate, board } = data.data;
  if (board === 'player') {
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

const handleShipPlacementRequest = ({data}: EventPayloadType): void => {
  const {
    shipType,
    coordinates,
    orientation
  } = data;
  if (shipType !== null) placePlayerShips(shipType, coordinates, orientation);
} 

const handleShipPlaced = (): void => {
  EventsObserver.publish('markShips', {data: {
    coordinates: playerBoard.shipsPlacedTiles,
    board: playerBoard.name
  }})
}

const handlePlayerAttackRequest = ({data}: EventPayloadType): void => {
  if (playerAttacks(data)){
    computerAttacks();
  };
}

const handleMarkShipRequest = ({data}: EventPayloadType): void => {
  console.log(data);
  if (data === 'player') {
    EventsObserver.publish('markShips', {data: {
      coordinates: playerBoard.shipsPlacedTiles,
      board: playerBoard.name
    }})
  } else {
    console.log(computerBoard.shipsPlacedTiles);
    EventsObserver.publish('markShips', {data: {
      coordinates: computerBoard.shipsPlacedTiles,
      board: computerBoard.name
    }})
  }
}

const playerSubscriptions = (): void => {
  EventsObserver.subscribe('placeComputerShips', placeComputerShips)
  EventsObserver.subscribe('shipIsHit', shipHitHandler)
  EventsObserver.subscribe('shipPlacementRequest', handleShipPlacementRequest)
  EventsObserver.subscribe('shipPlaced', handleShipPlaced)
  EventsObserver.subscribe('playerAttackRequest', handlePlayerAttackRequest)
  EventsObserver.subscribe('markShipsRequest', handleMarkShipRequest)
}

export { playerBoard, computerBoard, placePlayerShips, placeComputerShips, computerAttacks, playerAttacks, playerSubscriptions }
