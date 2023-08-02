import React, { useState} from 'react'

function HookObject() {

    const [name, setName] = useState({firsrName : '', lastName : ''});

  return (
    <div>
      <h2>HookObject</h2>
      <form>

        <div>
            <label>First Name : {name.firstName}</label>
            <input type="text" value={name.firstName} onChange={(e) => setName({...name,firstName : e.target.value})}></input>
        </div>

        <div>
            <label>Last Name : {name.lastName}</label>
            <input type="text" value={name.lastName} onChange={(e) => setName({...name,lastName : e.target.value})}></input>
        </div>
        <h5>{JSON.stringify(name)}</h5>
      </form>
    </div>
  );
}

export default HookObject;