// From https://levelup.gitconnected.com/using-google-analytics-with-react-3d98d709399b

import ReactGA from 'react-ga';
import auth from './auth.ts'; 

const trackingId = "UA-179137728-1";
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
})