import React, {Component} from 'react'

import {
    Icon
} from 'semantic-ui-react'

import './index.scss'

class SideBarSide extends Component
{
    constructor(props)
    {
        super(props)
        this.handleSideBarElement = this.handleSideBarElement.bind(this)
        this.handleSideBarSubMenu = this.handleSideBarSubMenu.bind(this)    
        this.getIconItem = this.getIconItem.bind(this)        

        this.state = {
            displaySub: -1,
            onClickEffect: {index: -1, text: ''}
        }
    }

    componentWillMount()
    {
        const {color} = this.props
        const backColor = color.backColor || '#CCCCCC'
        const subMenuColor = color.subMenuColor || 'beige'
        const activeSubMenuColor = color.activeSubMenuColor || 'pink'
        const borderColor = color.borderColor || 'grey'
        const subMenuBorder = color.subMenuBorder || 'grey'

        document.documentElement.style.setProperty('--background-color', backColor);
        document.documentElement.style.setProperty('--sub-menu-color', subMenuColor);
        document.documentElement.style.setProperty('--active-sub-menu-color', activeSubMenuColor);
        document.documentElement.style.setProperty('--sub-menu-border', subMenuBorder)
        document.documentElement.style.setProperty('--border-color', borderColor)
    }

    componentWillReceiveProps()
    {
        const {open} = this.props;
        if (open === true)
        {
            this.setState({displaySub: this.state.onClickEffect.index})
        }
    }

    getIconItem(iconName)
    {
        const {position} = this.props
        const isGroup = /^[a-z ]+\|[a-z ]+$/
        if (isGroup.test(iconName))
        {
            /^([a-z ]+)\|([a-z ]+)$/.exec(iconName)
            return (
                <Icon.Group 
                    style={{
                        width: '26px',
                        marginLeft: position === 'left'?'0px' : '0.25rem',
                        marginRight: position === 'right'? '0px': '0.25rem',
                        textAlign: 'center',
                        verticalAlign: 'middle'
                    }}>
                    <Icon name={RegExp.$1} size='large'/>
                    <Icon corner color='orange' name={RegExp.$2}
                          style={{fontSize: '0.7em'}} />
                </Icon.Group>
            )
        }
        else
        {
            return (
                <Icon name={iconName} size='large'
                    style={{width: '26px'}}/>
            )
        }
    }

    handleSideBarSubMenu(subMenu, pIndex)
    {
        const {onClickEffect} = this.state
        const {position, color} = this.props;
        const activeSubMenuColor = color.activeSubMenuColor || 'pink'
        const subMenuColor = color.subMenuColor || 'beige'

        const tmp = Object.keys(subMenu).map((pid, index) => {
            return (
                <li
                    className={onClickEffect.text === subMenu[index] && onClickEffect.index === pIndex? 'active' : ''} 
                    key={index}
                    style={{
                            textAlign: position === 'right'? 'right': 'left'}
                    }
                    onClick={() => this.setState({onClickEffect: {index: pIndex, text: subMenu[index]}})}>
                    <span> {subMenu[index]} </span>
                </li>
            )
        })

        return tmp;
    }


    handleSideBarElement()
    {
        const {sideBarItem, position, open} = this.props;
        const {displaySub} = this.state;
        const subMenuBorder = this.props.subMenuBorder || 'blue'

        const tmp = Object.keys(sideBarItem).map((pid, index) => {
            const objTmp = sideBarItem[pid]
            const subMenu = this.handleSideBarSubMenu(objTmp.subMenu, index)
            const iconItem = this.getIconItem(pid)
            const toolstipPosition = position === 'left'? 'left': 'right'
            
            return(
                <li 
                    key={index}
                    style={{height: open? '100%':''
                            }}>
                    <div
                        onClick={() =>{
                            if (subMenu.length === 0)
                            {
                                this.setState((prevState) => { prevState.onClickEffect = {index: index, text: '__alone'},
                                                               prevState.displaySub = index
                                                                return prevState})
                                 open === false? this.props.openSide(): {};
                                console.log(this.state)

                            }
                            else
                            {
                                open === false? this.props.openSide(): {};                                
                                this.setState({displaySub: displaySub === index? -1: index})
                                console.log(this.state)
                                
                            }
                        }}
                        style={{
                                paddingLeft:  position === 'right'? '0px': '15px',
                                paddingRight: position === 'right'? '15px': '0px',
                                direction:    position === 'right'? 'rtl': 'ltr',
                                textAlign:    position === 'right'? 'right': 'left',
                                overflow: open? 'hidden': '',
                                position: 'relative'
                        }}>
                            {iconItem}
                            <span
                                className={'toolstip ' + toolstipPosition}
                                style={{
                                    display: open? 'none': 'inline-block',
                                }}>
                                {objTmp['name']}
                            </span>
                            <span className=''
                                style={{display: open? 'inline-block': '',
                                        fontWeight: displaySub === index? 'bold': '',
                                        paddingRight: position === 'right'? '12px': '0',
                                        paddingLeft: position === 'left'? '12px': '0',
                                        width: '100px',
                                        marginRight: '',
                                        flexGrow: '2',
                                        flexShrink: '2'
                                        }}
                                >
                                {objTmp['name']}
                            </span>
                        </div>
                    <div className='marginSubMenu'
                            style={{display: open && index === displaySub? '': 'none',
                                    }}>
                        <ul
                            style={{display: displaySub === index? 'block': 'none',
                                    direction: position === 'right'? 'rtl': 'ltr',
                                    paddingLeft: position === 'left'? '10px': '',
                                    paddingRight: position === 'right'? '10px': '',
                                    backgroundColor: subMenuBorder
                                    }}>
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
        const {open, isTablet, marginOnTop} = this.props
        
        const position = this.props.position || 'left'
        const borderColor = this.props.borderColor || 'black'
        const sizeSide = this.props.sizeSide || '60px'
        const sizeSideOpen = this.props.sizeSideOpen || '230px'

        const sideBarMenu = this.handleSideBarElement();
        console.log(this.state.displaySub)

        return (
            <div className='sideBarStyle'
                style={{
                    marginTop: marginOnTop,
                    width: open? sizeSideOpen: isTablet? '0px': sizeSide,
                    left: position === 'left'? '0px': '',
                    right: position === 'right'? '0px': '',
                    borderRight: position === 'left'? `solid 1px ${borderColor}`: '',
                    borderLeft: position === 'right'? `solid 1px ${borderColor}`: ''
                }}>
                <ul>
                    {this.handleSideBarElement()}
                </ul>
            </div>
        )
    }
}

export default SideBarSide;