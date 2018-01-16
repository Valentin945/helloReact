import React, { Component } from 'react'

import { UiButton } from '../../UiButtons/UiButton'

import './stylesheet.scss'

export class UiBanner extends Component<any, any> {

  render() {
    const { title, button } = this.props
    return (
      <div className='top-banner'>
        <div className='left-part'>
          <span className='title'>
            {title}
          </span>
        </div>
        <div className='right-part'>
          <UiButton {...button} />
        </div>
      </div>
    )
  }
}