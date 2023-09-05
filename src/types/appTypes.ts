/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ShipType {
  hits: number;
  hit: () => void;
  isSunk: () => boolean;
}

export interface CoordinatesType {
  x: number;
  y: number;
}

export interface ShipMarkersType {
  coordinate: CoordinatesType;
  ship: ShipType;
}

export interface EventPayloadType {
  data: any;
}

export type EventHandlerType = (payload: EventPayloadType) => any;

export type EventsType = Record<string, EventHandlerType[]>;

export interface EventsObserverType {
  events: EventsType;
  subscribe: (eventName: string, eventHandler: EventHandlerType) => void;
  publish: (eventName: string, eventPayload: EventPayloadType) => void;
}
