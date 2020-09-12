import React, {useState} from 'react'

import '../style/RequestForm.css'




const HTTPRequest = ({apiURL, onHTTPRequest, onVerbSelect, onResourceSelect}) => {
    
    return (
        <form className="HTTP-request">
            <div className="request-line">
                <select value={"GET"} onChange={onVerbSelect}>
                    <option value="GET"> GET </option>            
                    <option value="POST"> POST </option>            
                    <option value="PUT"> PUT </option>            
                    <option value="DELETE"> DELETE </option>            
                </select>
                <p>{apiURL}</p>
                <select value={"President"} onChange={onResourceSelect}>
                    <option value="president"> president </option>            
                    <option value="firstSpouse"> firstSpouse </option>                       
                </select>
                <p>/</p>
            </div>
            <button type="submit" className="submit" onClick={onHTTPRequest}> SUBMIT </button>
        </form>
    )
}

export default HTTPRequest;