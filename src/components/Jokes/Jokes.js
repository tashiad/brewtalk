import React from 'react'
import PropTypes from 'prop-types'
import './Jokes.css'
import JokeCard from '../JokeCard/JokeCard'

const Jokes = ({ getJoke, dadJoke, addToFavorites, jokeError, jokeLoading }) => {

  const checkForJoke = () => {
    if (Object.keys(dadJoke).length === 0) {
      return <div className="placeholder">🧔</div>
    } else {
      return (
        <JokeCard
          id={dadJoke.id}
          joke={dadJoke.joke}
          addToFavorites={addToFavorites}
          saved={dadJoke.saved || false}
        />
      )
    }
  }

  return (
    <section>
      <div className="section-top">
        <p className="number">2</p>
        <label className="step" htmlFor="joke">Select a dad joke:</label>
        <button
          className="button-top button-secondary"
          name="joke"
          onClick={() => getJoke()}
        >
        Generate dad joke
        </button>
      </div>
      {jokeError && <h2>{jokeError}</h2>}
      {jokeLoading && <h3 className="loading">Loading...</h3>}
      {checkForJoke()}
    </section>
  )
}

Jokes.propTypes = {
  getJoke: PropTypes.func,
  dadJoke: PropTypes.object,
  addToFavorites: PropTypes.func,
  jokeError: PropTypes.string,
  jokeLoading: PropTypes.bool
}

export default Jokes
