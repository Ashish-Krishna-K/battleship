import EventsObserver from './eventsObserver';
import { type CoordinatesType, type ShipMarkersType } from '../types/appTypes';

// ship class to handle all behaviour of the ship
export class Ship {
  #length: number;

  #hits: number = 0;

  constructor(shipLength: number) {
    this.#length = shipLength;
  }

  get hits(): number {
    return this.#hits;
  }

  hit(): void {
    this.#hits += 1;
  }

  isSunk(): boolean {
    return this.#hits >= this.#length;
  }
}

// the gameboard class to handle all gameboard activities
export class GameBoard {
  #name: string;

  #allHits: CoordinatesType[] = [];

  #shipTiles: ShipMarkersType[] = [];

  #carrier: Ship | null = null;

  #battleship: Ship | null = null;

  #destroyer: Ship | null = null;

  #submarine: Ship | null = null;

  #patrolBoat: Ship | null = null;

  constructor(boardName: string) {
    this.#name = boardName;
  }

  get name(): string {
    return this.#name;
  }

  // private method to generate coordinates in horizontal orientation
  #generateHorizontalCoordinates(start: CoordinatesType, length: number): CoordinatesType[] {
    const coordinatesArray: CoordinatesType[] = [];

    for (let i = 0; i < length; i++) {
      let coordinate;
      // if x axis start positon + length is greater than
      // 9 we'll subtract the i to generate coordinate in
      // opposite direction
      if (start.x + length < 9) {
        coordinate = {
          x: start.x + i,
          y: start.y,
        };
      } else {
        coordinate = {
          x: start.x - i,
          y: start.y,
        };
      }
      coordinatesArray.push(coordinate);
    }

    return coordinatesArray;
  }

  // private method to generate coordinates in vertical orientation
  #generateVerticalCoordinates(start: CoordinatesType, length: number): CoordinatesType[] {
    const coordinatesArray: CoordinatesType[] = [];

    for (let i = 0; i < length; i++) {
      let coordinate;
      if (start.y + length < 9) {
        // if y axis start positon + length is greater than
        // 9 we'll subtract the i to generate coordinate in
        // opposite direction
        coordinate = {
          x: start.x,
          y: start.y + i,
        };
      } else {
        coordinate = {
          x: start.x,
          y: start.y - i,
        };
      }
      coordinatesArray.push(coordinate);
    }

    return coordinatesArray;
  }

  // a private method to place the ships on the board
  // (placing ships had 90% similarity between all types of ships with the 
  // difference only in the shipLength hence extracted it to it's own method)
  #placeAship(startCoordinate: CoordinatesType, orientation: string, shipLength: number): Ship | null {
    const ship = new Ship(shipLength);
    let coordinates = [];
    if (orientation === 'horizontal') {
      coordinates = this.#generateHorizontalCoordinates(startCoordinate, shipLength);
    } else {
      coordinates = this.#generateVerticalCoordinates(startCoordinate, shipLength);
    }
    // saving the ship coordinates in an array in the class, i have done this so that
    // when a tile corresponding to a ship is hit, I can directly call the ship's hit method
    // easily
    coordinates = coordinates.map((coord) => {
      return {
        coordinate: coord,
        ship,
      };
    });
    // if the ship's coordinates already exists in the class then we'll not place the ship
    // instead returning null to indicate to the caller the ship was not placed. If it 
    // doesn't exist then we'll place the ship
    const coordinateExists = coordinates.some((coord) => {
      return this.#shipTiles.some((tile) => JSON.stringify(tile) === JSON.stringify(coord));
    });
    if (coordinateExists) {
      return null;
    }
    this.#shipTiles.push(...coordinates);
    return ship;
  }

  // public method to place the carrier
  placeCarrier(startCoordinate: CoordinatesType, orientation: string): boolean {
    const carrier = this.#placeAship(startCoordinate, orientation, 5);
    // if carrier is already placed we'll not do anything and return false
    // to indicate the ship was not placed
    if (carrier === null) return false;
    this.#carrier = carrier;
    return true;
  }

  // public method to place the battleship
  placeBattleship(startCoordinate: CoordinatesType, orientation: string): boolean {
    const battleship = this.#placeAship(startCoordinate, orientation, 4);
    if (battleship === null) return false;
    this.#battleship = battleship;
    return true;
  }

  // public method to place the destroyer
  placeDestroyer(startCoordinate: CoordinatesType, orientation: string): boolean {
    const destroyer = this.#placeAship(startCoordinate, orientation, 3);
    if (destroyer === null) return false;
    this.#destroyer = destroyer;
    return true;
  }

  // public method to place the submarine
  placeSubmarine(startCoordinate: CoordinatesType, orientation: string): boolean {
    const submarine = this.#placeAship(startCoordinate, orientation, 3);
    if (submarine === null) return false;
    this.#submarine = submarine;
    return true;
  }

  // public method to place the patrolBoat
  placePatrolBoat(startCoordinate: CoordinatesType, orientation: string): boolean {
    const patrolBoat = this.#placeAship(startCoordinate, orientation, 2);
    if (patrolBoat === null) return false;
    this.#patrolBoat = patrolBoat;
    return true;
  }

  get attackedTiles(): CoordinatesType[] {
    return this.#allHits.slice();
  }

  get shipsPlacedTiles(): ShipMarkersType[] {
    return this.#shipTiles.slice();
  }

  get carrier(): Ship | null {
    if (this.#carrier === null) return null;
    // returning a copy of the object instead of the object itself
    return Object.create(this.#carrier);
  }

  get carrierCoordinates(): CoordinatesType[] | null {
    if (this.#carrier === null) return null;
    // since the shipPlacedTiles are of ShipMarkerType with both coordinates
    // and the ship itself, using Array.map to return only the coordinates.
    return this.shipsPlacedTiles
      .filter((ship) => JSON.stringify(ship.ship) === JSON.stringify(this.#carrier))
      .map((ship) => ship.coordinate);
  }

  get battleship(): Ship | null {
    if (this.#battleship === null) return null;
    return Object.create(this.#battleship);
  }

  get battleshipCoordinates(): CoordinatesType[] | null {
    if (this.#battleship === null) return null;
    return this.shipsPlacedTiles
      .filter((ship) => JSON.stringify(ship.ship) === JSON.stringify(this.#battleship))
      .map((ship) => ship.coordinate);
  }

  get destroyer(): Ship | null {
    if (this.#destroyer === null) return null;
    return Object.create(this.#destroyer);
  }

  get destroyerCoordinates(): CoordinatesType[] | null {
    if (this.#destroyer === null) return null;
    return this.shipsPlacedTiles
      .filter((ship) => JSON.stringify(ship.ship) === JSON.stringify(this.#destroyer))
      .map((ship) => ship.coordinate);
  }

  get submarine(): Ship | null {
    if (this.#submarine === null) return null;
    return Object.create(this.#submarine);
  }

  get submarineCoordinates(): CoordinatesType[] | null {
    if (this.#submarine === null) return null;
    return this.shipsPlacedTiles
      .filter((ship) => JSON.stringify(ship.ship) === JSON.stringify(this.#submarine))
      .map((ship) => ship.coordinate);
  }

  get patrolBoat(): Ship | null {
    if (this.#patrolBoat === null) return null;
    return Object.create(this.#patrolBoat);
  }

  get patrolBoatCoordinates(): CoordinatesType[] | null {
    if (this.#patrolBoat === null) return null;
    return this.shipsPlacedTiles
      .filter((ship) => JSON.stringify(ship.ship) === JSON.stringify(this.#patrolBoat))
      .map((ship) => ship.coordinate);
  }

  // a public method to receive an attack to the board
  receiveAttack(coordinate: CoordinatesType): boolean {
    // if the provided tile is already marked as hit, we'll do nothing 
    // and return false to indicate to the caller nothing was changed
    const alreadyHit = this.#allHits.some((tile) => JSON.stringify(tile) === JSON.stringify(coordinate));
    if (alreadyHit) return false;
    this.#allHits.push(coordinate);
    // after marking the given tile as hit, checking if that tile contains a
    // ship, if it does then call the hit method on the ship.
    this.#shipTiles.forEach((tile) => {
      if (JSON.stringify(tile.coordinate) === JSON.stringify(coordinate)) {
        tile.ship.hit();
        EventsObserver.publish('shipIsHit', {
          data: {
            coordinate,
            board: this.name,
          },
        });
      }
    });
    EventsObserver.publish('tileIsHit', {
      data: {
        coordinate,
        board: this.name,
      },
    });
    return true;
  }

  // a public method to check if all ships in the board is sunk
  allShipsSunk(): boolean {
    if (
      this.#carrier !== null &&
      this.#carrier.isSunk() &&
      this.#battleship !== null &&
      this.#battleship.isSunk() &&
      this.#destroyer !== null &&
      this.#destroyer.isSunk() &&
      this.#submarine !== null &&
      this.#submarine.isSunk() &&
      this.#patrolBoat !== null &&
      this.#patrolBoat.isSunk()
    ) {
      return true;
    }
    return false;
  }
}
