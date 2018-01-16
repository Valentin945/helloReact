import React, {Component} from 'react'

import './stylesheet.scss'

export const UiTextArea = (props: any) => {
  const { input } = props

  const onChange = (event) => {
    props.onChange(event.target.name, event.target.value)
  } 

  return (
    <div className='ui-text-area'>
      <div className='label'>
        <label htmlFor={input.id}>
          {input.name}
        </label>
      </div>
      <textarea
       className='text-area'
       id={input.id}
       name={input.name}
       onChange={onChange}
       />
    </div>
  )
}