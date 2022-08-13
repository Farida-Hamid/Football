import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import mainLogo from "./image/home.png";
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import './style/header.css';

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
        <img  src={mainLogo} style={ { width: '40px', height: '30px' } } alt="footbal logo"/>
        <h1>Football Leagues</h1>
        <img  src={mainLogo} style={ { width: '40px', height: '30px' } } alt="footbal logo"/>
      </div>
      <MicIcon />
      <SettingsIcon />
    </nav>
  );
}

export default Header;