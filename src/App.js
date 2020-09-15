import React, { useEffect, useState } from 'react'

import presIcon from './imgs/president-icon-white.svg'
import gitHub from './imgs/github-mark.svg'

import HTTPRequest from './Component/HTTPRequest'
import RequestBody from './Component/RequestBody'

import './style/App.css'

const requestHelper = require('./requestHelper.js')

const firstFamilyURL = 'https://first-families-api.herokuapp.com/'

function App() {

  const [verb, setVerb] = useState('GET')
  const [resource, setResource] = useState('president')
  const [id, setID] = useState('')

  const [firstFamilyData, setFirstFamilyData] = useState([''])

  useEffect(() => {
    fetch(firstFamilyURL)
    .then(res=> res.json())
    .then(data => {
      setFirstFamilyData(data)
      console.log('Fetched data from API')
    })
  }, [])

  const makeHTTPRequest = (verb, url, body) => {
    
    if (verb === 'GET'){
      requestHelper.get(url)
    } else if (verb === 'POST') {
      requestHelper.validPost(body, resource) ? setFirstFamilyData(requestHelper.post(url, body)) : console.log("Invalid POST")
    } else if (verb === 'PUT'){
      requestHelper.validPut(body) ? setFirstFamilyData(requestHelper.put(url, body)) : console.log("Invalid POST")
    } else if (verb === 'DELETE'){
      requestHelper.delete(url)
    }
  }

  const handleVerbSelect = (e) => {
    setVerb(e.target.value)
  }

  const handleResourceSelect = (e) => {
    setResource(e.target.value)
  }

  const handleIdInput = (e) => {
    setID(e.target.value)
  }

  const handleSubmit = (e, body) => {      
  
    if (body){
      requestHelper.prepare(body, verb)

      if(verb === 'PUT'){
        makeHTTPRequest(verb, `${firstFamilyURL}${resource}/${id}`, body)
      } else {
        makeHTTPRequest(verb, `${firstFamilyURL}${resource}`, body)
      }
      
    } else {
      makeHTTPRequest(verb, `${firstFamilyURL}${resource}/${id}`)
    }

    e.preventDefault()
  }

  const stringify = (json) => {
    console.log(JSON.stringify(json, null, '\t'))
    return (
    <pre>
        {
        `${JSON.stringify(json, null, '\t')}`
        }
    </pre>
    )
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={presIcon}  alt="logo" />
        <h1>First Families API</h1>
      </header>

      <main>

        <div className ="request-output">
          {stringify(firstFamilyData)}
        </div>

        <HTTPRequest 
          apiURL = {firstFamilyURL}  
          onVerbSelect = {handleVerbSelect}
          onResourceSelect ={handleResourceSelect}
          onIdChange={handleIdInput}
          verb = {verb} 
        />

        <RequestBody 
          verb = {verb}
          onHTTPRequest = {handleSubmit}
        />

      </main>
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
