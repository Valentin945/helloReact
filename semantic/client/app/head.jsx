import React from 'react'
import {Menu, Container, List} from 'semantic-ui-react'


class Head extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            handleActive: 1
        }

    }


    render()
    {
        let rows = [];
        this.props.left.forEach((val, index) =>
        {
            rows.push(
                <Menu.Item key={index} active={index === this.state.handleActive} onClick={() => {this.setState({handleActive: index})}}>
                    {val}
                </Menu.Item>
            )           
        });
        return(
           <Menu
                inverted
                >
                {rows}
            </Menu>
        );
    }

}

export default Head;