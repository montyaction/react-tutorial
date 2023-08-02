import React from 'react'

// class list extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
class list extends React.Component {
  
  state = {
    user : [
      {id : 1, name : "ArunDhati", age : 25, class : "C"},
      {id : 2, name : "Munnka", age : 21, class : "A"},
      {id : 3, name : "Dhati", age : 22, class : "D"},
      {id : 4, name : "Arun", age : 24, class : "B"},
    ]
  };
  
  render() {
    const users = this.state.user.map(user=>
        <li key={user.id}>
          {user.id} {user.name} 
          Age - {user.age} 
          Class - {user.class}
        </li>);

    console.log(this.state.user);

    const numbers = this.props.numbers;
    // const newNumbers = numbers.map((numbers)=><li>{numbers}</li>);
    console.log(numbers);

        return (
          <div>
            <h1>List</h1>
            {/* <ul>{newNumbers}</ul> */}
            {numbers.map((numbers) => (
              <li key={numbers}>{numbers}</li>
            ))}
            <h2>{numbers[0]}</h2>
            <ul>{users}</ul>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Names</th>
                  <th>Age</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- table rows go here --> */}
                {this.state.user.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.class}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
}

export default list