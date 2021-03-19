import React,{ useState } from 'react'

function ArrayItems() {
    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([
            ...items,{
                id:items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }
    return (
        <div>
            <ul>
             {items.map(item=><li key={item.id}>{item.value}</li>)}
            </ul>
            <button onClick={addItems}>Add Number</button>
        </div>
    )
}

export default ArrayItems;
