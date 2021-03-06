import React from 'react'
import './FavCard.css'

const FavCard = ({ id, joke, removeFromFavorites }) => {

  return (
    <article>
    <div className="jokeTop">
      <h4>Dad Joke</h4>
      <button
        className="cardButton save button-secondary"
        onClick={() => removeFromFavorites(id)}
      >
      Remove
      </button>
    </div>
    <p className="cardContents">{joke}</p>
    </article>
  )
}

export default FavCard
