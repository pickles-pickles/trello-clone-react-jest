import React, { useContext, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../../../Context'
/* import { Link } from 'react-router-dom'
import FooterSelect from '../FooterSelect'
import FooterLogo from '../FooterLogo'
import FooterLinks from '../FooterLinks' */
import CentralDiv from './CentralDiv'
import BackgroundImages from './BackgroundImages'

const SignupPage = () => {
  const [appState, setAppState] = useContext(Context)
  //$$ TO BE MADE CUSTOM HOOK
  const location = useLocation()
  const checkURL = useCallback(() => {
    console.log(location)
    /* if (location.pathname !== '/') {
      setAppState({ ...appState, isInLandingPage: false })
    } */
    if (location.pathname === '/signup') {
      setAppState({
        ...appState,
        isInSignupPage: true,
        isInLandingPage: false,
        isInLoginPage: false
      })
    }
    /* if (location.pathname !== '/signup') {
      setAppState({ ...appState, isInSignupPage: false })
    } */
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
    /* if (location.pathname !== '/login') {
      setAppState({ ...appState, isInLoginPage: false })
    } */

    console.log('location is ', appState.isInLoginPage) // eslint-disable-next-line
  }, [location])
  useEffect(() => checkURL(), [checkURL])

  return (
    <>
      <div className='background m-0 p-0 '>
        <div className='container d-flex flex-column align-items-center justify-content-center'>
          <img
            alt='Trello'
            className='my-4'
            src='https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg'
            width='200px'
          ></img>
          <CentralDiv></CentralDiv>
        </div>

        {/*   <div
          style={{ height: '700px', backgroundColor: 'rgba(255, 0, 0, 0.3)' }}
        ></div> */}

        <BackgroundImages></BackgroundImages>
      </div>
    </>
  )
}

export default SignupPage
