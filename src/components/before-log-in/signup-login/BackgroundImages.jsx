import React from 'react'

const BackgroundImages = () => {
  return (
    <>
      <div className='background-left position-fixed d-none d-md-block'>
        <img src='assets/signin-page/background-left.png' alt='' />
      </div>
      <div className='background-right position-fixed d-md-flex justify-content-end d-none '>
        <img
          className=''
          src='assets/signin-page/background-right3.png'
          alt=''
        />
      </div>
    </>
  )
}

export default BackgroundImages
