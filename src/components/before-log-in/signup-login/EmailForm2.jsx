import React, { useContext } from 'react'
import { Context } from '../../../Context'

const EmailForm2 = () => {
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
          className='form-control mb-2'
          tabIndex='0'
          autoCorrect='off'
          spellCheck={false}
          autoCapitalize='none'
          placeholder='Enter email'
          autoComplete='username email'
          value={appState.emailValue}
          onChange={e => {
            setAppState({ ...appState, emailValue: e.target.value })

            console.log(appState.emailValue)
          }}
        />
      </form>
    </>
  )
}

export default EmailForm2
