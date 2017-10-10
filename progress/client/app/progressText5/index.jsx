import React from 'react';
import {ProgressText} from './index.css';
import styled from 'style-component';
import {Motion, spring} from 'react-motion'


var timing = 500;

class ProgressText5 extends React.Component
{
    

  constructor(props)
  {
      super(props);
      this.tictoc = this.tictoc.bind(this);
      this.state = {
        count: 0,
        count2: 0,
        val: 100,
        color1: 'rgba(128, 128, 128, 1)',
        color2: 'blue',
        timing: 1500
      }
  }

  componentDidMount()
  {
      this.intervalID = setInterval(
        () => this.tictoc(), 
        this.state.timing
      );
  }

  tictoc()
  {
    this.setState(prevState =>
    {
        let tmp = 0;
        let ret = prevState;
        console.log(ret);
       
        if (prevState.count == 1 || prevState.count === 4 )
        {
            ret.timing = 600;
        }
        else
            ret.timing = 200;

        if (ret.count2 < 4)
        {
            ret.color1 = "blue";
            ret.count2++;
        }
        else
        {
            ret.color1 = 'rgba(128, 128, 128, 1)'
            ret.count2 === 5? ret.count2 = 0: ret.count2++;
        }

        if (prevState.count < 1 || prevState.count > 2)
        {
            ret.color2 = 'blue'
            // ret = prevState;
            // ret.count = 0;
            // ret.color2 === 'rgba(128, 128, 128, 1)'? ret.color2 = 'blue': ret.color2 = 'rgba(128, 128, 128, 1)';
            ret.count === 5? ret.count = 0: ret.count++;
            prevState.val === 0 ? ret.val = 100: ret.val = 0;
            return ret;
        }
        else
        {
            ret.color2 = 'rgba(128, 128, 128, 1)';
            ret.count++;
            prevState.val === 0 ? ret.val = 100: ret.val = 0;
            return ret;
        }
    });
  }

  componentWillUnmount()
  {
      clearInterval(this.intervalID);
  }


  render()
  {

      const test = {
         overflow: 'hidden',
        whiteSpace: 'nowrap'
      };

      return (
        <div className="ProgressText" style={{color: `${this.state.color1}`}}>
            <h1> {this.props.text} </h1>
            <div className="Progress">
                <Motion 
                    defaultStyle={{width: 0}}
                    style={{width: spring(this.state.val, {stiffness: 154, damping: 25})}}>               
                {
                    ({width}) =>
                    <h1 style={{
                        ...test,
                         color: this.state.color2,
                         width: `${width}%`
                         }}>
                            {this.props.text}
                    </h1>
                }
                </Motion>
            </div>
        </div>
      );
  }
}

export default ProgressText5;