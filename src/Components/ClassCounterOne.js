import React, { Component } from 'react';

export class ClassCounterOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
         name : ''
      }
    }

    componentDidMount() {
      console.log('By Default Calling...');
      document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {

      console.log(prevState.count);
      console.log(this.state.count);
      
      //  if (prevState.count !== this.state.count) {
      
        console.log('Testing...');
        document.title = `You clicked ${this.state.count} times`;
      // }
    }


  render() {
    return (
      <div>
        <h2>Class Counter One</h2>
        
        <div>
          <p>You clicked {this.state.count}</p>
          <button onClick={()=>{ this.setState({count:this.state.count + 1})}}>Click me!</button>
        </div>
        
        <div>
          <label>Name : {this.state.name}</label>
          <input type="text" value={this.state.name} onChange={(e) => {this.setState({name : e.target.value})}}></input>
        </div>

      </div>
    );
  }
}

export default ClassCounterOne;