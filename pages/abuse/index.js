import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../layout'

const AbusePage = ({ facts, content, pages }) => (
  <Layout facts={facts} content={content}>
    <div className='ph3 f4 lh-copy center' style={{maxWidth: '560px'}}>
      <Markdown source={content.description} softBreak='br' />
    </div>
  </Layout>
)

export default AbusePage
