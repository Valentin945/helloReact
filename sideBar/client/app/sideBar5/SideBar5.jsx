import React, {Component} from 'react'

import {
    Sidebar,
    Menu,
    Segment,
    Icon,
    Header,
    Transition,
    Dropdown
} from 'semantic-ui-react'

import windowSize from 'react-window-size'
import './sideBar.scss'

class SideBar5 extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            sideWidth: 'very thin',
            height: 0,
            dropdownMenuVisible : '',
            subMenuVisible: '',
            isHidden: 'none'
        }
        this.initiateRow = this.initiateRow.bind(this);
        this.changeSizeItem = this.changeSizeItem.bind(this);
        this.showRow = this.showRow.bind(this)
    }

    componentWillMount()
    {
        document.documentElement.style.setProperty('--becolor', 'orange');
    }


    changeSizeItem()
    {
        // let {target} = element;
        this.setState({sideWidth: 'thin'})
        // console.log(target.style)
        this.timer = setInterval(() =>
            {this.setState({isHidden: 'inline'})}, 500)
    }

    showRow()
    {
        const {dropdownMenuVisible, subMenuVisible, isHidden} = this.state;
        let tab = [];
        let count = 0;
        Object.keys(this.props.logos).map((pid) =>{
            const {logos} = this.props;
           
            if (pid === subMenuVisible)
            {
                const {content} = this.props.logos[pid];
            
                let countTmp = 0;
                const subMenu = Object.keys(this.props.logos[pid].content).map((id) => {
                    countTmp++;
                    return (<Menu.Item key={countTmp} onClick={() => {
                                                                        clearInterval(this.timer),
                                                                        this.setState({sideWidth: 'very thin',
                                                                                        isHidden: 'none'})
                                                                        }}>
                            {this.props.logos[pid].content[id].toUpperCase()}
                    </Menu.Item>)
                })
                tab.push(
                    <Menu.Item key={count}>
                        <Menu.Header onClick={() => {this.setState({subMenuVisible: pid})}}>
                            <Icon size='big' name={pid}/>
                            <span style={{display: isHidden}}> {pid.toUpperCase()} </span>
                        </Menu.Header>
                        <Menu.Menu>
                            {subMenu}
                        </Menu.Menu>
                    </Menu.Item>
                )
            }
            else
            {
                tab.push(
                    <Menu.Item key={count} >
                        <Menu.Header onClick={() => {this.setState({subMenuVisible: pid})}}>
                            <Icon size='big' name={pid}/>
                            <span style={{display: isHidden,
                                            paddingTop: '20px'}}> {pid.toUpperCase()} </span>
                        </Menu.Header>
                    </Menu.Item>
                )
            }
            count++;
        })
        return tab;
    }

    initiateRow()
    {
        const {sideWidth, dropdownMenuVisible} = this.state;

            let count = 0;
            let tab = [];
            Object.keys(this.props.logos).map((pid) =>{
                const {logos} = this.props;
               
                tab.push(
                    <div key={count}> 
                        <Dropdown open={dropdownMenuVisible === pid}  icon={<Icon size='big' name={pid}/>} style={{height: '60px'}} labeled floating className='link item' 
                                  onClick={() => {  this.setState({subMenuVisible: pid});
                                                    this.changeSizeItem()}} onMouseEnter={() => {this.setState({dropdownMenuVisible: pid})}} onMouseLeave={() => {this.setState({dropdownMenuVisible: ''})}} >
                            <Dropdown.Menu>
                                <Dropdown.Item className='fluid nameToDisplay' style={{height: '50px', padding: '10px'}} >
                                    {pid.toUpperCase()}
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                )
                count++;
            })
            
            return tab;

    }

    render()
    {

         const {sideWidth} = this.state;
         const sideSize = this.props.windowHeight;
         
        
         let row =[];
         if (sideWidth === 'very thin')
         {
            row = this.initiateRow();   
         }
         else
         {
            row = this.showRow();
         }
         

        return (
            <div className='ui'>
                <Sidebar.Pushable className='bottom attached' as={Segment} style={{height: `${sideSize}px`}}>
                    <Sidebar as={Menu} visible className='inline testWidth ' animation='push' width={sideWidth} 
                           vertical inverted>
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

export default windowSize(SideBar5);