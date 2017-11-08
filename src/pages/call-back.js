import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const CallBackPage = ({data}) => (
  <div className='tl pb6'>
    <Helmet title={data.home.pageTitle} />

    <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
      Talking to us is <strong>free</strong> and <strong>confidential.</strong> We're a charity.
    </p>

    <p className='ph3 f4 f4-ns lh-copy center' style={{maxWidth: '560px'}}>
      Type in your phone number then click send. We'll call you back.
    </p>

    <div className='center tl' style={{maxWidth: '560px'}}>
      <form className='pa3 black-80'>
        <div className='measure-narrow'>
          <label for='phone-number' className='f6 b db mb2'>Your phone number</label>
          <input autoFocus className='input-reset ba b--black-20 pa3 mb2 db w-100 f4 courier' type='tel' id='phone-number' aria-describedby='phone-number-desc' />
          <small id='phone-number-desc' className='f6 lh-copy black-60 db mb2'>
            e.g. <span className='courier'>08454512547</span>
          </small>
          <div className='mt4'>
            <button to='call-back' className='bn f5 fw4 link br1 ph3 pv3 dib white bg-aanchal-green pointer'>
              <img className='v-mid mr2' src='https://icon.now.sh/ring_volume/ffffff/22' alt='' />
              Request call back
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
)

export default CallBackPage

export const query = graphql`
  query CallBackQuery {
    home: content(page: { eq: "call-back" }) {
      pageTitle
    }
  }
`
