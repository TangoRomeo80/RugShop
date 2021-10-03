import React from 'react'
import CookieConsent from 'react-cookie-consent'

const CookieConfirm = () => {
  return (
    <div>
      <CookieConsent
        location='bottom'
        buttonText='Close'
        cookieName='<cookieName>'
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        This website uses cookies to ensure proper functionalities of the
        website and enhance the user experience.
        <span style={{ fontSize: '10px' }}></span>
      </CookieConsent>
    </div>
  )
}

export default CookieConfirm
