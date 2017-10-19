/**
  \author Valentin LAMBERT
  \brief Main file for the react parts of the project
*/

import React from 'react'
import {Button} from 'semantic-ui-react'
import Head from './head.jsx'
import Body from './body.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
          <Head left={['sok', 'home', 'val']}/>
          <Body />
      </div>
    
    );
  }

}


export default App
