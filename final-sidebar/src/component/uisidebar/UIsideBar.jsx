import React, { Component } from 'react'

import {
  Icon
} from 'semantic-ui-react'

import UIsideBarListItem from './UIsideBarListItem.jsx'

class UIsideBar extends Component {
  constructor(props) {
    super(props)
    this.handleSideBarElement = this.handleSideBarElement.bind(this)

    this.state = {
      displaySub: -1,
      onClickEffect: { index: -1, text: '' }
    }
  }

  componentWillReceiveProps() {
    const { open } = this.props;
    if (open === true) {
      this.setState({ displaySub: this.state.onClickEffect.index })
    }
  }

  changingClickEffect = (index, text) => {
    this.setState((prevState) => {
      prevState.onClickEffect = {index: index, text: text}
      prevState.displaySub = index
      return prevState
    })
  }


  changingSubMenu = (index) => {
    this.setState((prevState, props) => {
       prevState.displaySub = prevState.displaySub === index ? -1 : index 
       return prevState
    })
  }

  handleSideBarElement() {
    const { sideBarItem, position, open } = this.props;
    const { displaySub, onClickEffect } = this.state;

    const tmp = Object.keys(sideBarItem).map((pid, index) => {
      return (
        <UIsideBarListItem {...this.props} position={this.props.position} pid={pid} index={index} displaySub={displaySub} onClickEffect={onClickEffect}
            changingClickEffect={this.changingClickEffect} changingSubMenu={this.changingSubMenu} key={pid}/>
      )
    });
    return tmp;
  }

  render() {
    const { open, isTablet, marginOnTop } = this.props
    const position = this.props.position || 'left'
    const sideBarMenu = this.handleSideBarElement();
    const sideBarClass = 'sideBarStyle ' + position + (open? ' open': '');

    return (
      <div className={sideBarClass}>
        <ul>
          {this.handleSideBarElement()}
        </ul>
      </div>
    )
  }
}

export default UIsideBar;