import React, {Component} from 'react'
import {
    Button,
    Icon
} from 'semantic-ui-react'

import './sideBarStyle.scss'

class SideBar8 extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            open: false,
            displaySub: -1
        }
        this.handleSideBarElement = this.handleSideBarElement.bind(this)
        this.handleSideBarSubMenu = this.handleSideBarSubMenu.bind(this)    
    }

    handleSideBarSubMenu(subMenu)
    {
        const tmp = Object.keys(subMenu).map((pid, index) => {
            
            return (
                <li>
                    {pid}
                </li>
            )
        })

        return tmp;
    }

    handleSideBarElement()
    {
        const {sideBarItem} = this.props;
        const {open, displaySub} = this.state;

        const tmp = Object.keys(sideBarItem).map((pid, index) => {
            const objTmp = sideBarItem[pid]
            const subMenu = this.handleSideBarSubMenu(objTmp.subMenu);
            return(
                <li style={{height: open? '100%':''
                            }}
                    className={open? 'active': ''}
                    onClick={() => this.setState({open: true, displaySub: index})}>
                    <div>
                        <Icon name={pid} size='large' />
                        <span
                            style={{display: open? 'inline-block': ''}}>
                            {objTmp['name'].toUpperCase()}
                        </span>
                    </div>
                    <div className='marginSubMenu'
                          style={{display: open? '': 'none'}}>
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
        const {open} = this.state;
        const sideBarMenu = this.handleSideBarElement();
        return (
            <div>
                <div className='sideBarAndMenu'>
                    <div className='forPcScreen'>
                        <div className='menuTop'>
                            <ul>
                                <li> 
                                    <Icon name='sidebar' size='big' 
                                        onClick={() => this.setState({open: !open})}
                                        />
                                </li>
                                <li> slsl </li>
                                <li> slsl </li>
                                <li> slsl </li>  
                            </ul>
                        </div>
                        <div className='sideBarPc'
                             style={{
                               width: open? '250px': ''  
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