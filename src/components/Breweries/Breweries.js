import React from 'react'
import PropTypes from 'prop-types'
import './Breweries.css'
import Search from '../Search/Search'
import BreweryCard from '../BreweryCard/BreweryCard'

const Breweries = ({
  searchedBreweries,
  selectedBrewery,
  searchValue,
  brewError,
  brewLoading,
  getBreweries,
  selectBrewery
}) => {

  const cardsToShow = selectedBrewery.length ? selectedBrewery : searchedBreweries

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
        selectedBrewery={brewery.selected || false}
        selectBrewery={selectBrewery}
        getBreweries={getBreweries}
        searchValue={searchValue}
      />
    )
  })

  return (
    <section className="steps-section">
      <div className="section-top">
        <h2 className="number">1</h2>
        <h3>Select a brewery:</h3>
        <Search getBreweries={getBreweries}/>
      </div>
      {brewError && <h2>{brewError}</h2>}
      {brewLoading && <h3 className="loading">Loading...</h3>}
      {!searchedBreweries.length && searchValue && !brewError && !brewLoading &&
        <p>No breweries match your search.</p>
      }
      {!searchedBreweries.length && <div className="placeholder">🍻</div>}
      {searchedBreweries.length > 0 &&
        <div className="brewCards">
          {brewCards}
        </div>
      }
    </section>
  )
}

Breweries.propTypes = {
  searchedBreweries: PropTypes.array,
  selectedBrewery: PropTypes.array,
  searchValue: PropTypes.string,
  brewError: PropTypes.string,
  brewLoading: PropTypes.bool,
  getBreweries: PropTypes.func,
  selectBrewery: PropTypes.func
}

export default Breweries
