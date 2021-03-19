import React, { Component } from 'react'


export default class UseEffect1 extends Component {
   state = {
       counter: 0,
       name : ""
   }
   componentDidMount(){
       document.title = `You have clicked ${this.state.counter} times.`
   }
   componentDidUpdate(prevProps, prevState){
       if(prevState.counter !== this.state.counter){
        console.log("updating document title...")
        document.title = `You have clicked ${this.state.counter} times.`
       }
       
   }

    render() {
        return (
            <div>
               <h1>{this.state.counter}</h1> 
               <input type='text' value={this.state.name} onChange={(e)=> this.setState({ name : e.target.value })} />
               <button onClick={()=>this.setState({counter: this.state.counter +1 })}>useEffect1</button>
            </div>
        )
    }
}
