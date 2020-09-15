
const axios = require(`axios`).default

module.exports = {

  /* Helper functions to make HTTP requests */

  get: (url) => {
    axios.get(url)
    .then( (res) => {
      console.log(JSON.stringify(res.data, null, 4))
    })
  },


  post: (url, body) => {
    axios.post(url, body)
      .then( (res) => {
        console.log(JSON.stringify(res.data, null, 4))
    })
  },

  validPost: (body, resource) => {
    if (resource === 'president'){
      return (body["_id"] && body.born)
    } else if (resource === 'firstSpouse'){
      return (body["_id"] && body.partner && body.born)
    }
  },

  put: (url, body) => {
    axios.put(url, body)
    .then( (res) => {
      console.log(res)
    })
  },
  delete: (url) => {
    axios.delete(url)
      .then( (res) => {
        console.log(JSON.stringify(res.data, null, 4))
      })
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