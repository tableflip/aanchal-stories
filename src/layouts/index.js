import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'tachyons'
import logoSrc from './logo.png'

const HelplineBox = () => (
  <div className='pa2 dib tl' style={{border: '4px solid #800080', color: '#800080'}}>
    <img src='https://icon.now.sh/phone_iphone/800080' className='dib v-mid' style={{height: 42, width: 42}} />
    <div className='dib v-mid f4 fw7'>
      <div className='tracked'>HELPLINE</div>
      <div>0845 451 2547</div>
    </div>
  </div>
)

const Infobar = () => (
  <div className='pv3 tc' style={{background: '#ffda31'}}>
    <span className=''>
      <span className='mr4'>Call us any time</span>
      <img style={{verticalAlign: '-2px'}} src='https://icon.now.sh/phone' />
      <span> 0845 451 2547 </span>
    </span>
  </div>
)

const Header = () => (
  <header className='db dt-ns w-100 bg-white pa4 mw8 center tc tl-ns' >
    <Link to='/' className='db dtc-ns no-underline' >
      <img src={logoSrc} alt={'Aanchal Woman\'s Aid'} style={{height: 70}} />
    </Link>
    <div className='db dtc-ns v-top tc tr-ns mt4 mt0-ns'>
      <HelplineBox />
    </div>
  </header>
)

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title={data.allAanchalStoriesJson.edges[0].node.title}
      meta={[
        { name: 'description', content: data.allAanchalStoriesJson.edges[0].node.description },
        { name: 'keywords', content: data.allAanchalStoriesJson.edges[0].node.keywords }
      ]}
    />
    <div className='sans-serif'>
      <Header />
      {children()}
      <footer className='fixed bottom-0 left-0 right-0'>
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
    allAanchalStoriesJson {
      edges {
        node {
          title
          description
          keywords
        }
      }
    }
  }
`
