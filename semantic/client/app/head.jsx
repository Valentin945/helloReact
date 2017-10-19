import React from 'react'
import {Grid, Menu, Container, List, Input, Button, Icon, Image} from 'semantic-ui-react'
import './imgs.css'

class Head extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            handleActive: 1
        }
12
    }


    render()
    {
        let rows = [];
        this.props.left.forEach((val, index) =>
        {
            rows.push(
                <Menu.Item key={index} active={index === this.state.handleActive} onClick={() => {this.setState({handleActive: index})}}>
                    {val.toUpperCase()}
                </Menu.Item>
            )           
        });
        return(
            <Grid>
                <Grid.Row 
                    color='yellow'
                    >
                    <Grid.Column width={5}>
                        <Menu
                            color='yellow'
                            inverted
                           
                            size='large'
                            >
                            {rows}
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Image      
                                size='small'
                                src='./app/img/wall.png'
                                centered
                                className='imgs'
                                 />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Menu 
                            color='yellow'
                            inverted>
                            <Menu.Item
                                position='right'>
                                <Input icon="search" placeholder="Search..."/>
                            </Menu.Item>
                            <Menu.Item
                                position='right'>
                                <Button
                                    inverted
                                
                                    > 
                                    <Icon
                                        
                                         
                                        name='sign out'/>
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        );
    }

}

export default Head;