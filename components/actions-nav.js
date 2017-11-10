import React from 'react'
import Icon from './icon'

const ActionsNav = ({content, className}) => (
  <nav className={className}>
    <a
      href='tel:+8454512547'
      style={{minWidth: 248}}
      className='bn f5 fw4 link br1 ph3 pv3 mv2 mh3 dib white bg-aanchal-green pointer'
      title='Open phone app'>
      <Icon name='call' className='v-mid mr2' color='ffffff' size='22' />
      Speak to someone now
    </a>
    <a
      href={`${content.meta.relativePathToRoot}/call-back`}
      style={{minWidth: 248}}
      className='bn f5 fw4 link br1 ph3 pv3 mh3 mv2 dib white bg-aanchal-green pointer'
      title='Send us your telephone number'>
      <Icon name='ring_volume' className='v-mid mr2' color='ffffff' size='22' />
      Request a call back later
    </a>
  </nav>
)

export default ActionsNav
