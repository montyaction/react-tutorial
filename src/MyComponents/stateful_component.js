import React, { Component } from 'react'

export default class statefulComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       second : 0
    }
  }

  tick() {
    this.setState((state)=>({second : state.second + 1 }));
  }

  componentDidMount() {
    this.interval = setInterval(()=> this.tick(),  1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>Stateful Component</h3>
        <h4>Second : {this.state.second}</h4>
      </div>
    );
  }
}
