import React from 'react'

import UIicon from './UIicon.jsx'
import UIsideBarListItemSubMenu from './UIsideBarListItemSubMenu.jsx'
import UIrightChevron from './UIrightChevron.jsx'

function UIsideBarListItem(props) {
  const { text, pid, sideBarItem, index, changingClickEffect, changingSubMenu, displaySub, position } = props
  const { subMenu, name } = sideBarItem[pid]
  const active = index === displaySub ? 'active' : ''
 
  return (
    <li
      key={index}>
      <div className='li-title'
          onClick={() => {
            if (subMenu.length === 0) {
              changingClickEffect(index, '_alone')
            }
            else {
              changingSubMenu(index);
            }
          }}>
          <div className='d-title__text-logo'>
            <UIicon pid={props.pid} />
            <span className={'nameOfMenu ' + active}>
              {name}
            </span>
          </div>
          <UIrightChevron active={!!active} hasSub={subMenu.length != 0} position={props.position} />
      </div>
      <div className={'marginSubMenu ' + active}>
        <ul className={position}>
          <UIsideBarListItemSubMenu {...props} subMenu={subMenu} pIndex={index} />
        </ul>
      </div>
    </li>
  )
}

export default UIsideBarListItem;