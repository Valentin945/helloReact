import React, { Component } from 'react'
import {
    Icon
} from 'semantic-ui-react'

import UIListElement from './UIlistelement.jsx'


class UImenuTop extends Component {

    findKind = (kind) => {
        return (kind === 'both'? '': (kind === 'tablet'? 'tablet': 'desktop'))
    }

    componentWillMount() {
        const { contents, height } = this.props

        this.list = Object.keys(contents).map((pid) => {
            const float = contents[pid].float || 'left'
            const { action} = contents[pid]
            const display = contents[pid].display || 'both'
            const listClassName = float + ' ' + this.findKind(display)
            //   console.log(action)

            return (
                <li className={listClassName}
                    onClick={() => {
                        action && ((action === 'open' && this.props.openSide()) || action())
                    }}
                    key={pid}>
                    <UIListElement content={contents[pid]} />
                </li>
            )
        })
    }

    render() {
        const { color, height } = this.props
        return (
            <div className='menuTop'>
                <ul>
                    {this.list}
                </ul>
            </div>
        )
    }
}

export default UImenuTop;