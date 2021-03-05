import React from 'react'
import './Breweries.css'
import Search from '../Search/Search'
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
      <p className="number">1</p>
      <Search />
      {brewCards}
    </section>
  )
}

export default Breweries
