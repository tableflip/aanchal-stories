import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
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
  <div className='sans-serif'>
    <Helmet>
      <meta charSet='UTF-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={facts.description} />
      <meta name='keywords' content={facts.keywords} />
      <title>{facts.title}</title>
      <link rel='stylesheet' href={`${content.meta.relativePathToRoot}/bundle.css`} />
    </Helmet>
    <Header relativePathToRoot={content.meta.relativePathToRoot} />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
