import React, {Component} from 'react'
import {
    Grid
} from 'semantic-ui-react'


import './index.scss'


class ProgressBar9 extends Component
{

    componentWillMount()
    {
        const {height, colorBar, timeAnim} = this.props;
        if (height)
            document.documentElement.style.setProperty('--progress-height', `${height}px`);
        if (colorBar)
        {
            document.documentElement.style.setProperty('--progress-first-color', `${colorBar[0]}`);
            document.documentElement.style.setProperty('--progress-second-color', `${colorBar[1]}`);
        }
        if (timeAnim)
            document.documentElement.style.setProperty('--animationDuration', `${timeAnim}s`);
    }

    render()
    {
        return(
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={8}>
                        <div className='moveBar'>
                            <div> </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ProgressBar9;