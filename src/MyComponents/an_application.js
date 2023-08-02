import React, { Component } from 'react'

export default class anAapplication extends Component {
  constructor(props) {
    super(props)
  
    this.state = { items : [], text : '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text : this.state.text,
      id : Date.now()
    };
    this.setState(state => ({ 
      items : [...state.items, newItem],
      text : ''
      }));
    console.log(this.state.items);
  }

  render() {
    return (
      <div>
        <h3>TODO List</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-todo'>What needs to be done?</label>
          <input 
            id='new-todo'
            onChange={this.handleChange}
            value={this.state.text}
          /><br/><br/>
          <button>Add#{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
