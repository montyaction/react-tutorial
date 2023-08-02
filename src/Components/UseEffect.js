import React, { useState, useEffect } from 'react';

export default function UseEffect() {

    const [count, setCount] = useState(0);
    const [counter1, setCount1] = useState(0);

    const [channelname, setName] = useState("montyaction");
    const [subscribers, setcount] = useState("0");

    const stateHandler = () => {
      setName("mohitkanwar");
      setcount("50000");
    };

    const Decrement = ()=> {
        setCount1(counter1 - 1);
    }
    
    const Incremented = () => {
      for (let i=0; i < 10; i++ ){
        setCount(preCount => preCount + 1)
      }
    }

    useEffect(()=> {
        console.log('useEffect');
    }, [count]);

  return (
    <div>
      <h1>UseEffect</h1>
      <p>You increment {count} times</p>
      <p>You decrement {counter1} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <h1>{channelname} Subscribers is {subscribers}</h1>
      <button onClick={stateHandler}>Change Name</button>
      <button onClick={Incremented}>Increment by 10 - {count}</button>
    </div>
  );
}
