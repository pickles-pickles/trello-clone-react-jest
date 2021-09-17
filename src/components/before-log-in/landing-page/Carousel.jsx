import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class Carousel extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src='assets/landing-page/carousel/carousel-1.png'
              alt=''
              className='w-100'
            />
          </div>
          <div>
            <img
              src='assets/landing-page/carousel/carousel-2.png'
              alt=''
              className='w-100'
            />
          </div>
          <div>
            <img
              src='assets/landing-page/carousel/carousel-3.png'
              alt=''
              className='w-100'
            />
          </div>
          <div>
            <img
              src='assets/landing-page/carousel/carousel-4.png'
              alt=''
              className='w-100'
            />
          </div>
        </Slider>
      </div>
    )
  }
}
