import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../layout'
import StoryNav from '../../components/story-nav'
import ActionsNav from '../../components/actions-nav'
import Footer from '../../components/footer'

const IndexPage = ({ facts, content, pages }) => (
  <Layout facts={facts} content={content}>
    <div className='tl'>
      <div className='ph3 f4 f3-ns lh-copy center' style={{maxWidth: '560px'}}>
        <Markdown source={content.intro} softBreak='br' />
      </div>
      <div className='ph3 f5 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        <Markdown source={content.intro2} softBreak='br' />
      </div>

      <StoryNav className='dn db-l w-100' pages={pages} content={content} count={3} />

      <div className='ph3 f5 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        <Markdown source={content.intro3} softBreak='br' />
      </div>

      <ActionsNav className='center mw7 tc' content={content} />

      <div className='ph3 pt2 f5 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        <Markdown source={content.intro4} softBreak='br' />
      </div>

      <div className='pa3 pt4-ns pb3-ns tc'>
        <blockquote className='tl athelas ml0 mt0 pl3 pl3-ns black-90 bl bw2 b--purple dib center'>
          <div className='tl f4 lh-copy measure' style={{ marginTop: '-1rem' }}>
            <Markdown source={content.quote} softBreak='br' />
          </div>
          <cite className='tl f6 ttu tracked fs-normal'>―{content.citation}</cite>
        </blockquote>
      </div>

      <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        <strong>If you're not sure</strong>, please take one minute to listen to another women's story.
      </p>

      <div className='pt2'>
        <StoryNav pages={pages} content={content} count={3} start={3} />
      </div>

      <Footer />
    </div>
  </Layout>
)

export default IndexPage
