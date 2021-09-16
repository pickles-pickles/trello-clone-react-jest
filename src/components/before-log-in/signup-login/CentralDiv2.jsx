import React from 'react'
import EmailForm2 from './EmailForm2'
//import SocialButtons from './SocialButtons'

const CentralDiv2 = () => {
  {
    /* <SocialButtons />  to be added on line 14 */
  }
  return (
    <>
      <div className='' style={{ maxWidth: '400px' }}>
        <div className='container d-flex flex-column align-items-center justify-content-center shadow-lg rounded'>
          <div className='container  d-flex flex-column align-items-center justify-content-center'>
            <h1 className='font-16 mt-5 mb-3'>Sign up for your account</h1>
            <EmailForm2 />
            <div className='font-12 my-4'>OR</div>

            <div className='w-100'>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CentralDiv2
