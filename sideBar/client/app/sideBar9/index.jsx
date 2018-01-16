import React, {Component} from 'react'

import SideBarSide from './leftSideBar/index.jsx'
import TopMenu from './topMenu/TopMenu.jsx'

import windowSize from 'react-window-size'

import './index.scss'

class SideBar9 extends Component
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
        const isTablet = this.props.windowWidth <= 991;
        const {position, topMenuItem, topMenuColor, topMenuHeight, color, sideBarItem} = this.props
        const {open} = this.state
        return (
            <div>
                <TopMenu height={topMenuHeight}
                         color={topMenuColor}
                         contents={topMenuItem}
                         openSide={this.openSideBar}
                         />
                
                <SideBarSide
                    sizeSideOpen='230px'
                    sizeSide='60px'
                    isTablet={isTablet}
                    open={this.state.open}
                    position={position}
                    color={color}
                    sideBarItem={sideBarItem}
                    marginOnTop={topMenuHeight}
                    openSide={this.openSideBar}
                    />
                <div
                    className='componentInSideBar'
                    style={{
                        marginLeft: position === 'right'? '0': isTablet? open? '230px': '0px': open? '230px': '60px',
                        marginRight: position === 'left'? '0': isTablet? open? '230px': '0px': open? '230px': '60px',
                        opacity: isTablet && open? '0.5': '1',
                        marginTop: topMenuHeight,
                    }}>
                        saltutut
                    {/* {component} */}
                </div>
                
            </div>
        )
    }
}

export default windowSize(SideBar9);