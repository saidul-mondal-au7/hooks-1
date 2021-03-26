import React,{useContext} from 'react'
import {UserContext, HabbitContext} from '../App';

function ComponentC() {
    const user = useContext(UserContext)
    const habbit = useContext(HabbitContext)
    return (
        <div>
            
            <h1>{user} - {habbit}</h1>
            
            
        </div>
    )
}

export default ComponentC

