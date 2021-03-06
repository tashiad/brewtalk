import React from 'react'
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
      return null
    }
  }

  return (
    <section>
      <h2>Favorites Page</h2>
      {checkForFavs()}
    </section>
  )
}

export default Favorites
