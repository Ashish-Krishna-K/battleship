export class Ship {
  #length: number;
  #hits: number = 0;
  constructor(shipLength: number) {
    this.#length = shipLength;
  }
  get hits() {
    return this.#hits;
  }
  hit() {
    this.#hits += 1;
  }
  isSunk() {
    return this.#hits >= this.#length;
  }
}

export class GameBoard {
  #allHits: CoordinatesType[] = [];
  #shipTiles: ShipMarkersType[] = [];
  #carrier: Ship = null;
  #battleship: Ship = null;
  #destroyer: Ship = null;
  #submarine: Ship = null;
  #patrolBoat: Ship = null;

  #generateHorizontalCoordinates(start: CoordinatesType, length: number) {
    const coordinatesArray: CoordinatesType[] = [];

    for (let i = 0; i < length; i++) {
      let coordinate;
      if (start.x + length < 9) {
        coordinate = {
          x: start.x + i,
          y: start.y
        }
      } else {
        coordinate = {
          x: start.x - i,
          y: start.y
        }
      }
      coordinatesArray.push(coordinate);
    }
    
    return coordinatesArray;
  }

  #generateVerticalCoordinates(start: CoordinatesType, length: number) {
    const coordinatesArray: CoordinatesType[] = []
    
    for (let i = 0; i < length; i++) {
      let coordinate;
      if (start.y + length < 9) {
        coordinate = {
          x: start.x,
          y: start.y + i
        }
      } else {
        coordinate = {
          x: start.x,
          y: start.y - i
        }
      }
      coordinatesArray.push(coordinate);
    }

    return coordinatesArray;
  }

  #placeAship = (startCoordinate: CoordinatesType, orientation: string, shipLength: number) => {
    const ship = new Ship(shipLength);
    let coordinates = []
    if (orientation === "horizontal") {
      coordinates = this.#generateHorizontalCoordinates(startCoordinate, shipLength);
    } else {
      coordinates = this.#generateVerticalCoordinates(startCoordinate, shipLength);
    }
    coordinates = coordinates.map(coord => {
      return {
        coordinate: coord,
        ship: ship 
      }
    })
    const coordinateExists = coordinates.some(coord => {
      return this.#shipTiles.some(tile => JSON.stringify(tile) === JSON.stringify(coord));
    })
    if (!coordinateExists) {
      this.#shipTiles.push(...coordinates);
      return ship;
    }
    return null;
  }

  placeCarrier(startCoordinate: CoordinatesType, orientation: string) {
    const carrier = this.#placeAship(startCoordinate, orientation, 5);
    if (carrier === null) return false;
    this.#carrier = carrier;
    return true;
  }
  placeBattleship(startCoordinate: CoordinatesType, orientation: string) {
    const battleship = this.#placeAship(startCoordinate, orientation, 4);
    if (battleship === null) return false;
    this.#battleship = battleship;
    return true;
  }
  placeDestroyer(startCoordinate: CoordinatesType, orientation: string) {
    const destroyer = this.#placeAship(startCoordinate, orientation, 3);
    if (destroyer === null) return false;
    this.#destroyer = destroyer;
    return true;
  }
  placeSubmarine(startCoordinate: CoordinatesType, orientation: string) {
    const submarine = this.#placeAship(startCoordinate, orientation, 3);
    if (submarine === null) return false;
    this.#submarine = submarine;
    return true;
  }
  placePatrolBoat(startCoordinate: CoordinatesType, orientation: string) {
    const patrolBoat = this.#placeAship(startCoordinate, orientation, 2);
    if (patrolBoat === null) return false;
    this.#patrolBoat = patrolBoat;
    return true;
  }
  get attackedTiles() {
    return this.#allHits.slice();
  }
  get carrier() {
    if (this.#carrier === null) return null
    return Object.create(this.#carrier);
  }
  get carrierCoordinates() {
    if (this.#carrier === null) return null
    return this.#shipTiles
      .filter(ship => JSON.stringify(ship.ship) === JSON.stringify(this.#carrier))
      .map(ship => ship.coordinate)
  }
  get battleship() {
    if (this.#battleship === null) return null
    return Object.create(this.#battleship);
  }
  get battleshipCoordinates() {
    if (this.#battleship === null) return null;
    return this.#shipTiles
      .filter(ship => JSON.stringify(ship.ship) === JSON.stringify(this.#battleship))
      .map(ship => ship.coordinate)
  }
  get destroyer() {
    if (this.#destroyer === null) return null;
    return Object.create(this.#destroyer);
  }
  get destroyerCoordinates() {
    if (this.#destroyer === null) return null;
    return this.#shipTiles
      .filter(ship => JSON.stringify(ship.ship) === JSON.stringify(this.#destroyer))
      .map(ship => ship.coordinate);
  }
  get submarine() {
    if (this.#submarine === null) return null;
    return Object.create(this.#submarine);
  }
  get submarineCoordinates() {
    if (this.#submarine === null) return null;
    return this.#shipTiles
      .filter(ship => JSON.stringify(ship.ship) === JSON.stringify(this.#submarine))
      .map(ship => ship.coordinate);
  }
  get patrolBoat() {
    if (this.#patrolBoat === null) return null;
    return Object.create(this.#patrolBoat);
  }
  get patrolBoatCoordinates() {
    if (this.#patrolBoat === null) return null;
    return this.#shipTiles
      .filter(ship => JSON.stringify(ship.ship) === JSON.stringify(this.#patrolBoat))
      .map(ship => ship.coordinate);
  }
  receiveAttack(coordinate: CoordinatesType) {
    const alreadyHit = this.#allHits.some(tile => JSON.stringify(tile) === JSON.stringify(coordinate));
    if (alreadyHit) return false;
    this.#allHits.push(coordinate);
    this.#shipTiles.forEach(tile => {
      if (JSON.stringify(tile.coordinate) === JSON.stringify(coordinate)) {
        tile.ship.hit();
      }
    })
    return true;
  }
  allShipsSunk(callback?: (answer: boolean) => any) {
    if (
      this.#carrier.isSunk() && 
      this.#battleship.isSunk() &&
      this.#destroyer.isSunk() &&
      this.#submarine.isSunk() &&
      this.#patrolBoat.isSunk()
      ) {
        callback(true);
        return true
      } else {
        callback(false);
        return false
      }
  }
}