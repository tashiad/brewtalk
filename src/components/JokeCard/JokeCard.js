import React from 'react'
import './JokeCard.css'

const JokeCard = () => {

  return (
    <article className="jokeCard">
      <div className="jokeTop">
        <h4>Dad Joke</h4>
        <div className="jokeButtons">
          <button className="cardButton save button-secondary">Save</button>
          <button className="cardButton select button-primary">Select</button>
        </div>
      </div>
      <p className="cardContents">My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.</p>
    </article>
  )
}

export default JokeCard
