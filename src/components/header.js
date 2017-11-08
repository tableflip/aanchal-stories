import React from 'react'
import HelplineBox from './helpline-box'

const Header = () => (
  <header className='db dt-ns w-100 ph2 pt4 pb0 pb3-ns pv4-ns mw8 center tc tl-ns' >
    <a href='/' className='db dtc-ns no-underline v-mid'>
      <img src={'logo-transparent.png'} alt={'Aanchal Woman\'s Aid'} style={{maxHeight: 64}} />
    </a>
    <div className='dn dtc-ns v-mid tc tr-ns mt4 mt0-ns'>
      <HelplineBox />
    </div>
  </header>
)

export default Header
