import React from 'react'
import {UserContext} from '../App'
function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
                { value => <h1>Ok, my name is  {value} </h1> }
            </UserContext.Consumer>
            
        </div>
    )
}

export default ComponentC
