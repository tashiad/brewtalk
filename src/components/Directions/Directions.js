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
        {!selectedBrewery.selected && <button className="button-top button-primary" name="directions" disabled={true}>Get Directions</button>}
        {selectedBrewery.selected &&
          <a href={`https://www.google.com/maps/search/?api=1&query=${selectedBrewery.name}`} target="_blank" rel="noreferrer">
            <button className="button-top button-primary" name="directions" disabled={false}>Get Directions</button>
          </a>
        }
      </div>
      {checkForSelections()}
    </section>
  )
}

export default Directions
