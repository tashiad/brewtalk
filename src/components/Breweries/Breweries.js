import React from 'react'
import PropTypes from 'prop-types'
import './Breweries.css'
import Search from '../Search/Search'
import BreweryCard from '../BreweryCard/BreweryCard'

const Breweries = ({
  searchedBreweries,
  searchedWithSelected,
  getBreweries,
  selectBrewery,
  searchValue,
  brewError
}) => {

  const cardsToShow = searchedWithSelected.length ? searchedWithSelected : searchedBreweries

  const sortedBreweries = cardsToShow.sort((a, b) => {
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
        selectBrewery={selectBrewery}
        selectedBrewery={brewery.selected || false}
        getBreweries={getBreweries}
        searchValue={searchValue}
      />
    )
  })

  return (
    <section>
      <div className="section-top">
        <p className="number">1</p>
        <Search getBreweries={getBreweries}/>
      </div>
      <div className="brewCards-container">
        {brewError && <h2>{brewError}</h2>}
        {searchedBreweries.length > 0 && brewCards}
        {!searchedBreweries.length && searchValue &&
          <p>No breweries match your search.</p>
        }
      </div>
    </section>
  )
}

Breweries.propTypes = {
  searchedBreweries: PropTypes.array,
  searchedWithSelected: PropTypes.array,
  getBreweries: PropTypes.func,
  selectBrewery: PropTypes.func,
  searchValue: PropTypes.string,
  error: PropTypes.string
}

export default Breweries
