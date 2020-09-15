import React from 'react'

import '../style/HTTPRequest.css'


const HTTPRequest = ({apiURL, onVerbSelect, onResourceSelect, onIdChange, verb}) => {
    
    // Conditionally render the _id field so that users do not input an _id
    // when they do not have to
    const idBox = (verb) => {
        if (verb !== 'POST'){
            return(
                <input 
                    type="text" 
                    name = "_id" 
                    placeholder="1"
                    onChange={onIdChange}
                />
            )
        }
    }
    

    return (
        <form className="HTTP-request">
            <div className="request-line">                
                <select onChange={onVerbSelect}>
                    <option value="GET"> GET </option>            
                    <option value="POST"> POST </option>            
                    <option value="PUT"> PUT </option>            
                    <option value="DELETE"> DELETE </option>            
                </select>
                <div className="request-url">
                    <p>{apiURL}</p>
                </div>
                <select onChange={onResourceSelect}>
                    <option value="president"> president </option>            
                    <option value="firstSpouse"> firstSpouse </option>                       
                </select>
                <div className="request-url">
                    <p>/</p>
                </div>
                
                {idBox(verb)}
            </div>
        </form>
    )
}

export default HTTPRequest;