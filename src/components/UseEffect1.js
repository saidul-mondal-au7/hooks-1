import React, { Component } from 'react'


export default class UseEffect1 extends Component {
   state = {
       counter: 0
   }
   componentDidMount(){
       document.title = `You have clicked ${this.state.counter} times.`
   }
   componentDidUpdate(){
    document.title = `You have clicked ${this.state.counter} times.`
   }

    render() {
        return (
            <div>
               <h1>{this.state.counter}</h1> 
               <button onClick={()=>this.setState({counter: this.state.counter +1 })}>useEffect1</button>
            </div>
        )
    }
}
