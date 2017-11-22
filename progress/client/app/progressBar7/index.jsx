import React, {Component} from 'react'
import './index.scss'
import {
    Grid
} from 'semantic-ui-react'

import Color from 'color'


class ProgressBar7 extends Component
{

    componentWillMount()
    {
        const {heightBar, colorBar} = this.props;
        document.documentElement.style.setProperty('--progress-height', `${heightBar}px`);
        document.documentElement.style.setProperty('--progress-first-color-darker', `${Color(colorBar[0]).darken(0.5)}`);
        document.documentElement.style.setProperty('--progress-first-color', `${colorBar[0]}`);
        document.documentElement.style.setProperty('--progress-second-color-darker', `${Color(colorBar[1]).darken(0.5)}`);
        document.documentElement.style.setProperty('--progress-second-color', `${colorBar[1]}`);

    }

    render()
    {
        return (
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={8} style={{height: '100%'}}>
                        <div className='progressBarStyle'>
                            <div className='current'>

                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ProgressBar7;