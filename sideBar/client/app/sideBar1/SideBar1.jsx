import React, {Component} from 'react'
import {
    Menu,
    Sidebar,
    Icon,
    Header,
    Button,
    Segment
} from 'semantic-ui-react'

import './sideBar.css'
import windowSize from 'react-window-size'

class SideBar1 extends Component
{
    
    constructor(props)
    {
        super(props)
        this.state = 
        {
            visible: false,
            height: 0
        }
    }


    componentDidMount()
    {
        const height = document.getElementsByClassName('getHeight')[0].clientHeight;
        this.setState({height})
    }

    render()
    {
        console.log(this.props.windowHeight)
        const {height, visible} = this.state;
        const sideSize = this.props.windowHeight - height;

        return(
            <div className="ui">
                <Menu className='getHeight' attached='top'>
                    <Menu.Item onClick={() => this.setState({visible: !visible})}>
                        <Icon name='sidebar'/>
                    </Menu.Item>
                </Menu>

                <Sidebar.Pushable className="bottom attached" as={Segment} style={{height: `${sideSize}px`}}>
                    <Sidebar as={Menu} className='inline' animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
                        <Menu.Item name='home'>
                            <Icon name='home' />
                                Home
                        </Menu.Item>
                        <Menu.Item name='gamepad'>
                            <Icon name='gamepad' />
                            Games
                        </Menu.Item>
                        <Menu.Item name='camera'>
                            <Icon name='camera' />
                            Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic className='makeFullHeight'>
                            <Header as='h3'>Application Content</Header>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div >
        );
    }

}

export default windowSize(SideBar1);