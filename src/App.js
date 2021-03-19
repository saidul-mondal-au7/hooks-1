import React from "react"
import Counter from "./components/counter"
import NameSurname from "./components/NameSurname"
import ArrayItems from "./components/array"
import UseEffect from "./components/UseEffect"
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Counter /><br/>
      <NameSurname/><br/>
      <ArrayItems /><br/>
      <UseEffect/>
    </div>
  );
}

export default App;
