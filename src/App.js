import logo from './logo.svg';
import './App.css';

import Cards from './components/Cards.js'

function App() {

  
  return (
    <div className="App">
      <div>Cards</div>
      <Cards></Cards>
      <div>
        Running Count
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
