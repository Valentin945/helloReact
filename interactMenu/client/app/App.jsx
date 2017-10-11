/**
  \author Valentin LAMBERT
  \brief Main file for the react parts of the project
*/

import React from 'react'
import Menu from './menu.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu 
           Circle={{MAIN_BUTTON_DIAM: '90',
                    CHILD_BUTTON_DIAM: '48',
                    CHILD_NUMBER: 5,
                    SEPARATION_ANGLE: '40',
                    FLY_OUT_RADIUS: '130'}}
        />
      </div>  
    );
  }

}


export default App
