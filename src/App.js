import React, { Component } from "react";
import './Components/appStyle.css';

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
import Style from "./Components/appStyle.module.css"
import Routing from './Components/Routing1';
import Lifecycle from "./Components/Lifecycle";
import Clock from "./Components/Clock";
import GetList from "./Components/getList";
import PostForm from "./Components/PostForm";
import HookCounter from "./Components/HookCounter";
import ClassCounterOne from "./Components/ClassCounterOne";
import UseEffect from "./Components/UseEffect";
import StateHook from "./Components/StateHook";
import HookObject from "./Components/HookObject";
import HookArray from "./Components/HookArray";
import FunctionCounterOne from "./Components/FunctionCounterOne";
import ClassMousePosition from "./Components/ClassMousePosition";
import FunctionMosePosition from "./Components/FunctionMosePosition";
import A from "./Components/A";
import B from "./Components/B";
import C from "./Components/C";
import Father from "./Components/Father";
import Vikas from "./Components/Vikas";
import Ajay from "./Components/Ajay";
import Sushant from "./Components/Sushant";
// import { Signup } from "./Form_Validation/Signup";
import Child from "./Components/Child";
import GrandChild from "./Components/GrandChild";
import SimpleComponent from "./MyComponents/simple_component";
import StatefulComponent from "./MyComponents/stateful_component";
import AnApplication from "./MyComponents/an_application";
// import MarkdownEditor from "./MyComponents/MarkdownEditor";
// import RemarkableDemostration from "./MyComponents/Remarkable_demostration";
import Axiosget from "./Components/axios_get_method";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
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
  }
 
  removeCharacter = (index) => {
    const { characters } = this.state;
    
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
    // const numbers = [3, 4, 5, 6];

    return (
        <div className="container">
          {/*
        <h5>Add New Names</h5>
        <Functional name="monty" last="action" />
        <ClassComponent />
        <Channel />
        <FunctionClick />
        <CfunctionClick roll="121" />
        <StatefulCom />
        <Stylesheet isvalue={false}></Stylesheet>
        <Inline></Inline>
        <h1>Hello Khushi Beta </h1>
        <h1 className={Style.success}>Green</h1>
        <h1 className="error">Error</h1>
        <Routing /> 
        <Lifecycle />
        <GetList/>
        <List numbers={numbers} />
        <PostForm />
        <HookCounter />
        <UseEffect />
        <StateHook />
        <HookObject />
        <HookArray />
        <Clock></Clock>
        <ClassCounterOne />
        <FunctionCounterOne />
        <ClassMousePosition />
        <A />
        <B />
        <C />
        <FunctionMosePosition />
        <Ajay />
        <Sushant />
        <Vikas />
        <Signup />
        <Child />
        <Father />
        <GrandChild />
        <SimpleComponent name='montyaction'/>
        <StatefulComponent />
        <AnApplication />
        <RemarkableDemostration />
        <MarkdownEditor />
        <FormOne></FormOne>
        <Table
        characterData={characters}
        removeCharacter={this.removeCharacter}
      />
        <Form handleSubmit={this.handleSubmit} />
      */}
      <Axiosget />
        </div>
    );
  }
}

export default App;
