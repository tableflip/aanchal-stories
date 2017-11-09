import React from 'react'
import PropTypes from 'prop-types'
import HelplineBox from '../components/helpline-box'

const Header = ({relativePathToRoot}) => (
  <header className='db dt-ns w-100 ph2 pt4 pb0 pb3-ns pv4-ns mw8 center tc tl-ns' >
    <a href={`${relativePathToRoot}`} className='db dtc-ns no-underline v-mid'>
      <img src={`${relativePathToRoot}/logo-transparent.png`} alt={'Aanchal Woman\'s Aid'} style={{maxHeight: 64}} />
    </a>
    <div className='dn dtc-ns v-mid tc tr-ns mt4 mt0-ns'>
      <HelplineBox />
    </div>
  </header>
)

const Layout = ({ content, facts, children }) => (
  <html>
    <head>
      <title>Yo!</title>
      <meta name='description' content={facts.description} />
      <meta name='keywords' content={facts.keywords} />
      <link rel='stylesheet' href={`${content.meta.relativePathToRoot}/bundle.css`} />
    </head>
    <body className='sans-serif'>
      <Header relativePathToRoot={content.meta.relativePathToRoot} />
      {children}
    </body>
  </html>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
