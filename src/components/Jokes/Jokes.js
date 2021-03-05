import React from 'react'
import './Jokes.css'
import JokeCard from '../JokeCard/JokeCard'

const Jokes = () => {
  return (
    <section>
      <div className="section-top">
        <p className="number">2</p>
        <label className="step" htmlFor="joke">Select a dad joke:</label>
        <button className="button-top button-secondary" name="joke">Generate a random dad joke</button>
      </div>
      <JokeCard />
    </section>
  )
}

export default Jokes
