import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context'
const Signup = () => {
  const [appState, setAppState] = useContext(Context)
  return (
    <section id='sign-up'>
      <div
        className='container py-5'
        style={{
          backgroundImage: 'linear-gradient(#493c9a,#4b99fe)',
          borderRadius: '4px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '85%'
        }}
      >
        <div className='inner text-center py-5 px-3 py-lg-6'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <h3 className='m-0 mb-5'>
                Sign up and get started with Trello today. A world of productive
                teamwork awaits!
              </h3>{' '}
            </div>{' '}
          </div>{' '}
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              {
                // $$  Form starts here
              }
              <form
                className='row'
                onSubmit={e => {
                  e.preventDefault()
                  // $$ to be removed in production
                  console.log(appState.emailValue)
                }}
              >
                <div className='d-none d-md-block col-md-8 pr-md-1'>
                  <input
                    name='email'
                    className='form-control h-100'
                    type='email'
                    placeholder='Email'
                    onChange={e => {
                      setAppState({ ...appState, emailValue: e.target.value })
                      // $$ to be removed in production
                      console.log(appState.emailValue)
                    }}
                  />{' '}
                </div>{' '}
                <div className='col-md-4 pl-md-1'>
                  <button type='submit' className='btn btn-block btn-secondary'>
                    <Link to='signup'>Sign up</Link>
                  </button>{' '}
                </div>{' '}
              </form>{' '}
              {
                // $$ form ends here
              }
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  )
}

export default Signup
