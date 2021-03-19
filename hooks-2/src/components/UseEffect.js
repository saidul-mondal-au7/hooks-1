import React, { useState, useEffect } from 'react'

function UseEffect() {
    const initialState = 0;
    const [counter, increaseCounter] = useState(initialState)
    const [name, setName] = useState("")
    
useEffect(() => {
    console.log("updating document title...")
    document.title = `You have clicked ${counter} times.`
},[counter])

    return (
        <div>
           <h1>{counter}</h1>
           <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
           <button onClick={()=>increaseCounter(counter+1)}>useEffect</button>
        </div>
    )
}

export default UseEffect

