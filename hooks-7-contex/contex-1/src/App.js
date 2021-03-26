import React from 'react'
import ComponentA from './components/ComponentA'
import './App.css';

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Saidul Mondal'}>
        <ComponentA />
      </UserContext.Provider>
       
    </div>
  );
}

export default App;
