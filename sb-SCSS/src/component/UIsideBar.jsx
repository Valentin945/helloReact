import React, { Component } from 'react'

import {
  Icon
} from 'semantic-ui-react'

import UItoolstip from './UItoolstip.jsx'


class UIsideBar extends Component {
  constructor(props) {
    super(props)
    this.handleSideBarElement = this.handleSideBarElement.bind(this)
    this.handleSideBarSubMenu = this.handleSideBarSubMenu.bind(this)
    this.getIconItem = this.getIconItem.bind(this)

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

  getIconItem(iconName) {
    const { position } = this.props
    const isGroup = /^[a-z ]+\|[a-z ]+$/
    if (isGroup.test(iconName)) {
      /^([a-z ]+)\|([a-z ]+)$/.exec(iconName)
      return (
        <Icon.Group className='iconsGroup'
>
          <Icon name={RegExp.$1} size='large' />
          <Icon corner color='orange' name={RegExp.$2}
             />
        </Icon.Group>
      )
    }
    else {
      return (
        <Icon name={iconName} size='large' />
      )
    }
  }

  handleSideBarSubMenu(subMenu, pIndex) {
    const { onClickEffect } = this.state
    const { position, color } = this.props;
 
    const tmp = Object.keys(subMenu).map((pid, index) => {
      return (
        <li
          className={onClickEffect.text === subMenu[index] && onClickEffect.index === pIndex ? 'active' : ''}
          key={index}
          onClick={() => this.setState({ onClickEffect: { index: pIndex, text: subMenu[index] } })}>
          <span> {subMenu[index]} </span>
        </li>
      )
    })

    return tmp;
  }


  handleSideBarElement() {
    const { sideBarItem, position, open } = this.props;
    const { displaySub } = this.state;
    const subMenuBorder = this.props.subMenuBorder || 'blue'

    const tmp = Object.keys(sideBarItem).map((pid, index) => {
      const objTmp = sideBarItem[pid]
      const subMenu = this.handleSideBarSubMenu(objTmp.subMenu, index)
      const iconItem = this.getIconItem(pid)
      const active = this.props.open && index === displaySub? 'active': ''      

      return (
        <li
          key={index}>
          <div className='liTitle'>
            <div
              className='liDefinition'
              onClick={() => {
                if (subMenu.length === 0) {
                  this.setState((prevState) => {
                  prevState.onClickEffect = { index: index, text: '__alone' },
                    prevState.displaySub = index
                    return prevState
                  })
                  open === false ? this.props.openSide() : {};
                }
                else {
                  open === false ? this.props.openSide() : {};
                  this.setState({ displaySub: displaySub === index ? -1 : index })
                }
              }}>
              {iconItem}
              <UItoolstip toolstipPosition={position} value={objTmp['name']} />
              <span className={'nameOfMenu ' + active}>
                {objTmp['name']}
              </span>
            </div>
            <div className='closeSideBarIcon'
                 onClick={this.props.openSide}>
              <Icon name='minus' size='small' />
            </div>
          </div>
          <div className={'marginSubMenu ' + active}>
            <ul>
              {subMenu}
            </ul>
          </div>
        </li>
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