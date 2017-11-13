import React, {Component} from 'react'

import {
    Sidebar,
    Menu,
    Segment,
    Icon,
    Header
} from 'semantic-ui-react'

import windowSize from 'react-window-size'
import './sideBar.scss'

class SideBar3 extends Component
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
        this.displaySideBar = this.displaySideBar.bind(this);
    }

    componentDidMount()
    {

        const height = document.getElementsByClassName('getHeight')[0].clientHeight;
        this.setState({height})
    }


    displaySideBar()
    {
        let {sideWidth} = this.state;
        sideWidth === 'very thin'? sideWidth = 'thin': sideWidth = 'very thin';
        this.setState({sideWidth: sideWidth});
    }

    initiateRow()
    {
        const {sideWidth} = this.state;
        if (sideWidth === 'very thin')
        {
            return [];
        }
        else
        {
            let tab = [];
            this.props.logos.forEach((currentValue, index) => {
                tab.push(
                    <Menu.Item key={index}>
                        <Icon name={currentValue}/>
                    </Menu.Item>
                )
            });
            console.log(tab)
            return tab;
        }
    }

    render()
    {
        console.log(this.props.logos)
         const {height, sideWidth} = this.state;
         const sideSize = this.props.windowHeight - height;
         const row = this.initiateRow();
        return (
            <div className='ui'>
                <Menu className='getHeight' attached='top'>
                    <Menu.Item onClick={this.displaySideBar}>
                        <Icon name='sidebar'/>
                    </Menu.Item>
                </Menu>
                <Sidebar.Pushable className='bottom attached' as={Segment} style={{height: `${sideSize}px`}}>
                    <Sidebar as={Menu} visible className='inline testWidth' animation='push' width={sideWidth} icon='labeled' vertical inverted>
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

export default windowSize(SideBar3);