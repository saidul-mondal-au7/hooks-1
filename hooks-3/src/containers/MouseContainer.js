import React, { useState } from 'react'
// import HookMouse from '../components/hookMouse'
import ClassMouse from '../components/ClassMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
        <button onClick={()=>setDisplay(!display)} >Toggle Display</button>
        {display && <ClassMouse/>}
        </div>
    )
}

export default MouseContainer



