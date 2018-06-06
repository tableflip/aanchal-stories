import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../layout'

const ConfidentialPage = ({ facts, content, pages }) => (
  <Layout facts={facts} content={content}>
    <div className='tl'>
      <div className='ph3 f4 lh-copy center' style={{maxWidth: '560px'}}>
        <Markdown source={content.description} softBreak='br' />
      </div>
    </div>
  </Layout>
)

export default ConfidentialPage
