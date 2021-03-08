import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink
          exact to="/"
          style={{ textDecoration: 'none' }}
          activeStyle={{ textDecoration: 'underline' }}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/favorites"
          style={{ textDecoration: 'none' }}
          activeStyle={{ textDecoration: 'underline' }}
        >
          <li>Saved Jokes</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav
