import React from 'react'
  import {NavLink} from 'react-router-dom'


class Header extends React.Component
{

  render()
  {
    return (
      <header>
        <div id="titre_principal">
          <div id="logo">
            <img src="/home/valentin/React/products-list/client/app/header/img/wal.jpg" />
          </div>
          <div id="selectoi">
            <nav>
                <NavLink to="/" activeClassName="active"> est </NavLink>
            </nav>
          </div>
        </div>
      </header>
    );
  }


}

export default Header;
