import React, { Component } from "react";
import { Consumer } from "./Context";

export default class GrandChild extends Component {
  render() {
    console.log("GrandChild Component is rendered!");

    return (
      <Consumer>
        {({ data, handleClick }) => (
          <div>
            <h2>GrandChild</h2>
            <h4>
              Name is {data.name} and age {data.age}{" "}
            </h4>
            <button onClick={handleClick}>Click Me!</button>
          </div>
        )}
      </Consumer>
    );
  }
}
