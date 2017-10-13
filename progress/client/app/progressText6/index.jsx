import React from 'react';
import {ProgressText} from './index.css';
import styled from 'style-component';
import {Motion, spring} from 'react-motion'

class ProgressText6 extends React.Component
{
  constructor(props)
  {
      super(props);
      this.tictoc = this.tictoc.bind(this);
      let {text, firstColor, secondColor, size, timer} = this.props.item;

      text? this.text = text: this.text="Loading...";

      firstColor? this.firstColor = firstColor: this.firstColor='black';

      secondColor? this.secondColor = secondColor: this.secondColor = '#F37324'

      this.width = 100;
      this.height = 100;

      if (size)
      {
        let {width, height} = size;
        width? this.width = width: this.width;
        height? this.height = height: this.height;
      }

      this.interval = 1000;
      this.stiffness = 34;
      this.damping = 11;

      if (timer)
      {
          let {interval, stiffness, damping} = timer;
          interval? this.interval = interval: this.interval;
          stiffness? this.stiffness = stiffness: this.stiffness;
          damping? this.damping = damping: this.damping;
      }



      this.state = {
        val: 0,
        color1: `${this.firstColor}`,
        color2: `${this.secondColor}`,
        color1Origin: `${this.firstColor}`,
        color2Origin: `${this.secondColor}`
      }
  }

  componentDidMount()
  {
      this.intervalID = setInterval(
        () => this.tictoc(),
        this.interval
      );
  }

  tictoc()
  {
    this.setState(prevState =>
    {
        let inter = prevState.color1Origin;// "rgba(128, 128, 128, 1)";
        let tmp = 0;
        let ret = {};
        if (prevState.val === 0)
        {
            // ret.count++;
            ret = prevState;
            ret.color2 === prevState.color1Origin ? ret.color2 = prevState.color2Origin : ret.color2 = prevState.color1Origin;
            
            console.log(ret.color2)
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
            <h1> {this.text} </h1>
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
                            {this.text}
                    </h1>
                }
                </Motion>
            </div>
        </div>
      );
  }
}

export default ProgressText6;