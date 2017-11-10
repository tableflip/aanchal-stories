import React from 'react'
import Layout from '../layout'
import StoryNav from '../../components/story-nav'
import ActionsNav from '../../components/actions-nav'

const Footer = () => (
  <footer className='db mt6 pv3 tc bg-yellow'>
    <span className=''>
      <span className='mr4'>Call us any time</span>
      <img style={{width: 18, height: 18, verticalAlign: '-2px'}} src='https://icon.now.sh/phone' />
      <span> 0845 451 2547 </span>
    </span>
  </footer>
)

const IndexPage = ({ facts, content, pages }) => (
  <Layout facts={facts} content={content}>
    <div className='tl'>
      <p className='ph3 f4 f3-ns lh-copy center' style={{maxWidth: '560px'}}>
        We <strong>support women</strong> affected by abuse.
        We never turn away a woman in need. We're on your side.
      </p>

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
          <p className='tl f5 f4-m f4-l lh-copy mt0 measure'>
            I felt suicidal and couldn’t see a way out. By my 12th session with Aanchal I felt I could breathe. I could make decisions. I want to tell everyone <strong>there are always solutions</strong>. No one is alone. Just <strong>ask for help</strong>.
          </p>
          <cite className='tl f6 ttu tracked fs-normal'>―Survivor 2015</cite>
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
