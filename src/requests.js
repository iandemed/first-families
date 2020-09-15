
const axios = require(`axios`).default

module.exports = {

  /* Helper functions to make HTTP requests */

  get: (url) => {
    return axios.get(url)
  },

  post: (url, body) => {
    return axios.post(url, body)
  },

  put: (url, body) => {
    return axios.put(url, body)
  },
  delete: (url) => {
    return axios.delete(url)
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
      
  },

  data: (verb, url, body) => {

    this[String.toLowerCase(verb)]()

  }
}