import React from 'react'

import {
  Icon
} from 'semantic-ui-react'

function UIicon (props) {
  const { position, pid } = props
  const isGroup = /^[a-z ]+\|[a-z ]+$/
  if (isGroup.test(pid)) {
    /^([a-z ]+)\|([a-z ]+)$/.exec(pid)
    return (
      <div>
        <Icon.Group className='iconsGroup'>
          <Icon name={RegExp.$1} size='large' />
          <Icon corner name={RegExp.$2}/>
        </Icon.Group>
      </div>
    )
  }
  else {
    return (
      <Icon name={pid} size='large' />
    )
  }
}

export default UIicon;