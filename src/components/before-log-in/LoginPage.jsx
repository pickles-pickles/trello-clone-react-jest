import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context'

const LoginPage = () => {
  const [appState] = useContext(Context)
  return (
    <>
      <h1>Hello from login</h1>
      <Link to='/private'>
        <button onClick={appState.login} type='submit'>
          Login
        </button>
      </Link>
    </>
  )
}

export default LoginPage
