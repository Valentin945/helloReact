import React from 'react'

import {
  Icon
} from 'semantic-ui-react'

const UIListElement = (props) => {
  const { type, text, textProperties, path, icon, iconSize } = props.content
  switch (type) {
      case 'img':
          return (
              <div>
                  <img src={path} />
                  {text && <span> {text} </span>}
                
              </div>
          )
      case 'general':
        //   console.log('inis')
          return (
              <div>
                  {(() => {
                      if (icon) {
                        //   console.log('23')
                          return (
                              <Icon name={icon} size={iconSize} />
                          )
                      }
                  })()}
                  {(() => {
                      if (text) {
                          return (
                              <span>{text}</span>
                          )
                      }
                  })()}
              </div>
          )
  }
}

export default UIListElement;