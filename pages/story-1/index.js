import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'
import Layout from '../layout'
import StoryNav from '../../components/story-nav'
import ActionsNav from '../../components/actions-nav'
import Footer from '../../components/footer'

export default ({ content, facts, pages }) => (
  <Layout content={content} facts={facts}>
    <div className='mw8 center ph2 pb3'>
      <div className='db dt-l w-100 pt5'>
        <div className='db dtc-l w-two-thirds-l v-mid'>
          <ResponsiveEmbed src={`${content.videoSrc}?rel=0&amp`} className='bg-aanchal-green-light' />
        </div>
        <div className='db dtc-l w-third-l pl3-l v-top '>
          <p className='f4 lh-copy fw4 measure center pl2'>
            {content.intro}
          </p>
          <ActionsNav className='pt3 nl2-l tc tl-l' content={content} />
        </div>
      </div>
    </div>
    <section className='bg-white-80 mt4 pv5'>
      <div className='mw8 center ph2 pb3'>
        <StoryNav pages={pages} content={content} />
      </div>
    </section>
    <Footer />
  </Layout>
)
