import React, { Component } from 'react'

export default class ClassMousePosition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x : 0,
         y : 0
      }
    }
    
    logmouseposition = (e)=> {
        this.setState({ x : e.clientX, y : e.clientY})
    }

    componentDidMount() {
        console.log('Lifecycle : componentDidMount');
        window.addEventListener('mousemove', this.logmouseposition)
    }


  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <h3>Track mouse position</h3>
          <h4>
              X - {this.state.x} Y - {this.state.y}
          </h4>
      </div>
    );
  }
}
