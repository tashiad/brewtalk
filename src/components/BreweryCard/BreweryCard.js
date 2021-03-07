import React from 'react'
import PropTypes from 'prop-types'
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
  updated_at,
  selectBrewery,
  selectedBrewery,
  getBreweries,
  searchValue
}) => {

  const formatPhone = (number => {
    const cleaned = ('' + number).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
  })

  const formatTimestamp = (stamp => {
    const date = new Date(stamp)
    const fullMonth = date.toLocaleString('default', { month: 'long' })
    const formattedDate = `${fullMonth} ${date.getDay()}, ${date.getFullYear()}`
    return formattedDate
  })

  return (
    <article className={selectedBrewery ? 'selectedCard' : null}>
      { !selectedBrewery &&
        <button
          className="cardButton select brewButton button-primary"
          onClick={() => selectBrewery(id)}
        >
        Select
        </button>
      }
      { selectedBrewery &&
        <button
          className="cardButton select brewButton button-primary"
          onClick={() => getBreweries(searchValue)}
        >
        Un-Select
        </button>
      }
      <div className="cardContents">
        <h3>{name}</h3>
        <p><span className="typeTag">{brewery_type}</span></p>
        <p>{`${street}, ${city}, ${state}`}</p>
        <p>{formatPhone(phone)}</p>
        <a href={website_url} target="_blank" rel="noreferrer">Website</a>
        <p className="timestamp">Last updated: {formatTimestamp(updated_at)}</p>
      </div>
    </article>
  )
}

BreweryCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  brewery_type: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  phone: PropTypes.string,
  website_url: PropTypes.string,
  updated_at: PropTypes.string,
  selectBrewery: PropTypes.func,
  selectedBrewery: PropTypes.bool,
  getBreweries: PropTypes.func,
  searchValue: PropTypes.string
}

export default BreweryCard
