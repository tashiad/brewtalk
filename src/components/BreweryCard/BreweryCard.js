import React from 'react'
import './BreweryCard.css'

const BreweryCard = ({
  id,
  name,
  brewery_type,
  street,
  city,
  state,
  phone,
  website_url,
  updated_at
}) => {

  return (
    <article className="breweryCard" id={id}>
      <button className="cardButton select brewButton button-primary">Select</button>
      <div className="cardContents">
        <h3>{name}</h3>
        <p><span className="typeTag">{brewery_type}</span></p>
        <p>{`${street}, ${city}, ${state}`}</p>
        <p>{phone}</p>
        <a href={website_url} target="_blank" rel="noreferrer">Website</a>
        <p>Last update: {updated_at}</p>
      </div>
    </article>
  )
}

export default BreweryCard
