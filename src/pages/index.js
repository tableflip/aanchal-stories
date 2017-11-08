import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts'

const Footer = () => (
  <footer className='db mt6 pv3 tc bg-yellow'>
    <span className=''>
      <span className='mr4'>Call us any time</span>
      <img style={{verticalAlign: '-2px'}} src='https://icon.now.sh/phone' />
      <span> 0845 451 2547 </span>
    </span>
  </footer>
)

const StoryCard = ({url, name, photoSrc, intro}) => (
  <a href={url} className='dib tl no-underline bg-white center mw6 ba b--black-10 mv3' title={`Listen to ${name}`}>
    <div className='pv2 ph3'>
      <h1 className='f6 ttu tracked'>{name}</h1>
    </div>
    <img src={photoSrc} className='w-100 db' alt={`Photo of ${name}`} />
    <div className='pa3'>
      <span className='link dim lh-title black'>{intro}</span>
    </div>
  </a>
)

const IndexPage = ({ facts, content, stories }) => (
  <Layout facts={facts}>
    <div className='tl'>
      <Helmet title={content.pageTitle} />

      <p className='ph3 f4 f3-ns lh-copy center' style={{maxWidth: '560px'}}>
        We <strong>support women</strong> affected by abuse.
        We never turn away a woman in need. We're on your side.
      </p>

      <nav className='dn db-l w-100 center mw8 tc'>
        {stories.map((s) => {
          const { name, page, intro, photoSrc } = s
          return (
            <div key={name} className='db dib-ns w-50-m w-25-l ph3 v-top'>
              <StoryCard title='Survior Story' name={name} url={page} intro={intro} photoSrc={photoSrc} />
            </div>
          )
        })}
      </nav>

      <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        Talking to us is <strong>free</strong> and <strong>confidential.</strong> We're a charity.
      </p>

      <nav className='center mw7 tc'>
        <a href='tel:+8454512547' className='bn f5 fw4 link br1 ph3 pv3 mv2 mh3 dib white bg-aanchal-green pointer'>
          <img className='v-mid mr2' src='https://icon.now.sh/call/ffffff/22' alt='' />
          Speak to someone now
        </a>
        <a href='call-back' className='bn f5 fw4 link br1 ph3 pv3 mh3 mv2 dib white bg-aanchal-green pointer'>
          <img className='v-mid mr2' src='https://icon.now.sh/ring_volume/ffffff/22' alt='' />
          Request a call back later
        </a>
      </nav>

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

      <nav className='db w-100 center mw8 tc pt2'>
        {stories.map((s) => {
          const { name, page, intro, photoSrc } = s
          return (
            <div key={name} className='db dib-ns w-50-m w-25-l ph3 v-top'>
              <StoryCard title='Survior Story' name={name} url={page} intro={intro} photoSrc={photoSrc} />
            </div>
          )
        })}
      </nav>

      <Footer />
    </div>
  </Layout>
)

const IndexPageContainer = ({pages, facts}) => {
  const content = pages.home
  const stories = Object.keys(pages)
    .filter(key => key.match(/story/))
    .map(key => pages[key].content)
  const props = {
    facts,
    content,
    stories
  }
  return <IndexPage {...props} />
}

export default IndexPageContainer
