import React, {useReducer} from 'react'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import './App.css';

export const CountContex = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContex.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        <h1>{count}</h1>
            <ComponentA />
            <ComponentB />
            <ComponentC />
      </div>
    </CountContex.Provider>
  );
}

export default App;