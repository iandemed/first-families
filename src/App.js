import React, { useEffect, useState } from 'react'

import presIcon from './imgs/president-icon-white.svg'
import gitHub from './imgs/github-mark.svg'

import HTTPRequest from './Component/HTTPRequest'

import './style/App.css'

const firstFamilyURL = 'https://first-families-api.herokuapp.com/'

function App() {

  const [firstFamilyData, setFirstFamilyData] = useState('[{"text": "Test"}]')
  const [verb, setVerb] = useState('GET')
  const [resource, setResource] = useState('president')

  const makeHTTPRequest = (verb, URL) => {
    console.log(verb, URL)
  }

  const handleVerbSelect = (e) => {
    setVerb(e.target.value)
    console.log(e.target.value)
  }

  const handleResourceSelect = (e) => {
    setResource(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {      
    console.log(verb, `${firstFamilyURL}${resource}`)
    e.preventDefault()
  }



  // const getPresidents = () => {
  //   fetch(firstFamilyURL)
  //   .then(res=> res.json())
  //   .then(ffData => {
  //     console.log(ffData)
  //   })
  // }


  const createForm = () => {
    return (
      <p>{firstFamilyData}</p>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={presIcon}  alt="logo" />
        <h1>First Families API</h1>
      </header>

        <HTTPRequest 
          apiURL = {firstFamilyURL} 
          onHTTPRequest = {handleSubmit} 
          onVerbSelect = {handleVerbSelect} 
          onResourceSelect ={handleResourceSelect} 
        />

        {createForm()}

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
