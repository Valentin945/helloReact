import React, {Component} from 'react'
import {
    Icon,
    Button
} from 'semantic-ui-react'


import './indexSide.scss'

class SideBar7 extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            open: false
        }
    }


    render()
    {
        const {open} = this.state;

        return (
            <div>
                <div className='sideBarStyle'>
                    <div className='sideBarOnLargeScreen'>

                    </div>
                    <div className='sideBarOnTabletScreen'
                          >
                        <Button icon='sidebar'
                                className='big circular'
                                onClick={() => this.setState({open: !open})}
                                />
                        <div className='openSideBar'
                             style={{display: open? 'inline-block': 'none'}}>

                        </div>
                        
                    </div>
                </div>
                <div className='componentGrid'>

                </div>
            </div>
        );
    }
}

export default SideBar7;