import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    
    function logMousePosition(e){
        console.log("Mouse event")
        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(() => {
       console.log('useEffect called')
       window.addEventListener("mousemove", logMousePosition)
       return ()=>{
           window.removeEventListener("mousemove", logMousePosition)
       }
    }, [])

    return (
        <div>
            <h1>X - {x} : Y - {y}</h1>
        </div>
    )
}

export default HookMouse
