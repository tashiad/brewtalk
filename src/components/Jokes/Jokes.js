import React from 'react'
import PropTypes from 'prop-types'
import './Jokes.css'
import JokeCard from '../JokeCard/JokeCard'

const Jokes = ({ getJoke, dadJoke, addToSaved, jokeError, jokeLoading }) => {

  const checkForJoke = () => {
    if (Object.keys(dadJoke).length === 0) {
      return <div className="placeholder">🧔</div>
    } else {
      return (
        <JokeCard
          id={dadJoke.id}
          joke={dadJoke.joke}
          addToSaved={addToSaved}
          saved={dadJoke.saved || false}
        />
      )
    }
  }

  return (
    <section className="steps-section">
      <div className="section-top">
        <h2 className="number">2</h2>
        <h3>Find a dad joke:</h3>
        <button
          className="button-top button-secondary"
          name="getJoke"
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
  addToSaved: PropTypes.func,
  jokeError: PropTypes.string,
  jokeLoading: PropTypes.bool
}

export default Jokes
