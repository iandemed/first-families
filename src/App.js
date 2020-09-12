import React, { useEffect, useState } from 'react'
import presIcon from './imgs/president-icon-white.svg'
import gitHub from './imgs/github-mark.svg'
import './App.css';

const firstFamilyURL = 'https://first-families-api.herokuapp.com/'

function App() {

  const [firstFamilies, setFirstFamily] = useState([])

  const getPresidents = () => {
    fetch(firstFamilyURL)
    .then(res=> res.json())
    .then(ffData => {
      console.log(ffData)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={presIcon}  alt="logo" />
        <h1>First Families API</h1>
      </header>

      <button onClick={getPresidents}> GET </button>

      <header className="App-footer">
        <a href="https://github.com/iandemed">
          <img src = {gitHub} alt="GitHub"/>
        </a>
      </header>

    </div>
  );
}

export default App;
