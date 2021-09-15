import React from 'react'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/before-log-in/landing-page/LandingPage'
import './App.css'
import LoginPage from './components/before-log-in/signup-login/LoginPage'
import SignupPage from './components/before-log-in/signup-login/SignupPage'
import Private from './components/after-login/Private'
import PrivateRoute from './components/PrivateRoute'
import { ContextProvider } from './Context'
import URLChecker from './components/URLChecker'
function App () {
  return (
    <div className='App'>
      <ContextProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <LandingPage></LandingPage>
            </Route>
            <Route path='/login'>
              <LoginPage></LoginPage>
            </Route>
            <Route path='/signup'>
              <SignupPage></SignupPage>
            </Route>
            <PrivateRoute
              exact
              path='/private'
              component={Private}
            ></PrivateRoute>
            <URLChecker></URLChecker>
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  )
}

export default App
