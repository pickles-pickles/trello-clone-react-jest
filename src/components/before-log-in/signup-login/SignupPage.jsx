import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()
  useEffect(() => {
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
  //$$

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