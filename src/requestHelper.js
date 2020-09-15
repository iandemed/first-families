
const axios = require(`axios`).default

module.exports = {

  /* Helper functions to make HTTP requests */

  get: (url) => {
    axios.get(url)
    .then( (res) => {
      if (!Array.isArray(res.data)){
        let json = [res.data]
        console.log(json)
        return json
      } else {
        return res.data
      }
    })
  },


  post: (url, body) => {
    axios.post(url, body)
      .then( (res) => {
        if (!Array.isArray(res.data)){
          let json = [res.data]
          return json       
        }
        else {
          return res.data
        }

    })
  },

  put: (url, body) => {
    axios.put(url, body)
    .then( (res) => {
      if (!Array.isArray(res.data)){
        let json = [res.data]
        return json
      } else {
        return res.data
      }

    })
  },
  delete: (url) => {
    axios.delete(url)
      .then( (res) => {
        if (!Array.isArray(res.data)){
          let json = [res.data]
          return json       
        }
        else {
           return res.data
         }
      })
  },

  // Check if the minimally required entries are included
  validPost: (body, resource) => {
    if (resource === 'president'){
      return (body["_id"] && body.born)
    } else if (resource === 'firstSpouse'){
      return (body["_id"] && body.partner !== [""] && body.born)
    }
  },

  // Check if there is at least one entry that has changed
  validPut: (body) => {
    return (Object.keys(body).length !== 0)
  },

  /* Helper functions to prepare the body for the HTTP requests */
  prepare: (body, verb) => {

      // Convert date strings into Date objects
      if (body.date){
        body.date = new Date(body.date)
      }
      if (body.born){
        body.born = new Date(body.born)
      }
      if (body.died){
        body.died = new Date(body.died)
      }
        
      return body
      
  }

}