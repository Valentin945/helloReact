import React, {Component} from 'react'

import { UiError } from '../UiError/index';

import './stylesheet.scss'

export class UiInput extends Component<any, any>
{
  onChange = (event) => {
    this.props.onChange(event.target.name, event.target.value)
  }
 
  render()
  {
    const { input } = this.props
    return(
      <div className='ui-input-style'>
        <div className='label'>
          <label  htmlFor={input.id}>
            {input.name}
          </label>
        </div>
        <input 
          className='ui-input'
          id={input.id}
          name={input.name}
          onChange={this.onChange}
          type='text'
          />
        <UiError errors={[]} />
      </div>
    )
  }

}