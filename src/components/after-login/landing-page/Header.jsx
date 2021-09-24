import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      {/* <nav className='sticky-top navbar header-private'>
        <div className='d-flex flex-row'>
          <div className='h-90 col-lg-4 d-flex flex-row bg-warning'>
            <button className='btn h-90'>
              <img
                src='assets/private/9squares.png'
                alt=''
                max-width='20px'
                max-height='20px'
              />
            </button>
            <Link to='/'>
              <img
                src='assets/landing-page/Trello_logo.png'
                alt=''
                width='75px'
                height='30px'
              />
            </Link>
            <button className=' h-90'>Workspaces</button>
            <button className='btn h-90'>Recent</button>
            <button className=' h-90'>Starred</button>
            <button className='btn h-90'>Create</button>
          </div>
          <div className='col-lg-5'></div>
          <div className='col-lg-3 bg-danger'></div>
        </div>
      </nav> */}
      <nav className='d-flex flex-row' style={{ height: '44px' }}>
        <section className='bg-success d-block col-4'>
          <button
            className='btn font-14'
            style={{ maxWidth: '92px', overflow: 'hidden' }}
          >
            More
          </button>
          <button
            className='btn font-14'
            style={{ maxWidth: '92px', overflow: 'hidden' }}
          >
            logo
          </button>
          <button
            className='btn font-14'
            style={{ maxWidth: '92px', overflow: 'hidden' }}
          >
            Workspaces
          </button>
          <button
            className='btn font-14'
            style={{ maxWidth: '92px', overflow: 'hidden' }}
          >
            Recent
          </button>
          <button
            className='btn font-14'
            style={{ maxWidth: '92px', overflow: 'hidden' }}
          >
            Starred
          </button>
          <button
            className='btn font-14'
            style={{ maxWidth: '92px', overflow: 'hidden' }}
          >
            Create
          </button>
        </section>
        <section className='bg-danger d-block col-5'></section>
        <section className='bg-warning d-block col-3 d-flex flex-row'>
          <form className='mt-1 ' style={{ maxWidth: '70%', maxHeight: '30%' }}>
            <input
              /* style={{ maxHeight: '30%' }} */
              className='form-control mr-sm-2 '
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
          </form>
          <button className='btn font-14'>in</button>
          <button className='btn font-14'>bell</button>
          <button className='btn font-14'>cgs</button>
        </section>
      </nav>
    </>
  )
}

export default Header
