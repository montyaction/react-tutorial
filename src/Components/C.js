import React, { Component } from "react";
import { myContext } from "./A";
// import { Consumer } from "./Context";

export default class C extends Component {

  render() {
    return (
      <div>
        <h2> Component C</h2>

        <myContext.Consumer>
        {/* <Consumer> */}
            {data=><h3>{data.rollno}</h3>}
        {/* </Consumer> */}

        </myContext.Consumer>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}
