import React, { useEffect, useState } from 'react'

import presIcon from './imgs/president-icon-white.svg'
import gitHub from './imgs/github-mark.svg'

import RequestForm from './Component/RequestForm'

import './style/App.css'

const firstFamilyURL = 'https://first-families-api.herokuapp.com/'

function App() {

  const [firstFamilyData, setFirstFamilyData] = useState('[{"text": "Test"}]')

  // const getPresidents = () => {
  //   fetch(firstFamilyURL)
  //   .then(res=> res.json())
  //   .then(ffData => {
  //     console.log(ffData)
  //   })
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={presIcon}  alt="logo" />
        <h1>First Families API</h1>
      </header>

        <RequestForm apiURL = {firstFamilyURL} onHTTPRequest = {setFirstFamilyData}/>

        <p>{firstFamilyData}</p>

      <footer className="App-footer">
        <a href="https://github.com/iandemed">
          <img src = {gitHub} alt="GitHub"/>
        </a>
      </footer>

    </div>
  );
}

//<button onClick={getPresidents}> GET </button>}

export default App;
