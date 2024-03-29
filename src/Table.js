import React from 'react';

// Class Components

// class Table extends Component {
//     render() {
//         return (
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Job</th>
//               </tr>
//             </thead>
            // <tbody>
            //   <tr>
            //     <td>Mohit Kanwar</td>
            //     <td>Front-end Enginneyer</td>
            //   </tr>
            //   <tr>
            //     <td>Charlie</td>
            //     <td>Janitor</td>
            //   </tr>
            //   <tr>
            //     <td>Mac</td>
            //     <td>Bouncer</td>
            //   </tr>
            //   <tr>
            //     <td>Dee</td>
            //     <td>Aspiring actress</td>
            //   </tr>
            //   <tr>
            //     <td>Dennis</td>
            //     <td>Bartender</td>
            //   </tr>
            // </tbody>
//           </table>
//         );
//     }
// }

// Simple Components

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return (
    <tbody>{rows}</tbody>
    // <tbody>
    //   <tr>
    //     <td>Mohit Kanwar</td>
    //     <td>Front-end Enginneyer</td>
    //   </tr>
    //   <tr>
    //     <td>Charlie</td>
    //     <td>Janitor</td>
    //   </tr>
    //   <tr>
    //     <td>Mac</td>
    //     <td>Bouncer</td>
    //   </tr>
    //   <tr>
    //     <td>Dee</td>
    //     <td>Aspiring actress</td>
    //   </tr>
    //   <tr>
    //     <td>Dennis</td>
    //     <td>Bartender</td>
    //   </tr>
    // </tbody>
  );
}

const Table = (props) => {
  const { characterData, removeCharacter } = props

  // const { characterData } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    );
}

export default Table