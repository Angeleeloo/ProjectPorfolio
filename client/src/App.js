import React from 'react';
import {MainPage} from './Pages/MainPage';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-179137728-x');


function App() {
  return (
    <MainPage/>
  );
}

export default App;
