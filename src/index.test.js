import { computerPlayer } from './computer-player';
import { Ship, Gameboard, setCoordinate } from './index';

test('must return correct object', () => {
  expect(setCoordinate(2, 3)).toStrictEqual({ x: 2, y: 3 });
});

const ship = Ship(5, 'vertical');

test('must return orientation', () => {
  expect(ship.getOrientation()).toBe('vertical');
});

test('must return the current HP', () => {
  expect(ship.getHP()).toBe(5);
  ship.isHit();
  expect(ship.getHP()).toBe(4);
});

test('must check if ship is sunk', () => {
  expect(ship.isSunk()).toBe(false);
  ship.isHit();
  ship.isHit();
  ship.isHit();
  ship.isHit();
  expect(ship.isSunk()).toBe(true);
});

const playerBoard = Gameboard();

test('must place carrier correctly', () => {
  playerBoard.createCarrier(setCoordinate(2, 3), 'horizontal');
  expect(playerBoard.ships.carrier.coordinates).toStrictEqual([{ x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 6, y: 3 }]);
});

test('must place battleship correctly', () => {
  playerBoard.createBattleship(setCoordinate(7, 4), 'horizontal');
  expect(playerBoard.ships.battleship.coordinates).toStrictEqual([{ x: 7, y: 4 }, { x: 6, y: 4 }, { x: 5, y: 4 }, { x: 4, y: 4 }]);
});

test('must place destroyer correctly', () => {
  playerBoard.createDestroyer(setCoordinate(5, 5), 'vertical');
  expect(playerBoard.ships.destroyer.coordinates).toStrictEqual([{ x: 5, y: 5 }, { x: 5, y: 6 }, { x: 5, y: 7 }]);
});

test('must place patrolBoat correctly', () => {
  playerBoard.createBoat(setCoordinate(9, 3), 'horizontal');
  expect(playerBoard.ships.patrolBoat.coordinates).toStrictEqual([{ x: 9, y: 3 }, { x: 8, y: 3 }]);
});

test('must receive attack correctly', () => {
  playerBoard.receiveAttack(setCoordinate(1, 1));
  playerBoard.receiveAttack(setCoordinate(9, 9));
  playerBoard.receiveAttack(setCoordinate(9, 3));
  playerBoard.receiveAttack(setCoordinate(8, 3));
  expect(playerBoard.missed).toStrictEqual([{ x: 1, y: 1 }, { x: 9, y: 9 }]);
  expect(playerBoard.plays).toStrictEqual([{ x: 1, y: 1 }, { x: 9, y: 9 }, { x: 9, y: 3 }, { x: 8, y: 3 }]);
});

test('must update hit received', () => {
  expect(playerBoard.ships.patrolBoat.name.getHP()).toBe(0);
});

test('must notify that a ship is sunk', () => {
  expect(playerBoard.ships.patrolBoat.name.isSunk()).toBe(true);
});

const newBoard = Gameboard();

newBoard.createCarrier(setCoordinate(0, 0), 'horizontal');
newBoard.createBattleship(setCoordinate(0, 9), 'vertical');
newBoard.createDestroyer(setCoordinate(9, 9), 'horizontal');
newBoard.createSubmarine(setCoordinate(9, 0), 'vertical');
newBoard.createBoat(setCoordinate(5, 5), 'horizontal');

newBoard.receiveAttack(setCoordinate(0, 0));
newBoard.receiveAttack(setCoordinate(1, 0));
newBoard.receiveAttack(setCoordinate(2, 0));
newBoard.receiveAttack(setCoordinate(3, 0));
newBoard.receiveAttack(setCoordinate(4, 0));
test('must notify carrier sunk', () => {
  expect(newBoard.ships.carrier.sunkStatus).toBe(true);
});
newBoard.receiveAttack(setCoordinate(0, 9));
newBoard.receiveAttack(setCoordinate(0, 8));
newBoard.receiveAttack(setCoordinate(0, 7));
newBoard.receiveAttack(setCoordinate(0, 6));
test('must notify battleship sunk', () => {
  expect(newBoard.ships.battleship.sunkStatus).toBe(true);
});
newBoard.receiveAttack(setCoordinate(9, 9));
newBoard.receiveAttack(setCoordinate(8, 9));
newBoard.receiveAttack(setCoordinate(7, 9));
test('must notify destroyer sunk', () => {
  expect(newBoard.ships.destroyer.sunkStatus).toBe(true);
});
newBoard.receiveAttack(setCoordinate(9, 0));
newBoard.receiveAttack(setCoordinate(9, 1));
newBoard.receiveAttack(setCoordinate(9, 2));
test('must notify submarine sunk', () => {
  expect(newBoard.ships.submarine.sunkStatus).toBe(true);
});
newBoard.receiveAttack(setCoordinate(5, 5));
newBoard.receiveAttack(setCoordinate(6, 5));
test('must notify boat sunk', () => {
  expect(newBoard.ships.patrolBoat.sunkStatus).toBe(true);
});

test('must notify that all ships are sunk', () => {
  expect(newBoard.shipsSunk()).toBe(true);
});

const testBoard = Gameboard();

testBoard.createCarrier(setCoordinate(0, 0), 'horizontal');
testBoard.createBattleship(setCoordinate(0, 9), 'vertical');
testBoard.createDestroyer(setCoordinate(9, 9), 'horizontal');
testBoard.createSubmarine(setCoordinate(9, 0), 'vertical');
testBoard.createBoat(setCoordinate(5, 5), 'horizontal');

let counter = 0;
while (!testBoard.shipsSunk()) {
  computerPlayer(testBoard);
  counter++;
  console.log(counter);
  console.log(testBoard.plays);
}
