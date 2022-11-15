import React from 'react';
import AuthenticationButton from './Authentication-button'
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from "react-router-dom";

const Nav = () => {
  const { user  } = useAuth0();
  return (
<div className="nav">
  <div className="nav-header">
    <div className="nav-title">
      <Link to="/">Seeds By Time</Link>
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

  <div className="nav-links">
    <a href="//github.io/jo_geek" target="_blank">About</a>
    <AuthenticationButton />
    {user ? <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">My Plants</a> : null}
  </div>
  </div>
  )
}

export default Nav;