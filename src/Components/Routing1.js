import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Routing1() {
  return (
    <Router>
      
      <h1>Routing</h1>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
      </Routes>

    </Router>
  );
}

function Home() {
    return <h1>Home</h1>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
