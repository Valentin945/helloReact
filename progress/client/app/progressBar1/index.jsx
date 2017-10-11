import React from 'react'
import styler from './index.css.js'
import {Motion, spring} from 'react-motion'

class progressBar1 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.tictoc = this.tictoc.bind(this);
        this.state = {
            val: 100,
            color: 'white'
        }
    }

    componentDidMount()
    {
        this.intervalID = setInterval(
            () => this.tictoc(),
            1500
          );
      }


    tictoc()
    {
        this.setState(prevState =>
        {
            console.log(prevState)
            prevState.color === 'white'? prevState.color = 'black': prevState.color = 'white';
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
        let test = Object.assign({}, styler.bar);
        console.log(test);
     return(
        <div >
            <Motion 
             defaultStyle={{width: this.state=== 0? 0:0}}
             style={{width: spring(this.state.val, {stiffness: 30, damping: 11})}}>               
             {
                 ({width}) =>
                <div style={{
                       ...styler.bar,
                       //backgroundColor: this.state.color,
                       width: `${width}%`
                     }}>
                </div>
             }
            </Motion>
        </div>
     );
    }
}

export default progressBar1;