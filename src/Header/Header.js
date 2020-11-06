import React from "react";
import "./Header.css";
import logo from '../Header/logo.png'

const Header = ({ toggleTheme }) => (
  <div className="header">
    <a className="header__logo" href="#">
      PortFolio
      </a>
      
    
    <button className="header__button" onClick={e => toggleTheme()}>
      Toggle theme
    </button>
  </div>
);

export default Header;
