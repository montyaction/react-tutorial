import React, { Component } from "react";
// import C from "./C";
// import { myContext } from './A';
import { Consumer } from "./Context";

export default class B extends Component {

    render() {
    return (
      <div>
        <h2> Component B</h2>

        {/* <myContext.Consumer> */}
        <Consumer>
            {(data) => <h3>{data.name}</h3>}
        </Consumer>

        {/* </myContext.Consumer> */}
        {/* <C name={this.props.name}/> */}
      </div>
    );
  }
}
