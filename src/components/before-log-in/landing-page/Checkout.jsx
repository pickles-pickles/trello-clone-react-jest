import React from 'react'

const Checkout = () => {
  return (
    <section id='checkout'>
      <div className='container'>
        <div className=' my-5 py-4'>
          <hr></hr>
          <div className='row align-items-stretch'>
            <div className='col-md-6'>
              <div className='row h-100'>
                <div className='d-none d-lg-flex col-lg-3 align-items-start'>
                  <img
                    src='assets/landing-page/tag.svg'
                    className='img-fluid'
                    alt=''
                  />
                </div>
                <div className='col-lg-9 d-flex flex-column mb-4 mb-lg-0'>
                  <h3>See our pricing</h3>
                  <p>
                    Whether you’re a team of 2 or 2,000, there’s a Trello
                    tailor-made for your organization.
                  </p>
                  <p className='m-0'>
                    <a
                      className='btn btn-outline-primary btn-sm px-4'
                      href='/pricing'
                    >
                      Trello pricing
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row h-100'>
                <div className='d-none d-lg-flex col-lg-3 align-items-start'>
                  <img
                    src='assets/landing-page/compass.svg'
                    className='img-fluid'
                    alt=''
                  />
                </div>
                <div className='col-lg-9 d-flex flex-column'>
                  <h3>Take a Trello tour</h3>
                  <p>
                    Explore the world of boards and beyond in Trello. Dive
                    deeper into our most popular features.
                  </p>
                  <p className='m-0'>
                    <a
                      className='btn btn-outline-primary btn-sm px-4'
                      href='/tour'
                    >
                      Tour Trello
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </section>
  )
}

export default Checkout
