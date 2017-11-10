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

      <StoryNav className='dn db-l w-100' pages={pages} content={content} />

      <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        Talking to us is <strong>free</strong> and <strong>confidential.</strong> We're a charity.
      </p>

      <ActionsNav className='center mw7 tc' content={content} />

      <p className='ph3 f5 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        We speak Urdu, Bengali, Punjabi, English and many other languages. If you want <strong>non-judgemental</strong> help, in your language, <strong>call us</strong>.
      </p>

      <div className='pa3 pt4-ns pb3-ns tc'>
        <blockquote className='tl athelas ml0 mt0 pl3 pl4-ns black-90 bl bw2 b--purple dib center'>
          <div className='tl f5 f4-m f4-l lh-copy measure' style={{ marginTop: '-1rem' }}>
            <Markdown source={content.quote} softBreak='br' />
          </div>
          <cite className='tl f6 ttu tracked fs-normal'>―{content.citation}</cite>
        </blockquote>
      </div>

      <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        <strong>If you're not sure</strong>, please take one minute to listen to another women's story.
      </p>

      <div className='pt2'>
        <StoryNav pages={pages} content={content} />
      </div>

      <Footer />
    </div>
  </Layout>
)

export default IndexPage
