import React from 'react'

import '../style/HTTPRequest.css'


const RequestBody = ({verb, resource, onHTTPRequest}) => {
    
    let requestBody = {}

    let handleInput = (e) => {

        let name = e.target.name

        if (name === "partner"){
            requestBody[name] = [e.target.value]
        } else {
            requestBody[name] = e.target.value
        }

        
    }


    if(verb === "POST" | verb === 'PUT'){
        return(
            <div className="HTTP-body">
            <form>
                <div className="form-item">
                    <label> _id: </label>
                    <input 
                        type="text" 
                        name = "_id" 
                        placeholder="1" 
                        onChange={handleInput}/>
                    </div>
                <div className="form-item">
                    <label> name: </label>
                    <input 
                        type="text" 
                        name = "name" 
                        placeholder="George Washington"
                        onChange={handleInput}/>
                    </div>
                <div className="form-item">
                    <label> partner: </label>
                    <input 
                        type="text" 
                        name = "partner" 
                        placeholder='1p'
                        onChange={handleInput}/>
                    </div>
                <div className="form-item">
                    <label> born: </label>
                    <input 
                        type="text" 
                        name = "born" 
                        placeholder="1732-02-22"
                        onChange={handleInput}/>
                    </div>
                <div className="form-item">
                    <label> died: </label>
                    <input 
                        type="text" 
                        name = "username" 
                        placeholder="1802-05-22"
                        onChange={handleInput}/>
                </div>
            </form>
            <button 
                type="submit" 
                className="submit" 
                onClick={e => onHTTPRequest(e, requestBody)}> 
                SUBMIT 
            </button>
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