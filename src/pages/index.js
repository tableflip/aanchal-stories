import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div className='tl pb6'>
    <p className='ph3 f4 f3-ns lh-copy center' style={{maxWidth: '560px'}}>
      We <strong>support women</strong> affected by abuse.
    </p>
    <p className='ph3 f4 f3-ns lh-copy center' style={{maxWidth: '560px'}}>
      We never turn away a woman in need. We're on your side.
      Talking to us is <strong>free</strong> and <strong>confidential.</strong> We're a charity.
    </p>
    <p className='ph3 f5 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
      If you want help, <strong>call us</strong> on <a target='_blank' className='no-underline purple' href='tel:+8454512547'>0845 451 2547</a>.
      We speak Urdu, Bengali, Punjabi and English and many other languages.
    </p>
    <p className='ph3 f5 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
      <strong>If you're not sure</strong>, please take one minute to listen to another women's story.
    </p>

  <div className="pa4 tc">
    <blockquote className="tl athelas ml0 mt0 pl4 black-90 bl bw2 b--purple dib center">
      <p className="tl f5 f4-m f3-l lh-copy mt0 measure">
        I could heal the cuts and hide the bruises, but it was his words that really hurt me. His words stayed in my head, tormenting me, long after he has gone.
      </p>
      <cite className="tl f6 ttu tracked fs-normal">―AWA survivor</cite>
    </blockquote>
  </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allHomeJson {
      edges {
        node {
          foo
        }
      }
    }
  }
`
