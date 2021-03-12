import React from "react"
import Counter from "./components/counter"
import NameSurname from "./components/NameSurname"
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Counter /><br/>
      <NameSurname/>
    </div>
  );
}

export default App;
