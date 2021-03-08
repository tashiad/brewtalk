import React from 'react'
import PropTypes from 'prop-types'
import './SavedCard.css'

const SavedCard = ({ id, joke, removeFromSaved }) => {

  return (
    <article className="saved-joke">
      <div className="jokeTop">
        <h4>Dad Joke</h4>
        <button
          className="cardButton save button-secondary"
          name="remove"
          onClick={() => removeFromSaved(id)}
        >
        Remove
        </button>
      </div>
      <p className="cardContents">{joke}</p>
    </article>
  )
}

SavedCard.propTypes = {
  id: PropTypes.string,
  joke: PropTypes.string,
  removeFromSaved: PropTypes.func
}

export default SavedCard
