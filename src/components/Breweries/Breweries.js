import React from 'react'
import './Breweries.css'
import Search from '../Search/Search'
import BreweryCard from '../BreweryCard/BreweryCard'

const Breweries = ({ searchedBreweries, getBreweries }) => {
  const sortedBreweries = searchedBreweries.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })

  const brewCards = sortedBreweries.map(brewery => {
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
      <div className="section-top">
        <p className="number">1</p>
        <Search getBreweries={getBreweries}/>
      </div>
      {brewCards}
    </section>
  )
}

export default Breweries