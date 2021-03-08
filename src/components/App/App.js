import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Breweries from '../Breweries/Breweries'
import Jokes from '../Jokes/Jokes'
import Directions from '../Directions/Directions'
import Favorites from '../Favorites/Favorites'
import About from '../About/About'
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

  componentDidMount() {
    this.retrieveLocalStorage()
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
    const foundBrewery = this.state.searchedBreweries.find(brewery => brewery.id === id)

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

  addToFavorites = (id) => {
    const foundFav = this.state.favorites.find(fav => fav.id === id)

    if (!foundFav) {
      const newJoke = this.state.dadJoke

      newJoke.saved = true

      this.setState({ favorites: [...this.state.favorites, newJoke] })
      this.updateLocalStorage([...this.state.favorites, newJoke])
    }
  }

  removeFromFavorites = (id) => {
    const { favorites } = this.state
    const jokeToRemove = favorites.find(fav => fav.id === id)
    const filteredFavs = favorites.filter(joke => joke.id !== jokeToRemove.id)

    jokeToRemove.saved = false
    this.setState({ favorites: filteredFavs })
    this.updateLocalStorage(filteredFavs)
  }

  updateLocalStorage = (favorites) => {
    const favData = JSON.stringify(favorites)
    localStorage.setItem('savedJokes', favData)
  }

  retrieveLocalStorage = () => {
    const saved = JSON.parse(localStorage.getItem('savedJokes'))

    if (saved && saved.length > 0) {
      this.setState({ favorites: saved })
    }
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
        <Header />

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
                addToFavorites={this.addToFavorites}
              />
              <Directions
                selectedBrewery={selectedBrewery}
                dadJoke={dadJoke}
              />
            </main>
          }
        />

        <Route path="/about" render={() => <About/>} />

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
