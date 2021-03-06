import React from 'react'
import './Jokes.css'
import JokeCard from '../JokeCard/JokeCard'

const Jokes = ({
  getJoke,
  dadJoke,
  selectJoke,
  unSelectJoke,
  addToFavorites
}) => {

  const checkForJoke = () => {
    if (Object.keys(dadJoke).length === 0) {
      return null
    } else {
      return (
        <JokeCard
          id={dadJoke.id}
          joke={dadJoke.joke}
          selectedJoke={dadJoke.selected || false}
          selectJoke={selectJoke}
          unSelectJoke={unSelectJoke}
          addToFavorites={addToFavorites}
        />
      )
    }
  }

  return (
    <section>
      <div className="section-top">
        <p className="number">2</p>
        <label className="step" htmlFor="joke">Select a dad joke:</label>
        <button
          className="button-top button-secondary"
          name="joke"
          onClick={() => getJoke()}
        >
        Generate a random dad joke
        </button>
      </div>
      {checkForJoke()}
    </section>
  )
}

export default Jokes
