import React from 'react';
import {ProgressText} from './index.css';
import styled from 'style-component';
import {Motion, spring} from 'react-motion'

class ProgressText3 extends React.Component
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
        1500
      );
  }

  tictoc()
  {
    this.setState(prevState =>
    {
        let tmp = 0;
        let ret = {};
        if (prevState.val === 0 || prevState.val === (tmp = 100))
        {
            ret.color1 = prevState.color2;
            ret.color2 = prevState.color1;
            prevState.val === 0 ? ret.val = 100: ret.val = 0;
            return ret;
        }
        return prevState;
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

export default ProgressText3;