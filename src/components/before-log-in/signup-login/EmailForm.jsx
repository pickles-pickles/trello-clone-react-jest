import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { Context } from '../../../Context'
import NameInput from './NameInput'

const EmailInput = () => {
  const [appState, setAppState] = useContext(Context)
  return (
    <>
      <form
        className='d-flex flex-column align-items-center justify-content-center mt-3'
        onSubmit={e => {
          e.preventDefault()
          setAppState({ ...appState, isEmailSubmitted: true })
        }}
      >
        <input
          type='email'
          name='email'
          id='email'
          className='form-control mb-2'
          tabIndex='0'
          autoCorrect='off'
          spellcheck='false'
          autoCapitalize='none'
          placeholder='Enter email'
          autoComplete='username email'
          value={appState.emailValue}
          onChange={e => {
            setAppState({ ...appState, emailValue: e.target.value })
            // $$ to be removed in production
            console.log(appState.emailValue)
          }}
        />
        {appState.isInLoginPage ? (
          <input
            type='password'
            name='password'
            id='password'
            className='form-control'
            tabIndex='0'
            autoCorrect='off'
            spellcheck='false'
            autoCapitalize='none'
            placeholder='Enter password'
            onChange={e => {
              setAppState({ ...appState, passwordValue: e.target.value })
              // $$ to be removed in production
              console.log(appState.passwordValue)
            }}
          />
        ) : null}

        <NameInput />

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

        <input
          id='signup-submit'
          tabindex='0'
          type='submit'
          className={
            appState.isInSignupPage === true && appState.emailValue === ''
              ? 'btn-secondary text-white btn btn-block'
              : 'btn-success btn btn-block'
          }
          value='Continue'
          disabled=''
        ></input>
      </form>
    </>
  )
}

export default EmailInput
