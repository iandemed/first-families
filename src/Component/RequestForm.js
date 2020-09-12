import React from 'react'


const RequestForm = () => {

    return (
        <form>
            <select name="request">
                <option value="GET"> GET </option>            
                <option value="POST"> POST </option>            
                <option value="PUT"> PUT </option>            
                <option value="DELETE"> DELETE </option>            
            </select>
        </form>
    )
}

export default RequestForm;