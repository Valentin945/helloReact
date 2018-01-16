import React, {Component} from 'react'
import {
    Icon
} from 'semantic-ui-react'
import styled from 'styled-components'

import './topMenu.scss'

class TopMenu extends Component
{

    componentWillMount()
    {
        const {contents, height} = this.props
 
        document.documentElement.style.setProperty('--line-height', height);
 
        this.list = Object.keys(contents).map((pid) => {
            const {type, text, textProperties, path, icon} = contents[pid]
            const float = contents[pid].float || 'left'
            const iconSize = contents[pid].iconSize;

            switch(type) {
                case 'img':
                    if (text)
                    {
                        return (
                            <li key={pid}
                                style={{
                                    float: float
                                }}>
                                <div>
                                    <img src={path} />
                                    <span
                                        style={
                                            textProperties
                                        }>
                                        {text}
                                    </span> 
                                </div>
                            </li>
                        )
                    }
                    else
                    {
                        return  (
                            <li key={pid}
                                style={{
                                    float: float
                                }}>
                                <img src={path} />    
                            </li>
                        )
                    }
                    break;
                case 'button':
                    if (icon && text)
                    {
                        return(
                            <li key={pid}
                                style={{float: float}}
                                onClick={() =>{ 
                                    if (contents[pid].action === 'open')
                                    {
                                        this.props.openSide
                                    }
                                    else
                                    {
                                        contents[pid].action()
                                    }
                                }}
                                onClick={contents[pid].action}>
                                <div>
                                    <Icon name={icon} size={iconSize} />
                                    <span
                                        style={textProperties}>
                                        {text}
                                    </span>
                                </div>
                            </li>
                        )
                    }
                    else if (icon)
                    {
                        return(
                            <li key={pid}
                                onClick={() =>{ 
                                    if (contents[pid].action === 'open')
                                    {
                                        this.props.openSide()
                                    }
                                    else
                                    {
                                        contents[pid].action()
                                    }
                                }}
                                style={{float: float,}}>
                                <Icon name={icon} size={iconSize} />
                            </li>
                        )
                    }
                    else
                    {
                        return(
                            <li key={pid}
                                onClick={() =>{
                                    if (contents[pid].action === 'open')
                                    {
                                        this.props.openSide
                                    }
                                    else
                                    {
                                        contents[pid].action()
                                    }
                                }}
                                style={{float: float}}>
                                <span
                                    style={textProperties}>
                                    {text}
                                </span>
                            </li>       
                        )
                    }
            }
        })
    }

    render()
    {
        const {color, height} = this.props
        return (
            <div className='menuTop'
                style={{
                    backgroundColor: color? color: 'white',
                    height: height? height: '50px'
                }}>
                <ul
                    style={{
                        lineHeight: '50px'
                    }}>
                    {this.list}
                </ul>
            </div>
        )
    }
}

export default TopMenu;