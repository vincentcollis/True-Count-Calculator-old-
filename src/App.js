import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Cards from './components/Cards.js'
import RunningCount from './components/RunningCount';
import ShoeSize from './components/ShoeSize';

function App() {

  // state
  const [runningCount, setrunningCount] = useState(0)
  const [deckPen, setdeckPen] = useState(0)
  const [trueCount, setTrueCount] = useState(0)
  const [shoeSize, setShoeSize] = useState(0)
  
  return (
    <div className="App">
      <div>
        Shoe Size:
      </div>
      <ShoeSize setShoeSize = {setShoeSize}/>
      <div>
        Cards
      </div>
      <Cards setRunningCount = {setrunningCount} runningCount = {runningCount}/>
      <div>
        Running Count:
      </div>
      <RunningCount runningCount = {runningCount}/>
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
