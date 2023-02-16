import React from 'react'

function Testing(props) {
    console.log(props.value);
  return (
    <div>
      <h1>Testing</h1>
      <h2>{props.value}</h2>
    </div>
  );
}

export default Testing
