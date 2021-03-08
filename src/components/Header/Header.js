import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header>
      <div className="header-text">
        <h1>BrewTalk</h1>
        <h2>Breweries + dad jokes for the introverted.</h2>
      </div>
      <Nav />
    </header>
  )
}

export default Header
