import React from 'react'
const Footer = () => {
  return (
    <footer className=''>
      <div className='container  d-flex align-items-center justify-content-center'>
        <select
          className='form-control mb-3 mt-5  '
          name='language-picker'
          id='language-picker'
          aria-label='Default select example'
          onChange={e => {
            if (
              e.target.value !== 'en' &&
              e.target.value !== 'en-AU' &&
              e.target.value !== 'en-GB' &&
              e.target.value !== 'en-US'
            ) {
              alert(
                "This version only supports English ... I am a developer. I don't speak Norsk or Magyar yet :)"
              )
            }
          }}
        >
          <option value='choose-one' id='choose' disabled='true' selected>
            Select your language…
          </option>
          <option value='cs'>Čeština</option>
          <option value='de'>Deutsch</option>
          <option value='en'>English</option>
          <option value='en-AU'>English (AU)</option>
          <option value='en-GB'>English (UK)</option>
          <option value='en-US'>English (US)</option>
          <option value='es'>Español</option>
          <option value='fr'>Français</option>
          <option value='it'>Italiano</option>
          <option value='hu'>Magyar</option>
          <option value='nl'>Nederlands</option>
          <option value='nb'>Norsk (bokmål)</option>
          <option value='pl'>Polski</option>
          <option value='pt-BR'>Português (Brasil)</option>
          <option value='fi'>Suomi</option> <option value='sv'>Svenska</option>
          <option value='vi'>Tiếng Việt</option>
          <option value='tr'>Türkçe</option> <option value='ru'>Русский</option>
          <option value='uk'>Українська</option>
          <option value='th'>ภาษาไทย</option>
          <option value='zh-Hans'>中文 (简体)</option>
          <option value='zh-Hant'>中文 (繁體)</option>
          <option value='ja'>日本語</option>
        </select>
      </div>
      <ul class='list-unstyled d-flex justify-content-center align-items-center flex-wrap'>
        <li class='text-secondary mx-2 text-wrap'>Templates</li>
        <li class='text-secondary mx-2 text-wrap'>Pricing</li>
        <li class='text-secondary mx-2 text-wrap'>Apps</li>
        <li class='text-secondary mx-2 text-wrap'>Jobs</li>
        <li class='text-secondary mx-2 text-wrap'>Blog</li>
        <li class='text-secondary mx-2 text-wrap'>Developers</li>
        <li class='text-secondary mx-2 text-wrap'>About</li>
        <li class='text-secondary mx-2 text-wrap'>Help</li>
        <li class='text-secondary mx-2 text-wrap'>Legal</li>
        <li class='text-secondary mx-2 text-wrap'>Cookie Settings</li>
        <li class='text-secondary mx-2 text-wrap'>Privacy</li>
      </ul>
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
    </footer>
  )
}

export default Footer
