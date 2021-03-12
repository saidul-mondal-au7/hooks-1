import React, {useState} from "react"

import './App.css';

function App() {
  const initialState = 0
  const [counter, changeCounter] = useState(initialState)
  return (
    <div className="App">
     <h1>Counter = {counter}</h1>
     <button onClick={()=> changeCounter(initialState)}>Reset Number</button>
     <button onClick={() => changeCounter(counter + 1)}>Increase Number</button>
     <button onClick = {() => changeCounter(counter - 1)}>Decrese Number</button>
    </div>
  );
}

export default App;
