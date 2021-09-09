import React from 'react'

const Checkout = () => {
  return (
    <section id='checkout'>
      <div className='container'>
        <div className=' my-5 py-4'>
          <hr></hr>
          <div className='row align-items-stretch'>
            <div class='col-md-6'>
              <div class='row h-100'>
                <div class='d-none d-lg-flex col-lg-3 align-items-start'>
                  <img
                    src='assets/landing-page/tag.svg'
                    class='img-fluid'
                    alt=''
                  />
                </div>
                <div class='col-lg-9 d-flex flex-column mb-4 mb-lg-0'>
                  <h3>See our pricing</h3>
                  <p>
                    Whether you’re a team of 2 or 2,000, there’s a Trello
                    tailor-made for your organization.
                  </p>
                  <p class='m-0'>
                    <a
                      class='btn btn-outline-primary btn-sm px-4'
                      href='/pricing'
                    >
                      Trello pricing
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class='col-md-6'>
              <div class='row h-100'>
                <div class='d-none d-lg-flex col-lg-3 align-items-start'>
                  <img
                    src='assets/landing-page/compass.svg'
                    class='img-fluid'
                    alt=''
                  />
                </div>
                <div class='col-lg-9 d-flex flex-column'>
                  <h3>Take a Trello tour</h3>
                  <p>
                    Explore the world of boards and beyond in Trello. Dive
                    deeper into our most popular features.
                  </p>
                  <p class='m-0'>
                    <a class='btn btn-outline-primary btn-sm px-4' href='/tour'>
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
