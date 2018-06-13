import React from 'react'

const Icon = ({name, src, color = '000000', size = 22, ...props}) => (
  <img
    {...props}
    width={size}
    height={size}
    src={src || `https://icon.now.sh/${name}/${color}/${size}`}
    alt='' />
)

export default Icon
