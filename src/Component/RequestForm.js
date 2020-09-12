import React, {useState} from 'react'

import '../style/RequestForm.css'




const RequestForm = ({apiURL, onHTTPRequest}) => {

    const [verb, setVerb] = useState('GET')
    const [resource, setResource] = useState('president')

    const handleVerbSelect = (e) => {
        setVerb(e.target.value)
        console.log(e.target.value)
    }

    const handleResourceSelect = (e) => {
        setResource(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        
        console.log(`${verb} ${apiURL}${resource}`)
        e.preventDefault()
    }

    return (
        <form className="HTTP-request">
            <div className="request-line">
                <select value={verb} onChange={handleVerbSelect}>
                    <option value="GET"> GET </option>            
                    <option value="POST"> POST </option>            
                    <option value="PUT"> PUT </option>            
                    <option value="DELETE"> DELETE </option>            
                </select>
                <p>{apiURL}</p>
                <select value={resource} onChange={handleResourceSelect}>
                    <option value="president"> president </option>            
                    <option value="firstSpouse"> firstSpouse </option>                       
                </select>
                <p>/</p>
            </div>
            <input type="submit" value="Submit" className="submit" onClick={handleSubmit}/>
        </form>
    )
}

export default RequestForm;