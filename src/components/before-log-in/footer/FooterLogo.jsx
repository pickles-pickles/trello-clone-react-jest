import React from 'react'

const FooterLogo = () => {
  return (
    <p
      class='d-flex flex-column justify-content-center align-items-center '
      id='footer-p-container'
    >
      {/* <img
          class='atlassian-logo-small white'
          src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/e4e8fa01ba058bce8e9f2bb7459516f9/atlassian-logo-white-small.svg'
          width='150'
        /> */}
      <img
        class='atlassian-logo-small my-2'
        src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6cdbcb3dcf82bba860f1768d184161ee/atlassian-logo-gray-small.svg'
        alt=''
        width='150'
      />
    </p>
  )
}

export default FooterLogo
