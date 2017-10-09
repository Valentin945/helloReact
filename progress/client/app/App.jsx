/**
  \author Valentin LAMBERT
  \brief Main file for the react parts of the project
*/

import React from 'react'
import ProgressText from './progressText/index.jsx'

class App extends React.Component {
  render() {
    return (
      <ProgressText text="WALLIX" />
    );
  }

}


export default App
