import React from 'react';
import {ProgressText} from './index.css';
import styled from 'style-component';
import {Motion, spring} from 'react-motion'

class ProgressText4 extends React.Component
{
  constructor(props)
  {
      super(props);
      this.tictoc = this.tictoc.bind(this);

      this.state = {
        val: 0,
        color1: 'rgba(128, 128, 128, 1)',
        color2: 'blue'
      }
  }

  componentDidMount()
  {
      this.intervalID = setInterval(
        () => this.tictoc(),
        700
      );
  }

  tictoc()
  {
    this.setState(prevState =>
    {
        let inter = "rgba(128, 128, 128, 1)";
        let tmp = 0;
        let ret = {};
        if (prevState.val === 0)
        {
            // ret.count++;
            ret = prevState;
            ret.color2 === "rgba(128, 128, 128, 1)" ? ret.color2 = 'blue': ret.color2 = "rgba(128, 128, 128, 1)";
            ret.val = 100;
            return ret;
        }
        else
        {
            ret = prevState;
            ret.color1 = ret.color2;
            ret.val = 0;
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
                    style={{width: spring(this.state.val, {stiffness: 34, damping: 11})}}>               
                {
                    ({width}) =>
                    <h1 style={{
                        ...test,
                         colQor: this.state.color2,
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

export default ProgressText4;