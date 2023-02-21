import React, { Component } from "react";

import Table from "./Table";
import Form from "./Form";
import Functional from "./Components/functional_component";
import ClassComponent from "./Components/class_component";
import Channel from "./Components/channel";
import FunctionClick from "./Components/functionClick";
import CfunctionClick from "./Components/cfunctionClick";
import List from "./Components/list";
import StatefulCom from "./Components/stateful_component";
import Stylesheet from "./Components/Stylesheet";
import FormOne from "./Components/FormOne";
import Inline from "./Components/inline_style";
import './Components/appStyle.css';
import Style from "./Components/appStyle.module.css"
import Routing from './Components/Routing1';
import Lifecycle from "./Components/Lifecycle";
import Clock from "./Components/Clock";

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
    const numbers = [3, 4, 5, 6];

    return (
      <div className="container">
        {/* <Table
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
        <List numbers={numbers} />
        <StatefulCom />
        <Stylesheet isvalue={false}></Stylesheet>
        <Inline></Inline>
        <h1>Hello Khushi Beta </h1>
        <FormOne></FormOne>
        <h1 className={Style.success}>Green</h1>
        <h1 className="error">Error</h1> 
        <Routing /> */}
        <Lifecycle />
      </div>
    );
  }
}

export default App;
