import React from 'react';
import { Consumer } from "./Context";

export default class Child extends React.Component {

  render() {
    console.log('child component rendered!');

    return (
      <Consumer>
        {({ data, handleClick }) => (
            <div>
              <h3>Child Component</h3>
              <p>Name is {data.name} and age {data.age} </p>
              <button onClick={handleClick}>Increase Age</button>
            </div>
          )}
      </Consumer>
    );
  }
}