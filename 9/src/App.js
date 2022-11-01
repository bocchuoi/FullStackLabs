import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from "./Student.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Student></Student>
      </header>
    </div>
  );
}

export default App;
