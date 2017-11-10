import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../layout'

const CallBackOkPage = ({content, facts}) => (
  <Layout content={content} facts={facts} >
    <div className='tl pb6'>
      <div className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        <Markdown source={content.message} softBreak='br' />
      </div>
    </div>
  </Layout>
)

export default CallBackOkPage
