import React from 'react'
import PropTypes from 'prop-types'
import './JokeCard.css'

const JokeCard = ({
  id,
  joke,
  selectedJoke,
  selectJoke,
  unSelectJoke,
  addToFavorites,
  saved
}) => {

  return (
    <article className={selectedJoke ? 'selectedJoke' : null}>
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
              onClick={() => selectJoke()}
            >
            Select
            </button>
          }
          {selectedJoke &&
            <button
              className="cardButton select button-primary"
              name="selectJoke"
              onClick={() => unSelectJoke()}
            >
            Un-Select
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
  selectJoke: PropTypes.func,
  unSelectJoke: PropTypes.func,
  addToFavorites: PropTypes.func
}

export default JokeCard
