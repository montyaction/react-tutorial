import React, { useState, useEffect} from 'react';

export default function FunctionMosePosition() {
    
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);

    const logmousemove = (e) => {
        setPositionX(e.clientX);
        setPositionY(e.clientY);
    }

    useEffect(()=> {
        console.log('Lifecycle : useEffect called');
        window.addEventListener('mousemove', logmousemove)
    }, []) // Only one time call

  return (
    <div>
      <h2>Function Component</h2>
      <h3>Track mouse position</h3>
      <h4>
        X - {positionX} Y - {positionY}
      </h4>
    </div>
  );
}
