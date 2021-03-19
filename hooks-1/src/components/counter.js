import React,{useState} from 'react'

const Counter = () => {
    const initialState = 0
    const [count, changeCount] = useState(initialState)

    const Increase = () =>{
        changeCount((prevState)=>prevState+1)
    }
    const Decrease =() => {
        changeCount(count - 1)
    }
    const Reset =() =>{
        changeCount(initialState)
    }
    return (
        <div>
            <h1>Counter = {count}</h1>
            <button onClick={Increase}>Increase Number</button>
            <button onClick={Decrease}>Decrease Number</button>
            <button onClick={Reset}>Reset Number</button>
        </div>
    )
}

export default Counter
