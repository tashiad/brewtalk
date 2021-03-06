import React from 'react'
import PropTypes from 'prop-types'
import './SavedCard.css'

const SavedCard = ({ id, joke, removeFromSaved }) => {
  return (
    <article className="saved-joke">
      <div className="jokeTop">
        <h3 className="saved-h3">Dad Joke</h3>
        <button
          className="button-secondary"
          name="remove"
          onClick={() => removeFromSaved(id)}
        >
        Remove
        </button>
      </div>
      <p className="card-contents">{joke}</p>
    </article>
  )
}

SavedCard.propTypes = {
  id: PropTypes.string,
  joke: PropTypes.string,
  removeFromSaved: PropTypes.func
}

export default SavedCard
