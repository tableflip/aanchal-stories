import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'

const Layout = ({ facts, children }) => (
  <div>
    <Helmet>
      <title>Yo!</title>
      <meta name='description' content={facts.description} />
      <meta name='keywords' content={facts.keywords} />

    </Helmet>
    <div className='sans-serif'>
      <link rel='stylesheet' href='./bundle.css' />
      <Header />
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
