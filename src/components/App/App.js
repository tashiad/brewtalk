import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <Nav />
        <Header />
      </>
    )
  }
}

export default App
