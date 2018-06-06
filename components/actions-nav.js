import React from 'react'
import Icon from './icon'

const ActionsNav = ({content, className}) => (
  <nav className={className}>
    <a
      href={`${content.meta.relativePathToRoot}/call-back`}
      style={{minWidth: 248}}
      className='bn f5 fw4 link br1 ph3 pv3 mh3 mv2 dib white bg-aanchal-green'
      title='Send us your telephone number'>
      <Icon name='ring_volume' className='v-mid mr2' color='ffffff' size='22' />
      Request a call back
    </a>
    {/* mobile */}
    <a
      href='tel:+8454512547'
      style={{minWidth: 248}}
      className='bn f5 fw4 link br1 ph3 pv3 mv2 mh3 dib dn-ns white bg-purple pointer'
      title='Open phone app'>
      <Icon name='call' className='v-mid mr2' color='ffffff' size='22' />
      Speak to someone now
    </a>
    {/* desktop */}
    <div itemscope itemtype='http://schema.org/LocalBusiness' className='dn dib-ns v-btm'>
      <span className='f5 i'>Or call us any time on </span>
      <div className='mv2 mh3 f3 br1 ba b--purple' style={{padding: '13px 32px'}}>
        <span className='dn' itemprop='name'>Aanchal Womens Aid Helpline</span>
        <strong itemprop='telephone' className='purple'>
          0845 451 2547
        </strong>
      </div>
    </div>
  </nav>
)

export default ActionsNav
