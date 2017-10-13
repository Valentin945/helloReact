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
import ProgressText6 from './progressText6/index.jsx'
import ProgressText7 from './progressText7/index.jsx'

import ProgressBar1 from './progressBar1/index.jsx'
import ProgressBar2 from './progressBar2/index.jsx'
import ProgressBar3 from './progressBar3/index.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <hr />
        <ProgressText1 text="WALLIX" />
        <hr />
        <ProgressText2 text="WALLIX" />
        <hr />
        <ProgressText4 text="WALLIX"/> 
        <hr />
        <ProgressText6 item={{
                            text: "WALLIX",
                            firstColor: "blue",
                            secondColor: "red",
                            size: {width: 100, height: 100},
                            timer: {interval: 1000, stiffness: 40, damping: 11}
                            }}/>
        <hr />
        <ProgressText5 text="WALLIX"/>
        <hr />
        <ProgressBar1 />
        <hr />
        <ProgressBar2/>
        <hr />
        <ProgressBar3 stiffness={100} damping={11}/> */}
        <ProgressText7 />

      </div>
    );
  }

}


export default App
