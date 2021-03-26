import React from 'react'
import ComponentA from './components/ComponentA'
import './App.css';

export const UserContext = React.createContext()
export const HabbitContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Saidul Mondal'}>
        <HabbitContext.Provider value={"Coding"} >
          <ComponentA />
        </HabbitContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;