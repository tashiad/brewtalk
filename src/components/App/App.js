import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import Breweries from '../Breweries/Breweries'
import Jokes from '../Jokes/Jokes'
import Directions from '../Directions/Directions'
import Favorites from '../Favorites/Favorites'
import { fetchBreweries, fetchJoke } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchedBreweries: [],
      searchedWithSelected: [],
      selectedBrewery: {},
      searchValue: '',
      dadJoke: {},
      favorites: [],
      brewError: '',
      jokeError: '',
    }
  }

  getBreweries = input => {
    this.setState({
      searchedBreweries: [],
      searchedWithSelected: [],
      selectedBrewery: {},
      searchValue: input
    })

    fetchBreweries(input)
      .then(breweries => this.setState({ searchedBreweries: breweries }))
      .catch(error => this.setState({ brewError: 'Unable to find breweries. Please refresh the page or try again later.' }))
  }

  selectBrewery = id => {
    let i

    const foundBrewery = this.state.searchedBreweries.find((brewery, index) => {
      i = index
      return brewery.id === id
    })

    foundBrewery.selected = true

    const newArr = this.state.searchedBreweries.splice(i, 1, foundBrewery)
    // splice isn't actually working--REFACTOR

    this.setState({
      ...this.state,
      searchedWithSelected: newArr,
      selectedBrewery: foundBrewery
    })
  }

  getJoke = () => {
    fetchJoke()
      .then(joke => this.setState({ dadJoke: joke }))
      .catch(error => this.setState({ jokeError: 'Unable to find a dad joke. Please refresh the page or try again later.' }))
  }

  selectJoke = () => { // REFACTOR WITH UNSELECTJOKE
    const newJoke = this.state.dadJoke
    newJoke.selected = true

    this.setState({
      ...this.state,
      dadJoke: newJoke
    })
  }

  unSelectJoke = () => { // REFACTOR
    const newJoke = this.state.dadJoke
    newJoke.selected = false

    this.setState({
      ...this.state,
      dadJoke: newJoke
    })
  }

  addToFavorites = (id) => {
    const foundFav = this.state.favorites.find(fav => fav.id === id)

    if (!foundFav) {
      const newJoke = this.state.dadJoke
      newJoke.saved = true

      this.setState({
        ...this.state,
        favorites: [...this.state.favorites, this.state.dadJoke]
      })
    }
  }

  removeFromFavorites = (id) => {
    let i

    this.state.favorites.find((fav, index) => {
      i = index
      return fav.id === id
    })

    const newJoke = this.state.favorites[i]
    newJoke.saved = false

    const filteredFavs = this.state.favorites.filter(joke => joke.id !== id)

    this.setState({
      ...this.state,
      favorites: filteredFavs
    })
  }

  render() {
    const {
      searchedBreweries,
      searchedWithSelected,
      searchValue,
      dadJoke,
      selectedBrewery,
      favorites,
      brewError,
      jokeError
    } = this.state

    return (
      <>
        <Nav />
        <Header />
        <hr/>

        <Route
          exact path="/"
          render={() =>
            <main>
              <Breweries
                getBreweries={this.getBreweries}
                searchedBreweries={searchedBreweries}
                selectBrewery={this.selectBrewery}
                searchedWithSelected={searchedWithSelected}
                searchValue={searchValue}
                brewError={brewError}
              />
              <Jokes
                getJoke={this.getJoke}
                dadJoke={dadJoke}
                selectJoke={this.selectJoke}
                unSelectJoke={this.unSelectJoke}
                addToFavorites={this.addToFavorites}
                jokeError={jokeError}
              />
              <Directions
                selectedBrewery={selectedBrewery}
                dadJoke={dadJoke}
              />
            </main>
          }
        />

        <Route
          path="/favorites"
          render={() =>
            <Favorites
              favorites={favorites}
              removeFromFavorites={this.removeFromFavorites}
            />
          }
        />

      </>
    )
  }
}

export default App
