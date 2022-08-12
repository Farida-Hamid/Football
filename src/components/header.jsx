import React from 'react';
// import { NavLink, useLocation } from "react-router-dom";
// import mainLogo from "../image/home.png";
// import './header.css';

function Header() {
  // const location = useLocation();
  // const { pathname } = location;
  // const splitLocation = pathname.split('/');

  return (
    <nav>
      <div className='home'>
        {/* <img  src={mainLogo} style={ { width: '50px' } } alt="home"/> */}
        <h1>Football Leagues</h1>
      </div>
      <div className='links'>
        {/* <NavLink
          to="/"
          className={splitLocation[1] === '' ? 'active' : 'inactive'}
          >
          Rockets
        </NavLink> */}
        links
      </div>
    </nav>
  );
}

export default Header;