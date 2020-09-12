import React from 'react'

import '../style/RequestForm.css'


const RequestForm = ({apiURL, onHTTPRequest}) => {

    return (
        <form className="HTTP-request">
            <select name="verb">
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
        </form>
    )
}

export default RequestForm;