import React, { Component } from 'react'

export default class FormOne extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      address: ''
    }
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handleAddress = (event) => {
    this.setState({
        address : event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(`Name is ${this.state.username} live in ${this.state.address}`)
    event.preventDefault();
  }

  render() {
    const { username, address } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsername}
          ></input>
        </div>
        <div>
          <label>Address</label>
          <textarea
            value={address}
            onChange={this.handleAddress}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}
