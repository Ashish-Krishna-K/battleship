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

const generateCoordinates = (length: number, start: CoordinatesType, orientation: string): CoordinatesType[] => {
  const holder: CoordinatesType[] = []
  for (let i = 0; i < length; i++) {
    if (orientation === 'horizontal') {
      if (start.x + length < 9) {
        holder.push({
          x: start.x + i,
          y: start.y
        })
      } else {
        holder.push({
          x: start.x - i,
          y: start.y
        })
      }
    } else {
      if (start.y + length < 9) {
        holder.push({
          x: start.x,
          y: start.y + i
        })
      } else {
        holder.push({
          x: start.x,
          y: start.y - i
        })
      }
    }
  }
  return holder;
}

const generateShipCoordinates = (shipType: string, start: CoordinatesType, orientation: string): CoordinatesType[] => {
  switch(shipType) {
    case "carrier":
      return generateCoordinates(5, start, orientation)
    case "battleship":
      return generateCoordinates(4, start, orientation)
    case "destroyer":
      return generateCoordinates(3, start, orientation)
    case "submarine":
      return generateCoordinates(3, start, orientation)
    case "patrolBoat":
      return generateCoordinates(2, start, orientation)
    default:
      return []
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
  orientationControl.classList.add('orientaion-control');
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
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal');

    const modal = document.createElement('div');

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancel"
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.addEventListener("click", () => {
      location.reload();
    })
    modal.appendChild(cancelBtn);

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    const instructionsContainer = document.createElement('div');
    instructionsContainer.classList.add('instructions-container');
    instructionsContainer.appendChild(renderInstructions("carrier"));
    
    modalHeader.appendChild(instructionsContainer);

    const controlContainer = renderOrientationControl();
    
    modalHeader.appendChild(controlContainer);

    modal.appendChild(modalHeader);
    
    const startBtnContainer = document.createElement('div');
    startBtnContainer.classList.add('start-btn-container');
    startBtnContainer.classList.add('hidden');

    modal.appendChild(startBtnContainer);

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
          if (shipType !== "null" && shipType !== undefined) {
            EventsObserver.publish("shipPlacementRequest", {data: {
              shipType,
              coordinates,
              orientation: controlContainer.value
            }})
          }
        })
        tile.addEventListener("mouseenter", function(this: HTMLElement) {
          const currentCoordinates = this.dataset.coordinates;
          const shipType = (instructionsContainer.firstChild as HTMLElement).dataset.shipType;
          const orientation = controlContainer.value;
          if (shipType !== undefined && currentCoordinates !== undefined && orientation !== undefined) {
            const shipCoordinates = generateShipCoordinates(shipType, JSON.parse(currentCoordinates), orientation)
            const tilesToMark = Array.from(tilesList).filter((currentTile: HTMLElement) => {
              return shipCoordinates.some(coordinates => JSON.stringify(coordinates) === currentTile.dataset.coordinates)
            })
            tilesList.forEach(cell => {
              if (tilesToMark.includes(cell)) {
                cell.classList.add('temp-ship')
              } else {
                cell.classList.remove('temp-ship')
              }
            })
          }
        })
      }
    })
    
    modal.appendChild(board);

    modalContainer.appendChild(modal);

    appBody.appendChild(modalContainer);
  }
}

const renderStartButton = ():void => {
  const container = document.querySelector('div.start-btn-container');
  const modalHeader = document.querySelector('div.modal-header');
  if (container !== null) {
    const child = container.firstChild;
    if (child !== null) container.removeChild(child);
    container.appendChild(startButtonComponent());
    container.classList.remove('hidden');
  }
  if (modalHeader !== null) {
    modalHeader.remove();
  }
}

const renderGame = (): HTMLElement => {
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game-container');

  const boardContainer = document.createElement('div');

  const playerBoardContainer = document.createElement('div');
  playerBoardContainer.classList.add('boards')
  const playerBoardHeading = document.createElement('h2');
  playerBoardHeading.textContent = "Your board";
  playerBoardContainer.appendChild(playerBoardHeading)
  const playerBoard = renderBoard();
  playerBoard.dataset.name = "player"
  playerBoard.classList.add('player-board')
  playerBoard.classList.add('board-container');
  playerBoardContainer.appendChild(playerBoard);

  boardContainer.appendChild(playerBoardContainer)

  const computerBoardContainer = document.createElement('div');
  computerBoardContainer.classList.add('boards')
  const computerBoardHeading = document.createElement('h2');
  computerBoardHeading.textContent = "Enemy's board";
  computerBoardContainer.appendChild(computerBoardHeading)
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
  computerBoardContainer.appendChild(computerBoard);

  boardContainer.appendChild(computerBoardContainer);

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
  const modal = document.createElement('div');
  modal.classList.add('modal');

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
  modal.appendChild(winnerContainer)
  return modal
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
  EventsObserver.subscribe("shipPlaced", changeInstructions);
  EventsObserver.subscribe("renderStartGame", renderStartButton)
  EventsObserver.subscribe("markShips", markShips);
  EventsObserver.subscribe("tileIsHit", handleTileHit);
  EventsObserver.subscribe("shipIsHit", markHitShip);
  EventsObserver.subscribe("winnerFound", showWinner);
}

export default domSubscriptions