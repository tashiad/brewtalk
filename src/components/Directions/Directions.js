import React from 'react'
import './Directions.css'

const Directions = () => {
  return (
    <section>
      <p className="number">3</p>
      <label className="step" htmlFor="directions">Head out:</label>
      <button name="directions">Get Directions</button>
      <p className="cheers-message">Cheers! You're officially ready to be social.</p>
    </section>
  )
}

export default Directions
