import React from 'react'
import './Directions.css'

const Directions = ({ selectedBrewery, dadJoke }) => {
  const checkForSelections = () => {
    if (selectedBrewery.selected && dadJoke.selected) {
      return 'Cheers! You\'re officially ready to be social.'
    } else {
      return null
    }
  }

  return (
    <section>
      <div className="section-top">
        <p className="number">3</p>
        <label className="step" htmlFor="directions">Head out:</label>
        <button className="button-top button-primary" name="directions">Get Directions</button>
      </div>
      {checkForSelections()}
    </section>
  )
}

export default Directions
