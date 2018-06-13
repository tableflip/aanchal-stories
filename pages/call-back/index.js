import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../layout'
import Icon from '../../components/icon'

const CallBackForm = () => (
  <form className='pa3 black-80' method='post' action='https://post.tableflip.io/test.aanchal.org.uk' autocomplete='off'>
    <input type='hidden' name='g-recaptcha-response' value='skip' />
    <div>
      <div className='measure-narrow'>
        <label htmlFor='phone-number' className='f6 b db mb2'>Your phone number</label>
        <input required autoFocus className='input-reset ba b--black-20 pa3 mb2 db w-100 f4 courier' type='tel' id='phone-number' name='requested-call-back' aria-describedby='phone-number-desc' />
        <small id='phone-number-desc' className='f6 lh-copy black-60 db mb2'>
          e.g. <span className='courier'>08454512547</span>
        </small>
      </div>
      <div className='pt3'>
        <label htmlFor='message' className='f6 b db mb2'>When is it safe to call you?</label>
        <textarea rows='3' className='input-reset ba b--black-20 pa3 mb2 db w-100 f5 lh-copy' id='message' name='requested-call-back' aria-describedby='message-desc' />
        <small id='message-desc' className='f6 lh-copy black-60 db mb2'>
          e.g. <i>Now</i> <span className='courier underline'>or</span> <i>10am to 4pm on Wednesday</i>
        </small>
      </div>
      <div className='mt4'>
        <button to='call-back' className='bn f5 fw4 link br1 ph3 pv3 dib white bg-aanchal-green pointer'>
          <Icon src='/svg/ring_volume_22.svg' className='v-mid mr2' color='ffffff' size='22' />
          Request a call back
        </button>
      </div>
    </div>
  </form>
)

const CallBackPage = ({content, facts}) => (
  <Layout content={content} facts={facts} >
    <div className='dt-l dt--fixed tl mw8 center pv3 pl2-l'>
      <div className='dtc-l w-two-thirds-l'>
        <div className='ph3 f4 lh-copy center' style={{maxWidth: '560px'}}>
          <Markdown source={content.intro} softBreak='br' />
        </div>
        <div className='ph3 f5 lh-copy center' style={{maxWidth: '560px'}}>
          <Markdown source={content.instruction} softBreak='br' />
        </div>
        <div className='center tl' style={{maxWidth: '560px'}}>
          <CallBackForm />
        </div>
      </div>
      <div className='dtc-l w-third-l pv3 ph3 pr2-l pl0-l'>
        <section className='f5 lh-copy center ph3 ba b--aanchal-green bg-white' style={{maxWidth: '560px'}}>
          <Markdown source={content.details} softBreak='br' />
        </section>
      </div>
    </div>
  </Layout>
)

export default CallBackPage
