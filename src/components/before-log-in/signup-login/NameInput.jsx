import React, { useContext } from 'react'
import { Context } from '../../../Context'

const NameInput = () => {
  const [appState, setAppState] = useContext(Context)
  return (
    <>
      {/* appState.isEmailSubmitted && */ appState.isInSignupPage ? (
        <input
          className='form-control mb-2'
          placeholder='Enter full name'
          onChange={e => {
            setAppState({ ...appState, name: e.target.value })
          }}
        ></input>
      ) : null}
    </>
  )
}

export default NameInput
