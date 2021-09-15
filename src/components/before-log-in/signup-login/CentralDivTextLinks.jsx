import React, { useContext } from 'react'
import { Context } from '../../../Context'
import { Link } from 'react-router-dom'

const CentralDivTextLinks = () => {
  const [appState] = useContext(Context)
  /* 
        {appState.isInSignupPage ? (
        <span
          className='font-14 mb-4'
          style={{ color: '#0052CC', textAlign: 'center' }}
        >
          <Link to='login'>Already have an account? Log in</Link>
        </span>
      ) : (
        <div
          className='font-14 mb-4 d-flex justify-content-between'
          style={{ color: '#0052CC', textAlign: 'center' }}
        >
          <span className='mr-2'>
            <Link to='/login'>Can't log in?</Link>
          </span>
          &bull;
          <span className='ml-2'>
            <Link to='/signup'>Sign up for an account</Link>
          </span>
        </div>
      )}
      <span>gg</span>
      {appState.isInLoginPage ? (
        <div
          className='font-14 mb-4 d-flex justify-content-between'
          style={{ color: '#0052CC', textAlign: 'center' }}
        >
          <span className='mr-2'>
            <Link to='/login'>Can't log in?</Link>
          </span>
          &bull;
          <span className='ml-2'>
            <Link to='/signup'>Sign up for an account</Link>
          </span>
        </div>
      ) : null}
  */
  return (
    <>
      {appState.isInLoginPage ? (
        <div
          className='font-14 mb-4 d-flex justify-content-between'
          style={{ color: '#0052CC', textAlign: 'center' }}
        >
          <span className='mr-2'>
            <Link to='/login'>Can't log in?</Link>
          </span>
          &bull;
          <span className='ml-2'>
            <Link to='/signup'>Sign up for an account</Link>
          </span>
        </div>
      ) : (
        <span
          className='font-14 mb-4'
          style={{ color: '#0052CC', textAlign: 'center' }}
        >
          <Link to='login'>Already have an account? Log in</Link>
        </span>
      )}
    </>
  )
}

export default CentralDivTextLinks
