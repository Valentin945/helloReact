import React, {Component} from 'react'

import {
    Sidebar,
    Menu,
    Segment,
    Icon,
    Header,
    Transition
} from 'semantic-ui-react'

import windowSize from 'react-window-size'
import './sideBar.scss'

class SideBar4 extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            sideWidth: 'very thin',
            height: 0
        }
        this.initiateRow = this.initiateRow.bind(this);
    }

    
    displaySideBar()
    {

    }

    initiateRow()
    {
        const {sideWidth} = this.state;
        if (sideWidth === 'very thin')
        {
            let count = 0;
            let tab = [];
            Object.keys(this.props.logos).map((pid) =>{
                this.props.logos;
                count++;
                tab.push(
                <Menu.Item key={count}>
                    <Icon name={pid}/>
                   
                </Menu.Item>
                )
                count++;
            })
            
            return tab;
        }
        else
        {
            let count = 0;
            let tab = [];
            Object.keys(this.props.logos).map((pid) =>{
                this.props.logos;
           
                tab.push(
                <Menu.Item key={count}>
                    <Icon name={pid}/>
                    <Transition duration='2000' transitionOnMount>
                        <Header as={'h5'}>
                            {this.props.logos[pid]}
                        </Header>
                    </Transition>
                </Menu.Item>
                )
                count++;
            })
            return tab;
        }
    }

    render()
    {

         const {sideWidth} = this.state;
         const sideSize = this.props.windowHeight;
         const row = this.initiateRow();
        return (
            <div className='ui'>
                <Sidebar.Pushable className='bottom attached' as={Segment} style={{height: `${sideSize}px`}}>
                    <Sidebar as={Menu} visible className='inline testWidth' animation='push' width={sideWidth} 
                            onMouseEnter={() => {this.setState({sideWidth: 'thin'})}}
                            onMouseLeave={() => {this.setState({sideWidth: 'very thin'})}} icon='labeled' vertical inverted>
                        {row}            
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as='h1'> Application Content </Header>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }

}

export default windowSize(SideBar4);