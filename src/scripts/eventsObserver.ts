import { type EventsObserverType } from '../types/appTypes'

const EventsObserver: EventsObserverType = {
  events: {},
  subscribe: (eventName, eventHandler) => {
    if (EventsObserver.events[eventName] === undefined) {
      EventsObserver.events[eventName] = []
    }
    EventsObserver.events[eventName].push(eventHandler)
    console.log(`function ${eventHandler.name} just subscribed to event ${eventName}`)
  },
  publish: (eventName, eventPayload) => {
    const event = EventsObserver.events[eventName]
    if (event !== undefined) {
      event.forEach((eventHandler) => {
        eventHandler(eventPayload)
        console.log(`event ${eventName} was fired and function ${eventHandler.name} was called`)
      })
    }
  }
}

export default EventsObserver
