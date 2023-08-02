import React, { useState, useEffect} from 'react';

export default function StateHook() {

    // Declare a new state variable, which we'll call "count"
    const [count,  setCount] = useState(0);

    // Declare multiple state variables!
    const [age, setAge] = useState(30);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text : 'Learn Hooks' }]);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        console.log(`You clicked ${count} times`);
    });

  return (
    <div>
        <h2>StateHook</h2>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>

        {/* <p>{age}</p> */}
        {/* <p>{fruit}</p> */}
        {/* <p>{todos}</p> */}
    </div>
  )
}

// // Effect Hook

// export function FreindStatus(props) {
//     const [isOnline, setOnline] = useState(null);

//     function handleStatusChange(status) {
//         setOnline(status.isOnline);
//     }

//     useEffect(() => {
//         chatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//         return () => {
//             chatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//         };
//     });

//     if (isOnline === null) {
//         return 'Loading...';
//     }

//     return isOnline ? 'Online' : 'Offline';
// }