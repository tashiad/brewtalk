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
      selectedBrewery: [],
      searchValue: '',
      dadJoke: {},
      favorites: [],
      brewError: '',
      jokeError: '',
      brewLoading: false,
      jokeLoading: false
    }
  }

  getBreweries = input => {
    this.resetBrewState()
    this.setState({ searchValue: input, brewLoading: true })

    fetchBreweries(input)
      .then(breweries => this.setState({ searchedBreweries: breweries }))
      .catch(error => this.setState({ brewError: 'Unable to find breweries. Please refresh the page or try again later.' }))
      .finally(() => this.setState({ brewLoading: false }))
  }

  resetBrewState = () => {
    this.setState({
      searchedBreweries: [],
      selectedBrewery: [],
      searchValue: '',
      brewError: '',
      brewLoading: false,
    })
  }

  selectBrewery = id => {
    const { searchedBreweries } = this.state
    const foundBrewery = searchedBreweries.find(brewery => brewery.id === id)

    foundBrewery.selected = true
    this.setState({ selectedBrewery: [foundBrewery] })
  }

  getJoke = () => {
    this.setState({ jokeLoading: true })

    fetchJoke()
      .then(joke => this.setState({ dadJoke: joke }))
      .catch(error => this.setState({ jokeError: 'Unable to find a dad joke. Please refresh the page or try again later.' }))
      .finally(() => this.setState({ jokeLoading: false }))
  }

  toggleSelectJoke = (bool) => {
    const newJoke = this.state.dadJoke

    newJoke.selected = bool
    this.setState({ dadJoke: newJoke })
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
      searchValue,
      dadJoke,
      selectedBrewery,
      favorites,
      brewError,
      jokeError,
      brewLoading,
      jokeLoading
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
                searchedBreweries={searchedBreweries}
                selectedBrewery={selectedBrewery}
                searchValue={searchValue}
                brewError={brewError}
                brewLoading={brewLoading}
                getBreweries={this.getBreweries}
                selectBrewery={this.selectBrewery}
              />
              <Jokes
                dadJoke={dadJoke}
                jokeError={jokeError}
                jokeLoading={jokeLoading}
                getJoke={this.getJoke}
                toggleSelectJoke={this.toggleSelectJoke}
                addToFavorites={this.addToFavorites}
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
