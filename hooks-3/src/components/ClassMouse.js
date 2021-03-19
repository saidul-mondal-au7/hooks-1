import React, { Component } from 'react'

export default class ClassMouse extends Component {
    state = {
        x : 0,
        y : 0
    }
    logMousePosition = (e) =>{
        console.log("event called")
        this.setState({x: e.clientX, y: e.clientY})
    }
    componentDidMount(){
        console.log("componentDidMount called")
        window.addEventListener("mousemove", this.logMousePosition)
    }
    componentWillUnmount(){
        window.removeEventListener("mousemove", this.logMousePosition)
    }

    render() {
        return (
            <div>
                <h1> X - {this.state.x} : Y - {this.state.y}</h1>
            </div>
        )
    }
}
