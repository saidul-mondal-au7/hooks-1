import React from "react"
import Counter from "./components/counter"
import NameSurname from "./components/NameSurname"
import ArrayItems from "./components/array"
import UseEffect from "./components/UseEffect"
import UseEffect1 from "./components/UseEffect1"
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Counter /><br/>
      <NameSurname/><br/>
      <ArrayItems /><br/>
      <UseEffect/><br/>
      <UseEffect1/>
    </div>
  );
}

export default App;
