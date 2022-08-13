import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
// import './header.css';

function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  const back = '<';

  return (
    <nav>
      <div className='links'>
        <NavLink
          to="/"
          className={splitLocation[1] === '' ? 'active' : 'inactive'}
          >
          {back}
        </NavLink>
      </div>
      <div className='home'>
        <h1>Football Leagues</h1>
      </div>
    </nav>
  );
}

export default Header;