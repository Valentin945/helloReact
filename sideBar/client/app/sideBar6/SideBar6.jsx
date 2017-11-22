import React, {Component} from 'react'
import {
    Grid,
    Menu,
    Icon,
    Responsive,
    Button
} from 'semantic-ui-react'
import windowSize from 'react-window-size'


import './index.scss'


class SideBar6 extends Component
{
    constructor(props)
    {
        super(props)
        this.growWidth = this.growWidth.bind(this)
        this.shrinkWidth = this.shrinkWidth.bind(this)
        this.displayTab = this.displayTab.bind(this)
        this.handleMenuItem = this.handleMenuItem.bind(this);
        this.handleMenuSubMenu = this.handleMenuSubMenu.bind(this);

        this.state = {
            burgerDisplay: false,
            displaySpan: -1,
            element: -1,
            width: 5,
            overflow: 'visible',
            open: false

        }
    }

    componentDidMount()
    {

    }
    
    displayTab(event, key)
    {
        console.log('inside')
        this.setState({
            open: true,
            displaySpan: key
        })
        
    }
    
    growWidth(val, event)
    {
  
        let {style} = event.target
        this.setState({element: val})
        this.setState({displaySpan: val})
    }
    
    shrinkWidth(val, event)
    {
        // console.log('out')
        let {style} = event.target;
        // style.width = '100%';
        this.setState((prevState) => {
            prevState.element = 0
            prevState.displaySpan = 0
            return prevState
        })
    }
    
    handleMenuSubMenu(pid)
    {
        const {menuItem} = this.props;
        const subItem = menuItem[pid].subItem;
        const tmp = Object.keys(subItem).map((sid) => {
            return (
                <Menu.Item onClick={() => { 
                                            this.setState(prevState => {prevState.open = false; prevState.burgerDisplay = false; console.log(prevState.open);  return prevState})}}>
                    {subItem[sid]}
                </Menu.Item>
            );
        })

        return tmp;
    }

    handleMenuItem()
    {
        const {menuItem} = this.props;
        const {element, open, displaySpan, burgerDisplay} = this.state;

        const width = this.props.windowWidth * 5 / 100;

        let key = 0;
        const tmpItem = Object.keys(menuItem).map((pid) => {
            key++;
            const {index} = menuItem[pid]
            return (
                    <Menu.Item  key={key}
                       
                        style={{width: element === index || open ? burgerDisplay? '100%':`${width * 2}px`: `${width}px`,
                                height: open && displaySpan === index? 'auto': ''}}
                   
                        active={open}           
                     >
                        <Menu.Header  onClick={(event) => this.displayTab(event, index)}
                                      onMouseEnter={() => this.setState(prevState => {
                                                                        prevState.element = index
                                                                        return prevState})}
                                      style={{width: '100%'}} 
                                      onMouseLeave={() => this.setState({element: -1})}>
                            <Icon name={pid} size='big' style={{display: 'inline'}} />
                            <span> {menuItem[pid].header.toUpperCase()} </span>
                        </Menu.Header>
                        <Menu.Menu style={{display: open && displaySpan === index? 'inline-block': 'none'}}>
                            {this.handleMenuSubMenu(pid)}
                        </Menu.Menu>
                    </Menu.Item>
                );
            }
        ) 
        return (<div style={{color: 'red'}} onClick={()=>console.log('Hola')}>Test
            {tmpItem}
            </div>
        );
    }

    render()
    {
        
        const sideSize = this.props.windowWidth;
        const width = sideSize * 5 / 100;
        const {element, displaySpan,  overflow, open, burgerDisplay} = this.state;
        const menuItem = this.handleMenuItem();
         console.log(menuItem)

        return(
            <div>
                <Responsive 
                    minWidth={992}>
                    <div className='sideBarPure' style={{width: `${width * (open? 2: 1)}px`,
                                                        overflow: overflow}}>
                        <Menu vertical>
                            {menuItem}
                        </Menu>
                    </div>
                </Responsive>
                <Responsive
                    maxWidth={991}>
                    <Button 
                      circular
                      icon='sidebar'
                      className='buttonForSideBar big'
                      style={{display: !burgerDisplay || !open? 'inline-block': 'none'}}
                      onClick={() => this.setState({burgerDisplay: !burgerDisplay, open: true})} />
                    <div className='sideBarPure' style={{width: `${width * 5}px`,
                                                        overflow: overflow,
                                                        display: burgerDisplay && open? 'block': 'none'}}>
                        <Menu vertical>
                            {menuItem}
                        </Menu>
                    </div>
                </Responsive>
                <Grid style={{marginLeft: `${width * (open? 2: 1)}px`}}>
                    <Grid.Row width={8} centered>
                        <Grid.Column width={1}>
                        <p>
                        dfkmdgfnkjgfnfjg
                        </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}



export default windowSize(SideBar6);