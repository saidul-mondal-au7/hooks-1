import React, { useState, useEffect } from 'react'

function UseEffect() {
    const initialState = 0;
    const [counter, increaseCounter] = useState(initialState)
    
useEffect(() => {
    document.title = `You have clicked ${counter} times.`
})

    return (
        <div>
           <h1>{counter}</h1>
           <button onClick={()=>increaseCounter(counter+1)}>useEffect</button>
        </div>
    )
}

export default UseEffect

