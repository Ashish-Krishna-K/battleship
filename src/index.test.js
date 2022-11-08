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
