import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const CallBackOkPage = ({data}) => (
  <div className='tl pb6'>
    <Helmet title={data.home.pageTitle} />

    <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
      Your number has been sent. We'll call you back shortly.
    </p>

    <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
      If you can't take a call now, text <strong>not now</strong> to
      <br/><code>0845 451 2547</code>
    </p>

    <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
      If you decide you want to talk to us sooner, call us on <br/><code>0845 451 2547</code>
    </p>

    <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
      Thank you for taking the first step.
    </p>
  </div>
)

export default CallBackOkPage

export const query = graphql`
  query CallBackOkQuery {
    home: content(page: { eq: "call-back" }) {
      pageTitle
    }
  }
`
