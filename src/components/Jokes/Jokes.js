import React from 'react'
import './Jokes.css'
import JokeCard from '../JokeCard/JokeCard'

const Jokes = () => {
  return (
    <section>
      <p className="number">2</p>
      <label className="step" htmlFor="joke">Select a dad joke:</label>
      <button name="joke">Generate a random dad joke</button>
      <JokeCard />
    </section>
  )
}

export default Jokes
