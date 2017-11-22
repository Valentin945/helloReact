import React from 'react'
import {
    Grid,
    Progress
} from 'semantic-ui-react'

import './index.scss'

class ProgressBar8 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            percent: 100
        }
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row centered>
                        <Grid.Column width={8}>
                            <Progress  percent={this.state.percent} className='progressBarStyle2' active> </Progress>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default ProgressBar8;