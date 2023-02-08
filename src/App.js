import React, { Component } from "react";

import Table from "./Table";
import Form from "./Form";
import Functional from "./Components/functional_component";
import ClassComponent from "./Components/class_component";
import Channel from "./Components/channel";
import FunctionClick from "./Components/functionClick";
import CfunctionClick from "./Components/cfunctionClick";
import List from "./Components/list";

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };
  
  removeCharacter = (index) => {
    const { characters } = this.state
    
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({ character : [...this.state.characters, character]})
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h5>Add New Names</h5>
        <Form handleSubmit={this.handleSubmit} />
        <Functional name="monty" last="action" />
        <ClassComponent />
        <Channel />
        <FunctionClick />
        <CfunctionClick roll="121" />
        <List />
      </div>
    );
  }
}

export default App;
