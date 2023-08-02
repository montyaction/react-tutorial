import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
      super(props)
      this.state = { date : new Date() };
    }

    componentDidMount() {
        this.timeID = setInterval(
            ()=> this.tick(),1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick() {
        this.setState({
            date : new Date()
        });
    }

  render() {
    return (
      <div className='App'>
        <h1>Clock</h1>
        <h2>It is {this.state.date.toLocaleDateString()}.</h2>
      </div>
    )
  }
}

export default Clock;
