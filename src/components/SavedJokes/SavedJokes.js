import React from 'react'
import PropTypes from 'prop-types'
import './SavedJokes.css'
import SavedCard from '../SavedCard/SavedCard'

const SavedJokes = ({ savedJokes, removeFromSaved }) => {
  const checkForSaved = () => {
    if (savedJokes.length) {
      return savedJokes.map(fav => {
        return (
          <SavedCard
            key={fav.id}
            id={fav.id}
            joke={fav.joke}
            removeFromSaved={removeFromSaved}
          />
        )
      })
    } else {
      return (
        <p>No saved jokes yet. Go back to add some!</p>
      )
    }
  }

  return (
    <main>
      <h2>Your Saved Dad Jokes</h2>
      <section className="saved-section">
        {checkForSaved()}
      </section>
    </main>
  )
}

SavedJokes.propTypes = {
  savedJokes: PropTypes.array,
  removeFromSaved: PropTypes.func
}

export default SavedJokes
