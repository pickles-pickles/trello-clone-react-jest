import React from 'react'
import FooterLinks from './FooterLinks'
import FooterLogo from './FooterLogo'
import FooterSelect from './FooterSelect'
const Footer = () => {
  return (
    <footer className=''>
      <div className='container  d-flex align-items-center justify-content-center'>
        <FooterSelect></FooterSelect>
      </div>
      <FooterLinks />
      <FooterLogo></FooterLogo>
    </footer>
  )
}

export default Footer
