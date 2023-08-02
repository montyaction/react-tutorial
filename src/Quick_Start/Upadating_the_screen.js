import React, { useState } from "react";

export default function MyApp2() {

    const [count, setCount] = useState(0);

    function handleClick() {
      // alert('You clicked me!');
      setCount(count + 1);
    }

  return (
    <div>
        <h1>Counters that update together</h1>
        <MyButton count={count} onClick={handleClick}/>        
        <MyButton count={count} onClick={handleClick}/>        
    </div>
  )
}

function MyButton({ count, onClick }) {
  
  return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
  );
}
