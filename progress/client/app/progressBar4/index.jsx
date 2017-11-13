import React from 'react'
import {Motion, spring} from 'react-motion'
import './index.scss'

class progressBar4 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.backGroundColor = 'white';
        if (this.props.backGroundColor)
        {
            this.backGroundColor = this.props.backGroundColor;
        }
        
        this.foreGroundColor = '#F37324';
        if (this.props.foreGroundColor)
        {
            this.foreGroundColor = this.props.foreGroundColor;
        }

         this.size = '100%'
        if (this.props.size)
        {
            this.size = this.props.size;
        }

        this.timeDelay = '0s';
        if (this.props.timeDelay)
        {
            this.timeDelay = this.props.timeDelay;
        }

    }

    componentWillMount()
    {
        var styles = getComputedStyle(document.documentElement);
        var duration = styles.getPropertyValue('--animationDuration');
        // styles.setProperty('--animationDuration', this.props.timeAnim)
    }

    componentDidMount()
    {
        if (this.props.timeAnim)
        {
            var styles = getComputedStyle(document.documentElement);
            var duration = styles.getPropertyValue('--animationDuration');
            // styles.setProperty('--animationDuration', this.props.timeAnim)
        }
    }


    render()
    {   
        return (
        <div className='mainBody' style={{
                                            backgroundColor: this.backgroundColor,
                                            size: this.size
                                        }}>
           <div className="animation" style={{
                                                backgroundColor: this.foreGroundColor,
                                                animationDelay: this.timeDelay,
                                                animationDuration: '10'
                                            }}>
            </div>
        </div>
       )
    }
}

export default progressBar4;