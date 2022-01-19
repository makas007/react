import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";


function Header() {
   return (
    <div className="my-header">
      <nav>
        <NavLink to='/' className="header-link">Main</NavLink> | {' '}
        <NavLink to='/currencies' className="header-link">Currencies</NavLink>
      </nav>
    </div>
  )
}
export default Header;