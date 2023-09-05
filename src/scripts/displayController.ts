import { type EventPayloadType, type CoordinatesType, type ShipMarkersType } from '../types/appTypes';
import EventsObserver from './eventsObserver';

// Returns capitalized names for ships to display to user
const displayShipName = (ship: string): string => {
  switch (ship) {
    case 'carrier':
      return 'Carrier';
    case 'battleship':
      return 'Battleship';
    case 'destroyer':
      return 'Destroyer';
    case 'submarine':
      return 'Submarine';
    case 'patrolBoat':
      return 'Patrol Boat';
    default:
      return '';
  }
};

// a function to generate coordinates corresponding to the 
// ship length provided, this is used to display a ship object
// on hover when the user is placing ships
const generateCoordinates = (length: number, start: CoordinatesType, orientation: string): CoordinatesType[] => {
  // generated coordinates will be returned as an array
  const holder: CoordinatesType[] = [];
  for (let i = 0; i < length; i++) {
    // if orientation is horizontal we'll have to change only 
    // the x axis if it's vertical then we'll have to change only
    // the y axis
    if (orientation === 'horizontal') {
      // when the starting x axis coordinate plus the ship length is
      // greater than the max value of 9 then we'll have generate 
      // the coordinates in the opposite direction hence if start.x
      // + length is lesser than 9 we'll add if it's greater we'll
      // subtract. Same logic applies to vertical direction only in
      // that case the y axis is considered
      if (start.x + length < 9) {
        holder.push({
          x: start.x + i,
          y: start.y,
        });
      } else {
        holder.push({
          x: start.x - i,
          y: start.y,
        });
      }
    } else {
      if (start.y + length < 9) {
        holder.push({
          x: start.x,
          y: start.y + i,
        });
      } else {
        holder.push({
          x: start.x,
          y: start.y - i,
        });
      }
    }
  }
  return holder;
};

// a function to generate coordinates of the ship if it's placed in 
// given start position
const generateShipCoordinates = (shipType: string, start: CoordinatesType, orientation: string): CoordinatesType[] => {
  switch (shipType) {
    case 'carrier':
      return generateCoordinates(5, start, orientation);
    case 'battleship':
      return generateCoordinates(4, start, orientation);
    case 'destroyer':
      return generateCoordinates(3, start, orientation);
    case 'submarine':
      return generateCoordinates(3, start, orientation);
    case 'patrolBoat':
      return generateCoordinates(2, start, orientation);
    default:
      return [];
  }
};

// a function to render the heading that says "place your..."
// i couldn't come up with a better name hence went with 
// instructions
const renderInstructions = (ship: string): HTMLElement => {
  const instructions = document.createElement('h2');
  // this is used as a state holder to keep track of which ship
  // is being placed hence adding a data attribute
  instructions.dataset.shipType = ship;
  instructions.classList.add('current-ship');
  instructions.textContent = `Place your ${displayShipName(ship)}`;
  return instructions;
};

// a function to change the orientation when the 'rotate' button
// is clicked
const renderOrientationControl = (): HTMLButtonElement => {
  const orientationControl = document.createElement('button');
  orientationControl.classList.add('orientaion-control');
  // once again the orientation state is stored as a value in the
  // button
  orientationControl.value = 'horizontal';
  orientationControl.textContent = 'Rotate';
  orientationControl.addEventListener('click', function (this: HTMLButtonElement) {
    // change the button's value on click, this is needed because
    // the button's value is the state to determine the orientation
    if (this.value === 'horizontal') {
      this.value = 'vertical';
    } else {
      this.value = 'horizontal';
    }
  });
  return orientationControl;
};

// a function to render a board the user can click on
const renderBoard = (): HTMLDivElement => {
  const container = document.createElement('div');
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      cell.classList.add('tile');
      // the coordinates is everything throught the app.
      // to get the details of which coordinate is clicked
      // saving it as a string in the data attribute
      cell.dataset.coordinates = JSON.stringify({ x: j, y: i });
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
  return container;
};

// a function to change the "instructions" heading as and when a ship is
// placed
const changeInstructions = ({ data }: EventPayloadType): void => {
  const container = document.querySelector('div.instructions-container');
  if (container !== null) {
    // replace the current elements of the container with new
    // element
    const child = container.firstChild;
    if (child !== null) container.removeChild(child);
    container.appendChild(renderInstructions(data));
  }
};

// event handler when the start game button is clicking the start  
// game button should replace the current children of the app div 
// and render the game boards
const startGame = ():void => {
  const appBody = document.querySelector('div#app');
  if (appBody !== null) {
    const child = appBody.firstChild;
    if (child !== null) child.remove();
    EventsObserver.publish('placeComputerShips', { data: null });
    appBody.appendChild(renderGame());
    EventsObserver.publish('markShipsRequest', { data: 'player' });
  }
}

// a function to generate the "start game" button
const startButtonComponent = (): HTMLButtonElement => {
  const startBtn = document.createElement('button');
  startBtn.classList.add('start-game-btn');
  startBtn.textContent = 'Start Game';
  startBtn.addEventListener('click', startGame);
  return startBtn;
};

// a function to render the "place ships board" on initial page load
const renderPlaceShipsBoard = (): void => {
  const appBody = document.querySelector('div#app');

  if (appBody !== null) {
    // the entire contents of this board will be a modal to give a 
    // pop-up window effect
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal');

    const modal = document.createElement('div');

    const cancelBtn = document.createElement('button');
    // easiest way to directly append the svg to the html using 
    // javascript
    cancelBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>close</title>
          <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      `;
    cancelBtn.classList.add('cancel-btn');
    // the cancel button's purpose is to reset the current ship
    // placements on the board. Easiest way to acheive it is to 
    // reload the page
    cancelBtn.addEventListener('click', () => {
      location.reload();
    });
    modal.appendChild(cancelBtn);

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    const instructionsContainer = document.createElement('div');
    instructionsContainer.classList.add('instructions-container');
    instructionsContainer.appendChild(renderInstructions('carrier'));

    modalHeader.appendChild(instructionsContainer);

    const controlContainer = renderOrientationControl();

    modalHeader.appendChild(controlContainer);

    modal.appendChild(modalHeader);

    const startBtnContainer = document.createElement('div');
    startBtnContainer.classList.add('start-btn-container');
    // since the modal has display flex property on it,
    // the empty container will take up space hence adding 
    // a display: none to it when it's not required
    startBtnContainer.classList.add('hidden');

    modal.appendChild(startBtnContainer);

    const board = renderBoard();
    board.classList.add('player-board');
    board.classList.add('board-container');
    const tilesList = board.querySelectorAll('div.tile');
    // attaching the event listener to each cell in the board
    // that will mark the tile during the game loop
    tilesList.forEach((tile: HTMLElement) => {
      let coordinates: CoordinatesType;
      if (tile.dataset.coordinates !== null && tile.dataset.coordinates !== undefined) {
        // the coordinates is stored as a string hence parsing it to 
        // get the object back
        coordinates = JSON.parse(tile.dataset.coordinates);
        tile.addEventListener('click', () => {
          const shipType = (instructionsContainer.firstChild as HTMLElement).dataset.shipType;
          // for somereason the null here is a string during runtime hence testing
          // for a string "null" instead of the null object
          if (shipType !== 'null' && shipType !== undefined) {
            EventsObserver.publish('shipPlacementRequest', {
              data: {
                shipType,
                coordinates,
                orientation: controlContainer.value,
              },
            });
          }
        });
        // when the user hovers over the board the ship's object should be indicated to the
        // user to give the user a visiual indication.
        tile.addEventListener('mouseenter', function (this: HTMLElement) {
          const currentCoordinates = this.dataset.coordinates;
          const shipType = (instructionsContainer.firstChild as HTMLElement).dataset.shipType;
          const orientation = controlContainer.value;
          if (shipType !== undefined && currentCoordinates !== undefined && orientation !== undefined) {
            // generating the tentative coordinates based on the current tile's coordinate as start position
            const shipCoordinates = generateShipCoordinates(shipType, JSON.parse(currentCoordinates), orientation);
            // the idea is to mark only the ship's tentative tiles, and the tiles which corresponds
            // to the tentative tiles will change as the user hovers over each cell hence creating 
            // an array of tiles which corresponds to the generated shipCoordinates
            const tilesToMark = Array.from(tilesList).filter((currentTile: HTMLElement) => {
              return shipCoordinates.some(
                (coordinates) => JSON.stringify(coordinates) === currentTile.dataset.coordinates,
              );
            });
            // each time the eventHandler is triggered, remove the marking from all the tiles
            // that are not included in the tilesToMark array and apply the mark if it's 
            // included
            tilesList.forEach((cell) => {
              if (tilesToMark.includes(cell)) {
                cell.classList.add('temp-ship');
              } else {
                cell.classList.remove('temp-ship');
              }
            });
          }
        });
      }
    });

    modal.appendChild(board);

    modalContainer.appendChild(modal);

    appBody.appendChild(modalContainer);
  }
};

// a function to render the start button once all the ships are placed
const renderStartButton = (): void => {
  const container = document.querySelector('div.start-btn-container');
  const modalHeader = document.querySelector('div.modal-header');
  if (container !== null) {
    // just in case remove all current contents of the container
    const child = container.firstChild;
    if (child !== null) child.remove();
    container.appendChild(startButtonComponent());
    container.classList.remove('hidden');
  }
  if (modalHeader !== null) {
    modalHeader.remove();
  }
};

// a eventHandler when a tile is clicked by the user to attack.
function tileClickEventHandler (this: HTMLDivElement): void {
  let coordinates = this.dataset.coordinates;
  if (coordinates !== undefined) coordinates = JSON.parse(coordinates);
  EventsObserver.publish('playerAttackRequest', { data: coordinates });
}

// render the player and computer boards to start the game
const renderGame = (): HTMLElement => {
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game-container');

  const boardContainer = document.createElement('div');

  const playerBoardContainer = document.createElement('div');
  playerBoardContainer.classList.add('boards');
  const playerBoardHeading = document.createElement('h2');
  playerBoardHeading.textContent = 'Your board';
  playerBoardContainer.appendChild(playerBoardHeading);
  const playerBoard = renderBoard();
  playerBoard.dataset.name = 'player';
  playerBoard.classList.add('player-board');
  playerBoard.classList.add('board-container');
  playerBoardContainer.appendChild(playerBoard);

  boardContainer.appendChild(playerBoardContainer);

  const computerBoardContainer = document.createElement('div');
  computerBoardContainer.classList.add('boards');
  const computerBoardHeading = document.createElement('h2');
  computerBoardHeading.textContent = "Enemy's board";
  computerBoardContainer.appendChild(computerBoardHeading);
  const computerBoard = renderBoard();
  computerBoard.dataset.name = 'computer';
  computerBoard.classList.add('computer-board');
  computerBoard.classList.add('board-container');
  // the user plays the game by clicking on the tiles in their enemy's 
  // board i.e., the computer's board and the user should not be able
  // click on their own board hence adding the eventHandler only on the
  // computer board
  const gameTiles = computerBoard.querySelectorAll('div.tile');
  gameTiles.forEach((tile: HTMLDivElement) => {
    tile.addEventListener('click', tileClickEventHandler);
  });
  computerBoardContainer.appendChild(computerBoard);

  boardContainer.appendChild(computerBoardContainer);

  gameContainer.appendChild(boardContainer);
  return gameContainer;
};

// a function to return the winner display component
const winnerContainerComponent = (winner: string): HTMLDivElement => {
  // showing the winner as modal to give a pop-up window appearance
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const winnerContainer = document.createElement('div');
  winnerContainer.classList.add('winner-container');

  const winnerHeading = document.createElement('h2');
  winnerHeading.textContent = winner === 'computer' ? 'Computer wins the game!' : 'Player wins the game!';
  winnerContainer.appendChild(winnerHeading);

  const playAgainBtn = document.createElement('button');
  playAgainBtn.textContent = 'Play Again!';
  // easiest way to restart the game
  playAgainBtn.addEventListener('click', () => {
    location.reload();
  });
  winnerContainer.appendChild(playAgainBtn);
  modal.appendChild(winnerContainer);
  return modal;
};


// a function to mark a tile as attacked
const markTile = (allTiles: NodeList, toMark: string): void => {
  allTiles.forEach((tile: HTMLElement) => {
    if (tile.dataset.coordinates === toMark) {
      tile.classList.add('attacked');
    }
  });
};

// a function to mark the provided tile as ship tile 
const markShip = (allTiles: NodeList, toMark: string): void => {
  allTiles.forEach((tile: HTMLElement) => {
    if (tile.dataset.coordinates === toMark) {
      tile.classList.add('ship');
    }
  });
};

// a function to mark the coordinates corresponding to the ship's placement
// on the player board to give the user a visual indication of their 
// own board and ships
const markShips = ({ data }: EventPayloadType): void => {
  const { coordinates, board } = data;
  // below if statement was remenant of testing the computer board's ship
  // placements decided to leave it as it is if needed in future
  let boardToMark;
  if (board === 'player') {
    boardToMark = document.querySelector('div.player-board');
  } else {
    boardToMark = document.querySelector('div.computer-board');
  }
  const allTiles = boardToMark?.querySelectorAll('div.tile');
  // the coordinates data from the EventPayload is of ShipMarkersType
  // which has both coordinates and ship name hence using Array.map to 
  // return only an array of coordinates
  const shipCoordinates = coordinates.map((item: ShipMarkersType) => item.coordinate)
  if (allTiles !== undefined) {
    shipCoordinates.forEach((coordinate: CoordinatesType) => {
      markShip(allTiles, JSON.stringify(coordinate))
    })
  }
};

// a handler function when the shipIsHit event is fired, mark
// tile in the corresponding board
const markHitShip = ({ data }: EventPayloadType): void => {
  const { coordinate, board } = data;
  const toMark = JSON.stringify(coordinate);
  let boardToMark;
  if (board === 'player') {
    boardToMark = document.querySelector('div.player-board');
  } else {
    boardToMark = document.querySelector('div.computer-board');
  }
  const allTiles = boardToMark?.querySelectorAll('div.tile');
  if (allTiles !== undefined) markShip(allTiles, toMark);
};


// a handler function to implement the tile hit function on the 
// correct board
const handleTileHit = ({ data }: EventPayloadType): void => {
  const { coordinate, board } = data;
  const toMark = JSON.stringify(coordinate);
  let boardToMark;
  if (board === 'player') {
    boardToMark = document.querySelector('div.player-board');
  } else {
    boardToMark = document.querySelector('div.computer-board');
  }
  const allTiles = boardToMark?.querySelectorAll('div.tile');
  if (allTiles !== undefined) markTile(allTiles, toMark);
};

// a handler function to display the winner of the game to user
const showWinner = ({ data }: EventPayloadType): void => {
  const appBody = document.querySelector('div#app');
  if (appBody !== null) {
    // remove current contents of the appBody
    const child = appBody.firstChild;
    if (child !== null) child.remove()
    appBody.appendChild(winnerContainerComponent(data));
  }
};

// subscribe to all required events, this is put in a function and 
// exported in order to call it when the index.ts file is loaded
const domSubscriptions = (): void => {
  EventsObserver.subscribe('initialPageLoad', renderPlaceShipsBoard);
  EventsObserver.subscribe('shipPlaced', changeInstructions);
  EventsObserver.subscribe('renderStartGame', renderStartButton);
  EventsObserver.subscribe('markShips', markShips);
  EventsObserver.subscribe('tileIsHit', handleTileHit);
  EventsObserver.subscribe('shipIsHit', markHitShip);
  EventsObserver.subscribe('winnerFound', showWinner);
};

export default domSubscriptions;
