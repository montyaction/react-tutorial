import React, { Component } from 'react'

export default class simpleComponent extends Component {

  render() {
    return (
      <div>
        <h2>simple_component</h2>
        <h4>Hello {this.props.name}</h4>
      </div>
    );
  }
}
