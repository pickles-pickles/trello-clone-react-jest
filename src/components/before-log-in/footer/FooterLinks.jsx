import React, { useContext } from 'react'
import { Context } from '../../../Context'
const FooterLinks = () => {
  const [appState] = useContext(Context)
  return (
    <ul class='list-unstyled d-flex justify-content-center align-items-center flex-wrap'>
      <li class='text-secondary mx-2 text-wrap'>Templates</li>
      <li class='text-secondary mx-2 text-wrap'>Pricing</li>
      <li class='text-secondary mx-2 text-wrap'>Apps</li>
      <li class='text-secondary mx-2 text-wrap'>Jobs</li>
      <li class='text-secondary mx-2 text-wrap'>Blog</li>
      <li class='text-secondary mx-2 text-wrap'>Developers</li>
      <li class='text-secondary mx-2 text-wrap'>About</li>
      <li class='text-secondary mx-2 text-wrap'>Help</li>
      {appState.isInLandingPage ? (
        <li class='text-secondary mx-2 text-wrap'>Legal</li>
      ) : null}

      <li class='text-secondary mx-2 text-wrap'>Cookie Settings</li>
      {appState.isInLandingPage ? (
        <li class='text-secondary mx-2 text-wrap'>Privacy</li>
      ) : null}
    </ul>
  )
}

export default FooterLinks
