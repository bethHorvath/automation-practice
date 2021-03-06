import React from 'react';

import '../App.css';
import { Homepage } from './homepage';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className="text">Lets start automating!</p>
        <a className="App-link" href="https://www.sky.com/" target="_blank" rel="noopener noreferrer">
          Sky website
        </a>
        <Homepage />
      </header>
    </div>
  );
};

export default App;
