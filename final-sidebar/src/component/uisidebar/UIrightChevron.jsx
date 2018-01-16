import React from 'react'

import {
  Icon
} from 'semantic-ui-react'

function UIrightChevron(props) {
  const {active, hasSub, position} = props
  if (hasSub)
  {
    const iconPosition = position === 'left'? 'chevron right': 'chevron left'  
    const iconName = active? 'chevron down':  iconPosition
    return (
      <Icon className='i-title__chevron' name={iconName} size='small' />
    )
  }
  else
  {
    return null
  }
}

export default UIrightChevron