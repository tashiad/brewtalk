import React from 'react'
import './Jokes.css'
import JokeCard from '../JokeCard/JokeCard'

const Jokes = ({ getJoke, dadJoke }) => {
  const joke = <JokeCard id={dadJoke.id} joke={dadJoke.joke} />

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
      {joke}
    </section>
  )
}

export default Jokes
