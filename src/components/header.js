import React from 'react'
import Link from 'gatsby-link'
import logoSrc from './logo-transparent.png'
import HelplineBox from './helpline-box'

const Header = () => (
  <header className='db dt-ns w-100 ph2 pt4 pb0 pb3-ns pv4-ns mw8 center tc tl-ns' >
    <Link to='/' className='db dtc-ns no-underline v-mid'>
      <img src={logoSrc} alt={'Aanchal Woman\'s Aid'} style={{maxHeight: 64}} />
    </Link>
    <div className='dn dtc-ns v-mid tc tr-ns mt4 mt0-ns'>
      <HelplineBox />
    </div>
  </header>
)

export default Header
