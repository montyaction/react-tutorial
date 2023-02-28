import React, { Component } from 'react'
import B from './B';
import C from './C';
import { Provider } from './Context';

// export const myContext = React.createContext();

export default class A extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "montyaction",
         rollno : 1514
      }
    }

    handleClick = ()=>{
      this.setState({
        rollno : this.state.rollno + 1
    })
  }

  render() {
    return (
      <div>
        <h2> Component A</h2>
        <h5>{this.state.rollno}</h5>
        <button onClick={this.handleClick}>Change Roll No</button>
        <myContext.Provider value={this.state}>
            <B />
            <C />
        </myContext.Provider>

        {/* <B name={this.state.name} /> */}
      </div>
    );
  }
}
