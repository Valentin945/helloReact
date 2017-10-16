import React from 'react'
import {Motion, spring} from 'react-motion'
import './index.css'

class progressBar4 extends React.Component
{
    constructor(props)
    {
        super(props);
        let length = this.props.text.size;
        this.state = {
            size: length,
            text: this.props.text.split('')
        }
        this.displayText = this.displayText.bind(this);

    }

    componentDidMount()
    {
        // this.intervalID = setInterval
    }

    displayText(){
        
    }


    render()
    {
        
        return (
        <div className='mainBody'>
           <div className="animation">
                {this.displayText}
            </div>
        </div>
       )
    }
}

export default progressBar4;