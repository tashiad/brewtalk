import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li>Home</li>
        </Link>
        <Link to="/favorites" style={{ textDecoration: 'none' }}>
          <li>Favorites</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
