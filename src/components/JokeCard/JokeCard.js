import React from 'react'
import PropTypes from 'prop-types'
import './JokeCard.css'

const JokeCard = ({
  id,
  joke,
  selectedJoke,
  toggleSelectJoke,
  addToFavorites,
  saved
}) => {

  return (
    <article className={selectedJoke ? 'selectedCard' : null}>
      <div className="jokeTop">
        <h4>Dad Joke</h4>
        <div className="jokeButtons">
          {!saved &&
            <button
              className="cardButton save button-secondary"
              name="saveJoke"
              onClick={() => addToFavorites(id)}
            >
            Save
            </button>
          }
          {saved &&
            <button
              className="cardButton save button-secondary disabled"
              name="saveJoke"
            >
            Saved
            </button>
          }
          {!selectedJoke &&
            <button
              className="cardButton select button-primary"
              name="selectJoke"
              onClick={() => toggleSelectJoke(true)}
            >
            Select
            </button>
          }
          {selectedJoke &&
            <button
              className="cardButton select button-primary"
              name="selectJoke"
              onClick={() => toggleSelectJoke(false)}
            >
            Undo
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
  selectedJoke: PropTypes.bool,
  toggleSelectJoke: PropTypes.func,
  addToFavorites: PropTypes.func
}

export default JokeCard
