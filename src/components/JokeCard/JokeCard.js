import React from 'react'
import './JokeCard.css'

const JokeCard = () => {

  return (
    <article className="jokeCard">
      <button>Add to Favorites</button>
      <button className="select">Select</button>
      <h4>Dad Joke:</h4>
      <p>My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.</p>
    </article>
  )
}

export default JokeCard
