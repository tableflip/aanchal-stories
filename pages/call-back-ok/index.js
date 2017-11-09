import React from 'react'
import Layout from '../layout'

const CallBackOkPage = ({content, facts}) => (
  <Layout content={content} facts={facts} >
    <div className='tl pb6'>
      <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        Your number has been sent. We'll call you back shortly.
      </p>

      <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        If you can't take a call now, text <strong>not now</strong> to
        <br /><code>0845 451 2547</code>
      </p>

      <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        If you decide you want to talk to us sooner, call us on <br /><code>0845 451 2547</code>
      </p>

      <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        Thank you for taking the first step.
      </p>
    </div>
  </Layout>
)

export default CallBackOkPage
