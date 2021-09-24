import { useContext, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../../../Context'

const useURLCheck = () => {
  const [appState, setAppState] = useContext(Context)
  const location = useLocation()
  const checkURL = useCallback(() => {
    console.log(location)

    if (location.pathname === '/signup') {
      setAppState({
        ...appState,
        isInSignupPage: true,
        isInLandingPage: false,
        isInLoginPage: false
      })
      console.log(
        'I am in sign up and isInSignupPage is ',
        appState.isInSignupPage
      )
    }

    if (location.pathname === '/login') {
      setAppState({
        ...appState,
        isInSignupPage: false,
        isInLandingPage: false,
        isInLoginPage: true
      })
      console.log(
        'I am in log in and isInLoginPage is ',
        appState.isInLoginPage
      )
    }

    console.log('location is ', appState.isInLoginPage) // eslint-disable-next-line
  }, [appState.isInSignupPage, appState.isInLoginPage])

  useEffect(() => checkURL(), [checkURL])
  return
}

export default useURLCheck
