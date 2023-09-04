import { type EventPayloadType, type CoordinatesType, type ShipMarkersType } from "../types/appTypes";
import EventsObserver from "./eventsObserver";

const displayShipName = (ship: string): string => {
  switch(ship) {
    case "carrier":
      return "Carrier"
    case "battleship":
      return "Battleship"
    case "destroyer":
      return "Destroyer"
    case "submarine":
      return "Submarine"
    case "patrolBoat":
      return "Patrol Boat"
    default:
      return ""
  }
}

const renderInstructions = (ship: string): HTMLElement => {
  const instructions = document.createElement('p');
  instructions.dataset.shipType = ship;
  instructions.classList.add('current-ship');
  instructions.textContent = `Place your ${displayShipName(ship)}`;
  return instructions
}

const renderOrientationControl = (): HTMLButtonElement => {
  const orientationControl = document.createElement('button')
  orientationControl.value = "horizontal"
  orientationControl.textContent = "Rotate"
  orientationControl.addEventListener("click", function(this: HTMLButtonElement) {
    if (this.value === "horizontal") {
      this.value = "vertical"
    } else {
      this.value = "horizontal"
    }
  })
  return orientationControl
}

const renderBoard = (): HTMLDivElement => {
  const container = document.createElement('div')
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div')
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div')
      cell.classList.add('tile')
      cell.dataset.coordinates = JSON.stringify({ x: j, y: i})
      row.appendChild(cell)
    }
    container.appendChild(row)
  }
  return container
}

const changeInstructions = ({data}: EventPayloadType): void => {
  const container = document.querySelector('div.instructions-container');
  if (container !== null) {
    const child = container.firstChild;
    if (child !== null) container.removeChild(child);
    container.appendChild(renderInstructions(data));
  }
}

const startButtonComponent = (): HTMLButtonElement => {
  const startBtn = document.createElement('button');
  startBtn.classList.add('start-game-btn');
  startBtn.textContent = "Start Game"
  startBtn.addEventListener("click", function(){
    const appBody = document.querySelector('div#app')
    if (appBody !== null) {
      appBody.innerHTML = ''
      EventsObserver.publish("placeComputerShips", {data: null});
      appBody.appendChild(renderGame());
      EventsObserver.publish("markShipsRequest", {data: "player"})
    }
  })
  return startBtn
}

const renderPlaceShipsBoard = (): void => {
  const appBody = document.querySelector('div#app')
  
  if (appBody !== null) {
    const instructionsContainer = document.createElement('div');
    instructionsContainer.classList.add('instructions-container');
    instructionsContainer.appendChild(renderInstructions("carrier"));
    
    appBody.appendChild(instructionsContainer);

    const controlContainer = renderOrientationControl();
    
    appBody.appendChild(controlContainer);
    
    const board = renderBoard();
    board.classList.add('player-board');
    board.classList.add('board-container');
    const tilesList = board.querySelectorAll('div.tile')
    tilesList.forEach((tile: HTMLElement) => {
      let coordinates: CoordinatesType;
      if (tile.dataset.coordinates !== null && tile.dataset.coordinates !== undefined) {
        coordinates = JSON.parse(tile.dataset.coordinates)
        tile.addEventListener("click", () => {
          const shipType = (instructionsContainer.firstChild as HTMLElement).dataset.shipType;
          EventsObserver.subscribe("shipPlaced", changeInstructions); 
          EventsObserver.publish("shipPlacementRequest", {data: {
            shipType,
            coordinates,
            orientation: controlContainer.value
          }})
        })
      }
    })
    
    appBody.appendChild(board);

    const startBtnContainer = document.createElement('div');
    startBtnContainer.classList.add('start-btn-container');

    appBody.appendChild(startBtnContainer);
  }
}

const renderStartButton = ():void => {
  const container = document.querySelector('div.start-btn-container');
  const instructions = document.querySelector('div.instructions-container');
  if (container !== null) {
    const child = container.firstChild;
    if (child !== null) container.removeChild(child);
    container.appendChild(startButtonComponent())
  }
  if (instructions !== null) {
    instructions.remove();
  }
}

const renderGame = (): HTMLElement => {
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game-container');

  const boardContainer = document.createElement('div');
  const playerBoard = renderBoard();
  playerBoard.dataset.name = "player"
  playerBoard.classList.add('player-board')
  playerBoard.classList.add('board-container');
  boardContainer.appendChild(playerBoard);

  const computerBoard = renderBoard();
  computerBoard.dataset.name = "computer";
  computerBoard.classList.add('computer-board');
  computerBoard.classList.add('board-container');
  const gameTiles = computerBoard.querySelectorAll('div.tile');
  gameTiles.forEach((tile: HTMLDivElement) => {
    tile.addEventListener("click", function(this: HTMLDivElement) {
      let coordinates = this.dataset.coordinates;
      if (coordinates !== undefined) coordinates = JSON.parse(coordinates);
      EventsObserver.publish("playerAttackRequest", {data: coordinates})
    })
  })
  boardContainer.appendChild(computerBoard);

  gameContainer.appendChild(boardContainer);
  return gameContainer
}

const markShips = ({data}: EventPayloadType): void => {
  const {
    coordinates,
    board
  } = data
  let boardToMark;
  if (board === 'player') {
    boardToMark = document.querySelector('div.player-board')
  } else {
    boardToMark = document.querySelector('div.computer-board')
  }
  const allTiles = boardToMark?.querySelectorAll('div.tile');
  allTiles?.forEach((tile: HTMLDivElement) => {
    const tileCoordinate = tile.dataset.coordinates
    const hasShip = 
      coordinates
        .map((item: ShipMarkersType) => item.coordinate)
        .some((coord: CoordinatesType) => JSON.stringify(coord) === tileCoordinate) as boolean
    if (hasShip) {
      tile.classList.add('ship');
    }
  })
}

const markTile = (allTiles: NodeList, toMark: string): void => {
  allTiles.forEach((tile: HTMLElement) => {
    if (tile.dataset.coordinates === toMark) {
      tile.classList.add('attacked');
    }
  })
}

const markShip = (allTiles: NodeList, toMark: string): void => {
  allTiles.forEach((tile: HTMLElement) => {
    if (tile.dataset.coordinates === toMark) {
      tile.classList.add('ship');
    }
  })
}

const handleTileHit = ({data}: EventPayloadType): void => {
  const {
    coordinate,
    board
  } = data;
  const toMark = JSON.stringify(coordinate);
  let boardToMark;
  if (board === "player") {
    boardToMark = document.querySelector('div.player-board');
  } else {
    boardToMark = document.querySelector('div.computer-board');
  }
  const allTiles = boardToMark?.querySelectorAll('div.tile');
  if (allTiles !== undefined) markTile(allTiles, toMark)
}

const winnerContainerComponent = (winner: string): HTMLDivElement => {
  const winnerContainer = document.createElement('div');
  winnerContainer.classList.add('winner-container');

  const winnerHeading = document.createElement('h2');
  winnerHeading.textContent = winner === 'computer' ? "Computer wins the game!" : "Player wins the game!"
  winnerContainer.appendChild(winnerHeading);

  const playAgainBtn = document.createElement('button');
  playAgainBtn.textContent = "Play Again!"
  playAgainBtn.addEventListener("click", () => {
    location.reload();
  })
  winnerContainer.appendChild(playAgainBtn);
  return winnerContainer
}

const showWinner = ({data}: EventPayloadType): void => {
  const appBody = document.querySelector('div#app');
  if (appBody !== null) {
    appBody.innerHTML = '';
    appBody.appendChild(winnerContainerComponent(data));
  }
}

const markHitShip = ({data}: EventPayloadType): void => {
  const {
    coordinate,
    board
  } = data;
  const toMark = JSON.stringify(coordinate);
  let boardToMark;
  if (board === "player") {
    boardToMark = document.querySelector('div.player-board');
  } else {
    boardToMark = document.querySelector('div.computer-board');
  }
  const allTiles = boardToMark?.querySelectorAll('div.tile');
  if (allTiles !== undefined) markShip(allTiles, toMark)
}

const domSubscriptions = (): void => {
  EventsObserver.subscribe("initialPageLoad", renderPlaceShipsBoard)
  EventsObserver.subscribe("renderStartGame", renderStartButton)
  EventsObserver.subscribe("markShips", markShips);
  EventsObserver.subscribe("tileIsHit", handleTileHit);
  EventsObserver.subscribe("shipIsHit", markHitShip);
  EventsObserver.subscribe("winnerFound", showWinner);
}

export default domSubscriptions