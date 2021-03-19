import React, { Component } from 'react'

export default class IntervalClassCounter extends Component {
    state = {
        counter : 0
    }
    tick = () => {
        this.setState({counter : this.state.counter + 1})
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
               <h1>{this.state.counter}</h1> 
            </div>
        )
    }
}

