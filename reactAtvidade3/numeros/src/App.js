
import './style.css'
import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0)
  const increment = (value) =>{
    setNumber(number + value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <span> {number} </span>
        <button onClick={()=>increment(parseInt(Math.random()*10))}>ADICIONAR</button>
      </header>
    </div>
  );
}

export default App;
