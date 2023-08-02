import React, { Component } from 'react';
import Child from './Child';
import GrandChild from './GrandChild';
import { Provider } from './Context';

// export const myContext = React.createContext();

export default class Father extends Component {

    state = {
        name : 'Mohit Kanwar',
        age : 30
      }
    
      handleClickOne = ()=> {this.setState({age : this.state.age + 1})}


  render() {
    const contextValue={
      data : this.state,
      handleClick : this.handleClickOne
    }

    return (
      <Provider value={contextValue}>
        <h2>Father</h2>
        <button onClick={this.handleClickOne}>Click Me</button>
        {/* <Child /> */}
        <GrandChild />
      </Provider>
    );
  }
}
