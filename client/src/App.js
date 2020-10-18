import React, {useEffect} from 'react';
import {MainPage} from './Pages/MainPage';
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
      ReactGA.initialize('UA-179137728-1');
      ReactGA.pageview(window.location.pathname);
  }, []);
  
  return (
      <MainPage/>
  );
}

export default App;