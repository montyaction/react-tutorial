import React, { Component } from 'react';
import Testing from './Testing';

class classCompo extends Component {

    state = {
        users : [
            { id : 1, name : "brian", class : "A"},
            { id : 2, name : "fernando", class : "B"},
            { id : 3, name : "montyaction", class : "B"},
        ]
    }

    render() {
        const users = this.state.users.map((user)=>{
            return (
                // <h1 key={user.id}>
                //     {user.id}. {user.name} Class - {user.class}
                // </h1>
                <Testing key={user.id} value={user.id}></Testing>
            )
        });

        return (
          <div>
            <h1>Class Component {'<>'}</h1>
            <ul>
                {users}
            </ul>
          </div>
        );

    }
}

export default classCompo;