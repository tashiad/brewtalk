import React from 'react'
import './Directions.css'

const Directions = () => {
  return (
    <section>
      <div className="section-top">
        <p className="number">3</p>
        <label className="step" htmlFor="directions">Head out:</label>
        <button className="button-top button-primary" name="directions">Get Directions</button>
      </div>
      <p className="cheers-message">Cheers! You're officially ready to be social.</p>
    </section>
  )
}

export default Directions
