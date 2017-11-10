import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'
import Layout from '../layout'
import StoryNav from '../../components/story-nav'
import ActionsNav from '../../components/actions-nav'

export default ({ content, facts, pages }) => (
  <Layout content={content} facts={facts}>
    <div className='mw8 center ph2 pb3'>
      <div className='db dt-l w-100 pt4'>
        <div className='db dtc-l w-two-thirds-l v-mid'>
          <ResponsiveEmbed src={`${content.videoSrc}?rel=0&amp;showinfo=0`} className='bg-black-90' />
        </div>
        <div className='db dtc-l w-third-l pl3-l v-top '>
          <h1 className='f3 lh-copy fw6 measure center ph1 mt2'>{content.name}</h1>
          <p className='f4 lh-copy fw4 measure center ph1'>{content.intro}</p>
          <ActionsNav className='pt3 tc' content={content} />
        </div>
      </div>
    </div>
    <section className='bg-white-80 mt5 pv5'>
      <div className='mw8 center ph2 pb3'>
        <StoryNav pages={pages} content={content} />
      </div>
    </section>
  </Layout>
)
