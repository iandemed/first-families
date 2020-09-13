import React from 'react'

import '../style/HTTPRequest.css'


const RequestBody = ({verb, resource, onHTTPRequest}) => {
    

    if(verb === "POST"){
        return(
            <div className="HTTP-body">
            <form>
                <label> _id: </label>
                <input type="text" name = "id" placeholder="1"></input>
                <label> name: </label>
                <input type="text" name = "name" placeholder="George Washington"></input>
                <label> partner: </label>
                <input type="text" name = "partner" placeholder='["1p"]'></input>
                <label> born: </label>
                <input type="text" name = "born" placeholder="1732-02-22"></input>
                <label> died: </label>
                <input type="text" name = "username" placeholder="1802-05-22"></input>
            </form>
            <button type="submit" className="submit" onClick={onHTTPRequest}> SUBMIT </button>
            </div>
        )
    } else{
        return (
            <div className="HTTP-body">
                <button type="submit" className="submit" onClick={onHTTPRequest}> SUBMIT </button>
            </div>
        )
    }

}

export default RequestBody;