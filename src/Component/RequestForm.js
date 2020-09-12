import React, {useState} from 'react'

import '../style/RequestForm.css'




const RequestForm = ({apiURL, onHTTPRequest}) => {

    const [verb, setVerb] = useState('GET')

    const handleVerbSelect = (e) => {
        setVerb(e.target.value)
        console.log(e.target.value)
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
                <select name="resource">
                    <option value="president"> president </option>            
                    <option value="firstSpouse"> firstSpouse </option>                       
                </select>
                <p>/</p>
            </div>
            <div className="submit">
                <p>SUBMIT</p>
            </div>
        </form>
    )
}

export default RequestForm;