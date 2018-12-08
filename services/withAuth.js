import React, {Component} from 'react'
import Router from 'next/router'
import AuthService from './auth'

export default function withAuth(AuthComponent) {
    const Auth = new AuthService()
    return class Authenticated extends Component {
      constructor(props) {
        super(props)
        this.state = {
          isLoading: true
        };
      }

      componentDidMount () {
        if (!Auth.loggedIn()) {
          Router.push('/login', '/login', { shallow: true })
        }
        this.setState({ isLoading: false })
      }

      render() {
        return (
          <div>
          {this.state.isLoading ? (
              <div></div>
            ) : (
              <AuthComponent {...this.props}  auth={Auth} />
            )}
          </div>
        )
      }
    }
}