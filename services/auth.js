import { apiUrl } from '../config'

export default class AuthService {
    constructor() {
        this.domain = apiUrl
        this.fetch = this.fetch.bind(this)
        this.login = this.login.bind(this)
    }    

    login(email, password) {
      
        return this.fetch(`${this.domain}/auth/token`, {
          method: 'POST',
          body: JSON.stringify({'email':email, 'password':password})
        }).then(res => {
            console.log("LOGOWANIE", res.data);
          if(res.status) {
            this.setToken(res.data.token)
            this.setRole('ROLE_USER')
            this.setUsername(res.data.user_name)
            return Promise.resolve(res)            
          } else {
            return Promise.reject(res)                          
          }
        })
    }

    loggedIn(){
        // Checks if there is a saved token 
        const token = this.getToken()
        const role = this.getRole()
        return token && role;
    }

    loggedInFromData(data) {
        if(!data.status && data.data.redirect_url) {
            // this.logout()
            // top.location.href = data.data.redirect_url;
        }
    }

    setUsername(username) {
        localStorage.setItem('auth_username', username);
    }

    getUsername() {
        return localStorage.getItem('auth_username')
    }

    setToken(token){
        localStorage.setItem('auth_token', token)
    }

    getToken(){
        return localStorage.getItem('auth_token')
    }

    setRole(role){
        localStorage.setItem('auth_role', role)
    }

    getRole(){
        return localStorage.getItem('auth_token')
    }

    logout(){
        // Clear user token and profile data from localStorage
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_role');
    }

    _checkStatus(response) {
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

        if (this.loggedIn()){
          headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
          headers,
          ...options
        })
        .then(this._checkStatus)
        .then(response => response.json())
    }
}