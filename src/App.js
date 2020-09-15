import React, { useEffect, useState } from 'react'

import presIcon from './imgs/president-icon-white.svg'
import gitHub from './imgs/github-mark.svg'

import HTTPRequest from './Component/HTTPRequest'
import RequestBody from './Component/RequestBody'

import './style/App.css'

const requestHelper = require('./requestHelper.js')

const firstFamilyURL = 'https://first-families-api.herokuapp.com/'

function App() {

  const [firstFamilyData, setFirstFamilyData] = useState('[{"text": "Test"}]')
  const [verb, setVerb] = useState('GET')
  const [resource, setResource] = useState('president')

  const makeHTTPRequest = (verb, url, body) => {
    
    if (verb === 'GET'){
      requestHelper.get(url)
    } else if (verb === 'POST') {
      requestHelper.post(url, body)
    } else if (verb === 'PUT'){
      requestHelper.put(url, body)
    } else if (verb === 'DELETE'){
      requestHelper.delete(url)
    }
  }

  const handleVerbSelect = (e) => {
    setVerb(e.target.value)
    console.log(e.target.value)
  }

  const handleResourceSelect = (e) => {
    setResource(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e, body) => {      
  
    if (body){
      requestHelper.prepare(body, verb)
      makeHTTPRequest(verb, `${firstFamilyURL}${resource}`, body)
    } else {
      makeHTTPRequest(verb, `${firstFamilyURL}${resource}`)
    }


    e.preventDefault()
  }



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
          onVerbSelect = {handleVerbSelect}
          onResourceSelect ={handleResourceSelect} 
        />

        <RequestBody 
          verb = {verb}
          onHTTPRequest = {handleSubmit}
        />

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
