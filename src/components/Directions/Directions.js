import React from 'react'
import PropTypes from 'prop-types'
import './Directions.css'

const Directions = ({ selectedBrewery, dadJoke }) => {
  return (
    <section className="steps-section">
      <div className="section-top">
        <h2 className="number">3</h2>
        <h3>Head out:</h3>
        {selectedBrewery.length > 0 ?
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${selectedBrewery[0].name}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="button-top button-primary" name="directions">Get Directions</button>
          </a>
          :
          <button className="button-top disabled" name="directions">Get Directions</button>
        }
      </div>
      {!selectedBrewery.length || !dadJoke.saved ?
        <div className="placeholder">👍</div> : null
      }
      {selectedBrewery.length > 0 && dadJoke.saved &&
        <p>🎉 Cheers! You're officially ready to be social.</p>
      }
    </section>
  )
}

Directions.propTypes = {
  selectedBrewery: PropTypes.array,
  dadJoke: PropTypes.object
}

export default Directions
