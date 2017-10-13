import React from 'react'
import styler from './index.css.js'
import {Motion, spring} from 'react-motion'
// import PacmanProgress from 'react-pacman-progress'
require('react-progress-bar-plus/lib/progress-bar.css');


var ProgressBar = require('react-progress-bar-plus')

class progressBar3 extends React.Component
{
    constructor(props)
    {
        super(props);
      
        this.stiffness = this.props.stiffness;
        this.damping = this.props.damping;

        this.tictoc = this.tictoc.bind(this);
        this.state = {
            val: 100,
            stiffness: this.props.stiffness,
            damping: this.props.damping
        }
    }

    componentDidMount()
    {
        this.intervalID = setInterval(
            () => this.tictoc(),
            1000
          );
      }


    tictoc()
    {
        this.setState(prevState =>
        {
            let {val} = prevState;
            if (val === 0)
            {
                prevState.val = 100;
            }
            else
            {
                prevState.val = 0;
            }
            //prevState.val === 100? prevState.val = 0: prevState.val = 100;
            return prevState;
        });
    }

    ComponentWillUnmount()
    {
         clearInterval(this.intervalID);
    }


    render()
    {
       
     return(
        <div style={{height: '20px'}} className='container'>
            {/* <ProgressBar className={styler.bar} percent={10} autoIncrement={true} onTop={true} spinner="left" style={{backgroundColor: 'black', color: 'red'}}/> */}
            <Motion
                defaultStyle={{percent: 0}}
                style={{percent: spring(this.state.val, {stiffness: this.state.stiffness, damping: this.state.damping})}}
                >
                {
                ({percent}) =>
                {
                    console.log(percent)
                    return (<ProgressBar percent={percent} style={{width: '100px',
                                                        height: '100px'}}/>)
                }}
            </Motion>
        </div>
     );
    }
}

export default progressBar3;