interface ShipType {
  hits: number;
  hit: () => void;
  isSunk: () => boolean
}

type CoordinatesType = {
  x: number;
  y: number;
}

type ShipMarkersType = {
  coordinate: CoordinatesType;
  ship: ShipType;
}