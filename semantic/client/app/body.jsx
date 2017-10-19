import React from 'react'
import {HashRouter as Router,
        Route,
        Switch} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'


import FirstForm from './first_form.jsx'
import Steps from './step.jsx'


class Body extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            index: 0
        }
    }

    render()
    {
        // <Link to="payment"> Basket
        // <Switch>
        // <Route path='/' component={() => <App addCommand={}}
        // </Switch>
        // <Route exac path='/' component={footer}
        return (
           <div>
                <Grid>
                    <Grid.Row
                        centered>
                        <Grid.Column
                            textAlign='center'>
                            <Route path='/' component={() => (
                                    <Steps steps={[{icon: 'address card outline', title: 'ID'},
                                                {icon: 'edit', title: 'Motivation'},
                                                {icon: 'info circle', title: 'Validate'}
                                    ]}
                                            index={this.state.index}/>
                                )} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row
                        centered>      
                            <Switch>
                                <Route exact path='/' component={() => (<FirstForm />)}/>
                            </Switch>
                    </Grid.Row>
                    
                </Grid>
            </div>
        )
    }



}


export default Body;