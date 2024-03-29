import React from 'react'
import Icon from './icon'

const HelplineBox = () => (
  <div className='pa2 dib tl purple b-purple' style={{border: '4px solid'}}>
    <Icon src='/svg/phone_iphone_42.svg' className='dib v-mid' color='5e2ca5' size='42' />
    <div className='dib v-mid f4 fw7'>
      <div className='tracked'>HELPLINE</div>
      <div>0845 451 2547</div>
    </div>
  </div>
)

export default HelplineBox
