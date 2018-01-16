import React from 'react'

 function UIsideBarListItemSubMenu (props) {
  const { pIndex, subMenu, onClickEffect, changingClickEffect } = props
  const tmp = Object.keys(subMenu).map((pid, index) => {
    return (
      <li
        className={onClickEffect.text === subMenu[index] && onClickEffect.index === pIndex ? 'active' : ''}
        key={index}
        onClick={() =>{
           changingClickEffect(pIndex, subMenu[index])}}>
        <span> {subMenu[index]} </span>
      </li>
    )
  })

  return tmp;
}

export default UIsideBarListItemSubMenu