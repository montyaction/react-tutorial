import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// class App extends React.Component {
//   render() {
//     return (
//       <div className='App'>
//         <h1>Hello {name}!</h1>
//       </div>
//     );
//   }
// }
// const name = 'React';
// JSX
// const heading = <h1 className="site-heading">Hello, React!</h1>
// No JSX
// const heading1 = React.createElement('h1', { className : 'site-heading'}, 'Hello, React!')

ReactDOM.render(<App />, document.getElementById('root'))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
