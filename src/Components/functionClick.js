import React from 'react'

function functionClick() {

    function changeEvent(e) {
        e.preventDefault();
        console.log("Hello EVent handling...");
    }

  return (
    <React.Fragment>
      <a href="https://www.xtracover.com/" onClick={changeEvent}>
        Click Me
      </a>
      <h1>Hello! Khushi</h1>
    </React.Fragment>
  );
}

export default functionClick;