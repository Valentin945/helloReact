import React, {Component} from 'react'

import UIsideBar from './uisidebar/UIsideBar.jsx'
import UIMenuTop from './uimenutop/UImenuTop.jsx'

class UIinterface extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            open: false
        }
        this.open = false;
        this.openSideBar = this.openSideBar.bind(this)
    }

    openSideBar()
    {
        this.setState({open: !this.state.open})
    }     


    render()
    {
        const {position, topMenuItem, topMenuColor, topMenuHeight, color, sideBarItem} = this.props
        const {open} = this.state
        const componentInSideBar = position + (open? ' open': '')
        return (
            <div>
                <UIMenuTop 
                         contents={topMenuItem}
                         openSide={this.openSideBar}
                         />
                
                <UIsideBar
                    open={this.state.open}
                    position={position}
                    sideBarItem={sideBarItem}
                    openSide={this.openSideBar}
                    />
                <div className={'componentInSideBar ' + componentInSideBar}>
                        saltutut
                </div>
                
            </div>
        )
    }
}

export default UIinterface;