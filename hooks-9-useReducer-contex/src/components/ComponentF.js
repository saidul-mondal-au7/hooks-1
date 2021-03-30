import React,{useContext} from 'react';
import {CountContex} from '../App';

function ComponentF() {
    const countContex = useContext(CountContex)
    return (
        <div>
            <h1>Count - F {countContex.countState}</h1>
            <button onClick={()=>countContex.countDispatch('increment')} >Increment</button>
            <button onClick={()=>countContex.countDispatch('decrement')} >Decrement</button>
            <button onClick={()=>countContex.countDispatch('reset')} >Reset</button>
        </div>
    )
}

export default ComponentF

