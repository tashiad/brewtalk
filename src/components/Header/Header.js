import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header>
      <div className="header-text">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>BrewTalk</h1>
        </Link>
        <h2>Breweries + dad jokes for the introverted.</h2>
      </div>
      <Nav />
    </header>
  )
}

export default Header
