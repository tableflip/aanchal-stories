import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../layout'
import Icon from '../../components/icon'

const CallBackForm = () => (
  <form className='pa3 black-80' method='post' action='https://post.tableflip.io/test.aanchal.org.uk'>
    <input type='hidden' name='g-recaptcha-response' value='skip' />
    <div className='measure-narrow'>
      <label htmlFor='phone-number' className='f6 b db mb2'>Your phone number</label>
      <input required autoFocus className='input-reset ba b--black-20 pa3 mb2 db w-100 f4 courier' type='tel' id='phone-number' name='phone-number' aria-describedby='phone-number-desc' />
      <small id='phone-number-desc' className='f6 lh-copy black-60 db mb2'>
        e.g. <span className='courier'>08454512547</span>
      </small>
      <div className='mt4'>
        <button to='call-back' className='bn f5 fw4 link br1 ph3 pv3 dib white bg-aanchal-green pointer'>
          <Icon className='v-mid mr2' name='ring_volume' color='ffffff' size='22' />
          Request a call back
        </button>
      </div>
    </div>
  </form>
)

const CallBackPage = ({content, facts}) => (
  <Layout content={content} facts={facts} >
    <div className='tl pb6'>
      <div className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        <Markdown source={content.intro} softBreak='br' />
      </div>

      <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
        Type in your phone number then click the button. We'll call you back.
      </p>

      <div className='center tl' style={{maxWidth: '560px'}}>
        <CallBackForm />
      </div>
    </div>
  </Layout>
)

export default CallBackPage
