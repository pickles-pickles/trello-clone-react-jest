import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context'
import NameInput from './NameInput'

const EmailInput = () => {
  const [appState, setAppState] = useContext(Context)
  /*  useEffect(() => {
    console.log('mail value is ', appState.emailValue)
    console.log('isLogged is ', appState.isLogged)
  }, []) */
  return (
    <>
      <form
        className='d-flex flex-column align-items-center justify-content-center mt-3'
        //
        /*  onSubmit={e => {
          e.preventDefault()
          setAppState({ ...appState, isEmailSubmitted: true, isLogged: true })

          //appState.readyToLogin()
          console.log('form submitted. isLogged: ', appState.isLogged)
          console.log('form submitted. mail: ', appState.emailValue)
          console.log('form submitted. password: ', appState.passwordValue)
        }} */
      >
        {/* //$$ EMAIL */}
        <input
          type='email'
          name='email'
          className='form-control mb-2'
          tabIndex='0'
          autoCorrect='off'
          spellCheck={false}
          autoCapitalize='none'
          placeholder='Enter email'
          /*   autoComplete='username email' */
          value={appState.emailValue}
          onChange={e => {
            setAppState({ ...appState, emailValue: e.target.value })
            // $$ to be removed in production
            console.log('MAIL IS: ', appState.emailValue)
          }}
        />

        {/* //$$ PASSWORD */}
        {appState.isInLoginPage ? (
          <input
            name='password'
            className='form-control'
            tabIndex='0'
            autoCorrect='off'
            spellCheck={false}
            autoCapitalize='none'
            placeholder='Enter password'
            onChange={e => {
              setAppState({ ...appState, passwordValue: e.target.value })
              // $$ to be removed in production
              console.log('PASSWORD IS ', appState.passwordValue)
            }}
          />
        ) : null}

        {/* //$$ NAME */}
        {/*   {appState.isInSignupPage ? (
          <input
            className='form-control mb-2'
            placeholder='Enter full name'
            onChange={e => {
              setAppState({ ...appState, name: e.target.value })
            }}
          ></input>
        ) : null} */}
        <NameInput />

        {/* //$$ NAME */}
        {appState.isInSignupPage ? null : (
          <p className='text-muted font-12 mt-4'>
            By signing up, you confirm that you've read and accepted our
            <span> </span>
            <a href='/#/demo' target='_blank'>
              Terms of Service
            </a>
            <span> and </span>
            <a href='/#/demo' target='_blank'>
              Privacy Policy
            </a>
            .
          </p>
        )}

        <button
          id='signup-submit'
          tabIndex='0'
          type='submit'
          action=''
          className={
            appState.emailValue === ''
              ? 'btn-secondary text-white btn btn-block'
              : 'btn-success btn btn-block'
          }
          value='Continue'
          disabled={false}
          onClick={e => {
            console.log('submit button was clicked -Start')
            e.preventDefault()
            appState.readyToLogin()
            console.log('submit button was clicked -End')
          }}
        >
          {appState.name !== '' || appState.passwordValue !== '' ? (
            <Link to='/private' className='text-decoration-none text-white'>
              Continue
            </Link>
          ) : (
            <span>Continue</span>
          )}
        </button>
      </form>
    </>
  )
}

export default EmailInput
