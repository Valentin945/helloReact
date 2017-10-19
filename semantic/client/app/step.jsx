import React from 'react'
import {Step, Icon} from 'semantic-ui-react'

class Steps extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        let rows = [];
        this.props.steps.forEach((value, index) => 
        {
            rows.push(
                <Step
                    key={index}
                    active={this.props.index === index}
                    disabled={this.props.index < index}
                    >
                    <Icon name={value.icon}/>
                    <Step.Content>
                        <Step.Title>{value.title}</Step.Title>
                    </Step.Content>
                </Step>
            )
        });


        return(
            <Step.Group>
                {rows}
            </Step.Group>
        );
    }
}

export default Steps;