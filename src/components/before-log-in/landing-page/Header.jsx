import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar py-3 sticky-top bg-white shadow-sm'>
      <section className='d-block float-left'>
        <Link to='/'>
          <img
            src='assets/landing-page/Trello_logo.png'
            alt=''
            className='header-logo'
          />
        </Link>
      </section>
      <div className='float-right'>
        <button className='btn text-primary'>
          <Link to='/login'>Log in</Link>
        </button>
        <Link to='/signup' className='text-white'>
          <button className='btn  btn-primary font-weight-bold'>Sign up</button>
        </Link>
      </div>
    </nav>
  )
}

export default Header
