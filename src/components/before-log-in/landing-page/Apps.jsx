import React from 'react'

const Apps = () => {
  return (
    <section id='apps' className='mt-5'>
      <div class='container py-3'>
        <div class='row'>
          <div class='col-lg-8 d-lg-flex flex-row-reverse text-center align-items-center'>
            <p class='mb-2 mb-lg-0'>
              Trello also works great on your smaller screen.
            </p>
          </div>
          <div class='col-6 col-md-3 offset-md-3 offset-lg-0 col-lg-2 pr-1'>
            <a
              href='https://apps.apple.com/app/trello-organize-anything/id461504587'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='assets/landing-page/apple.svg'
                alt='Available on the App Store'
                class='w-100 img-fluid'
              />
            </a>
          </div>
          <div class='col-6 col-md-3 col-lg-2 pl-1'>
            <a
              href='https://play.google.com/store/apps/details?id=com.trello'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='assets/landing-page/google.svg'
                alt='Get it on Google Play'
                class='w-100 img-fluid'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Apps
