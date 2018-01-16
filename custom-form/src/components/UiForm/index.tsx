import React, {Component} from 'react'

import './stylesheet.scss'
import { UiButton, hocButton } from '../UiButtons/UiButton/index';


export class UiForm extends Component<any, any>
{
  onChange = (name, value) => {
    this.props.onChange(name, value)
  }

  render() {
    const SubmitButton = hocButton(UiButton)
    return (
      <div>
      <form className='form'>
        {
          this.props.inputs.map(
            (value, index) =>
              <div className='form-element' key={index}>
                {value}
              </div>
          )
        }
          <div className='button-submit'>
            <SubmitButton {...this.props.button} />
          </div>
        </form>
      </div>
    )
  }
}