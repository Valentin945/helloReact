import React, { Component } from 'react'

class UItoolstip extends Component {
  render() {
    const { value, toolstipPosition } = this.props
    return (
      <span className={'toolstip ' + toolstipPosition}>
        {value}
      </span>
    )
  }
}

export default UItoolstip;