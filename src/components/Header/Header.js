import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>BrewTalk</h1>
      </Link>
      <h2>Breweries + dad jokes for the introverted.</h2>
    </header>
  )
}

export default Header
