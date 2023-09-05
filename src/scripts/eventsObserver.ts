import { type EventsObserverType } from '../types/appTypes';

// An eventobserver object to handle all pub/sub activities
const EventsObserver: EventsObserverType = {
  events: {},
  subscribe: (eventName, eventHandler) => {
    // if the given event is not present in the events object
    // add it to the object first
    if (EventsObserver.events[eventName] === undefined) {
      EventsObserver.events[eventName] = [];
    }
    // add the provided handler to the subscribers list of the
    // event
    EventsObserver.events[eventName].push(eventHandler);
  },
  publish: (eventName, eventPayload) => {
    const event = EventsObserver.events[eventName];
    if (event !== undefined) {
      event.forEach((eventHandler) => {
        eventHandler(eventPayload);
      });
    }
  },
};

export default EventsObserver;
