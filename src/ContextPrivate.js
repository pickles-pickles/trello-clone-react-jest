import React, { useState } from 'react'

const ContextPrivate = React.createContext()

const ContextPrivateProvider = ({ children }) => {
  const initialStatePrivate = {}
  const [appStatePrivate, setAppStatePrivate] = useState(initialStatePrivate)
  return (
    <ContextPrivate.Provider value={[appStatePrivate, setAppStatePrivate]}>
      {children}
    </ContextPrivate.Provider>
  )
}

export { ContextPrivate, ContextPrivateProvider }
