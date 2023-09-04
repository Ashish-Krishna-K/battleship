const EventsObserver: EventsObserverType = {
  events: {},
  subscribe: (eventName, eventHandler) => {
    if (!EventsObserver.events[eventName]) {
      EventsObserver.events[eventName] = []
    } 
    EventsObserver.events[eventName].push(eventHandler);
  },
  publish: (eventName, eventPayload) => {
    const event = EventsObserver.events[eventName];
    if (event) {
      event.forEach(handler => {
        handler(eventPayload);
      })
    }
  }
}

export default EventsObserver