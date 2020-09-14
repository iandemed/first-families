import React, { useEffect, useState } from 'react'

import presIcon from './imgs/president-icon-white.svg'
import gitHub from './imgs/github-mark.svg'

import HTTPRequest from './Component/HTTPRequest'
import RequestBody from './Component/RequestBody'

import './style/App.css'

const firstFamilyURL = 'https://first-families-api.herokuapp.com/'
const axios = require(`axios`).default

function App() {

  const [firstFamilyData, setFirstFamilyData] = useState('[{"text": "Test"}]')
  const [verb, setVerb] = useState('GET')
  const [resource, setResource] = useState('president')

  const makeHTTPRequest = (verb, url) => {
    
    if (verb === 'GET'){
      console.log(url)
      axios.get(url)
        .then( (res => {
          console.log(JSON.stringify(res.data, null, 4))
        }))
    } else {
      console.log(verb)
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
  
    // if(verb === 'POST' | verb === 'PUT'){
      
    // }
    
    // makeHTTPRequest(verb, `${firstFamilyURL}${resource}`)

    console.log(body)

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
