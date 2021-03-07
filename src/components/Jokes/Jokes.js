import React from 'react'
import PropTypes from 'prop-types'
import './Jokes.css'
import JokeCard from '../JokeCard/JokeCard'

const Jokes = ({
  getJoke,
  dadJoke,
  toggleSelectJoke,
  addToFavorites,
  jokeError,
  jokeLoading
}) => {

  const checkForJoke = () => {
    if (Object.keys(dadJoke).length === 0) {
      return null
    } else {
      return (
        <JokeCard
          id={dadJoke.id}
          joke={dadJoke.joke}
          selectedJoke={dadJoke.selected || false}
          toggleSelectJoke={toggleSelectJoke}
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
        Generate a random dad joke
        </button>
      </div>
      {jokeError && <h2>{jokeError}</h2>}
      {jokeLoading && <h2>Loading...</h2>}
      {checkForJoke()}
    </section>
  )
}

Jokes.propTypes = {
  getJoke: PropTypes.func,
  dadJoke: PropTypes.object,
  toggleSelectJoke: PropTypes.func,
  addToFavorites: PropTypes.func,
  jokeError: PropTypes.string,
  jokeLoading: PropTypes.bool
}

export default Jokes
