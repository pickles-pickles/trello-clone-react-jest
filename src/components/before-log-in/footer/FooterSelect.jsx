import React from 'react'

const FooterSelect = () => {
  return (
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
      <option defaultValue='choose-one' id='choose' disabled={true}>
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
  )
}

export default FooterSelect
