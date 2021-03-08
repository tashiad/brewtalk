import React from 'react'
import PropTypes from 'prop-types'
import './JokeCard.css'

const JokeCard = ({ id, joke, addToSaved, saved }) => {
  return (
    <article className={saved ? "selectedCard" : null}>
      <div className="jokeTop">
        <h4>Dad Joke</h4>
        <div>
          {!saved ?
            <button
              className="button-primary button-card"
              name="saveJoke"
              onClick={() => addToSaved(id)}
            >
            Save
            </button>
            :
            <button
              className="button-primary button-card disabled"
              name="saveJoke"
            >
            Saved
            </button>
          }
        </div>
      </div>
      <p className="cardContents">{joke}</p>
    </article>
  )
}

JokeCard.propTypes = {
  id: PropTypes.string,
  joke: PropTypes.string,
  addToSaved: PropTypes.func,
  saved: PropTypes.bool
}

export default JokeCard
