import React from 'react';
import './index.css';
import styled from 'style-component';
import {Motion, spring} from 'react-motion'

class ProgressText extends React.Component
{
  constructor(props)
  {
      super(props);
      this.tictoc = this.tictoc.bind(this);

      this.state = {
        val: 0
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
        let val = 0;
        prevState.val === 100? val = 0: val = 100;
        return {val};
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
        <div className="ProgressText">
            <h1> {this.props.text} </h1>
            <div className="Progress">
                <Motion 
                    defaultStyle={{width: 0}}
                    style={{width: spring(this.state.val, {stiffness: 34, damping: 11})}}>               
                {
                    (state) =>
                    <h1 style={{
                        ...test,
                         width: state.width
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

export default ProgressText;