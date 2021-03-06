import React, { useState } from 'react'

const Context = React.createContext()

const ContextProvider = ({ children }) => {
  const initialState = {
    collapse: true,
    collapse2: true,
    collapse3: true,
    collapse4: true,
    emailValue: '',
    name: '',
    passwordValue: '',
    isLogged: false,
    isInLandingPage: true,
    isInSignupPage: false,
    isInLoginPage: false,
    isEmailSubmitted: false,
    alertDemo: function () {
      alert('This is a demo version. This feature is disabled.')
    },
    readyToLogin: function () {
      if (Boolean(this.emailValue) === true) {
        if (
          Boolean(this.name) === true ||
          Boolean(this.passwordValue) === true
        ) {
          this.isLogged = true
        }
        console.log(
          ' I was called from ready to login and isLogged: ',
          this.isLogged,
          'pass is ',
          this.passwordValue,
          'name is ',
          this.name,
          'form submitted'
        )
      }
    },
    icons: [
      {
        url:
          'https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg',
        social: 'Google'
      },
      {
        url:
          'https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/72ece804e5285ab6507e2406157cda3c/microsoft-logo.svg',
        social: 'Microsoft'
      },
      {
        url:
          'https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/6fc4ecf05a97cfb43cfcbb14738a5aa0/apple-logo-black.svg',
        social: 'Apple'
      },
      {
        url:
          'https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/267584bf90783090ede8f337d9baf909/slack-logo.svg',
        social: 'Slack'
      }
    ]
  }
  const [appState, setAppState] = useState(initialState)

  /* useEffect(() => {
    console.log(history.location)
    if (history.location.pathname !== '/') {
      appState.isInLandingPage = false
    }
    console.log('location is ', history.location.pathname)
  }, [history.location]) */
  return (
    <Context.Provider value={[appState, setAppState]}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
