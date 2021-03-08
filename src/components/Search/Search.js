import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Search.css'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.getBreweries(this.state.search)
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="seaarch-bar">
            <img
              className="search-icon"
              src="https://img.icons8.com/fluent-systems-filled/24/000000/search.png"
              alt="Search icon"
            />
            <label htmlFor="search">Select a brewery:</label>
            <input
              className="search-box"
              id="search"
              type="search"
              name="search"
              placeholder="Search by name or city"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </>
    )
  }
}

Search.propTypes = {
  getBreweries: PropTypes.func
}

export default Search
