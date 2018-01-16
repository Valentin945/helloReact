import React, { Component } from 'react'
import {
    Icon
} from 'semantic-ui-react'

class UImenuTop extends Component {

    constructor(props) {
        super(props)
        this.listItemCreation = this.listItemCreation.bind(this)
    }

    listItemCreation(content) {
        const { type, text, textProperties, path, icon, iconSize } = content
        switch (type) {
            case 'img':
                return (
                    <div>
                        <img src={path} />
                        {text && <span> {text} </span>}
                      
                    </div>
                )
            case 'general':
                console.log('inis')
                return (
                    <div>
                        {(() => {
                            if (icon) {
                                console.log('23')
                                return (
                                    <Icon name={icon} size={iconSize} />
                                )
                            }
                        })()}
                        {(() => {
                            if (text) {
                                return (
                                    <span>{text}</span>
                                )
                            }
                        })()}
                    </div>
                )
        }

    }

    componentWillMount() {
        const { contents, height } = this.props
       

        this.list = Object.keys(contents).map((pid) => {

            const float = contents[pid].float || 'left'
            const action = contents[pid].action
            console.log(action)
            return (
                <li className={float}
                    onClick={() => {
                        action && ((action === 'open' && this.props.openSide()) || action())
                    }}
                    key={pid}>
                    {this.listItemCreation(contents[pid])}
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