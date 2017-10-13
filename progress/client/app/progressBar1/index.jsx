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
            color1: 'white',
            color2: 'black'
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
                prevState.color2 === 'white'? prevState.color2 = 'black': prevState.color2 = 'white';
                prevState.val = 100;
            }
            else
            {
                prevState.color1 = prevState.color2
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
        let test = Object.assign({}, styler.bar);
    
     return(
        <div >
            <Motion 
             defaultStyle={{width: 0}}
             style={{width: spring(this.state.val, {stiffness: 40, damping: 11})}}>               
             {
                 ({width}) =>
                 <div style={{backgroundColor: this.state.color1}}>
                    <div style={{
                        ...styler.bar,
                        backgroundColor: this.state.color2,
                        width: `${width}%`
                        }}>
                    </div>
                </div>
             }
            </Motion>
        </div>
     );
    }
}

export default progressBar1;