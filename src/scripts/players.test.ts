import EventsObserver from './eventsObserver'
import {
  computerAttacks,
  computerBoard,
  placeComputerShips,
  placePlayerShips,
  playerBoard,
  playerAttacks
} from './players'

describe('testing player actions', () => {
  test('places carrier', () => {
    const shipsPlaced = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
      { x: 0, y: 4 }
    ]
    placePlayerShips('carrier', { x: 0, y: 0 }, 'vertical')
    const shipPlacedCoordinates = playerBoard.shipsPlacedTiles.map((tile) => tile.coordinate)
    expect(shipPlacedCoordinates.sort((a, b) => a.x - b.x)).toStrictEqual(shipsPlaced.sort((a, b) => a.x - b.x))
  })
  test('places battleship', () => {
    const shipsPlaced = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
      { x: 0, y: 4 },
      { x: 6, y: 9 },
      { x: 7, y: 9 },
      { x: 8, y: 9 },
      { x: 9, y: 9 }
    ]
    placePlayerShips('battleship', { x: 9, y: 9 }, 'horizontal')
    const shipPlacedCoordinates = playerBoard.shipsPlacedTiles.map((tile) => tile.coordinate)
    expect(shipPlacedCoordinates.sort((a, b) => a.x - b.x)).toStrictEqual(shipsPlaced.sort((a, b) => a.x - b.x))
  })
  test('places destroyer', () => {
    const shipsPlaced = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
      { x: 0, y: 4 },
      { x: 6, y: 9 },
      { x: 7, y: 9 },
      { x: 8, y: 9 },
      { x: 9, y: 9 },
      { x: 5, y: 5 },
      { x: 6, y: 5 },
      { x: 7, y: 5 }
    ]
    placePlayerShips('destroyer', { x: 5, y: 5 }, 'horizontal')
    const shipPlacedCoordinates = playerBoard.shipsPlacedTiles.map((tile) => tile.coordinate)
    expect(shipPlacedCoordinates.sort((a, b) => a.x - b.x)).toStrictEqual(shipsPlaced.sort((a, b) => a.x - b.x))
  })
  test('places submarine', () => {
    const shipsPlaced = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
      { x: 0, y: 4 },
      { x: 6, y: 9 },
      { x: 7, y: 9 },
      { x: 8, y: 9 },
      { x: 9, y: 9 },
      { x: 5, y: 5 },
      { x: 6, y: 5 },
      { x: 7, y: 5 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 3, y: 4 }
    ]
    placePlayerShips('submarine', { x: 3, y: 2 }, 'vertical')
    const shipPlacedCoordinates = playerBoard.shipsPlacedTiles.map((tile) => tile.coordinate)
    expect(shipPlacedCoordinates.sort((a, b) => a.x - b.x)).toStrictEqual(shipsPlaced.sort((a, b) => a.x - b.x))
  })
  test('places patrolBoat', () => {
    const shipsPlaced = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
      { x: 0, y: 4 },
      { x: 6, y: 9 },
      { x: 7, y: 9 },
      { x: 8, y: 9 },
      { x: 9, y: 9 },
      { x: 5, y: 5 },
      { x: 6, y: 5 },
      { x: 7, y: 5 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
      { x: 0, y: 9 },
      { x: 0, y: 8 }
    ]
    placePlayerShips('patrolBoat', { x: 0, y: 9 }, 'vertical')
    const shipPlacedCoordinates = playerBoard.shipsPlacedTiles.map((tile) => tile.coordinate)
    expect(shipPlacedCoordinates.sort((a, b) => a.x - b.x)).toStrictEqual(shipsPlaced.sort((a, b) => a.x - b.x))
  })
  test("doesn't place a ship if a tile is already occupied", () => {
    placePlayerShips('carrier', { x: 0, y: 0 }, 'horizontal')
    placePlayerShips('battleship', { x: 9, y: 9 }, 'vertical')
    placePlayerShips('destroyer', { x: 5, y: 5 }, 'vertical')
    placePlayerShips('submarine', { x: 3, y: 2 }, 'horizontal')
    placePlayerShips('patrolBoat', { x: 0, y: 9 }, 'horizontal')
    const shipsPlaced = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
      { x: 0, y: 4 },
      { x: 6, y: 9 },
      { x: 7, y: 9 },
      { x: 8, y: 9 },
      { x: 9, y: 9 },
      { x: 5, y: 5 },
      { x: 6, y: 5 },
      { x: 7, y: 5 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
      { x: 0, y: 9 },
      { x: 0, y: 8 }
    ]
    const shipPlacedCoordinates = playerBoard.shipsPlacedTiles.map((tile) => tile.coordinate)
    expect(shipPlacedCoordinates.sort((a, b) => a.x - b.x)).toStrictEqual(shipsPlaced.sort((a, b) => a.x - b.x))
  })
  test('player declares winner if it wins the game', () => {
    placeComputerShips()
    const mockCallback = jest.fn((data) => data.data)
    EventsObserver.subscribe('winnerFound', mockCallback)
    while (mockCallback.mock.calls.length < 1) {
      playerAttacks({
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10)
      })
    }
    expect(mockCallback).toHaveBeenCalled()
    expect(mockCallback.mock.results[0].value).toBe('player')
  })
})

describe('testing computer player', () => {
  test('places all ships correctly without overlap', () => {
    const shipsPlaced = computerBoard.shipsPlacedTiles.map((tile) => tile.coordinate)
    expect(shipsPlaced).toHaveLength(17)
  })
  test('computer declares winner if it wins the game', () => {
    const mockCallback = jest.fn((data) => data.data)
    EventsObserver.subscribe('winnerFound', mockCallback)
    while (mockCallback.mock.calls.length < 1) {
      computerAttacks()
    }
    expect(mockCallback).toHaveBeenCalled()
    expect(mockCallback.mock.results[0].value).toBe('computer')
  })
})
