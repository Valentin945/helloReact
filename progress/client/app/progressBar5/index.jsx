import React from 'react'
import {Motion, spring} from 'react-motion'
import style from './index.scss'

class progressBar5 extends React.Component
{
    constructor(props)
    {
        super(props);
        let length = this.props.text.size;
        this.state = {
            size: length,
            text: this.props.text.split('')
        }


    }

    componentDidMount()
    {
     //   http://vanseodesign.com/css/custom-properties-and-javascript/
        var styles = getComputedStyle(document.documentElement);
        var colorValue = styles.getPropertyValue('--color');
        console.log(colorValue)
        document.documentElement.style.setProperty('--color', '10')
        colorValue = styles.getPropertyValue('--color');
        console.log(colorValue)
    }


    render()
    {   

        let rows = [];   
        this.state.text.forEach((value, index) =>
        {
           rows.push(
                <span key={index}
                > {value} </span>
            )
            return;
        });
        
        console.log(style.slt)
        console.log(style.animationTest)

        return (
            <div className='example'>
                {rows}
            </div>
       )
    }
}

export default progressBar5;