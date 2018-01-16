import React, {Component} from 'react'
import {
    Button,
    Icon,
    Image,
    Popup
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
        this.getIconItem = this.getIconItem.bind(this)        
    }

    componentWillMount()
    {
        const color = this.props.backColor || '#CCCCCC'
        const subMenuColor = this.props.subMenuColor || 'beige'
        const activeSubMenuColor = this.props.activeSubMenuColor || 'pink'

        document.documentElement.style.setProperty('--background-color', color);
        document.documentElement.style.setProperty('--sub-menu-color', subMenuColor);
        document.documentElement.style.setProperty('--active-sub-menu-color', activeSubMenuColor);
        
    }

    getIconItem(iconName)
    {
        const {position} = this.props
        const isGroup = /^[a-z ]+\|[a-z ]+$/
        if (isGroup.test(iconName))
        {
            /^([a-z ]+)\|([a-z ]+)$/.exec(iconName)
            console.log('Groupe')
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
        const {position} = this.props;

        const tmp = Object.keys(subMenu).map((pid, index) => {
            
            return (
                <li className={onClickEffect.text === subMenu[index] && onClickEffect.index === pIndex? 'active': ''}
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
        const {sideBarItem, position} = this.props;
        const {open, displaySub} = this.state;
        const subMenuBorder = this.props.subMenuBorder || 'blue'
        const forPadding = position === 'right'? 'paddingRight': 'paddingLeft'

        const tmp = Object.keys(sideBarItem).map((pid, index) => {
            const objTmp = sideBarItem[pid]
            const subMenu = this.handleSideBarSubMenu(objTmp.subMenu, index)
            const iconItem = this.getIconItem(pid)
            return(
                <li 
                    key={index}
                    style={{height: open? '100%':''
                            }}
                    className={open? 'active': ''}
                >
             
                        <div
                            onClick={() =>{
                                if (subMenu.length === 0)
                                {
                                    this.setState({onClickEffect: {index: index, text: 'alone'},
                                                    displaySub: index,
                                                    open: true})
                                }
                                else
                                {
                                    this.setState({open: true, displaySub: displaySub === index? -1: index})
                                }
                            }}
                            style={{paddingLeft:  position === 'right'? '0px': '15px',
                                    paddingRight: position === 'right'? '15px': '0px',
                                    direction:    position === 'right'? 'rtl': 'ltr',
                                    textAlign:    position === 'right'? 'right': 'left',
                                    overflow: open? 'hidden': '',
                                    position: 'relative'
                            }}>

                            {iconItem}
                            {/* <Icon name={pid} size='large'
                                style={{
                                            color: 'black',
                                            flexGrow: '1'
                                            }} /> */}
                            <span
                                className={position === 'right'? 'toolstipRight': 'toolstipLeft'}
                                style={{
                                    // display: 'none'
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
        const position = this.props.position || 'left'
        const {photoSrc} = this.props;
        const borderColor = this.props.borderColor || 'black'
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
                                        onClick={() => this.setState({open: !open,
                                                                      displaySub: onClickEffect.index})}
                                        />
                                </li>
                                <li
                                    style={{float: 'left'}}>
                                   <div><img src={photoSrc} />
                                   &nbsp;
                                    <span style={{fontWeight: 'lighter',
                                                fontSize: '34px',
                                                color: '#939598'}}>  Bastion </span>

                                   </div>                                    
                                    
                                </li>
                            
                            </ul>
                        </div>
                        <div className='sideBarPc'
                             
                             style={{
                               width: open? '230px': '',
                               left: position === 'left'? '0px': '',
                               right: position === 'right'? '0px': '',
                               borderRight: position === 'left'? `solid 1px ${borderColor}`: '',
                               borderLeft: position === 'right'? `solid 1px ${borderColor}`: ''
                             }}>
                            <ul>
                                {this.handleSideBarElement()}
                            </ul>
                        </div>
                    </div>

                    <div className='forTabletScreen'>
          
                    </div>
                </div>
                <div className='componentInSideBar'
                    style={{
                        marginTop: '50px',
                        marginLeft: position === 'left'? open? '230px': '80px':'',
                        marginRight: position === 'right'? open? '230px': '80px':'', 
                        
                    }}>

                        <div>
                            <Icon name='protect' size='large'/>
                        </div>

                </div>
            </div>

        );
    }
}

export default SideBar8;