import React from 'react'
import PropTypes from 'prop-types'
import './BreweryCard.css'

const BreweryCard = ({
  id,
  name,
  street,
  city,
  state,
  phone,
  website_url,
  updated_at,
  searchValue,
  selectedBrewery,
  selectBrewery,
  getBreweries
}) => {

  const formatPhone = (number => {
    const cleaned = ('' + number).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      const formattedNumber = '(' + match[1] + ') ' + match[2] + '-' + match[3]
      return formattedNumber
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
    <article className={selectedBrewery ? "card-brewery selectedCard" : "card-brewery"}>
      <div className="button-brewery">
        {!selectedBrewery ?
          <button
            className="button-primary button-card"
            onClick={() => selectBrewery(id)}
          >
          Select
          </button>
          :
          <button
            className="button-primary button-card"
            onClick={() => getBreweries(searchValue)}
          >
          Undo
          </button>
        }
      </div>
      <div className="cardContents">
        <h3 className="brewery-name">{name}</h3>
        {!street && <p>{`${city}, ${state}`}</p>}
        {!street && !city && <p>{state}</p>}
        {street && city && state && <p>{`${street}, ${city}, ${state}`}</p>}
        {phone && <p>{formatPhone(phone)}</p>}
        {website_url && <a href={website_url} target="_blank" rel="noreferrer">Website</a>}
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
  searchValue: PropTypes.string,
  updated_at: PropTypes.string,
  selectedBrewery: PropTypes.bool,
  selectBrewery: PropTypes.func,
  getBreweries: PropTypes.func
}

export default BreweryCard
