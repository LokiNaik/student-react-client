
import './App.css';
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {

  const [name, setName] = useState("")
  
  const handleSubmit = () => {
    console.log('button clicked!')
    console.log(name)
  }

  function nameHandle(event) {
    let nameObject = event.target.value
    setName(nameObject)
  }


  return (
    <div>
      <h1>hello world</h1>
      <div>
        <input type='text' placeholder='Name' onInput={nameHandle}></input>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>

  );
}

export default App;
