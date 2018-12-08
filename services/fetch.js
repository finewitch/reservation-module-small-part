import { apiUrl } from '../config'

export default class ApiFetch {

  checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  } 

  fetch(url, options){
      // performs api calls sending the required authentication headers
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

      return fetch(url, {
        headers,
        ...options
      })
      .then(this.checkStatus)
      .then(response => response.json())
  }
}
