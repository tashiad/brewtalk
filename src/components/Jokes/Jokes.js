import React from 'react'
import './Jokes.css'
import JokeCard from '../JokeCard/JokeCard'

const Jokes = () => {
  return (
    <section>
      <h2>Jokes Container!</h2>
      <button>Generate a random dad joke</button>
      <JokeCard />
    </section>
  )
}

export default Jokes
