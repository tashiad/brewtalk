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
        <label className="step" htmlFor="search">Select a brewery:</label>
        <div className="searchBar">
          <img
            className="searchIcon"
            src="https://img.icons8.com/fluent-systems-filled/24/000000/search.png"
            alt="Search icon"
          />
          <input
            className="searchBox"
            type='search'
            placeholder='Search by name or city'
            name='search'
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
