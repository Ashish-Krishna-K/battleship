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

type EventPayloadType = {
  data: any
}

type EventHandlerType = (payload: EventPayloadType) => any;

type EventsType = {
  [key: string]: EventHandlerType[]
}

interface EventsObserverType {
  events: EventsType,
  subscribe: (eventName: string, eventHandler: EventHandlerType) => void,
  publish: (eventName: string, eventPayload: EventPayloadType) => void
}