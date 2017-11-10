import React from 'react'

const ActionsNav = ({content, className}) => (
  <nav className={className}>
    <a href='tel:+8454512547' className='bn f5 fw4 link br1 ph3 pv3 mv2 mh3 dib white bg-aanchal-green pointer'>
      <img className='v-mid mr2' style={{width: 22, height: 22}} src='https://icon.now.sh/call/ffffff/22' alt='' />
      Speak to someone now
    </a>
    <a href={`${content.meta.relativePathToRoot}/call-back`} className='bn f5 fw4 link br1 ph3 pv3 mh3 mv2 dib white bg-aanchal-green pointer'>
      <img className='v-mid mr2' style={{width: 22, height: 22}} src='https://icon.now.sh/ring_volume/ffffff/22' alt='' />
      Request a call back later
    </a>
  </nav>
)

export default ActionsNav
