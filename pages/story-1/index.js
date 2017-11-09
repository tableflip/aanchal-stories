import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'
import Layout from '../layout'

export default ({ content, facts }) => (
  <Layout content={content} facts={facts}>
    <div className='mw8 center ph2 pb3'>
      <ResponsiveEmbed src={content.videoSrc} className='bg-black-90' />
    </div>
    <h1 className='f3 fw4 mw8 center ph1'>{content.name}</h1>
  </Layout>
)
