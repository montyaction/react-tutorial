import React, { useState, useEffect} from 'react';

function FunctionCounterOne() {

    const [count, setCount] = useState(0);
    const [counter, setCount1] = useState(0);
    const [name, setName] = useState('Type your name here');

    useEffect(() => {
        document.title = `You clicked ${counter} times`;
    }, [counter]);

  return (
    <div>
      <h3>FunctionCounterOne</h3>
      <p>You clicked Click me1! {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me1!</button>
      <button onClick={() => setCount1(counter + 1)}>Click me2!</button>

      <div>
        <label>Name : {name}</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName( e.target.value );
          }}
        ></input>
      </div>
    </div>
  );
};

export default FunctionCounterOne;