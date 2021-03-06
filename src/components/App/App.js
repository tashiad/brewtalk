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
      searchedWithSelected: [],
      selectedBrewery: {},
      searchValue: '',
      dadJoke: {}
    }
  }

  getBreweries = input => {
    this.setState({
      searchedBreweries: [],
      searchedWithSelected: [],
      selectedBrewery: {},
      searchValue: input
    })

    fetch(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
      .then(response => response.json())
      .then(breweries => this.setState({ searchedBreweries: breweries }))
      .catch(error => console.log(error))
  }

  selectBrewery = id => {
    let i

    const foundBrewery = this.state.searchedBreweries.find((brewery, index) => {
      i = index
      return brewery.id === id
    })

    foundBrewery.selected = true

    const newArr = this.state.searchedBreweries.splice(i, 1, foundBrewery)

    this.setState({
      ...this.state,
      searchedWithSelected: newArr,
      selectedBrewery: foundBrewery
    })
  }

  getJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "BrewTalk (https://github.com/tashiad/brewtalk)"
      }
    })
    .then(response => response.json())
    .then(joke => this.setState({ dadJoke: joke }))
    .catch(error => console.log(error))
  }

  selectJoke = () => {
    const newJoke = this.state.dadJoke
    newJoke.selected = true

    this.setState({
      ...this.state,
      dadJoke: newJoke
    })
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
            searchedWithSelected={this.state.searchedWithSelected}
            searchValue={this.state.searchValue}
          />
          <Jokes
            getJoke={this.getJoke}
            dadJoke={this.state.dadJoke}
            selectJoke={this.selectJoke}
          />
          <Directions />
        </main>
      </>
    )
  }
}

export default App
