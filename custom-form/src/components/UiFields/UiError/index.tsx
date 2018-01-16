import React, {Component} from 'react'

import './stylesheet.scss'

export const UiError = (props: any) => {
  const { errors } = props

  return (
    <div>
      {
        errors?
        errors.map(
          (error, index) => 
          <div key={index}>
            {error}
          </div>
        ) :
        ''
      }
    </div>
  )
}