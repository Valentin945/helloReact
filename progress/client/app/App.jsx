/**
  \author Valentin LAMBERT
  \brief Main file for the react parts of the project
*/

import React from 'react'
import ProgressText1 from './progressText1/index.jsx'
import ProgressText2 from './progressText2/index.jsx'
import ProgressText3 from './progressText3/index.jsx'
import ProgressText4 from './progressText4/index.jsx'
import ProgressText5 from './progressText5/index.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <ProgressText1 text="WALLIX" />
        <hr />
        <ProgressText2 text="WALLIX" />
        <hr />
        <ProgressText3 text="WALLIX"/>
        <hr />
        <ProgressText4 text="WALLIX"/>
        <hr />
        <ProgressText5 text="WALLIX"/>
      </div>
    );
  }

}


export default App
