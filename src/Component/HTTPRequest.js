import React from 'react'

import '../style/HTTPRequest.css'


const HTTPRequest = ({apiURL, onVerbSelect, onResourceSelect}) => {
    
    return (
        <form className="HTTP-request">
            <div className="request-line">
                <select onChange={onVerbSelect}>
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
        </form>
    )
}

export default HTTPRequest;