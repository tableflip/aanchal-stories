import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'tachyons'
import './index.css'
import logoSrc from './logo-transparent.png'

const HelplineBox = () => (
  <div className='pa2 dib tl purple b-purple' style={{border: '4px solid'}}>
    <img src='https://icon.now.sh/phone_iphone/5e2ca5' className='dib v-mid' style={{height: 42, width: 42}} />
    <div className='dib v-mid f4 fw7'>
      <div className='tracked'>HELPLINE</div>
      <div>0845 451 2547</div>
    </div>
  </div>
)

const Infobar = () => (
  <div className='pv3 tc bg-yellow'>
    <span className=''>
      <span className='mr4'>Call us any time</span>
      <img style={{verticalAlign: '-2px'}} src='https://icon.now.sh/phone' />
      <span> 0845 451 2547 </span>
    </span>
  </div>
)

const Header = () => (
  <header className='db dt-ns w-100 ph2 pv4 mw8 center tc tl-ns' >
    <Link to='/' className='db dtc-ns no-underline v-mid'>
      <img src={logoSrc} alt={'Aanchal Woman\'s Aid'} style={{maxHeight: 64}} />
    </Link>
    <div className='db dtc-ns v-mid tc tr-ns mt4 mt0-ns'>
      <HelplineBox />
    </div>
  </header>
)

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title={data.facts.title}
      meta={[
        { name: 'description', content: data.facts.description },
        { name: 'keywords', content: data.facts.keywords }
      ]}
    />
    <div className='sans-serif'>
      <Header />
      {children()}
      <footer className='pt4'>
        <Infobar />
      </footer>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    facts {
      title
      description
      keywords
    }
  }
`
