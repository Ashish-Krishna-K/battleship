import EventsObserver from './eventsObserver';
import domSubscriptions from './displayController';
import { playerSubscriptions } from './players';
import '../styles/index.css';

// call all the subscription methods first to set up
// subscribptions
domSubscriptions();
playerSubscriptions();
// render the inital page
EventsObserver.publish('initialPageLoad', { data: null });
