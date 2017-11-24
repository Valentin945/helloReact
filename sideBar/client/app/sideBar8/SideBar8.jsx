import React, {Component} from 'react'
import {
    Button,
    Icon,
    Image
} from 'semantic-ui-react'

import './sideBarStyleScreen.scss'
import './sideBarStyleTablet.scss'


class SideBar8 extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            open: false,
            displaySub: -1,
            onClickEffect: {index: -1, text: ''}
        }
        this.handleSideBarElement = this.handleSideBarElement.bind(this)
        this.handleSideBarSubMenu = this.handleSideBarSubMenu.bind(this)    
    }

    handleSideBarSubMenu(subMenu, pIndex)
    {
        const {onClickEffect} = this.state

        const tmp = Object.keys(subMenu).map((pid, index) => {
            
            return (
                <li className={onClickEffect.text === subMenu[index]? 'active': ''}
                    onClick={() => this.setState({onClickEffect: {index: pIndex, text: subMenu[index]}})}>
                    <span> {subMenu[index]} </span>
                </li>
            )
        })

        return tmp;
    }

    handleSideBarElement()
    {
        const {sideBarItem, position} = this.props;
        const {open, displaySub} = this.state;
        const forPadding = position === 'right'? 'paddingRight': 'paddingLeft'

        const tmp = Object.keys(sideBarItem).map((pid, index) => {
            const objTmp = sideBarItem[pid]
            const subMenu = this.handleSideBarSubMenu(objTmp.subMenu, index);
            return(
                <li 
                    style={{height: open? '100%':''
                            }}
                    className={open? 'active': ''}
                    onClick={() =>{ 
                        if (subMenu.length === 0)
                        {
                            this.setState({onClickEffect: {index: index, text: 'alone'},
                                            displaySub: index})
                        }
                        else
                        {
                            this.setState({open: true, displaySub: index})
                        }
                    }}>
                    
                    <div
                        style={{paddingLeft: position === 'right'? '0px': '15px',
                                paddingRight: position === 'right'? '15px': '0px'}}>

                        <Icon name={pid} size='large'
                               style={{float: position, overflow: 'hidden'}} />

                        <span
                            style={{display: open? 'inline-block': '',
                                    fontWeight: displaySub === index? 'bold': '',
                                    width: '100%'
                                    }}
                            >
                            {objTmp['name']}
                        </span>
                    </div>
                    <div className='marginSubMenu'
                          style={{display: open && index === displaySub? '': 'none'}}>
                        <ul
                            style={{display: displaySub === index? 'block': 'none'}}>
                            {subMenu}
                        </ul>
                    </div>
                </li>
            )
        });
        return tmp;
    }

    render()
    {
        const position = this.props.position || 'left';
        const {open, displaySub,  onClickEffect} = this.state;
        const sideBarMenu = this.handleSideBarElement();
        return (
            <div>
                <div className='sideBarAndMenu'>
                    <div className='forPcScreen'>
                        <div className='menuTop'>
                            <ul >
                                <li
                                    style={{float: position}}> 
                                    <Icon name='sidebar' size='big' 
                                        onClick={() => this.setState({open: !open})}
                                        />
                                </li>
                                <li
                                    style={{float: 'left'}}>
                                   <div><img src='./app/sideBar8/img/WAB-logo.png' />
                                   &nbsp;
                                    <span style={{fontWeight: 'lighter',
                                                fontSize: '34px',
                                                color: '#939598'}}>  Bastion </span>

                                   </div>                                    
                                    
                                </li>
                            
                            </ul>
                        </div>
                        <div className='sideBarPc'
                             onMouseEnter={() => this.setState({open: true})}
                             onMouseLeave={() => this.setState({open: false,
                                                                displaySub: onClickEffect.text === ''? -1: onClickEffect.index})}
                             style={{
                               width: open? '230px': '',
                               left: position === 'left'? '0px': '',
                               right: position === 'right'? '0px': ''
                             }}>
                            <ul>
                                {this.handleSideBarElement()}
                            </ul>
                        </div>
                    </div>

                    <div className='forTabletScreen'>
          
                    </div>
                </div>
                <div className='componentInSideBar'>

                </div>
            </div>

        );
    }
}

export default SideBar8;