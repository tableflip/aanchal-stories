import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'

import 'tachyons'
import './index.css'

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
