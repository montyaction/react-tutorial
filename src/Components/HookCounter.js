import React, { useState } from 'react';

export default function HookCounter() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    // const count = countNum[0];
    // const setCount = countNum[1];

    const [channelname, setName] = useState("montyaction");
    // const channelname = channel[0];
    // const setName = channel[1];
    const [subscribers, setcount] = useState("0");

    const stateHandler = () => {
        // channelname[1]("mohitkanwar")
        setName("mohitkanwar")
        setcount("50000")
    }

  return (
    <div>
        <h2>HookCounter</h2>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
        <button onClick={stateHandler}>Change Name</button>
        <h1>{channelname} Subscribers is {subscribers}</h1>
    </div>
  );
}
