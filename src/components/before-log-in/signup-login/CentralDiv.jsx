/* import React, { useContext, useEffect, useCallback } from 'react' */
import React from 'react'

/* import { useHistory } from 'react-router-dom'
import { Context } from '../../../Context' */
import FooterLinks from '../../before-log-in/footer/FooterLinks'
import FooterLogo from '../../before-log-in/footer/FooterLogo'
import FooterSelect from '../../before-log-in/footer/FooterSelect'
import EmailInput from './EmailForm'
import SocialButtons from './SocialButtons'
import CentralDivTextLinks from './CentralDivTextLinks'

const CentralDiv = () => {
  /*   const [appState, setAppState] = useContext(Context) */
  //$$ TO BE MADE CUSTOM HOOK
  /*  const history = useHistory()
  const checkURL = useCallback(() => {
    console.log(history)
    if (history.location.pathname !== '/') {
      setAppState({ ...appState, isInLandingPage: false })
    }
    if (history.location.pathname === '/signup') {
      setAppState({ ...appState, isInSignupPage: true })

      console.log('I am in sign up from outside')
    }
    if (history.location.pathname !== '/signup') {
      setAppState({ ...appState, isInSignupPage: false })
    }
    if (history.location.pathname === '/login') {
      setAppState({ ...appState, isInLoginPage: true })
    }
    if (history.location.pathname !== '/login') {
      setAppState({ ...appState, isInLoginPage: false })
    }

    console.log('location is ', history.location.pathname)
  }, [history])
  useEffect(() => checkURL(), [checkURL]) */
  //$$

  //$$
  return (
    <div className='' style={{ maxWidth: '400px' }}>
      <div className='container d-flex flex-column align-items-center justify-content-center shadow-lg rounded'>
        <div className='container  d-flex flex-column align-items-center justify-content-center'>
          <h1 className='font-16 mt-5 mb-3'>Sign up for your account</h1>
          <EmailInput />
          <div className='font-12 my-4'>OR</div>
          <SocialButtons />
          <div className='w-100'>
            <hr></hr>
          </div>
          {
            //!! difference starts here
          }
          {
            //?? this does not get true. How to fix it. if in sign up. Already
            //?? have ...
          }
          <CentralDivTextLinks />
        </div>
      </div>
      <div
        id='sel'
        className='d-flex align-items-center justify-content-center '
      >
        <div
          id='select-container'
          className='d-flex align-items-center justify-content-center '
        >
          <FooterSelect></FooterSelect>
        </div>
      </div>
      <hr />
      <FooterLogo />
      <FooterLinks />
    </div>
  )
}

export default CentralDiv
