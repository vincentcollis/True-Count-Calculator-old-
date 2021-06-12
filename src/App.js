import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Cards from './components/Cards.js'
import RunningCount from './components/RunningCount';

function App() {

  // state
  const [runningCount, setrunningCount] = useState(0)
  const [deckPen, setdeckPen] = useState(0)
  const [trueCount, setTrueCount] = useState(0)
  
  return (
    <div className="App">
      <div>Cards</div>
      <Cards setRunningCount = {setrunningCount} runningCount = {runningCount}></Cards>
      <div>
        Running Count: <RunningCount runningCount = {runningCount}></RunningCount>
      </div>
      <div>
        Deck Penertration
      </div>  
      <div>
        True Count
      </div>
    </div>
  );
}

export default App;
