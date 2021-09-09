import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  const [appState] = useContext(Context)
  return (
    <>
      <h1>Hello from signup</h1>
      <form>
        <input type='email' value={appState.emailValue} />
        <Link to='/private'>
          <button onClick={appState.login} type='submit'>
            Login
          </button>
        </Link>
      </form>
    </>
  )
}

export default SignupPage
