import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Breweries from '../Breweries/Breweries'
import Jokes from '../Jokes/Jokes'
import Directions from '../Directions/Directions'
import SavedJokes from '../SavedJokes/SavedJokes'
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
      savedJokes: [],
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

  addToSaved = (id) => {
    const foundJoke = this.state.savedJokes.find(joke => joke.id === id)

    if (!foundJoke) {
      const newJoke = this.state.dadJoke

      newJoke.saved = true

      this.setState({ savedJokes: [...this.state.savedJokes, newJoke] })
      this.updateLocalStorage([...this.state.savedJokes, newJoke])
    }
  }

  removeFromSaved = (id) => {
    const { savedJokes } = this.state
    const jokeToRemove = savedJokes.find(joke => joke.id === id)
    const filteredSaved = savedJokes.filter(joke => joke.id !== jokeToRemove.id)

    jokeToRemove.saved = false

    this.setState({ savedJokes: filteredSaved })
    this.updateLocalStorage(filteredSaved)
  }

  updateLocalStorage = (saved) => {
    const savedData = JSON.stringify(saved)
    localStorage.setItem('savedJokes', savedData)
  }

  retrieveLocalStorage = () => {
    const saved = JSON.parse(localStorage.getItem('savedJokes'))

    if (saved && saved.length > 0) {
      this.setState({ savedJokes: saved })
    }
  }

  render() {
    const {
      searchedBreweries,
      searchValue,
      dadJoke,
      selectedBrewery,
      savedJokes,
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
            <main className="steps-container">
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
                addToSaved={this.addToSaved}
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
          path="/saved"
          render={() =>
            <SavedJokes
              savedJokes={savedJokes}
              removeFromSaved={this.removeFromSaved}
            />
          }
        />

      </>
    )
  }
}

export default App
