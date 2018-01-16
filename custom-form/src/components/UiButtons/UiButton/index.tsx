import React, { Component } from 'react'

import {
  Button,
  Icon
} from 'semantic-ui-react'

import { IUiButton } from './interfaces'

export const UiButton = (props) => {
  const { icon, text } = props
 
  const properties: {[k: string]: any} = { }
  text && icon? properties.labelPosition = 'left': {}

  icon? properties.icon = true: {}

  return (
    <Button {...properties}>
      {icon && <Icon name={icon} />}
      {text}
    </Button>      
  )
}

export const hocButton = (ComponentToDebug) => {
      return (props) => (
        <ComponentToDebug {...props} type="submit" />
      )
}