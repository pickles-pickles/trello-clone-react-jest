import React, { useState } from 'react'

const Context = React.createContext()

const ContextProvider = ({ children }) => {
  const initialState = {
    collapse: true,
    collapse2: true,
    collapse3: true,
    collapse4: true,
    emailValue: '',
    isLogged: true,
    login: function () {
      console.log('hey')
      console.log(appState)
    }
  }
  const [appState, setAppState] = useState(initialState)
  return (
    <Context.Provider value={[appState, setAppState]}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
