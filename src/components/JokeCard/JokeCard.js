import React from 'react'
import PropTypes from 'prop-types'
import './JokeCard.css'

const JokeCard = ({
  id,
  joke,
  selectedJoke,
  selectJoke,
  unSelectJoke,
  addToFavorites
}) => {

  return (
    <article className={selectedJoke ? 'selectedJoke' : null}>
      <div className="jokeTop">
        <h4>Dad Joke</h4>
        <div className="jokeButtons">
          <button
            className="cardButton save button-secondary"
            onClick={() => addToFavorites(id)}
          >
          Save
          </button>
          {!selectedJoke &&
            <button
              className="cardButton select button-primary"
              onClick={() => selectJoke()}
            >
            Select
            </button>
          }
          {selectedJoke &&
            <button
              className="cardButton select button-primary"
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
