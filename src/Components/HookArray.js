import React, { useState} from 'react';

function HookArray() {
    
    const [items, setItems] = useState([]);
    const addItem = () => {
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10)
        }])
    };
    

  return (
    <div>
      <h2>HookArray</h2>
      <h3>You can Create a random numbers.</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addItem}>Add a Random Number</button>
      <h6>{JSON.stringify(items)}</h6>
    </div>
  );
}

export default HookArray