import EventsObserver from './eventsObserver';
import {
  Ship,
  GameBoard
} from './models';

describe("tests the Ship class", () => {
  const ship = new Ship(5);

  test("ship object hash the hits property", () => {
    expect(ship).toHaveProperty("hits");
  })
  test("ship object has the hit method", () => {
    expect(ship).toHaveProperty("hit");
  });
  test("ship object has the isSunk method", () => {
    expect(ship).toHaveProperty("isSunk");
  });
  test("isSunk should return false before ship is hit", () => {
    expect(ship.isSunk()).toBe(false);
  });
  test("calling hit method should increase hits property value by 1", () => {
    ship.hit();
    expect(ship.hits).toBe(1);
  });
  test("isSunk should return true if ship is hit 5 times", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  })

});

describe("tests the Gameboard factory", () => {
  let gameBoard = new GameBoard();

  beforeEach(() => {
    gameBoard = new GameBoard();
  })

  test("places carrier correctly when placed on left side of board horizontally", () => {
    const carrier = [
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0},
      {x: 3, y: 0},
      {x: 4, y: 0},
    ]
    gameBoard.placeCarrier({x: 0, y:0}, "horizontal");
    expect(gameBoard.carrierCoordinates).toStrictEqual(carrier);
  });
  test("places carrier correctly when placed on right side of board horizontally", () => {
    const carrier = [
      {x: 9, y: 0},
      {x: 8, y: 0},
      {x: 7, y: 0},
      {x: 6, y: 0},
      {x: 5, y: 0},
    ]
    gameBoard.placeCarrier({x: 9, y:0}, "horizontal");
    expect(gameBoard.carrierCoordinates).toStrictEqual(carrier);
  });
  test("places carrier correctly when placed on upper half of board vertically", () => {
    const carrier = [
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 0, y: 2},
      {x: 0, y: 3},
      {x: 0, y: 4},
    ]
    gameBoard.placeCarrier({x: 0, y:0}, "vertical");
    expect(gameBoard.carrierCoordinates).toStrictEqual(carrier);
  });
  test("places carrier correctly when placed on lower half of board vertically", () => {
    const carrier = [
      {x: 0, y: 9},
      {x: 0, y: 8},
      {x: 0, y: 7},
      {x: 0, y: 6},
      {x: 0, y: 5},
    ]
    gameBoard.placeCarrier({x: 0, y:9}, "vertical");
    expect(gameBoard.carrierCoordinates).toStrictEqual(carrier);
  });
  
  test("places battleship correctly when placed on left side of board horizontally", () => {
    const battleship = [
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0},
      {x: 3, y: 0},
    ]
    gameBoard.placeBattleship({x: 0, y:0}, "horizontal");
    expect(gameBoard.battleshipCoordinates).toStrictEqual(battleship);
  });
  test("places battleshipt correctly when placed on right side of board horizontally", () => {
    const battleship = [
      {x: 9, y: 0},
      {x: 8, y: 0},
      {x: 7, y: 0},
      {x: 6, y: 0},
    ]
    gameBoard.placeBattleship({x: 9, y:0}, "horizontal");
    expect(gameBoard.battleshipCoordinates).toStrictEqual(battleship);
  });
  test("places battleship correctly when placed on upper half of board vertically", () => {
    const battleship = [
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 0, y: 2},
      {x: 0, y: 3},
    ]
    gameBoard.placeBattleship({x: 0, y:0}, "vertical");
    expect(gameBoard.battleshipCoordinates).toStrictEqual(battleship);
  });
  test("places battleship correctly when placed on lower half of board vertically", () => {
    const battleship = [
      {x: 0, y: 9},
      {x: 0, y: 8},
      {x: 0, y: 7},
      {x: 0, y: 6},
    ]
    gameBoard.placeBattleship({x: 0, y:9}, "vertical");
    expect(gameBoard.battleshipCoordinates).toStrictEqual(battleship);
  });

  test("places destroyer correctly when placed on left side of board horizontally", () => {
    const destroyer = [
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0},
    ]
    gameBoard.placeDestroyer({x: 0, y:0}, "horizontal");
    expect(gameBoard.destroyerCoordinates).toStrictEqual(destroyer);
  });
  test("places destroyer correctly when placed on right side of board horizontally", () => {
    const destroyer = [
      {x: 9, y: 0},
      {x: 8, y: 0},
      {x: 7, y: 0},
    ]
    gameBoard.placeDestroyer({x: 9, y:0}, "horizontal");
    expect(gameBoard.destroyerCoordinates).toStrictEqual(destroyer);
  });
  test("places destroyer correctly when placed on upper half of board vertically", () => {
    const destroyer = [
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 0, y: 2},
    ]
    gameBoard.placeDestroyer({x: 0, y:0}, "vertical");
    expect(gameBoard.destroyerCoordinates).toStrictEqual(destroyer);
  });
  test("places destroyer correctly when placed on lower half of board vertically", () => {
    const destroyer = [
      {x: 0, y: 9},
      {x: 0, y: 8},
      {x: 0, y: 7},
    ]
    gameBoard.placeDestroyer({x: 0, y:9}, "vertical");
    expect(gameBoard.destroyerCoordinates).toStrictEqual(destroyer);
  });

  test("places submarine correctly when placed on left side of board horizontally", () => {
    const submarine = [
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0},
    ]
    gameBoard.placeSubmarine({x: 0, y:0}, "horizontal");
    expect(gameBoard.submarineCoordinates).toStrictEqual(submarine);
  });
  test("places submarine correctly when placed on right side of board horizontally", () => {
    const submarine = [
      {x: 9, y: 0},
      {x: 8, y: 0},
      {x: 7, y: 0},
    ]
    gameBoard.placeSubmarine({x: 9, y:0}, "horizontal");
    expect(gameBoard.submarineCoordinates).toStrictEqual(submarine);
  });
  test("places submarine correctly when placed on upper half of board vertically", () => {
    const submarine = [
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 0, y: 2},
    ]
    gameBoard.placeSubmarine({x: 0, y:0}, "vertical");
    expect(gameBoard.submarineCoordinates).toStrictEqual(submarine);
  });
  test("places submarine correctly when placed on lower half of board vertically", () => {
    const submarine = [
      {x: 0, y: 9},
      {x: 0, y: 8},
      {x: 0, y: 7},
    ]
    gameBoard.placeSubmarine({x: 0, y:9}, "vertical");
    expect(gameBoard.submarineCoordinates).toStrictEqual(submarine);
  });

  test("places patrolBoat correctly when placed on left side of board horizontally", () => {
    const patrolBoat = [
      {x: 0, y: 0},
      {x: 1, y: 0},
    ]
    gameBoard.placePatrolBoat({x: 0, y:0}, "horizontal");
    expect(gameBoard.patrolBoatCoordinates).toStrictEqual(patrolBoat);
  });
  test("places patrolBoat correctly when placed on right side of board horizontally", () => {
    const patrolBoat = [
      {x: 9, y: 0},
      {x: 8, y: 0},
    ]
    gameBoard.placePatrolBoat({x: 9, y:0}, "horizontal");
    expect(gameBoard.patrolBoatCoordinates).toStrictEqual(patrolBoat);
  });
  test("places patrolBoat correctly when placed on upper half of board vertically", () => {
    const patrolBoat = [
      {x: 0, y: 0},
      {x: 0, y: 1},
    ]
    gameBoard.placePatrolBoat({x: 0, y:0}, "vertical");
    expect(gameBoard.patrolBoatCoordinates).toStrictEqual(patrolBoat);
  });
  test("places patrolBoat correctly when placed on lower half of board vertically", () => {
    const patrolBoat = [
      {x: 0, y: 9},
      {x: 0, y: 8},
    ]
    gameBoard.placePatrolBoat({x: 0, y:9}, "vertical");
    expect(gameBoard.patrolBoatCoordinates).toStrictEqual(patrolBoat);
  });

  test("doesn't place a ship if it overlaps another ship horizontally", () => {
    gameBoard.placeCarrier({x: 0, y:0}, "horizontal");
    gameBoard.placeBattleship({x: 2, y: 0}, "horizontal");
    expect(gameBoard.battleshipCoordinates).toStrictEqual(null);
  });

  test("doesn't place a ship if it overlaps another ship vertically", () => {
    gameBoard.placeCarrier({x: 0, y:0}, "vertical");
    gameBoard.placeBattleship({x: 0, y: 2}, "horizontal");
    expect(gameBoard.battleshipCoordinates).toStrictEqual(null);
  });

  test("gameboard has receiveAttack method", () => {
    expect(gameBoard).toHaveProperty("receiveAttack");
  });

  test("gameboard records all hit tiles", () => {
    const tiles = [
      {x: 0, y: 0},
      {x: 5, y: 3},
      {x: 9, y: 9},
    ]
    gameBoard.receiveAttack({x: 0, y: 0});
    gameBoard.receiveAttack({x: 5, y: 3});
    gameBoard.receiveAttack({x: 9, y: 9});
    expect(gameBoard.attackedTiles).toStrictEqual(tiles);
  });
  test("gameboard publishes a message if a ship was hit", () => {
    const mockCallback = jest.fn(data => data.data);
    EventsObserver.subscribe("shipIsHit", mockCallback);
    gameBoard.placeCarrier({x: 0, y:0}, "horizontal");
    gameBoard.receiveAttack({x: 0, y: 0});
    expect(mockCallback.mock.calls).toHaveLength(1);
    expect(mockCallback.mock.results[0].value).toStrictEqual({x: 0, y: 0});
  })
  test("gameboard doesn't record an attack if the same tile is already attacked", () => {
    const tiles = [
      {x: 0, y: 0},
      {x: 5, y: 5},
    ]
    gameBoard.receiveAttack({x: 0, y: 0});
    gameBoard.receiveAttack({x: 5, y: 5});
    gameBoard.receiveAttack({x: 0, y: 0});
    gameBoard.receiveAttack({x: 5, y: 5});
    expect(gameBoard.attackedTiles).toStrictEqual(tiles);
  });

  test("gameBoard has allShipsSunk method", () => {
    expect(gameBoard).toHaveProperty("allShipsSunk");
  });

  test("gameboard reports if all ships have sunk", () => {
    const mockCallback = jest.fn(bool => bool);
    gameBoard.placeCarrier({x: 0, y:0}, "horizontal");
    gameBoard.placeBattleship({x: 0, y:1}, "horizontal");
    gameBoard.placeDestroyer({x: 0, y:2}, "horizontal");
    gameBoard.placeSubmarine({x: 0, y:3}, "horizontal");
    gameBoard.placePatrolBoat({x: 0, y:4}, "horizontal");
    gameBoard.receiveAttack({x: 0, y: 0});
    gameBoard.receiveAttack({x: 1, y: 0});
    gameBoard.receiveAttack({x: 2, y: 0});
    gameBoard.receiveAttack({x: 3, y: 0});
    gameBoard.receiveAttack({x: 4, y: 0});
    gameBoard.receiveAttack({x: 0, y: 1});
    gameBoard.receiveAttack({x: 1, y: 1});
    gameBoard.receiveAttack({x: 2, y: 1});
    gameBoard.receiveAttack({x: 3, y: 1});
    gameBoard.receiveAttack({x: 0, y: 2});
    gameBoard.receiveAttack({x: 1, y: 2});
    gameBoard.receiveAttack({x: 2, y: 2});
    gameBoard.receiveAttack({x: 0, y: 3});
    gameBoard.receiveAttack({x: 1, y: 3});
    gameBoard.receiveAttack({x: 2, y: 3});
    gameBoard.receiveAttack({x: 0, y: 4});
    gameBoard.receiveAttack({x: 1, y: 4});
    gameBoard.allShipsSunk(mockCallback);
    expect(mockCallback.mock.calls).toHaveLength(1);
    expect(mockCallback.mock.results[0].value).toBe(true);
  });
})