import React, {Component} from 'react'

import { UiBanner } from '../../../components/UiBanners/UiBanner'

import './stylesheet.scss'
import { UiInput } from '../../../components/UiFields/UiInput/index';
import { UiTextArea } from '../../../components/UiFields/UiTextArea/index';
import { UiForm } from '../../../components/UiForm/index';

export class Home extends Component<any, any> {

  render()
  {
    return (
      <div className='home'>
        <UiBanner 
          title="New Global Domain"
          button={{icon: 'arrow circle left',
                   text: 'Return to list'}}/>
       <UiForm
        inputs={[
          <UiInput input={{
              id: 0,
              name: 'Name',
            }}
          />,
          <UiInput input={{
              id: 1,
              name: 'Real name'
            }}
          />,
          <UiTextArea input={{
            id: 2,
            name: 'Description'
          }}/>
        ]}
        button={{
          
          text: 'Submit'
        }}  
      />
      </div>
    )
  }
}