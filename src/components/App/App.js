import React, { Component } from 'react'
import './App.css'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import Breweries from '../Breweries/Breweries'
import Jokes from '../Jokes/Jokes'
import Directions from '../Directions/Directions'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchedBreweries: [],
      selectedBrewery: {}
    }
  }

  getBreweries = input => {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
      .then(response => response.json())
      .then(breweries => this.setState({ searchedBreweries: breweries }))
      .catch(error => console.log(error))
  }

  selectBrewery = id => {
    console.log("hi", id)

    const foundBrewery = this.state.searchedBreweries.filter(brewery => {
      return brewery.id === id
    })

    this.setState({ selectedBrewery: foundBrewery })
  }

  render() {
    return (
      <>
        <Nav />
        <Header />
        <hr/>
        <main>
          <Breweries
            getBreweries={this.getBreweries}
            searchedBreweries={this.state.searchedBreweries}
            selectBrewery={this.selectBrewery}
          />
          <Jokes />
          <Directions />
        </main>
      </>
    )
  }
}

export default App
