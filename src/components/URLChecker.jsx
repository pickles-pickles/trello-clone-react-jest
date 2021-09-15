/* import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../Context'

const URLChecker = () => {
  const [appState] = useContext(Context)
  const history = useHistory()
  useEffect(() => {
    console.log(history)
    if (history.location.pathname !== '/') {
      appState.isInLandingPage = false
    }
    console.log('location is ', history.location.pathname)
  }, [history.location])
  return <></>
}

export default URLChecker
 */
