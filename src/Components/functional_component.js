import React from 'react';
import "../App";

function functionCompo(props) {
    return (
        <div>
            <h1 className='.center'>Functional Component</h1>
            <p>We can use props methed</p>
            <h3>hello {props.name}-{props.last}</h3>
        </div>
    );
}

export default functionCompo;