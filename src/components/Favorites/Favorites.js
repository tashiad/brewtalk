import React from 'react'
import PropTypes from 'prop-types'
import './Favorites.css'
import FavCard from '../FavCard/FavCard'

const Favorites = ({ favorites, removeFromFavorites }) => {
  const checkForFavs = () => {
    if (favorites.length) {
      return favorites.map(fav => {
        return (
          <FavCard
            key={fav.id}
            id={fav.id}
            joke={fav.joke}
            removeFromFavorites={removeFromFavorites}
          />
        )
      })
    } else {
      return (
        <p>No favorites yet. Go back to add some!</p>
      )
    }
  }

  return (
    <section>
      <h2>Your Saved Dad Jokes</h2>
      {checkForFavs()}
    </section>
  )
}

Favorites.propTypes = {
  favorites: PropTypes.array,
  removeFromFavorites: PropTypes.func
}

export default Favorites
