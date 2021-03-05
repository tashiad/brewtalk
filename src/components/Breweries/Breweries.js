import React from 'react'
import './Breweries.css'
import BreweryCard from '../BreweryCard/BreweryCard'

const Breweries = ({ breweryData }) => {
  const brewCards = breweryData.map(brewery => {
    return (
      <BreweryCard
        id={brewery.id}
        key={brewery.id}
        name={brewery.name}
        brewery_type={brewery.brewery_type}
        street={brewery.street}
        city={brewery.city}
        state={brewery.state}
        phone={brewery.phone}
        website_url={brewery.website_url}
        updated_at={brewery.updated_at}
      />
    )
  })

  return (
    <section>
      <h2>Breweries Container!</h2>
      {brewCards}
    </section>
  )
}

export default Breweries
