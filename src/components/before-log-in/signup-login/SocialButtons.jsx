import React, { useContext } from 'react'
import { Context } from '../../../Context'

const SocialButtons = () => {
  const [appState] = useContext(Context)
  return (
    <>
      {appState.icons.map(icon => (
        <div className='w-100' key={icon.social}>
          <form>
            <button className='btn btn-block d-flex align-items-center justify-content-center my-1 shadow icons-btn'>
              <img src={icon.url} alt='' width='20px' />
              {icon.social}
            </button>
          </form>
        </div>
      ))}
    </>
  )
}

export default SocialButtons
