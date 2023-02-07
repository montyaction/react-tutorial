import React from 'react'

function functionClick() {

    function changeEvent(e) {
        e.preventDefault();
        console.log("Hello EVent handling...");
    }

  return (
    <>
      <a href="https://www.xtracover.com/" onClick={changeEvent}>
        Click Me
      </a>
      <h1>Hello! Khushi Baby</h1>
    </>
  );
}

export default functionClick;