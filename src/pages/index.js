import React from 'react'
import Link from 'gatsby-link'

const StoryCard = ({url, name, photoSrc, intro}) => (
  <Link to={url} className='dib tl no-underline bg-white center mw6 ba b--black-10 mv3' title={`Listen to ${name}`}>
    <div className='pv2 ph3'>
      <h1 className='f6 ttu tracked'>{name}</h1>
    </div>
    <img src={photoSrc} className='w-100 db' alt={`Photo of ${name}`} />
    <div className='pa3'>
      <span className='link dim lh-title black'>{intro}</span>
    </div>
  </Link>
)

const IndexPage = ({ data }) => (
  <div className='tl pb6'>

    <p className='ph3 f4 f3-ns lh-copy center' style={{maxWidth: '560px'}}>
      We <strong>support women</strong> affected by abuse.
      We never turn away a woman in need. We're on your side.
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
      Talking to us is <strong>free</strong> and <strong>confidential.</strong> We're a charity.
    </p>

    <p className='ph3 f5 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
      We speak Urdu, Bengali, Punjabi, English and many other languages. If you want help, <strong>call us</strong> on <a target='_blank' className='no-underline purple' href='tel:+8454512547'>0845 451 2547</a>.
    </p>

    <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
      <strong>If you're not sure</strong>, please take one minute to listen to another women's story.
    </p>

    <nav className='db w-100 center mw8 tc'>
      <div className='db dib-ns w-50-m w-25-l ph3 v-top'>
        <StoryCard title='Survior Story' name='Laximi' url='story-1' intro='Laximi talks about calling Aanchal and what happend next' photoSrc='http://aanchal.matsondigital.com/wp-content/uploads/2015/11/slider_image02.jpg' />
      </div>
      <div className='db dib-ns w-50-m w-25-l ph3 v-top'>
        <StoryCard title='Survior Story' name='Sudarshan' url='./' intro='Survivor story: how fear for her kids safety gave her courage' photoSrc='http://aanchal.matsondigital.com/wp-content/uploads/2015/11/slider_image01.jpg' />
      </div>
      <div className='db dib-ns w-50-m w-25-l ph3 v-top'>
        <StoryCard title='Survior Story' name='Neena' url='./' intro='Hear Neena speak out about her arranged marriage' photoSrc='http://aanchal.matsondigital.com/wp-content/uploads/2015/11/slider_image03.jpg' />
      </div>
      <div className='db dib-ns w-50-m w-25-l ph3 v-top'>
        <StoryCard title='Survior Story' name='Jane' url='./' intro='Survivor from London talks about rebuilding hope' photoSrc='http://aanchal.matsondigital.com/wp-content/uploads/2015/12/shutterstock_83743855.jpg' />
      </div>
    </nav>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    homeContent {
      foo
    }
  }
`
