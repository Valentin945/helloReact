import React, {Component} from 'react'
import {
    Menu,
    Sidebar,
    Icon,
    Header,
    Button,
    Segment,
    Transition
} from 'semantic-ui-react'

import './sideBar.scss'
import windowSize from 'react-window-size'

class SideBar2 extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            visible: true,
            widthStyle: 'very thin'
        }
        this.handleSideChange = this.handleSideChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleClick()
    {
        this.setState({widthStyle: 'very thin'});
    }

    handleKeyPress(e)
    {
        if (e.keyCode === 27 && this.state.widthStyle != 'very thin')
        {
            this.setState({widthStyle: 'very thin'});
        }
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('this')
        if (nextState.visible != 'very thin')
        {
            document.addEventListener('keydown', this.handleKeyPress);
            document.querySelector('.pusher').addEventListener('click', this.handleClick)
        }
        else
        {
            document.removeEventListener('keydown', this.handleKeyPress)
            document.querySelector('.pusher').removeEventListener('click', this.handleClick)
        }
    }


    handleSideChange()
    {
        var {widthStyle} = this.state;
        widthStyle === "very thin"? widthStyle = 'thin': widthStyle = "very thin";
        this.setState({widthStyle: widthStyle,
                        visible: true});
    }

    render()
    {
        const {widthStyle, visible} = this.state;

        let row = [];

        if (widthStyle === 'very thin')
        {
            row.push(
                <Menu.Item  key={0} onClick={this.handleSideChange} style={{color: 'orange'}} >
                    <Icon name='sidebar' />
                </Menu.Item>
            )
        }
        else
        {
            row.push(
              <div key={0}>
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
                <Menu.Item name='minimize' onClick={this.handleSideChange}>
                    <Icon name='minimize'/>
                </Menu.Item>
                </div>
            );
        }
        console.log(row[0]);

        return(
            <Sidebar.Pushable className="bottom attached" as={Segment} style={{height: `${this.props.windowHeight}px`}}>
            <Sidebar as={Menu} className='inline testWidth' animation='push' width={widthStyle} visible icon='labeled' vertical inverted>
              
                {row}

                
            </Sidebar>
            <Sidebar.Pusher>
                <Segment basic className='makeFullHeight'>
                    <Header as='h3'>Application Content</Header>
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        );
    }
}

export default windowSize(SideBar2);