import React, { Component } from 'react'
import './App.css'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import Breweries from '../Breweries/Breweries'
import Jokes from '../Jokes/Jokes'
import Directions from '../Directions/Directions'
import breweryData from '../../data/mock-brewery-data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      breweryData: breweryData
    }
  }

  render() {
    return (
      <>
        <Nav />
        <Header />
        <hr/>
        <main>
          <Breweries breweryData={this.state.breweryData}/>
          <Jokes />
          <Directions />
        </main>
      </>
    )
  }
}

export default App
