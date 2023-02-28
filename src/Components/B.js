import React, { Component } from "react";
// import C from "./C";
import { myContext } from './A';

export default class B extends Component {

    render() {
    return (
      <div>
        <h2> Component B</h2>
        <myContext.Consumer>
            {(data) => <h3>{data.name}</h3>}
        </myContext.Consumer>
        {/* <C name={this.props.name}/> */}
      </div>
    );
  }
}
