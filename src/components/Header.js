import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import img from "../assests/user-profile.png";

const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">#VANLIFE</Link>
      <nav>
        <NavLink 
          to="host"
          className={({isActive}) => isActive ? "active-link" : null}
          >Host</NavLink>
        <NavLink 
          to="about"
          className={({isActive}) => isActive ? "active-link" : null}
          >About</NavLink>
        <NavLink 
          to="vans"
          className={({isActive}) => isActive ? "active-link" : null}
          >Vans</NavLink>
          <Link to="login" className="login-link">
            <img src={img} alt="" className="login-icon"/>
          </Link>
      </nav>
    </header>
  )
}

export default Header;