import EventsObserver from "./eventsObserver";
import domSubscriptions from "./displayController";
import { playerSubscriptions } from "./players";
import '../styles/index.css';

domSubscriptions();
playerSubscriptions();
EventsObserver.publish("initialPageLoad", {data: null});
