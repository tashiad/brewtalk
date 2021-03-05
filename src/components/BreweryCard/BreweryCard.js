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
      <h3>{name}</h3>
      <p>{brewery_type}</p>
      <p>{street}</p>
      <p>{`${city}, ${state}`}</p>
      <p>{phone}</p>
      <a href={website_url} target="_blank" rel="noreferrer">Website</a>
      <p>Last update: {updated_at}</p>
    </article>
  )
}

export default BreweryCard
