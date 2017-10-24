import React from 'react'
import {withRouter} from 'react-router-dom'
import {
    Form,
    Grid
} from 'semantic-ui-react'

class SecondStep extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (         
                <Grid.Column centered width={8} >
                    <Form style={{marginTop: '20px'}}>
                        <Form.TextArea rows={5} label='Your Motivation' placeholder='How did you get here?'/>
                        <Form.Input />
                    </Form>
                </Grid.Column>
            
        );
    }
}

export default withRouter(SecondStep)