import React, { useEffect, useState } from 'react'

import presIcon from './imgs/president-icon-white.svg'
import gitHub from './imgs/github-mark.svg'

import HTTPRequest from './Component/HTTPRequest'
import RequestBody from './Component/RequestBody'

import './style/App.css'

const requests = require('./requests.js')

const firstFamilyURL = 'https://first-families-api.herokuapp.com/'

function App() {

  const [verb, setVerb] = useState('GET')
  const [resource, setResource] = useState('president')
  const [id, setID] = useState('')

  const [firstFamilyData, setFirstFamilyData] = useState([''])

  const [newHTTPRequest, setNewHTTPRequest] = useState(true)

  useEffect(() => {
    fetch(firstFamilyURL)
    .then(res=> res.json())
    .then(data => {
      setFirstFamilyData(data)
      console.log('Fetched data from API')
    })
  }, [])

  useEffect(() => {
    console.log('It worked')
  }, [newHTTPRequest])

  const makeHTTPRequest = (verb, url, body) => {

    if (verb === 'GET'){
      console.log(url)
      requests.get(url)
        .then( res => {
          setFirstFamilyData(res.data)
        })
    } else if (verb === 'POST') {
      if (requests.validPost(body, resource)){
       requests.post(url, body)
        .then( res => {
          setFirstFamilyData(res.data)
        })
      } else{
        console.log("Invalid POST")
      }
    } else if (verb === 'PUT'){
      if (requests.validPut(body, resource)){
        requests.put(url, body)
        .then( res => {
          setFirstFamilyData(res.data)
        })
      } else{
        console.log("Invalid POST")
      }
    } else if (verb === 'DELETE'){
      requests.delete(url)
        .then( res => {
          setFirstFamilyData(res.data)
        })
    }

    setNewHTTPRequest(false)

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
      requests.prepare(body, verb)

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
        <a href="./">
          <img src={presIcon}  alt="logo" />
        </a>
        <h1>First Families API</h1>
      </header>

      <main>

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

        <div className ="request-output">
          {stringify(firstFamilyData)}
        </div>

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
