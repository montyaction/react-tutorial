import React, { Component, useState, StrictMode } from 'react';
import CreateContext from './CreateContext';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import MyButton2 from './Upadating_the_screen';



function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}

export default class App1 extends Component {
  render() {
    return (
      <StrictMode>
        {/* <h1>Welcome to my app1</h1>
        <Profile />
        <ShoppingList />
        <AboutPage />
        <h3>Counters that update separate</h3>
        <MyButton1 />
        <MyButton1 />
        <CreateContext />
        <MyButton2 /> */}
      </StrictMode>
    );
  }
}

function MyButton1() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // alert('You clicked me!');
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Clicked {count} times</button>
    </div>
  );
}