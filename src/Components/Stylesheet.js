import React from 'react';
import './Style.css';

export default function Stylesheet(props) {
    let className = props.isvalue ? "demo2" : "demo1";
    console.log(className);
  return (
    <div>
        <h1 className={`${className} demo`}>Hello Stylesheet</h1>
    </div>
  )
}
