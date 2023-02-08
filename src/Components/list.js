import React from 'react'

function list() {

    const numbers = [3,4,5,6];
    // const newNumbers = numbers.map((numbers)=><li>{numbers}</li>);

  return (
    <div>
        <h1>List</h1>
        {/* <ul>{newNumbers}</ul> */}
        {
            numbers.map((numbers)=><li>{numbers}</li>)
        }
        <h2>{numbers[0]}</h2>
    </div>
  );
}

export default list