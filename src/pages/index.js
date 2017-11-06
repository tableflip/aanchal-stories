import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div className='mw8 center tc'>
    <p className='ph3 f3 lh-copy mt0'>We <strong>support women</strong> affected by abuse. </p>
    <p className='ph3 f5 f4-ns lh-copy center tl tc-ns' style={{maxWidth: '28em'}}>
      We never turn away a woman in need. We're a charity.
      Talking to us is <strong>free</strong> and <strong>confidential.</strong> We're on your side.
    </p>
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
