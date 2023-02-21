import React, { Component } from 'react'

export default class stateful_component extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds : 0 };
  }
  tick() {
    this.setState(state => ({
      seconds : state.seconds + 1
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Stateful Component</h1>
        <h2>Seconds : {this.state.seconds}</h2>
      </div>
    );
  }
}

