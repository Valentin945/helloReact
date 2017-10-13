import React from 'react'
import styler from './index.css.js'
import {Motion, spring} from 'react-motion'
// import PacmanProgress from 'react-pacman-progress'
import Spinner from 'react-spinkit'
import Spinner2 from 'react-spinner'

// var pacman = require('react-pacman-progress')


class progressBar1 extends React.Component
{
    constructor(props)
    {
        super(props);
      
        this.tictoc = this.tictoc.bind(this);
        this.state = {
            currentIndex: 0,
            number: 5
        }
    }

    componentDidMount()
    {
        // this.intervalID = setInterval(
        //     () => this.tictoc(),
        //     1000
        //   );
      }


    tictoc()
    {
        // this.setState(prevState =>
        // {
        //     let {val} = prevState;
        //     if (val === 0)
        //     {
        //         prevState.color2 === 'white'? prevState.color2 = 'black': prevState.color2 = 'white';
        //         prevState.val = 100;
        //     }
        //     else
        //     {
        //         prevState.color1 = prevState.color2
        //         prevState.val = 0;
        //     }
        //     //prevState.val === 100? prevState.val = 0: prevState.val = 100;
        //     return prevState;
        // });
    }

    ComponentWillUnmount()
    {
        // clearInterval(this.intervalID);
    }


    render()
    {
       
     return(
        <div >
            <Spinner style={{...styler.bar}} name='wave'/>
            <h1> dsokd </h1>
            <Spinner2 />
            {/* <Pacman items='2' currentIndex={this.state.currentIndex} /> */}
        </div>
     );
    }
}

export default progressBar1;